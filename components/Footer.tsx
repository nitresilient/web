export function Footer() {
  const mask =
    "linear-gradient(to bottom, transparent 0%, black 12%, black 100%)";
  return (
    <footer
      aria-hidden="true"
      className="relative w-full overflow-hidden pointer-events-none select-none mt-12 lg:mt-24"
    >
      <img
        src="/footer-light.svg"
        alt=""
        className="block w-full h-auto dark:hidden"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />
      <img
        src="/footer-dark.svg"
        alt=""
        className="hidden w-full h-auto dark:block"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />
    </footer>
  );
}
