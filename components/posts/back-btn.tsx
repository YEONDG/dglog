"use client";

import { MoveLeft } from "lucide-react";
import Link from "next/link";

export const BackBtn = () => {
  return (
    <Link
      href={"/posts"}
      className="ml-2 flex w-fit gap-4 rounded-full border bg-green-300/50 px-4 py-2 shadow-md hover:cursor-pointer"
    >
      <MoveLeft width={20} height={20} className="font-bold" />
      <p>뒤로가기</p>
    </Link>
  );
};
