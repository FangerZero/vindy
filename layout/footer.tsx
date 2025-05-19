import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mb-4">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.nexon.com/main/en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/images/Nexon_white.svg"
          alt="Nexon Logo with Link"
          width={128}
          height={128}
        />
      </a>
    </footer>
  );
}
