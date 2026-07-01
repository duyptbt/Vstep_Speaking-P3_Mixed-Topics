import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, AlertCircle, Timer, Volume2, VolumeX } from "lucide-react";

interface PracticeTimerProps {
  onTimerComplete?: (mode: "prep" | "speech") => void;
}

export default function PracticeTimer({ onTimerComplete }: PracticeTimerProps) {
  const [mode, setMode] = useState<"prep" | "speech">("prep");
  const [timeLeft, setTimeLeft] = useState<number>(60); // 60s for prep, 180s for speech
  const [isActive, setIsActive] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [autoTransition, setAutoTransition] = useState<boolean>(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize total time based on mode
  const totalDuration = mode === "prep" ? 60 : 180;

  useEffect(() => {
    // Reset timer when mode changes
    setIsActive(false);
    setTimeLeft(mode === "prep" ? 60 : 180);
  }, [mode]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          const nextVal = prev - 1;
          // Play sound alerts at critical times
          if (soundEnabled) {
            if (nextVal === 10 || nextVal === 5 || nextVal === 3 || nextVal === 2 || nextVal === 1) {
              playBeep(440, 0.08); // Friendly countdown warning
            } else if (nextVal === 0) {
              playBeep(660, 0.3); // Completion alert
              setTimeout(() => playBeep(880, 0.4), 150);
            }
          }
          return nextVal;
        });
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
      
      // Callback
      if (onTimerComplete) {
        onTimerComplete(mode);
      }

      // Handle Auto Transition from Prep to Speech
      if (mode === "prep" && autoTransition) {
        setMode("speech");
        setIsActive(true);
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft, mode, soundEnabled, autoTransition, onTimerComplete]);

  // Synthesize beep sounds using Web Audio API
  const playBeep = (frequency: number, duration: number) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio Context beep failed", e);
    }
  };

  const toggleTimer = () => {
    // Unsuspend audio context on user interaction to comply with browser autoplay policy
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current && audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === "prep" ? 60 : 180);
  };

  const changeMode = (newMode: "prep" | "speech") => {
    setMode(newMode);
  };

  // Format MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // SVG Progress calculation
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / totalDuration) * circumference;

  return (
    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-lg">
            <Timer className="w-4 h-4" />
          </div>
          <h3 className="font-sans font-semibold text-slate-800 dark:text-slate-200 text-sm">
            VSTEP Speaking Simulator
          </h3>
        </div>
        
        {/* Controls bar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={soundEnabled ? "Mute alert sound" : "Unmute alert sound"}
          >
            {soundEnabled ? <Volume2 className="w-4.5 h-4.5" /> : <VolumeX className="w-4.5 h-4.5 text-slate-400" />}
          </button>
          
          <label className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={autoTransition}
              onChange={(e) => setAutoTransition(e.target.checked)}
              className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
            />
            <span>Tự động chuyển bài</span>
          </label>
        </div>
      </div>

      {/* Mode Switches */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <button
          onClick={() => changeMode("prep")}
          className={`py-2 px-3 text-xs font-sans rounded-xl font-medium transition-all ${
            mode === "prep"
              ? "bg-indigo-600 text-white shadow-sm"
              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
          }`}
        >
          Chuẩn bị (1 Phút)
        </button>
        <button
          onClick={() => changeMode("speech")}
          className={`py-2 px-3 text-xs font-sans rounded-xl font-medium transition-all ${
            mode === "speech"
              ? "bg-indigo-600 text-white shadow-sm"
              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
          }`}
        >
          Trình bày (3 Phút)
        </button>
      </div>

      {/* Circle & Timer Readout */}
      <div className="flex flex-col items-center justify-center py-2">
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Background Track circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="fill-transparent stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="5"
            />
            {/* Active countdown circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              className={`fill-transparent transition-all duration-300 ${
                timeLeft <= 10
                  ? "stroke-red-500"
                  : mode === "prep"
                  ? "stroke-indigo-500"
                  : "stroke-emerald-500"
              }`}
              strokeWidth="5.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Time digits */}
          <div className="text-center z-10">
            <span className="font-mono text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
              {formatTime(timeLeft)}
            </span>
            <div className="text-[10px] uppercase tracking-wider font-sans text-slate-500 dark:text-slate-400 mt-0.5">
              {mode === "prep" ? "Chuẩn bị" : "Phát biểu"}
            </div>
          </div>
        </div>

        {/* Warning Badge for last seconds */}
        {timeLeft <= 10 && timeLeft > 0 && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 animate-pulse font-medium">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Sắp hết giờ! Nhanh chóng kết thúc ý!</span>
          </div>
        )}
        
        {timeLeft === 0 && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Đã hết thời gian!</span>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center gap-3 mt-5 w-full">
          <button
            onClick={toggleTimer}
            className={`flex-1 py-2.5 px-4 rounded-xl font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all ${
              isActive
                ? "bg-amber-500 hover:bg-amber-600 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4 fill-white" /> Tạm dừng
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" /> Bắt đầu
              </>
            )}
          </button>
          
          <button
            onClick={resetTimer}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-xl transition-all border border-slate-200 dark:border-slate-700"
            title="Đặt lại"
          >
            <RotateCcw className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
