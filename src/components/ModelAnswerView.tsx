import { useState, useEffect } from "react";
import { AnswerSet, FrameworkStep } from "../types";
import { FRAMEWORK } from "../data";
import { HelpCircle, Sparkles, BookOpen, Layers, Eye, EyeOff, Award, ChevronDown, CheckCircle, XCircle, Volume2, Milestone } from "lucide-react";
import { SET2_DETAILED_FEEDBACK } from "../feedbackData";

interface ModelAnswerViewProps {
  answerB1: AnswerSet;
  answerB2: AnswerSet;
  answerC1: AnswerSet;
  activeTopicLabel: string;
  activeTopicId: number;
  activeSetId: string;
}

export default function ModelAnswerView({
  answerB1,
  answerB2,
  answerC1,
  activeTopicLabel,
  activeTopicId,
  activeSetId,
}: ModelAnswerViewProps) {
  const [band, setBand] = useState<"C1" | "B2" | "B1">("B2");
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const [highlightEnabled, setHighlightEnabled] = useState<boolean>(true);
  const [feedbackTab, setFeedbackTab] = useState<"vocab" | "grammar" | "fluency" | "delivery">("vocab");

  // Reset feedback sub-tab when topic changes
  useEffect(() => {
    setFeedbackTab("vocab");
  }, [activeTopicId]);

  // Get active answer based on band
  const activeAnswer = band === "C1" ? answerC1 : band === "B2" ? answerB2 : answerB1;

  // Sync selected step details
  const step = FRAMEWORK[selectedStep];
  const stepExcerpt = activeAnswer[step.key] as string;

  // Criteria score matrix
  const scores = {
    C1: { fc: 9.0, lr: 9.0, gr: 9.0, pr: 9.0 },
    B2: { fc: 7.0, lr: 7.0, gr: 7.0, pr: 7.0 },
    B1: { fc: 5.0, lr: 5.0, gr: 5.0, pr: 5.0 },
  };

  const currentScores = scores[band];

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
      {/* Upper header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-900 pb-4">
        <div>
          <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-full">
            Phân tích câu trả lời mẫu
          </span>
          <h3 className="font-display text-lg font-bold text-slate-950 dark:text-slate-50 mt-2">
            Học qua So sánh mẫu bài & Khung TEEC
          </h3>
        </div>

        {/* Toggle highlight button */}
        <button
          onClick={() => setHighlightEnabled(!highlightEnabled)}
          className="self-start md:self-auto flex items-center gap-2 px-3.5 py-1.5 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
        >
          {highlightEnabled ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{highlightEnabled ? "Ẩn màu phân tích" : "Hiện màu cấu trúc"}</span>
        </button>
      </div>

      {/* Band Level Selector Pills */}
      <div>
        <span className="block font-sans text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
          Chọn trình độ câu trả lời (Compare speaking levels)
        </span>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "C1", label: "C1 (8.5–10.0)", desc: "Tự nhiên, phong phú", activeBg: "bg-blue-600 hover:bg-blue-700 text-white", inactiveBg: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100" },
            { id: "B2", label: "B2 (6.0–8.0)", desc: "Mạch lạc, chuẩn mực", activeBg: "bg-emerald-600 hover:bg-emerald-700 text-white", inactiveBg: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100" },
            { id: "B1", label: "B1 (4.0–5.5)", desc: "Đơn giản, còn lỗi", activeBg: "bg-orange-600 hover:bg-orange-700 text-white", inactiveBg: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100" },
          ].map((item) => {
            const isSelected = band === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setBand(item.id as any)}
                className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected ? item.activeBg : `${item.inactiveBg} dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800`
                }`}
              >
                <span className="font-display text-sm font-extrabold">{item.label}</span>
                <span className={`text-[10px] mt-0.5 opacity-90 ${isSelected ? "text-white/80" : "text-slate-400"}`}>
                  {item.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Highlighted Full Answer Reader */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-sans text-xs font-bold text-slate-500 dark:text-slate-400">
            Toàn bộ bài mẫu (Click vào từng đoạn để phân tích cấu trúc dưới)
          </span>
          <span className="text-[10px] text-indigo-600 font-semibold font-sans">
            Mẹo: Click đoạn văn để tra từ cụm
          </span>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 leading-loose text-sm md:text-base text-slate-800 dark:text-slate-200 font-serif">
          {FRAMEWORK.map((fw, fIdx) => {
            const isFwSelected = selectedStep === fIdx;
            const textSegment = activeAnswer[fw.key] as string;
            
            // Custom highlight styles
            let highlightClass = "";
            if (highlightEnabled) {
              if (fIdx === 0) highlightClass = "bg-blue-100/60 dark:bg-blue-950/30 text-blue-900 dark:text-blue-300";
              if (fIdx === 1) highlightClass = "bg-emerald-100/60 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300";
              if (fIdx === 2) highlightClass = "bg-amber-100/60 dark:bg-amber-950/30 text-amber-900 dark:text-amber-300";
              if (fIdx === 3) highlightClass = "bg-indigo-100/60 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-300";
              if (fIdx === 4) highlightClass = "bg-orange-100/60 dark:bg-orange-950/30 text-orange-900 dark:text-orange-300";
            }

            return (
              <span
                key={fw.num}
                onClick={() => setSelectedStep(fIdx)}
                className={`cursor-pointer rounded-sm px-1 py-0.5 transition-all ${highlightClass} ${
                  isFwSelected ? "ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-950 font-medium" : "hover:bg-indigo-100/30"
                }`}
                title={`Click để xem cấu trúc ${fw.num}`}
              >
                {textSegment}
              </span>
            );
          })}
        </div>

        {/* Legend for Highlight Blocks */}
        {highlightEnabled && (
          <div className="flex flex-wrap gap-2.5 mt-3 justify-center">
            {[
              { label: "T - Topic intro", bg: "bg-blue-100 dark:bg-blue-950 text-blue-800" },
              { label: "P1 - Point 1", bg: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800" },
              { label: "P2 - Point 2", bg: "bg-amber-100 dark:bg-amber-950 text-amber-800" },
              { label: "P3 - Point 3", bg: "bg-indigo-100 dark:bg-indigo-950 text-indigo-800" },
              { label: "C - Conclusion", bg: "bg-orange-100 dark:bg-orange-950 text-orange-800" },
            ].map((leg, lIdx) => (
              <div
                key={lIdx}
                onClick={() => setSelectedStep(lIdx)}
                className={`text-[10px] md:text-xs font-sans font-medium px-2 py-0.5 rounded cursor-pointer transition-transform hover:-translate-y-0.5 ${leg.bg}`}
              >
                {leg.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TEEC Interactive Framework Tabs */}
      <div className="border-t border-slate-100 dark:border-slate-900 pt-5">
        <span className="block font-sans text-xs font-bold text-slate-500 dark:text-slate-400 mb-3">
          Khung triển khai ý TEEC (Click từng bước để học mẹo & cấu trúc)
        </span>
        
        <div className="grid grid-cols-5 gap-1.5 mb-4">
          {FRAMEWORK.map((f, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <button
                key={f.num}
                onClick={() => setSelectedStep(idx)}
                className={`flex flex-col items-center py-2 px-1 rounded-xl border text-center transition-all ${
                  isSelected
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                    : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span className="font-display font-extrabold text-sm leading-none">{f.num}</span>
                <span className="text-[8px] uppercase tracking-wider mt-1 font-semibold block truncate w-full max-w-full px-0.5">
                  {f.name.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Guidelines Card */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-sans font-bold px-2 py-0.5 rounded ${step.badgeBg}`}>
              Step {step.num}
            </span>
            <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200">
              {step.name} — <span className="font-normal italic text-slate-500">{step.tag}</span>
            </h4>
          </div>

          <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {step.purpose}
          </p>

          {/* Useful transitional templates */}
          <div>
            <span className="block font-sans text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              Cụm từ liên kết ghi điểm (Useful Speaking templates)
            </span>
            <div className="flex flex-wrap gap-1.5">
              {step.phrases.map((phrase, pIdx) => (
                <span
                  key={pIdx}
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md px-2 py-1 text-xs text-slate-700 dark:text-slate-300 font-mono"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight excerpt */}
          <div className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 rounded-lg p-3">
            <span className="block font-sans text-[10px] font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase">
              Đoạn văn trích từ bài mẫu {band}:
            </span>
            <p className="font-serif text-xs md:text-sm leading-relaxed italic text-slate-800 dark:text-slate-300">
              "{stepExcerpt.trim()}"
            </p>
          </div>
        </div>
      </div>

      {/* Indicative Scoring & Linguistic Review Panels */}
      <div className="border-t border-slate-100 dark:border-slate-900 pt-5 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Scoring Bars */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <span className="font-sans text-xs font-bold text-slate-500 dark:text-slate-400">
            Tiêu chí chấm điểm ước lượng
          </span>
          <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col gap-3">
            {[
              { label: "Fluency & Coherence", val: currentScores.fc, color: "bg-indigo-600" },
              { label: "Lexical Resource", val: currentScores.lr, color: "bg-blue-600" },
              { label: "Grammar Range", val: currentScores.gr, color: "bg-emerald-600" },
              { label: "Pronunciation", val: currentScores.pr, color: "bg-amber-500" },
            ].map((crit, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-slate-600 dark:text-slate-400">{crit.label}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{crit.val.toFixed(1)}/10</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`${crit.color} h-full transition-all duration-500`}
                    style={{ width: `${(crit.val / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why lower/higher explanation */}
        <div className="md:col-span-7 flex flex-col gap-3">
          <span className="font-sans text-xs font-bold text-slate-500 dark:text-slate-400">
            Đánh giá ngữ pháp & từ vựng (Examiner Feedback)
          </span>
          
          {activeSetId === "set2" && SET2_DETAILED_FEEDBACK[activeTopicId] ? (
            <div className="flex flex-col gap-4">
              {band === "B1" && (
                <div className="flex flex-col gap-4">
                  {/* Grammar errors table */}
                  <div className="bg-orange-50/40 dark:bg-orange-950/10 border border-orange-100 dark:border-orange-900/50 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-orange-600 shrink-0" />
                      <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-orange-850 dark:text-orange-400">
                        Phân tích lỗi ngữ pháp chi tiết (Grammar Diagnostics)
                      </h5>
                    </div>
                    <div className="flex flex-col gap-3">
                      {SET2_DETAILED_FEEDBACK[activeTopicId].b1.grammar_errors.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 border border-orange-100/50 dark:border-orange-950/50 p-3 rounded-xl flex flex-col gap-1.5 shadow-sm">
                          <div className="flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                            <XCircle className="w-3.5 h-3.5 shrink-0" />
                            <span className="line-through">{item.error}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{item.correction}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans mt-0.5 pl-5 border-l-2 border-slate-200 dark:border-slate-800">
                            {item.reason}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lexical advice */}
                  <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />
                      <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        Lời khuyên phát triển Từ vựng (Vocabulary upgrade path)
                      </h5>
                    </div>
                    <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {SET2_DETAILED_FEEDBACK[activeTopicId].b1.lexical_advice}
                    </p>
                  </div>
                </div>
              )}

              {(band === "B2" || band === "C1") && (
                <div className="flex flex-col gap-4">
                  {/* Secondary tabs for vocabulary, grammar, fluency, delivery */}
                  <div className="flex flex-wrap gap-1 border-b border-slate-100 dark:border-slate-900 pb-1">
                    {[
                      { id: "vocab", label: "Từ vựng ghi điểm", icon: BookOpen },
                      { id: "grammar", label: "Cấu trúc đặc sắc", icon: Layers },
                      { id: "fluency", label: "Độ trôi chảy & Cohesion", icon: Milestone },
                      { id: "delivery", label: "Nhấn giọng & Delivery", icon: Volume2 },
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isSelected = feedbackTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setFeedbackTab(tab.id as any)}
                          className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs"
                              : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-900"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Sub-tab Content */}
                  <div className="min-h-[160px]">
                    {feedbackTab === "vocab" && (
                      <div className="grid grid-cols-1 gap-3">
                        {SET2_DETAILED_FEEDBACK[activeTopicId][band === "B2" ? "b2" : "c1"].vocabulary_highlights.map((item, idx) => (
                          <div key={idx} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-xl p-3.5 flex flex-col gap-1.5 hover:shadow-sm transition-all animate-fade-in">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-sans font-bold text-sm text-indigo-600 dark:text-indigo-400">
                                {item.term}
                              </span>
                              <span className="font-mono text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                                {item.ipa}
                              </span>
                            </div>
                            <div className="text-xs font-sans text-slate-700 dark:text-slate-300">
                              <span className="font-bold">Ý nghĩa:</span> {item.meaning}
                            </div>
                            <div className="text-xs font-sans text-slate-500 dark:text-slate-400 italic bg-white dark:bg-slate-950/30 p-2.5 rounded-lg border border-slate-100 dark:border-slate-900 mt-1">
                              e.g., "{item.example}"
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {feedbackTab === "grammar" && (
                      <div className="grid grid-cols-1 gap-3">
                        {SET2_DETAILED_FEEDBACK[activeTopicId][band === "B2" ? "b2" : "c1"].grammar_highlights.map((item, idx) => (
                          <div key={idx} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-xl p-3.5 flex flex-col gap-1.5 hover:shadow-sm transition-all">
                            <span className="font-sans font-bold text-sm text-emerald-600 dark:text-emerald-400">
                              {item.structure}
                            </span>
                            <div className="text-xs font-sans text-slate-600 dark:text-slate-400">
                              {item.explanation}
                            </div>
                            <div className="text-xs font-sans text-slate-500 dark:text-slate-400 italic bg-white dark:bg-slate-950/30 p-2.5 rounded-lg border border-slate-100 dark:border-slate-900 mt-1">
                              e.g., "{item.example}"
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {feedbackTab === "fluency" && (
                      <div className="bg-indigo-50/20 dark:bg-indigo-950/10 border border-indigo-100/50 dark:border-indigo-900/30 rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-1.5">
                          <Milestone className="w-4 h-4 text-indigo-600" />
                          <h6 className="font-sans font-bold text-xs uppercase tracking-wider text-indigo-950 dark:text-indigo-400">
                            Chiến thuật liên kết ý (Cohesion strategy)
                          </h6>
                        </div>
                        <ul className="list-none flex flex-col gap-2.5">
                          {SET2_DETAILED_FEEDBACK[activeTopicId][band === "B2" ? "b2" : "c1"].fluency_coherence.map((bullet, bIdx) => (
                            <li key={bIdx} className="text-xs text-slate-600 dark:text-slate-400 flex gap-2 pl-1 leading-relaxed">
                              <span className="text-indigo-500 font-bold shrink-0">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {feedbackTab === "delivery" && (
                      <div className="bg-amber-50/30 dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/30 rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-1.5">
                          <Volume2 className="w-4 h-4 text-amber-600" />
                          <h6 className="font-sans font-bold text-xs uppercase tracking-wider text-amber-950 dark:text-amber-400">
                            Lời khuyên về Phát âm & Nhấn giọng (Spoken delivery)
                          </h6>
                        </div>
                        <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {SET2_DETAILED_FEEDBACK[activeTopicId][band === "B2" ? "b2" : "c1"].delivery_tips}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {band === "B1" && (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 dark:bg-orange-950/20 dark:border-orange-900 text-orange-800 dark:text-orange-400">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <Award className="w-4 h-4 text-orange-600 shrink-0" />
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider">
                      B1 — Phân tích lỗi ngữ pháp chi tiết
                    </h5>
                  </div>
                  <div className="font-sans text-xs leading-relaxed space-y-2">
                    {answerB1.note_b1.split("\n").map((line, lIdx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return null;
                      
                      if (trimmed.startsWith("-")) {
                        return (
                          <div key={lIdx} className="flex gap-2 pl-2">
                            <span className="text-orange-500 font-bold shrink-0">•</span>
                            <span>{trimmed.replace(/^-\s*/, "")}</span>
                          </div>
                        );
                      }
                      
                      return (
                        <p key={lIdx} className={trimmed.endsWith(":") ? "font-bold text-orange-950 dark:text-orange-300 mt-2.5 first:mt-0" : ""}>
                          {trimmed}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}

              {band === "B2" && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 dark:bg-emerald-950/20 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider">
                      B2 — Ưu điểm & Điểm cần bổ sung
                    </h5>
                  </div>
                  <p className="font-sans text-xs leading-relaxed flex flex-col gap-2">
                    <span>{answerB2.note_b1}</span>
                    <span className="text-[11px] opacity-80 border-t border-emerald-200/30 dark:border-emerald-800/30 pt-1.5">
                      <strong>So với C1:</strong> {answerB2.note_c1}
                    </span>
                  </p>
                </div>
              )}

              {band === "C1" && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 dark:bg-blue-950/20 dark:border-blue-900 text-blue-800 dark:text-blue-400">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider">
                      C1 — Phân tích điểm ưu việt (High-level features)
                    </h5>
                  </div>
                  <p className="font-sans text-xs leading-relaxed">
                    {answerC1.note_c1}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
