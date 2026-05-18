import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "All Appointments", path: "/appointments" },
    { label: "Dashboard", path: "/dashboard" },
  ];

  const supportLinks = [
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "X (Twitter)",
      href: "https://x.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0F0A1E] text-white">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Logo — same style as Navbar */}
          <Link href="/" className="flex items-center gap-2.5 w-fit">
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
            <span className="text-[20px] font-bold text-white tracking-tight">
              Doc<span className="text-violet-400">Appoint</span>
            </span>
          </Link>

          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Connecting patients with trusted doctors. Book appointments easily,
            manage your health journey, and get the care you deserve — all in
            one place.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-600 hover:border-violet-600 transition-all duration-150"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-150 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
            Account
          </h3>
          <ul className="flex flex-col gap-2.5">
            {supportLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-150 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} DocAppoint. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with{" "}
            <span className="text-violet-400">♥</span>{" "}
            for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;