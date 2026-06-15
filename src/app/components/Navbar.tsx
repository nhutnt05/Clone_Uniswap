import Link from "next/link";
import Image from "next/image";
import WalletButton from "./WalletButton";

function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#FEFDFD]-800 text-[#91908F]">
      <div>
        <Link href="/" className="p-2">
          <Image
            src="/demo/uniswap.png"
            width={40}
            height={40}
            className="w-10 h-10"
            style={{ width: 'auto', height: 'auto' }}
            alt="Logo"
            // loading="eager"
          />
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-4 text-lg">
          <li> Giao dịch </li>
          <li> Tìm kiếm</li>
          <li> Pool </li>
          <li> Danh mục đầu tư </li>
        </ul>
      </nav>
      <div>
       <WalletButton />
      </div>
    </header>
  );
}

export default Navbar;
