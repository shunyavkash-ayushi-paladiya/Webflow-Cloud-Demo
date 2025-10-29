import { Block } from "@/devlink/_Builtin";
import Link from "next/link";

export default function Navbar() {
  return (
    <Block tag="header">
        <Block className="container mx-auto">
            {/* <Link href="./" className="p-3 transition-all duration-300 ease-in-out">Main Home</Link> */}
            {/* <Link href="./investment-strategies" className="p-3 transition-all duration-300 ease-in-out">Investment Strategies</Link> */}
            <Link href="/" className="p-3 transition-all duration-300 ease-in-out">Home</Link>
            <Link href="/about" className="p-3 transition-all duration-300 ease-in-out">About</Link>
            <Link href="/contact" className="p-3 transition-all duration-300 ease-in-out">Contact</Link>
        </Block>
    </Block>
  )
}