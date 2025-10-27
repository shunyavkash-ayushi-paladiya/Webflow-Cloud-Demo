import { Block } from "@/devlink/_Builtin";
import Link from "next/link";

export default function Navbar() {
  return (
    <Block tag="header">
        <Block className="container mx-auto">
            <Link href="./">Main Home</Link>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </Block>
    </Block>
  )
}