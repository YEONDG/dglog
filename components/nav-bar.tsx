"use client";

import { useState, useEffect } from "react"; // useRef 추가
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MenuIcon, X } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 모바일 메뉴가 열려있을 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className={
        "fixed left-0 right-0 top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 shadow-md ring-2 backdrop-blur-md transition-all duration-300 ease-in-out"
      }
    >
      <Link href="/" className="relative text-3xl font-bold">
        DGlog
        <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-orange-500"></span>
      </Link>

      <div className="hidden justify-around sm:flex" data-testid="desktop-menu">
        <ThemeToggle />
        <Link
          href="/"
          className="px-4 py-2 transition-colors hover:text-orange-500"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="px-4 py-2 transition-colors hover:text-orange-500"
        >
          Projects
        </Link>
        <Link
          href="/posts"
          className="px-4 py-2 transition-colors hover:text-orange-500"
        >
          Posts
        </Link>
        <Link
          href="/guest"
          className="px-4 py-2 transition-colors hover:text-orange-500"
        >
          Guest
        </Link>
      </div>

      <div className="flex items-center justify-center sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="p-4 pr-5"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 h-screen bg-black bg-opacity-50 sm:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* 모바일 메뉴 패널 */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out dark:bg-black/90 sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
              DGlog
            </Link>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
            <button onClick={closeMenu} aria-label="Close menu" className="p-2">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-4xl">
            <Link
              href="/"
              className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/posts"
              className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={closeMenu}
            >
              Posts
            </Link>
            <Link
              href="/guest"
              className="rounded-md px-4 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={closeMenu}
            >
              Guest
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
