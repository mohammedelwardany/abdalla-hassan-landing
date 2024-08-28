import BG from "@/public/track.jpg";
import Image from "next/image";

export default function TrackYourLevelSection() {
  return (
    <div className="mt-8 justify-center items-center grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h6 className="text-primary">تابع مستواك بشكل دوري</h6>
        <h4 className="text-2xl mb-4 mt-2">
          من خلال لوحة تحكم خاصة بالطالب تعرض كل ما يحتاجه بشكل بسيط
        </h4>
      </div>

      <div>
        <Image className="w-full rounded-md" src={BG} alt="student" />
      </div>
    </div>
  );
}
