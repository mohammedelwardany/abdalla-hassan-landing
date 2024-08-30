import Image from "next/image";
import Teacher from "@/public/abdallah.jpg";
export default function TeacherSection() {
  return (
    <div className="relative flex flex-col items-center justify-center mt-8">
      <div className=" flex flex-col items-center  justify-center">
        <Image
          className="w-full max-w-[400px] rounded-md"
          src={Teacher}
          alt="teacher"
        />
        <div className="bg-white shadow-md absolute bottom-4 max-w-[450px] mr-24 p-4 rounded-md">
          <figure className="max-w-screen-md mx-auto text-center">
            <blockquote>
              <p className="text-md italic font-medium text-gray-900 dark:text-white">
                الرياضيات مادة ممتعة تعتمد على تعلم المفاهيم والتطبيق
                عليها وليس الحفظ
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                  عبدالله حسن
                </cite>
                <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                  مدرس أول رياضيات
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
