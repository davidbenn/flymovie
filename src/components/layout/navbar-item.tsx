"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    text: string;
    href: string;
}

export const NavbarItem = ({ text, href }: Props) => {

    const isActive = usePathname() === href;

    return (
        <>
           <Link href={href} className={`
              px-5 border py-1.5 rounded-lg font-normal hover:bg-gray-200 transition text-gray-800
              ${isActive ? "bg-gray-200" : ""}
           `}>
              {text}
           </Link>
        </>
    );
}