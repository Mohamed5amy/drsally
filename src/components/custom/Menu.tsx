"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import MenuToggle, { MenuToggleRef } from "./MenuToggle";

const Menu = ({ list }: { list: { name: string; link: string }[] }) => {
  const date = new Date().getFullYear();
  const [active, setActive] = useState(false);
  const toggleRef = useRef<MenuToggleRef>(null);

  const handleClose = () => {
    toggleRef.current?.close(); // trigger animation + close
  };

  return (
    <>
      <div className="flex lg:hidden">
        <MenuToggle ref={toggleRef} active={active} setActive={setActive} />
      </div>

      {active && (
        <div className="fixed inset-0 bg-primary z-10 flex flex-col text-textPrimary text-3xl font-bold gap-8 items-center justify-center" data-aos="fade-in">
          {list.map((item, i) => (
            <Link href={item.link} data-aos="fade-up" key={i} data-aos-delay={1000 + i * 200} onClick={handleClose}>
              <p className="transition-colors hover:text-secondary">{item.name}</p>
            </Link>
          ))}
          <p className="absolute hidden sm:flex text-[16px] font-normal text-textPlaceholder bottom-10 text-center" data-aos="fade-in" data-aos-delay={1000}>
            © {date} All Rights Reserved | Powered by{" "}
            <strong>
              <a href="https://www.mssmsolutions.com/" rel="noreferrer" target="_blank" className="transition-colors hover:text-secondary">MSSM</a>
            </strong> Solutions
          </p>
        </div>
      )}
    </>
  );
};

export default Menu;
