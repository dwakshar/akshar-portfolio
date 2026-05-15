import Marquee from "@/components/ui/Marquee";
import { Fragment } from "react";

const row1Items = ["LET'S TALK", "LET'S BUILD", "LET'S SHIP"];

const row2Items = ["GOT AN IDEA?", "LET'S MAKE IT REAL"];

export default function ContactMarquee() {
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-b border-hairline"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
      }}>
      {/* Row 1 — moves left, bone */}
      <Marquee speed={25} className="py-4 md:py-6">
        {row1Items.map((item, i) => (
          <Fragment key={i}>
            <span
              className="font-display text-bone whitespace-nowrap leading-none tracking-tight"
              style={{
                fontSize: "clamp(5.5rem, 12vw, 10rem)",
                fontVariationSettings: '"wdth" 65',
              }}>
              {item}
            </span>
            <span
              className="text-flush leading-none shrink-0"
              style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)" }}>
              ✦
            </span>
          </Fragment>
        ))}
      </Marquee>

      {/* Row 2 — moves right, flush */}
      <Marquee speed={32} reverse className="py-4 md:py-6">
        {row2Items.map((item, i) => (
          <Fragment key={i}>
            <span
              className="font-display text-flush whitespace-nowrap leading-none tracking-tight"
              style={{
                fontSize: "clamp(5.5rem, 12vw, 10rem)",
                fontVariationSettings: '"wdth" 65',
              }}>
              {item}
            </span>
            <span
              className="text-bone leading-none shrink-0"
              style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)" }}>
              ●
            </span>
          </Fragment>
        ))}
      </Marquee>
    </section>
  );
}
