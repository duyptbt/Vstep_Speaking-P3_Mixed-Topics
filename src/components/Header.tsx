import { BookOpen, CheckCircle, GraduationCap, TrendingUp } from "lucide-react";

interface HeaderProps {
  completedCount: number;
  totalCount: number;
}

export default function Header({ completedCount, totalCount }: HeaderProps) {
  const percent = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 px-3 py-1 rounded-full self-start text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            VSTEP Preparation Series
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            VSTEP Speaking Part 3 — Topic Development
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed font-sans">
            Luyện tập và làm chủ phần thi phát triển chủ đề tự nhiên, lưu loát trong <strong>2-3 phút</strong> với sơ đồ tư duy trực quan, bài thi thử ảo, và so sánh phân tích bài nói đạt điểm tối đa.
          </p>
        </div>

        {/* Stats progress board */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shrink-0 flex items-center gap-4 min-w-[220px]">
          <div className="p-3 bg-indigo-600 rounded-xl text-white">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="block text-slate-500 dark:text-slate-400 text-[10px] font-sans font-bold uppercase tracking-wider">
              Tiến độ luyện tập
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-mono text-2xl font-bold text-slate-900 dark:text-white">{completedCount}</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">/ {totalCount} Chủ đề</span>
            </div>
            
            {/* Small progress bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-indigo-600 h-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="block text-right text-indigo-600 dark:text-indigo-400 text-[10px] font-semibold mt-1 font-sans">
              Đã hoàn thành {percent}%
            </span>
          </div>
        </div>
      </div>

      {/* Quick examination rules bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800 mt-6 pt-4 text-xs font-sans text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded bg-indigo-600 text-[10px] font-bold text-white">1</span>
          <span><strong>1 Phút chuẩn bị:</strong> Viết ý kiến riêng, dùng sơ đồ gợi ý</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded bg-indigo-600 text-[10px] font-bold text-white">2</span>
          <span><strong>2-3 Phút nói:</strong> Thuyết trình rõ ràng theo dàn bài TEEC</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-5 h-5 rounded bg-indigo-600 text-[10px] font-bold text-white">3</span>
          <span><strong>1-2 Phút thảo luận:</strong> Trả lời các câu hỏi phụ mở rộng</span>
        </div>
      </div>
    </div>
  );
}
