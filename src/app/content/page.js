"use client";

import Nav from "./nav";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../context/store";
import Policy from "./policy/page";
import Map from "./map/page";
import Mall from "./mall/page";
import Worker from "./worker/page";

export default function Content({}) {
  const router = useRouter();
  const { menu, setMenu } = useGlobalContext();
  return (
    <main className="layout">
      <button type="button" onClick={() => router.push("/")}>
        contentPage
      </button>
      <Nav menuValue={menu} changeMenu={setMenu} />
      {menu === "정책" && <Policy />}
      {menu === "인재" && <Worker />}
      {menu === "지도" && <Map />}
      {menu === "청년몰" && <Mall />}
    </main>
  );
}
