import GradeCard from "../ui/GradeCard";

export default function GradesSection() {
  const grades = [
    {
      grade: "الصف الأول",
      level: 1,
      link: "https://classroom.google.com",
    },
    {
      grade: "الصف الثاني",
      level: 2,
      link: "https://classroom.google.com",
    },
    {
      grade: "الصف الثالث",
      level: 3,
      link: "https://classroom.google.com",
    },
  ];
  return (
    <div id="grades" className="mt-8">
      <h6 className="text-primary">طلابنا</h6>
      <h4 className="text-2xl mt-2 mb-4">الصفوف الدراسية</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {grades.map((e, i) => {
          return (
            <GradeCard
              key={i}
              title={e.grade}
              grade={e.level}
              link={e.link}
              subtitle="متوفر"
            />
          );
        })}
      </div>
    </div>
  );
}
