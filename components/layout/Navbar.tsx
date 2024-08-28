"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      to: "/#our-services",
      text: "خدامتنا",
    },
    {
      to: "/#grades",
      text: "الفصول الدراسية",
    },
  ];
  return (
    <nav className="py-4">
      <div className="flex flex-wrap items-center container justify-between">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              width={55}
              height={55}
              alt="abdallah_hassan_logo"
              src={Logo}
            />
            <h6 className="text-xl font-medium">
              <span className="text-primary">عبدالله</span> حسن
            </h6>
          </div>
        </Link>

        <div className="lg:hidden">
          <Button
            onClick={() => setMenu((prev) => !prev)}
            variant="outline"
            size="icon"
          >
            {menu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <div
          className={`${
            menu
              ? "flex flex-col w-full p-4 bg-gray-50 rounded-md mt-4"
              : "hidden"
          } lg:flex lg:flex-row lg:w-auto lg:m-0 lg:p-0 items-center gap-5`}
        >
          {links.map((e, i) => {
            return (
              <Link
                className="hover:text-primary transition-colors"
                key={i}
                href={e.to}
              >
                {e.text}
              </Link>
            );
          })}
          <Button className="w-32">تسجيل</Button>
        </div>
      </div>
    </nav>
  );
}
