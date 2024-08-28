import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="my-4 container text-center py-4">
      جميع الحقوق محفوظة لدي منصة الأستاذ عبدالله حسن {currentYear}
    </div>
  );
}
