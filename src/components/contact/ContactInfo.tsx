import { Mail, ExternalLink } from "lucide-react";

const socials = [
  { label: "Twitter / X", href: "https://x.com/dwakshar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dwakshar/" },
  { label: "GitHub", href: "https://github.com/dwakshar" },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-hairline">
      {/* Email */}
      <div className="flex flex-col gap-2 py-8 sm:py-0 sm:pr-8">
        <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
          Email
        </span>
        <a
          href="mailto:akshar2.dnd@gmail.com"
          className="inline-flex items-center gap-2 font-sans text-sm text-bone hover:text-flush transition-colors duration-200 group"
        >
          <Mail className="w-3.5 h-3.5 text-bone-dim group-hover:text-flush transition-colors duration-200 shrink-0" />
          akshar2.dnd@gmail.com
        </a>
      </div>

      {/* Socials */}
      <div className="flex flex-col gap-2 py-8 sm:py-0 sm:px-8">
        <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
          Elsewhere
        </span>
        <div className="flex flex-col gap-1.5">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm text-bone-dim hover:text-flush transition-colors duration-200"
            >
              {label}
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          ))}
        </div>
      </div>

      {/* Response time */}
      <div className="flex flex-col gap-2 py-8 sm:py-0 sm:pl-8">
        <span className="font-sans text-xs text-bone-dim uppercase tracking-widest">
          Response Time
        </span>
        <div className="inline-flex items-center gap-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="font-sans text-sm text-bone">Usually within 24h</span>
        </div>
      </div>
    </div>
  );
}
