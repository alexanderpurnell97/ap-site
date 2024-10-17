'use client';

import React, { useState } from "react"
import Link from "next/link";

import { MenuItem } from "../components/footer";

interface Props {
    item: MenuItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : []

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

        return (
            <>
              <div className="relative z-30">
                <button
                  onClick={toggle}
                  className="text-3xl bg-footer-green h-full w-36 text-white rounded-tr-[10px] rounded-br-[10px] shadow h-full p-2 text-center"
                >
                  {item.title}
                </button>
                <div className={` rounded-tr-[10px] absolute bottom-[3.2rem] z-30 w-[250px] min-h-[300px] flex flex-col bg-white ${transClass}`}>
                {menuItems.map((item) => (
                  <Link
                    class={item.className}
                    key={item.route}
                    className="hover:bg-footer-blue hover:text-white p-4 text-2xl border-b-2"
                    href={item?.route || ''}
                    onClick={toggle}
                  >
                    {item.title}
                  </Link>
                ))}
                </div>
              </div>
              {isOpen ? (
                <div
                  className="fixed top-0 right-0 bottom-0 left-0 z-20"
                  onClick={toggle}
                ></div>
              ) : (
                <></>
              )}
            </>
          );
}