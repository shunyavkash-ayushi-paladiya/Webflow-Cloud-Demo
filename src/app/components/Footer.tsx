import { Block } from "@/devlink/_Builtin";
import Link from "next/link";

export default function Footer() {
  return (
    <Block tag="footer">
        <Block className="container mx-auto">
            <Link href="./">Main Home</Link>
            <Link href="/">Home</Link>
            <Link href="./investment-strategies">Investment Strategies</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </Block>
    </Block>
  )
}