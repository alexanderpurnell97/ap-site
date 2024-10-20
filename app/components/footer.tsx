import React from "react";
import Link from "next/link";
import Dropdown from "./startmenu";

export interface MenuItem {
    title: string;
    route?: string;
    id?: number;
    children?: MenuItem[];
    className?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Start",
    children: [
        {
        title: "About",
        route: "/about", 
        id: 1,
        // className: "hover:rounded-tr-[10px] hover:bg-footer-blue hover:text-white p-4 text-2xl border-b-2"
        },
        {
        title: "Experience",
        route: "/experience", 
        id: 2,
        },
        {
        title: "Skills",
        route: "/skills",
        id: 3,
        },
        {
        title: "Contact",
        route: "/contact",
        id: 3,
        },        
        {
        title: "Home",
        route: "/",
        id: 3,
        },        
    ]
  } 
];

export default function Footer() {
    return (
      <footer className="flex gap-10 items-center bg-footer-blue z-10">
        <div>
          {menuItems.map((item) => {
            return item.hasOwnProperty("children") ? (
              <Dropdown key={item.id || item.title} item={item} />
            ) : (
              <Link
                    href={item?.route || ""}
                    key={item.id || item.title}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </footer>
    );
  }