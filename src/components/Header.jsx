import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav className="flex">
        <a href="#home" className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
          <Image
            src="/logo.png"
            alt="Mother mary Logo"
            width={63}
            height={63}
            priority
          />
        </a>
        <div className="menu center" style={{ gap: 30 }}>
          <a href="#home">Home</a>
          <a href="#drops">Drops</a>
          <a href="#marketplace">Marketplace</a>
          <a href="#activity">Activity</a>
          <a href="#company">Company</a>
        </div>
        <button className="secondary">Ver en opensea</button>
      </nav>
    </header>
  )
}
