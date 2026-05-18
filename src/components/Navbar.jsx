"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "All Appointments", path: "/appointments" },
    { label: "Dashboard", path: "/dashboard" },
  ];

  const linkClass = (path) =>
    `text-sm font-medium px-3 py-2 rounded-lg transition-all duration-150 whitespace-nowrap ${
      pathname === path
        ? "text-violet-700 bg-violet-50"
        : "text-gray-600 hover:text-violet-700 hover:bg-violet-50"
    }`;

  return (
    <nav className="bg-white border-b border-violet-100 sticky top-0 z-50 shadow-[0_1px_12px_rgba(124,58,237,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-[38px] h-[38px] bg-gradient-to-br from-violet-600 to-violet-400 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <span className="text-[20px] font-bold text-indigo-950 tracking-tight">
            Doc<span className="text-violet-600">Appoint</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={linkClass(link.path)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop Auth ── */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Avatar
                size="sm"
                className="border-2 border-violet-300 flex-shrink-0"
              >
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user.name}
                  src={user?.image}
                />
                <Avatar.Fallback className="bg-gradient-to-br from-violet-600 to-violet-400 text-white text-sm font-semibold">
                  {user.name?.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <Button
                size="sm"
                onClick={handleSignOut}
                className="text-sm font-medium text-gray-500 border border-gray-200 px-4 py-1.5 rounded-lg hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all duration-150 bg-transparent whitespace-nowrap"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-violet-600 border border-violet-300 px-4 py-1.5 rounded-lg hover:bg-violet-50 hover:border-violet-600 transition-all duration-150 whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-sm font-semibold text-white bg-violet-600 px-4 py-1.5 rounded-lg hover:bg-violet-800 transition-all duration-150 whitespace-nowrap"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* ── Mobile: Auth always visible + Hamburger ── */}
        <div className="flex md:hidden items-center gap-2">
          {user ? (
            <>
              <Avatar
                size="sm"
                className="border-2 border-violet-300 flex-shrink-0"
              >
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user.name}
                  src={user?.image}
                />
                <Avatar.Fallback className="bg-gradient-to-br from-violet-600 to-violet-400 text-white text-sm font-semibold">
                  {user.name?.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <Button
                size="sm"
                onClick={handleSignOut}
                className="text-sm font-medium text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all duration-150 bg-transparent whitespace-nowrap"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-violet-600 border border-violet-300 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-all duration-150 whitespace-nowrap"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-sm font-semibold text-white bg-violet-600 px-3 py-1.5 rounded-lg hover:bg-violet-800 transition-all duration-150 whitespace-nowrap"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* Hamburger — collapses nav links only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col gap-[5px] p-1.5 rounded-lg hover:bg-violet-50 transition-all cursor-pointer border-none bg-transparent ml-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-0.5 bg-gray-600 rounded transition-all duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-0.5 bg-gray-600 rounded transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-0.5 bg-gray-600 rounded transition-all duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown: nav links only ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-violet-100 px-4 py-3 flex flex-col gap-1 shadow-[0_8px_24px_rgba(124,58,237,0.1)]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={linkClass(link.path)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;