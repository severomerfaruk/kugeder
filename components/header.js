import Link from "next/link";

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="flex justify-between">
        <Link href="/">
          <a>Anasayfa</a>
        </Link>

        <div className="space-x-4">
          <Link href="/projects">
            <a>Projelerimiz</a>
          </Link>

          <Link href="/about">
            <a>Hakkımızda</a>
          </Link>

          <Link href="/contact">
            <a>İletişim</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
