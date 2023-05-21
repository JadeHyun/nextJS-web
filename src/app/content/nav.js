"use client";
import { useRef } from "react";

export default function Nav({ menuValue, changeMenu }) {
  const menus = ["정책", "인재", "지도", "청년몰"];
  console.log(menuValue);
  return (
    <nav>
      <ul className="flex justify-between items-center">
        {menus.map((el, idx) => {
          return (
            <li
              style={{
                border: "1px solid black",
                padding: "20px 50px",
                width: "25%",
                textAlign: "center",
              }}
              onClick={() => changeMenu(el)}
              className={el === menuValue ? "active" : ""}
              key={idx}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
