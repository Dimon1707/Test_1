'use client';

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import { NavLinkProps, TopInfoProps, NavItem, TopLink } from "@/interface/Header.interface";

const NAV_LINKS: NavItem[] = [
    {href: "/", label: "Услуги", hasArrow: true},
    {href: "/", label: "О Клинике", hasArrow: true},
    {href: "/", label: "Команда"},
    {href: "/", label: "Цены"},
    {href: "/", label: "Результаты работ", hideOnXl: true},
    {href: "/", label: "Акции", hasDot: true},
    {href: "/", label: "Контакты"},
];

const TOP_LINKS: TopLink[] = [
    {icon: "/glasses.svg", text: "Версия для слабовидящих"},
    {icon: "/max_sm.svg", text: "Канал - MAX"},
];

const NavLink = ({href, label, hasArrow, hasDot, hideOnXl, isMobile}: NavLinkProps) => (
    <Link
        href={href}
        className={`
            flex items-center gap-1 text-[#474031] hover:text-[#887B61] transition-colors
            ${isMobile ? 'justify-between py-2' : ''}
            ${hideOnXl && !isMobile ? 'hidden xl:block' : ''}
        `}
    >
        {label}
        {hasArrow &&
            <Image
                src="/arrow.svg"
                alt="arrow"
                width={9}
                height={9}
            />
        }
        {hasDot && <div className="bg-[#887B61] rounded-full w-1 h-1"/>}
    </Link>
);

const TopInfo = ({icon, text, size = 26}: TopInfoProps) => (
    <div className="flex items-center gap-2">
        <Image src={icon} alt={text} width={size} height={size}/>
        <p className="text-[#887B61] text-[13px]">{text}</p>
    </div>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white">
            <div
                className="hidden md:flex items-center justify-between py-2 px-4 md:px-8 2xl:px-35 border-b border-[#F5F0EC]">
                {TOP_LINKS.map((item, i) => (
                    <TopInfo key={i} {...item} />
                ))}
            </div>
            <div
                className="flex items-center justify-between py-2 px-4 md:px-8 2xl:px-35 border-b border-[#F5F0EC] text-[15px]">
                <div
                    className="relative h-[32px] w-[125px] md:h-[38px] md:w-[150px] lg:h-[42px] lg:w-[165px] 2xl:w-[260px]">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        fill
                        className="object-cover object-left"
                    />
                </div>
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {NAV_LINKS.map((link, i) => (
                        <NavLink key={i} {...link} />
                    ))}
                </nav>
                <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
                    <Link href="tel:+74232658950"
                          className="hidden md:block text-[#474031] text-sm lg:text-[15px] hover:text-[#887B61] transition-colors">
                        +7 (423) 265-89-50
                    </Link>
                    <button className="hidden sm:block" aria-label="Поиск">
                        <Image
                            src="/search.svg"
                            alt="search"
                            width={18}
                            height={18}
                            className="lg:w-5 lg:h-5"
                        />
                    </button>
                    <button
                        className="flex justify-center items-center gap-2 bg-[#544B46] px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded-full text-white text-sm lg:text-[16px] hover:bg-[#3A3A3A] transition-colors">
                        <Image src="/message.svg"
                               alt="message"
                               width={16}
                               height={12}
                               className="lg:w-[19px] lg:h-[14px]"
                        />
                        <p className="inline font-medium">Записаться</p>
                    </button>
                    <button
                        className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Меню"
                    >
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className={`block h-0.5 w-full bg-[#474031] transition-transform
                                    ${isMenuOpen && i === 0 ? 'rotate-45 translate-y-2' : ''}
                                    ${isMenuOpen && i === 1 ? 'opacity-0' : ''}
                                    ${isMenuOpen && i === 2 ? '-rotate-45 -translate-y-2' : ''}
                                `}
                            />
                        ))}
                    </button>
                </div>
            </div>
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="flex flex-col gap-4 p-6 bg-white border-b border-[#F5F0EC]">
                    {NAV_LINKS.map((link, i) => (
                        <NavLink key={i} {...link} isMobile/>
                    ))}

                    <Link href="tel:+74232658950"
                          className="text-[#887B61] font-medium text-lg py-2 mt-4 border-t border-[#F5F0EC]">
                        +7 (423) 265-89-50
                    </Link>

                    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#F5F0EC]">
                        {TOP_LINKS.map((item, i) => (
                            <TopInfo key={i} {...item} size={20}/>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}
