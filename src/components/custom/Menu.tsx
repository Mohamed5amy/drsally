"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import MenuToggle, { MenuToggleRef } from "./MenuToggle";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useTranslations } from 'next-intl';
import HandleLanguage from "./HandleLanguage";

const Menu = ({ list }: { list: { name: string; link: string }[] }) => {
  const [active, setActive] = useState(false);
  const toggleRef = useRef<MenuToggleRef>(null);

  const handleClose = () => {
    toggleRef.current?.close(); // trigger animation + close
  };

  const isAuth = useIsAuthenticated();
  const logout = useSignOut();
  const t = useTranslations();
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
          {isAuth ? (
            <>
              <Link href={"/profile"} data-aos="fade-up" data-aos-delay={2200} onClick={handleClose}>
                <p className="transition-colors hover:text-secondary">{t('menu_profile')}</p>
              </Link>
              <div data-aos="fade-up" data-aos-delay={2200} onClick={() => {logout() ; window.location.reload()}  }>
                <p className="transition-colors hover:text-secondary">{t('menu_logout')}</p>
              </div>
            </>
          ) : (
            <Link href={"/login"} data-aos="fade-up" data-aos-delay={2200} onClick={handleClose}>
              <p className="transition-colors hover:text-secondary">{t('menu_login')}</p>
            </Link>
          )}
          {/* <div data-aos="fade-up" data-aos-delay={2400}><HandleLanguage /></div> */}
        </div>
      )}
    </>
  );
};

export default Menu;
