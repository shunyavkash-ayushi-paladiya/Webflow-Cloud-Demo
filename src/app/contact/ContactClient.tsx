'use client';

import { Section, Block } from '@/devlink/_Builtin';
import Link from 'next/link';
import Image from 'next/image';
import TextFiled from '../components/Textfield';

export default function Contact() {
  return (
    <Section tag="section" className="min-h-[50vh] flex items-center justify-center">
      <Block tag="div" className="container">
        <Block tag="div" className="hero-split text-center max-w-150 mx-auto">
          <h1 className="mb-6 text-4xl font-bold bg-gradient-to-l from-[#3245ff] to-[#bc52ee] bg-clip-text text-transparent">
            Contact
          </h1>

          <Block className="block">
            <Image src="window.svg" width={200} height={200} alt="Picture of the author" />
          </Block>

          <TextFiled
            id="input"
            name="input"
            placeholder="write in input"
            className="rounded-xl"
            style={{ marginBottom: 20 }}
          />

          <Block tag="p">This is a simple test using Basic components with enhanced styling.</Block>

          <TextFiled
            id="input2"
            name="input2"
            placeholder="write in input2"
            className="rounded-3xl"
            style={{ marginBlock: '20px 30px' }}
          />

          <Block>
            <Link href="/" className="button-primary mx-auto">
              Get Started
            </Link>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}
