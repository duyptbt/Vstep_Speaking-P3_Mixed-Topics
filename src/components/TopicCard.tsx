import { useState } from "react";
import { Topic } from "../types";
import { HelpCircle, ChevronRight, ChevronDown, Edit3, BookOpen, Lightbulb } from "lucide-react";

interface TopicCardProps {
  topic: Topic;
  customNotes: string;
  onNotesChange: (notes: string) => void;
  isPracticed: boolean;
  onTogglePracticed: () => void;
}

export default function TopicCard({
  topic,
  customNotes,
  onNotesChange,
  isPracticed,
  onTogglePracticed,
}: TopicCardProps) {
  const [activeFq, setActiveFq] = useState<number | null>(null);

  // SVG Mindmap Geometry
  const width = 540;
  const height = 240;
  const cx = width / 2;
  const cy = height / 2;

  // Satellite node definitions
  // 1. Top Node (Point 1)
  // 2. Left Node (Point 2)
  // 3. Bottom Node (Point 3)
  // 4. Right Node (Your own ideas)
  const satellites = [
    { label: topic.mindmap[0], x: cx, y: 30, w: 165, h: 36, color: "#10b981", bg: "#ecfdf5", border: "#a7f3d0" },
    { label: topic.mindmap[1], x: 90, y: cy, w: 145, h: 36, color: "#f59e0b", bg: "#fffbeb", border: "#fde68a" },
    { label: topic.mindmap[2], x: cx, y: height - 30, w: 165, h: 36, color: "#8b5cf6", bg: "#f5f3ff", border: "#ddd6fe" },
    {
      label: customNotes.trim() ? customNotes : "[Nhập ý kiến riêng của bạn]",
      x: width - 90,
      y: cy,
      w: 145,
      h: 36,
      color: "#f97316",
      bg: "#fff7ed",
      border: "#ffedd5",
      isEditable: true,
    },
  ];

  const handleToggleFq = (index: number) => {
    setActiveFq(activeFq === index ? null : index);
  };

  const wrapText = (text: string, maxLen: number): string[] => {
    if (text.length <= maxLen) return [text];
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if ((currentLine + " " + word).trim().length > maxLen) {
        if (currentLine) lines.push(currentLine.trim());
        currentLine = word;
      } else {
        currentLine = (currentLine + " " + word).trim();
      }
    });
    if (currentLine) lines.push(currentLine.trim());
    return lines;
  };

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
      {/* Header Topic Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-900">
        <div>
          <span className="text-[11px] font-sans font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-full">
            Đề bài thi Speaking Part 3
          </span>
          <h2 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 mt-2.5 leading-relaxed italic">
            "{topic.statement.replace("Topic: ", "")}"
          </h2>
        </div>
        
        {/* Practice completed checkpoint */}
        <button
          onClick={onTogglePracticed}
          className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
            isPracticed
              ? "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-900 dark:text-emerald-400"
              : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          <div className={`w-2.5 h-2.5 rounded-full ${isPracticed ? "bg-emerald-500 animate-pulse" : "bg-slate-300 dark:bg-slate-600"}`} />
          <span>{isPracticed ? "Đã luyện tập xong" : "Đánh dấu hoàn thành"}</span>
        </button>
      </div>

      {/* SVG Mind Map Section */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[540px] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 rounded-xl p-4 flex justify-center items-center overflow-x-auto">
          <svg width={width} height={height} className="overflow-visible select-none min-w-[500px]">
            {/* Curved Connectors (Bezier Curves for natural mindmap feel) */}
            {satellites.map((sat, idx) => {
              // Draw quadratic bezier curves from center to satellite node edges
              const targetX = sat.x;
              const targetY = sat.y;
              
              // Curve control point (slight offset for elegant wave)
              let controlX = cx;
              let controlY = cy;
              if (idx === 0) controlY = (cy + targetY) / 2;
              if (idx === 2) controlY = (cy + targetY) / 2;
              if (idx === 1) controlX = (cx + targetX) / 2;
              if (idx === 3) controlX = (cx + targetX) / 2;

              return (
                <path
                  key={`line-${idx}`}
                  d={`M ${cx} ${cy} Q ${controlX} ${controlY} ${targetX} ${targetY}`}
                  fill="none"
                  stroke={sat.color}
                  strokeWidth="1.5"
                  strokeDasharray={sat.isEditable ? "4,4" : "none"}
                  className="opacity-70"
                />
              );
            })}

            {/* Satellite Nodes */}
            {satellites.map((sat, idx) => {
              const bx = sat.x - sat.w / 2;
              const by = sat.y - sat.h / 2;
              const wrappedLines = wrapText(sat.label, sat.isEditable ? 16 : 22);
              const textYStart = sat.y - ((wrappedLines.length - 1) * 12) / 2 + 4;

              return (
                <g key={`node-${idx}`} className="transition-transform duration-300 hover:scale-105">
                  <rect
                    x={bx}
                    y={by}
                    width={sat.w}
                    height={sat.h}
                    rx="10"
                    ry="10"
                    fill={sat.bg}
                    stroke={sat.border}
                    strokeWidth="1.5"
                    className="shadow-xs dark:fill-slate-900/90"
                  />
                  {wrappedLines.map((line, lIdx) => (
                    <text
                      key={`text-${idx}-${lIdx}`}
                      x={sat.x}
                      y={textYStart + lIdx * 12}
                      textAnchor="middle"
                      className={`font-sans text-[11px] font-medium`}
                      fill={sat.color}
                      style={{ fontStyle: sat.isEditable ? "italic" : "normal" }}
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}

            {/* Central Main Idea Node */}
            <g className="transition-transform duration-300 hover:scale-105">
              <rect
                x={cx - 75}
                y={cy - 22}
                width="150"
                height="44"
                rx="12"
                ry="12"
                fill="#4f46e5"
                stroke="#3730a3"
                strokeWidth="2"
                className="shadow-sm filter drop-shadow-md"
              />
              <text
                x={cx}
                y={cy + 4}
                textAnchor="middle"
                className="font-display text-[12px] font-extrabold tracking-wider"
                fill="#ffffff"
              >
                {topic.mindmap_centre}
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Interactive Brainstorm Area */}
      <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Edit3 className="w-4 h-4 text-orange-500" />
          <span className="font-sans font-semibold text-xs text-slate-700 dark:text-slate-300">
            Ý kiến riêng của bạn (Brainstorm Your Own Ideas) — Sẽ xuất hiện trên Sơ đồ tư duy
          </span>
        </div>
        <textarea
          value={customNotes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="Nhập nhanh từ khóa hoặc ví dụ của riêng bạn (ví dụ: 'High cost', 'More isolation'...). Ghi chú sẽ tự động cập nhật lên sơ đồ..."
          rows={2}
          className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
        />
      </div>

      {/* Follow-up Questions panel (Accordion) */}
      <div className="border-t border-slate-100 dark:border-slate-900 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-4.5 h-4.5 text-indigo-600" />
          <h4 className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">
            Câu hỏi thảo luận chuyên sâu (Examiner's Follow-up Questions)
          </h4>
        </div>
        
        <div className="flex flex-col gap-2">
          {topic.followup.map((question, qIdx) => {
            const isOpen = activeFq === qIdx;
            return (
              <div
                key={`fq-${qIdx}`}
                className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800/60 rounded-xl transition-all"
              >
                <button
                  onClick={() => handleToggleFq(qIdx)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-100/40 dark:hover:bg-slate-800/40 rounded-xl transition-colors"
                >
                  <span className="font-sans text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    Question {qIdx + 1}: {question}
                  </span>
                  {isOpen ? (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-4 pb-3 pt-1 border-t border-slate-200/30 dark:border-slate-800/30">
                    <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-900">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">Gợi ý cách trả lời:</span>
                        <p className="leading-relaxed">
                          Sử dụng cấu trúc câu trực tiếp: đưa ra ý kiến đồng tình/phản đối, giải thích lý do ngắn gọn và liên hệ bản thân hoặc bối cảnh Việt Nam để ghi điểm từ vựng (ví dụ: "Honestly, in Vietnam, many people...").
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
