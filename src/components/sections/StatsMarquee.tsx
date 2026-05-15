import Marquee from "@/components/ui/Marquee";
import { profile } from "@/data/profile";
import { Fragment } from "react";

export default function StatsMarquee() {
  return (
    <div className="border-y border-hairline bg-ink-soft overflow-hidden">
      <Marquee speed={35} className="py-6">
        {profile.stats.map((stat, i) => (
          <Fragment key={i}>
            <span className="whitespace-nowrap font-display font-black uppercase leading-none text-[4.2rem] md:text-[clamp(2.5rem,6vw,4.5rem)]">
              <span className="text-bone">{stat.value}</span>
              <span className="text-bone-dim ml-3 text-[0.6em] tracking-[0.10em]">
                {stat.label}
              </span>
            </span>
            <span className="text-flush text-[3.6rem] md:text-[clamp(2rem,5vw,3.5rem)] leading-none">
              ✦
            </span>
          </Fragment>
        ))}
      </Marquee>
    </div>
  );
}
