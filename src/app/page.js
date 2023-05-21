"use client";

import Link from "next/link";
import { useGlobalContext } from "./context/store";

export default function Home() {
  const { menu, setMenu } = useGlobalContext();

  function showCurrentMenuContent(menu) {
    setMenu(() => menu);
  }
  return (
    <main className="">
      <section className=" border-2 border-black h-3/5 flex flex-col items-center">
        <div className="flex items-center justify-around h-52 w-full ">
          <Link
            href="/content"
            className="rounded-full border-2 border-black p-12 hovered"
            onClick={() => showCurrentMenuContent("정책")}
          >
            정책
          </Link>
          <Link
            href="/content"
            className="rounded-full border-2 border-black p-12 hovered"
            onClick={() => showCurrentMenuContent("인재")}
          >
            인재
          </Link>
        </div>
        <div className="flex items-center justify-center h-52 w-full">
          <Link
            href="/"
            className="rounded-full border-2 border-black p-24 hovered"
            onClick={() => showCurrentMenuContent("/")}
          >
            logo
          </Link>
        </div>
        <div className="flex items-center justify-around h-52 w-full">
          <Link
            href="/content"
            className="rounded-full border-2 border-black p-12 hovered"
            onClick={() => showCurrentMenuContent("지도")}
          >
            지도
          </Link>
          <Link
            href="/content"
            className="rounded-full border-2 border-black p-12 hovered"
            onClick={() => showCurrentMenuContent("몰")}
          >
            몰
          </Link>
        </div>
      </section>
      <section className="h-96 border-2 border-black">회사 소개</section>
      <section className="h-96 border-2 border-black">
        회사 슬로건 및 회사 정책
      </section>
    </main>
  );
}
