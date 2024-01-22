"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const styles = "font-bold mr-10 text-lg hover:text-primary transition-all";
const links = [
  {
    label: "Content 1",
    path: "#content1",
  },
  {
    label: "Content 2",
    path: "#content2",
  },
  {
    label: "Login",
    path: "#login",
  },
];

export const Navbar = () => {
  const path = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav className="fixed w-full z-50 h-28 pr-4 flex justify-end items-center text-black">
      {links.map((link, index) => {
        const isActive = path.startsWith(link.path);
        return (
          <Link
            href={link.path}
            key={index}
            scroll={false}
            className={`${styles} ${isActive && "text-primary "}`}
            onClick={handleScroll}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
