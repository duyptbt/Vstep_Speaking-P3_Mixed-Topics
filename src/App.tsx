import { useState, useEffect } from "react";
import { TOPIC_SETS, FRAMEWORK } from "./data";
import { UserNotes } from "./types";
import Header from "./components/Header";
import TopicCard from "./components/TopicCard";
import PracticeTimer from "./components/PracticeTimer";
import ModelAnswerView from "./components/ModelAnswerView";
import StrategyTips from "./components/StrategyTips";
import { ListChecks, CheckCircle, GraduationCap, Layers } from "lucide-react";

export default function App() {
  const [activeSetId, setActiveSetId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem("vstep_active_set_id");
      return saved && TOPIC_SETS.some(s => s.id === saved) ? saved : "set2";
    } catch {
      return "set2";
    }
  });

  const [activeIdx, setActiveIdx] = useState<number>(0);
  
  // Local storage state initialization with prefix-based segregation and migration support
  const [customNotes, setCustomNotes] = useState<UserNotes>(() => {
    try {
      const saved = localStorage.getItem("vstep_custom_notes_v2");
      if (saved) return JSON.parse(saved);
      
      const oldSaved = localStorage.getItem("vstep_custom_notes");
      if (oldSaved) {
        const parsed = JSON.parse(oldSaved);
        const migrated: UserNotes = {};
        Object.entries(parsed).forEach(([key, val]) => {
          migrated[`set1_${key}`] = val as string;
        });
        return migrated;
      }
      return {};
    } catch {
      return {};
    }
  });

  const [practicedHistory, setPracticedHistory] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("vstep_practiced_history_v2");
      if (saved) return JSON.parse(saved);
      
      const oldSaved = localStorage.getItem("vstep_practiced_history");
      if (oldSaved) {
        const parsed = JSON.parse(oldSaved);
        if (Array.isArray(parsed)) {
          return parsed.map((id) => `set1_${id}`);
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  // Save states to local storage on modification
  useEffect(() => {
    localStorage.setItem("vstep_active_set_id", activeSetId);
  }, [activeSetId]);

  useEffect(() => {
    localStorage.setItem("vstep_custom_notes_v2", JSON.stringify(customNotes));
  }, [customNotes]);

  useEffect(() => {
    localStorage.setItem("vstep_practiced_history_v2", JSON.stringify(practicedHistory));
  }, [practicedHistory]);

  const activeSet = TOPIC_SETS.find((s) => s.id === activeSetId) || TOPIC_SETS[0];
  const activeTopic = activeSet.topics[activeIdx] || activeSet.topics[0];
  const activeNotesKey = `${activeSetId}_${activeTopic.id}`;
  const activeNotes = customNotes[activeNotesKey] || "";

  const handleNotesChange = (newNotes: string) => {
    setCustomNotes((prev) => ({
      ...prev,
      [activeNotesKey]: newNotes,
    }));
  };

  const handleTogglePracticed = (topicId: number) => {
    const key = `${activeSetId}_${topicId}`;
    setPracticedHistory((prev) => {
      if (prev.includes(key)) {
        return prev.filter((id) => id !== key);
      } else {
        return [...prev, key];
      }
    });
  };

  const completedCount = practicedHistory.filter(key => key.startsWith(activeSetId)).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-6 lg:p-8 selection:bg-indigo-100 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Responsive Header Banner */}
        <Header completedCount={completedCount} totalCount={activeSet.topics.length} />

        {/* Two-Column Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Interactive Sidebar Topic Library */}
          <aside className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 lg:sticky lg:top-6 shadow-sm">
            
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
              <ListChecks className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-display font-bold text-xs text-slate-800 dark:text-slate-100 uppercase tracking-wider">
                Thư viện đề ({activeSet.topics.length})
              </h3>
            </div>

            {/* Scrollable List of Topics */}
            <nav className="flex flex-col gap-1.5 max-h-[340px] lg:max-h-[500px] overflow-y-auto pr-1">
              {activeSet.topics.map((topic, index) => {
                const isActive = activeIdx === index;
                const isCompleted = practicedHistory.includes(`${activeSetId}_${topic.id}`);
                
                return (
                  <button
                    key={topic.id}
                    id={`topic-item-${topic.id}`}
                    onClick={() => setActiveIdx(index)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left border transition-all group cursor-pointer ${
                      isActive
                        ? "bg-indigo-50 border-indigo-200 text-indigo-900 dark:bg-indigo-950/40 dark:border-indigo-900 dark:text-indigo-300 ring-1 ring-indigo-500/20"
                        : "bg-white dark:bg-slate-950 border-slate-200/60 dark:border-slate-900 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 truncate pr-2">
                      <span className={`text-[9px] font-sans font-bold uppercase tracking-wider ${
                        isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"
                      }`}>
                        Đề số {index + 1}
                      </span>
                      <span className={`text-xs font-semibold truncate ${
                        isActive ? "text-indigo-950 dark:text-indigo-100 font-bold" : "text-slate-700 dark:text-slate-300"
                      }`}>
                        {topic.label}
                      </span>
                    </div>

                    {/* Completion indicator */}
                    <div className="shrink-0">
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-50 dark:fill-slate-950 transition-colors" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 group-hover:border-indigo-400 transition-colors" />
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
            
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-500 font-sans flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Dữ liệu đạt chuẩn cấu trúc VSTEP 2026</span>
            </div>
          </aside>

          {/* Right Column: Speaking Board & Dynamic Tools */}
          <main className="lg:col-span-9 flex flex-col gap-6">
            
            {/* Split layout on tablets+ for Speaking topic card and countdown timer */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Dynamic Mindmap, topic title and brainstorm area */}
              <div className="md:col-span-8">
                <TopicCard
                  topic={activeTopic}
                  customNotes={activeNotes}
                  onNotesChange={handleNotesChange}
                  isPracticed={practicedHistory.includes(`${activeSetId}_${activeTopic.id}`)}
                  onTogglePracticed={() => handleTogglePracticed(activeTopic.id)}
                />
              </div>

              {/* Integrated audio-synthesizer timer */}
              <div className="md:col-span-4 md:sticky md:top-6">
                <PracticeTimer />
              </div>

            </div>

            {/* Model answers comparing panel (B1, B2, C1) and TEEC structural mapping */}
            <ModelAnswerView
              answerB1={activeSet.answers_b1[activeTopic.id]}
              answerB2={activeSet.answers_b2[activeTopic.id]}
              answerC1={activeSet.answers_c1[activeTopic.id]}
              activeTopicLabel={activeTopic.label}
              activeTopicId={activeTopic.id}
              activeSetId={activeSetId}
            />

            {/* Bento strategies grid */}
            <StrategyTips />

          </main>

        </div>
      </div>
    </div>
  );
}
