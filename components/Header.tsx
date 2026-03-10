import Image from "next/image";
import Link from "next/link";
import CTAButton from "./Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-18 z-50 shadow-xl/20 bg-gray-900">
      <div className="flex px-3 md:px-6 items-center justify-between h-full max-h-full">
        <div className="h-12">
          <Link href="#home">
            <Image alt="S&K Plating" height={0} width={0} sizes="100vw" className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110" src="/sk-logo.png" />
          </Link>
        </div>
        <nav className="h-16">
          <ul className="flex h-full items-center justify-center gap-4 font-semibold">
            <li>
              <Link className="text-gray-300 transition-all duration-300 hover:text-white" href="#home">Home</Link>
            </li>
            <li>
              <Link className="text-gray-300 transition-all duration-300 hover:text-white hidden md:block" href="">Finishes & Coatings</Link>
              <Link className="text-gray-300 transition-all duration-300 hover:text-white md:hidden" href="">Finishes</Link>
            </li>
            <li>
              <Link className="text-gray-300 transition-all duration-300 hover:text-white hidden md:block" href="">Meet the Team</Link>
              <Link className="text-gray-300 transition-all duration-300 hover:text-white md:hidden" href="">Team</Link>
            </li>
            <li>
              <CTAButton size="small" destination="">Contact</CTAButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;