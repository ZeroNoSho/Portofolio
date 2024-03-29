"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [open, SetOpen] = useState(false);
  const handleDownload = () => {
    const downloadLink =
      "https://drive.google.com/uc?export=download&id=1YHWt2tlrM2u3Wuq5t2PVbLmCjIDPKNpr";
    window.location.href = downloadLink;
  };
  return (
    <div className="flex flex-row justify-between mx-10 my-3 max-[765px]:block max-[765px]:mx-2 md:mx-8">
      <div className="flex flex-row justify-between" data-aos="fade-right">
        <h3 className="p-color-style py-2 px-5 ui-font-serif font-semibold text-xl md:px-2">
          <Link href="/">
            <span className="pr-2">A</span>
            <span className="pr-2">R</span>
            <span className="pr-2">I</span>
            <span className="pr-2">I</span>
            <span className="pr-2">.</span>
            <span className="pr-2">.</span>
          </Link>
        </h3>
        <div
          className="text-2xl md:hidden cursor-pointer my-auto px-5"
          onClick={() => SetOpen(!open)}
        >
          <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            className="p-color-style"
          />
        </div>
      </div>
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <ul className="flex max-[765px]:block" data-aos="fade-left">
          <li className="text-slate-400 py-2 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-orange-300 md:px-3">
            <a href="#about-me">
              <span className="p-color-style text-xs">01.</span> About
            </a>
          </li>
          <li className="text-slate-400 py-2 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-orange-300 md:px-3">
            <a href="#Certificate-me">
              <span className="p-color-style text-sm text-xs"> 02.</span>
              Certificate
            </a>
          </li>
          <li className="text-slate-400 py-2 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-orange-300 md:px-3">
            <a href="#Work-me">
              <span className="p-color-style text-xs">03.</span> Work
            </a>
          </li>
          <li className="text-slate-400 py-2 px-5 ui-font-serif font-medium text-base tracking-widest hover:text-orange-300 md:px-3">
            <a href="#foot">
              <span className="p-color-style text-xs">04.</span> Contact
            </a>
          </li>
          <li className="text-slate-400 py-2 px-5 ui-font-serif p-color-style tracking-widest hover:text-orange-300 md:px-3">
            <button
              className="outline outline-offset-2 outline-1 px-4 text-sm p-setegah rounded-sm md:px-2"
              onClick={handleDownload}
            >
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
