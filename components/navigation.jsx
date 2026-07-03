"use client";

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import ImagenesListas from './imageneslistas';
import facebookIcon from 'public/images/facebook.svg';
import instagramIcon from 'public/images/instagram.svg';
import tiktokIcon from 'public/images/tiktok.svg';
import youtubeIcon from 'public/images/youtube.svg';

const navItems = [
  { linkText: 'Inicio', href: '/' },
  { linkText: 'Próximos Eventos', href: '/eventosproximos' },

  {
    linkText: 'Campus Tecnificación Europa',
    subTitulos: [
      { linkText: 'Campus Eurohockey', href: '/eurohockey' },
      { linkText: 'Hockey de Tecnificación', href: '/hockeytecnificacion' },
      { linkText: 'Mundial 2026 Fases de Grupos', href: '/mundialfasegrupos' },
      { linkText: 'Mundial 2026 Fases Finales', href: '/mundialfasefinal' }

    ]
  },

  {
    linkText: 'Qué es Hockey Academy',
    subTitulos: [
      { linkText: 'Acerca de HA', href: '/queeshockeyacademy' },
      { linkText: 'Quiénes Somos', href: '/quienessomos' },
      { linkText: 'Nuestro Staff', href: '/staff' }
    ]
  },

  { linkText: 'Beneficios HA Card', href: '/beneficioshacard' },
  { linkText: 'Imágenes de HA', href: '/haenimagenes' },
  { linkText: 'Capacitaciones', href: '/capacitaciones' },
  { linkText: 'Sponsors y Alianzas', href: '/sponsors' },

  { linkText: 'Contacto', href: '/contacto' }
];

const remToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export function Navigation() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  const [subMenuOpening, setOpenSubMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const subMenuRefs = useRef([]);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSubMenuToggle = (index) => {
    if (subMenuOpening === index) {
      closeSubMenu(index);
      setOpenSubMenu(null);
    } else {
      if (subMenuOpening !== null) closeSubMenu(subMenuOpening);
      openSubMenu(index);
      setOpenSubMenu(index);
    }
  };

  const handleLinkClick = () => {
    if (subMenuOpening !== null) {
      closeSubMenu(subMenuOpening);
      setOpenSubMenu(null);
    }
    setMenuOpen(false);
  };

  const closeSubMenu = (index) => {
    const subMenu = subMenuRefs.current[index];
    const marginBottomPixels = remToPixels(0.75);
    subMenu.style.height = `${subMenu.scrollHeight + marginBottomPixels}px`;
    requestAnimationFrame(() => {
      subMenu.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out';
      subMenu.style.height = '0';
      subMenu.style.opacity = '0';
    });
  };

  const openSubMenu = (index) => {
    const subMenu = subMenuRefs.current[index];
    subMenu.style.height = '0';
    subMenu.style.opacity = '0';
    requestAnimationFrame(() => {
      const marginBottomPixels = remToPixels(0.75);
      subMenu.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out';
      subMenu.style.height = `${subMenu.scrollHeight + marginBottomPixels}px`;
      subMenu.style.opacity = '1';
    });
  };

  const isSubItemActive = (subTitulos) =>
    subTitulos?.some(subItem => subItem.href === activePath);

  const getLinkClass = (path, subTitulos) => {
    if (path === activePath) return 'text-[#53CDF8]';
    if (subTitulos && isSubItemActive(subTitulos)) return 'text-[#53CDF8]';
    return 'text-[rgba(255,255,255,0.8)]';
  };

  return (
    <nav className="bg-transparent fixed top-0 left-0 inline-flex font-Cabin w-full h-20 md:w-min md:h-screen">

      <div className="h-min inline-flex flex-row bg-[#12214d] z-50 md:pb-6 md:w-32 md:h-full md:flex-col transition-all duration-500 w-full">
        <div className="py-2 px-4 md:p-2">
          <Link href="/">
            <Image
              src={ImagenesListas[14]}
              alt=""
              className="h-14 md:w-24 md:mx-auto"
            />
          </Link>
        </div>

        <div className="pr-3 flex flex-grow items-center justify-end md:flex-col md:justify-center">
          <div className="cursor-pointer m-1.5 md:m-0" onClick={toggleMenu}>
            <div className="text-white font-semibold uppercase">Menú</div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-6 p-7">
          <a href="https://www.facebook.com/profile.php?id=100092632650074#" target="_blank"><Image src={facebookIcon} alt="" /></a>
          <a href="https://www.instagram.com/hockeyacademyok/" target="_blank"><Image src={instagramIcon} alt="" /></a>
          <a href="https://www.tiktok.com/@hockeyacademyok" target="_blank"><Image src={tiktokIcon} alt="" /></a>
          <a href="https://www.youtube.com/channel/UCug1CBwhTNIJ9rZFNGuu0_A" target="_blank"><Image src={youtubeIcon} alt="" /></a>
        </div>
      </div>

      <ul className={`px-8 h-screen bg-[#12214d] flex flex-col justify-center transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 -ml-96'}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            {item.href && (
              <Link href={item.href} onClick={handleLinkClick} className={getLinkClass(item.href)}>
                {item.linkText}
              </Link>
            )}

            {item.subTitulos && (
              <>
                <div
                  onClick={() => handleSubMenuToggle(index)}
                  className={`${getLinkClass(item.href, item.subTitulos)} cursor-pointer`}
                >
                  {item.linkText}
                </div>

                <ul ref={el => subMenuRefs.current[index] = el} className="h-0 opacity-0 overflow-hidden">
                  {item.subTitulos.map((subItem, subIndex) => (
                    <li key={subIndex} className="ml-3">
                      {subItem.external ? (
                        <a
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                          className="text-sm hover:text-[#53CDF8]"
                        >
                          {subItem.linkText}
                        </a>
                      ) : (
                        <Link
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className="text-sm hover:text-[#53CDF8]"
                        >
                          {subItem.linkText}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>

    </nav>
  );
}
