import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: FiGithub,
    url: "https://github.com/AkshayPappu",
    label: "GitHub",
  },
  {
    id: 2,
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/akshay-pappu",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: FiInstagram,
    url: "https://www.instagram.com/akshayfalcons/?hl=en",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 font-mono">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="terminal-prompt text-xs">
          akshay@portfolio:~$ echo &quot;&copy; {new Date().getFullYear()} Akshay
          Pappu&quot;
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ id, icon: Icon, url, label }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-zinc-500 transition-colors hover:text-orange-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
