import { MessageCircle, Heart, Link, CheckCircle, GraduationCap } from "lucide-react";

export default function StrategyTips() {
  const tips = [
    {
      title: "Nói tự nhiên, không học vẹt văn viết (Speak, don't write)",
      desc: "Sử dụng các từ kết nối đệm tự nhiên như: 'Like...', 'Honestly...', 'The thing is...', 'You know?'. Những từ này giúp giọng nói mượt mà, lưu loát và giảm căng thẳng, không hề bị trừ điểm trong tiêu chuẩn chấm.",
      icon: <MessageCircle className="w-5 h-5 text-indigo-500" />,
      color: "bg-indigo-50/50 border-indigo-100 dark:bg-indigo-950/20 dark:border-indigo-900"
    },
    {
      title: "Đưa ví dụ cá nhân từ cuộc sống thực (Use personal examples)",
      desc: "Mẫu câu: 'I actually know someone who...' hoặc 'I remember when...'. Các ví dụ thực tế luôn nghe sinh động, tự nhiên và thuyết phục hơn là lấy số liệu giả định vĩ mô. Giám khảo chấm bạn dựa trên giao tiếp thực tế.",
      icon: <Heart className="w-5 h-5 text-emerald-500" />,
      color: "bg-emerald-50/50 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900"
    },
    {
      title: "Câu ngắn vẫn tốt, cốt ở từ nối (Use short, connected sentences)",
      desc: "Không cần ép bản thân nói những câu ghép siêu dài dễ gây vấp lỗi. Thay vào đó, dùng câu đơn ngắn nhưng gắn kết tự nhiên bằng các liên từ cơ bản: 'And...', 'But...', 'Because...', 'So...'. Trôi chảy quan trọng hơn độ dài.",
      icon: <Link className="w-5 h-5 text-amber-500" />,
      color: "bg-amber-50/50 border-amber-100 dark:bg-amber-950/20 dark:border-amber-900"
    },
    {
      title: "Kết thúc rõ ràng, tránh để bị ngắt quãng (Land the ending cleanly)",
      desc: "Đừng nói lan man đến khi hết giờ bị giám khảo ngắt. Chỉ cần một câu chốt hạ tự nhiên: 'So yeah, that's why I think...'. Giúp bài nói của bạn có cấu trúc trọn vẹn và thể hiện kỹ năng quản lý thời gian thi tốt.",
      icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      color: "bg-blue-50/50 border-blue-100 dark:bg-blue-950/20 dark:border-blue-900"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-5 h-5 text-indigo-600" />
        <h3 className="font-display text-base font-bold text-slate-900 dark:text-slate-100">
          Chiến lược bứt phá Speaking B2/C1 đỉnh cao
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className={`border rounded-xl p-4 flex gap-3 transition-transform hover:-translate-y-0.5 duration-200 ${tip.color}`}
          >
            <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-2xs h-fit shrink-0">
              {tip.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-sans font-bold text-slate-800 dark:text-slate-200 text-xs md:text-sm">
                {tip.title}
              </h4>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
