import Image from "next/image"
import Link from "next/link"



export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2  px-10 font-bold py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/86810332?s=400&u=fa195a7bf024ffaa353bbdbe56a47b4b8fc9f830&v=4"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <h1>FNZL</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-lg text-center">
          Go To My Portfolio
        </Link>
      </div>
    </header>
  )
}
