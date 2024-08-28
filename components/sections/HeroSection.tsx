import { Plus, Percent, Pi, MoveLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="text-center py-2">
      <div className="my-8 py-8">
        <div className="flex items-center mb-4 gap-2 justify-center">
          <Plus className="bg-primary w-12 h-12 p-2 text-white rounded-full" />
          <Percent className="bg-secondary w-12 h-12 p-2 text-white rounded-full" />
          <Pi className="bg-primary w-12 h-12 p-2 text-white rounded-full" />
        </div>
        <h1 className="text-4xl lg:text-6xl mb-2 font-medium leading-normal">
          تعلم <span className="text-primary">الرياضيات</span> بطريقة بسيطة
          وحديثة
        </h1>
        <p className="text-sm lg:text-lg mt-4">
          كل ما تحتاجه لإتقان الرياضيات في المرحلة الثانوية وتحقيق التفوق في
          الأمتحانات
        </p>
        <div className="flex items-center justify-center mt-4 gap-6">
          <Button size={"lg"}>
            أبدا الأن ! <MoveLeft className="mr-2 h-4 w-4" />
          </Button>

          <Button variant={"outline"} size={"lg"}>
            أعرف المزيد
          </Button>
        </div>
      </div>
    </section>
  );
}
