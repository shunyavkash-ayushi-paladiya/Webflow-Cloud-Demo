import { Block } from "@/devlink/_Builtin";
import Link from "next/link";

export default function Footer() {
  return (
    <Block tag="footer">
        <Block className="container mx-auto">
            {/* <Link href="./" className="p-3">Main Home</Link> */}
            {/* <Link href="./investment-strategies" className="p-3">Investment Strategies</Link> */}
            <Link href="/" className="p-3">Home</Link>
            <Link href="/about" className="p-3">About</Link>
            <Link href="/contact" className="p-3">Contact</Link>
        </Block>
    </Block>
  )
}