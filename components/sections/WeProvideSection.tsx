import { Plus, Percent, Pi } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
export default function WeProvideSection() {
  const services = [
    {
      title: "أختبارات",
      sub: "العديد من الاختبارات لمتابعة مستوي الطالب ومعرفة نقاط الضعف",
      icon: <Percent className="w-8 h-8 text-white" />,
    },
    {
      title: "المادة العلمية",
      sub: "مذكرات تحتوي علي المادة العلمية للرياضيات بشكل مبسط ومفهوم",
      icon: <Plus className="w-8 h-8 text-white" />,
    },
    {
      title: "حصص تفاعلية",
      sub: "حصص شرح تفاعلية مع المدرس مباشرةً",
      icon: <Pi className="w-8 h-8 text-white" />,
    },
  ];
  return (
    <div id="our-services">
      <h6 className="text-primary">ماذا نقدم ؟</h6>
      <h4 className="text-2xl mt-2 mb-4">العديد من الخدمات لطريق التفوق</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((e, i) => {
          return (
            <ServiceCard
              icon={e.icon}
              key={i}
              title={e.title}
              subtitle={e.sub}
            />
          );
        })}
      </div>
    </div>
  );
}
