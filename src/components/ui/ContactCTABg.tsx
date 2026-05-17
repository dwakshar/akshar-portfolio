const NOISE_SVG =
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E` +
  `%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E` +
  `%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E` +
  `%3Crect width='200' height='200' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`;

export default function ContactCTABg() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden
      style={{ backgroundImage: NOISE_SVG, backgroundSize: "200px 200px" }}
    />
  );
}
