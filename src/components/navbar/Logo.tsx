"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      className="hidden h-auto cursor-pointer md:block"
      height={100}
      width={100}
      src="/images/logo.png"
    />
  );
}
