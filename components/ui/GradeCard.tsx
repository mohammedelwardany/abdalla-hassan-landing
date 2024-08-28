export default function GradeCard({
  title,
  grade,
  subtitle,
}: {
  title: string;
  grade: number;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-primary/10 p-4 rounded-md cursor-pointer hover:-translate-y-2 transition-transform">
      <div className="bg-primary px-4 py-2 rounded-md text-white text-2xl ">
        {grade}
      </div>
      <div>
        <div className="text-xl">{title} الثانوي</div>
        <div className="text-green-700 text-sm">{subtitle}</div>
      </div>
    </div>
  );
}
