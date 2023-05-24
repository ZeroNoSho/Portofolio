"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

export default function Page() {
  const [img, setImg] = useState("Course Dasar-dasar HTML dan CSS.jpg");
  const [tahun, setBln] = useState("September 2022");

  const imgs = [
    { img: "Course Dasar-dasar HTML dan CSS.jpg", thn: "September 2022" },
    { img: "Skilvul JavaScript Intermediate (Gold).jpg", thn: "October 2022" },
    { img: "Course Web App Berbasis React.jpg", thn: "October 2022" },
  ];


  return (
    <main>
      <div className="inside xl:p-24 max-[765px]:p-1 md:p-1">
        <div id="first-pages" className="mx-20 my-11 max-[765px]:mx-10">
          <p className="p-color-style text-lg font-semibold">Hi, i&apos;am</p>
          <div className="py-5">
            <p className="text-slate-300 text-7xl font-semibold max-[765px]:text-3xl">Ari Rachaman.</p>
            <p className="text-slate-400 text-7xl font-semibold max-[765px]:text-5xl">I build things for the web.</p>
          </div>
          <div className="py-5">
            <p className="text-slate-500 text-lg  max-[765px]:text-base">im a frontend developer, passionate about learning and collaboration, i&apos;m</p>
            <p className="text-slate-500 text-lg  max-[765px]:text-base">currently looking for any new opportunities.</p>
          </div>
        </div>

        <div id="about-me" className="mx-20 mt-60 mb-40 max-[765px]:mx-10">
          <div className="flex max-[765px]:block">
            <div className="mr-20 max-[765px]:mr-0">
              <div className="mb-5">
                <p className="text-slate-300 text-3xl font-bold my-10 max-[765px]:text-2xl">
                  <span className="text-2xl p-color-style max-[765px]:text-xl">01.</span> About Me
                </p>
                <div className="border-orange-200 border-2 rounded-xl border-dashed h-fit min-[765px]:hidden min-[765px]:w-fit">
                  <Image src="/1234.jpg" width={1300} height={1600} alt="profile" className="rounded-xl mt-5 ml-5 grayscale hover:grayscale-0 min-[765px]:mt-0 min-[765px]:ml-5" />
                </div>
                <p className="text-slate-400 text-justify text-lg max-[765px]:text-base pt-5">
                  Hi, My name is <span className="p-color-style">Ari Rachman</span> but I want you to call me <span className="p-color-style">Ari</span>, I am a frontend developer who loves to create beautiful and functional websites. I am
                  an informatics student at the Telkom Purwokerto Institute of Technology (ITTP) who loves to learn and has a high curiosity and good problem-solving skills. I am passionate about learning new technologies and keeping up
                  with the latest trends in web development.
                </p>
              </div>
              <div>
                <p className="text-slate-500 text-lg max-[765px]:text-base">Here are a few technologies i&apos;ve been working with recently</p>
                <ul className="text-slate-500 list-disc max-[765px]:text-base pt-5">
                  <li className="ml-5">ReactJS</li>
                  <li className="ml-5">NextJS</li>
                  <li className="ml-5">Javascript (ES6+)</li>
                </ul>
              </div>
            </div>
            <div className="xl:w-[1300px] m-auto border-orange-200 border-2 rounded-xl border-dashed h-fit max-[765px]:hidden md:w-[2000px]">
              <Image src="/1234.jpg" width={1300} height={1600} alt="profile" className="object-fill rounded-xl mt-5 ml-5 grayscale hover:grayscale-0" />
            </div>
          </div>
        </div>

        <div id="Certificate-me" className="xl:mx-60 my-20 max-[765px]:mx-10 md:mx-28">
          <p className="text-slate-300 text-3xl font-bold my-10 max-[765px]:text-2xl">
            <span className="text-2xl p-color-style max-[765px]:text-xl">02.</span> My Skills Certificate
          </p>
          <div className="flex max-[765px]:block">
            <div className="flex gap-10 xl:mr-0 md:mr-2">
              <div className="color-bg-or1 h-20"></div>
              <div>
                <p
                  className="text-slate-400 text-lg mb-10 hover:text-orange-300 cursor-pointer"
                  onClick={(e) => {
                    setImg(e.target.dataset.img);
                    setBln(e.target.dataset.thn);
                  }}
                  data-img={imgs[0].img}
                  data-thn={imgs[0].thn}
                >
                  HTML dan CSS
                </p>
                <p
                  className="text-slate-400 text-lg mb-10 hover:text-orange-300 cursor-pointer"
                  onClick={(e) => {
                    setImg(e.target.dataset.img);
                    setBln(e.target.dataset.thn);
                  }}
                  data-img={imgs[1].img}
                  data-thn={imgs[1].thn}
                >
                  JavaScript
                </p>
                <p
                  className="text-slate-400 text-lg mb-10 hover:text-orange-300 cursor-pointer"
                  onClick={(e) => {
                    setImg(e.target.dataset.img);
                    setBln(e.target.dataset.thn);
                  }}
                  data-img={imgs[2].img}
                  data-thn={imgs[2].thn}
                >
                  React Js
                </p>
              </div>
            </div>

            <div className="flex m-auto max-[765px]:block pt-10 md:block md:ml-4">
              <Image src={`/${img}`} width={520} height={340} alt="profile" className="" />
              <p className="inline-block3 text-slate-400 text-lg mb-10 inline-block1 mx-5 max-[765px]:text-base mx-0">{tahun}</p>
            </div>
          </div>
        </div>

        <div id="Work-me" className="mx-20 mt-40 mb-40 max-[765px]:mx-5">
          <p className="text-slate-300 text-3xl font-bold my-10 max-[765px]:text-2xl my-7">
            <span className="text-2xl p-color-style max-[765px]:text-xl">03.</span> Some Things I&apos;ve Built
          </p>

          <div className="work-content">
            <div className="work-me-1 xl:my-20 max-[765px]:my-5 md:my-5">
              <div className="flex max-[765px]:relative max-[765px]:grid">
                <div className="m-auto mr-10 color-bg-or2 max-[765px]:mr-0 max-[765px]:z-20 max-[765px]:opacity-95 max-[765px]:rounded-xl">
                  <p className="text-slate-300 text-2xl font-bold max-[765px]:px-5 max-[765px]:pt-5">Weather App</p>
                  <div className="color-bg-or4  mt-5 rounded">
                    <p className="text-slate-500 text-lg w-fit text-justify max-[765px]:py-1 max-[765px]:px-5 max-[765px]:text-sm">
                      Weather Application built with ReactJS, and the ability to capture Weather And RealTime Data in various countries. With this application, you can see the weather based on the area you entered. Plus, with a sleek and
                      intuitive user interface, you&apos;ll have all the information you need at your fingertips.
                    </p>
                  </div>
                  <p className="text-slate-500 text-sm pt-5 pb-2 pl-1 max-[765px]:pl-5 max-[765px]:text-xs">React, Bootstrap, API</p>
                  <div className="pl-1 text max-[765px]:pl-4 max-[765px]:pb-5">
                    <Link className="text-2xl" href="https://github.com/ZeroNoSho/weather">
                      <FontAwesomeIcon icon={faGithub} className="px-2 h-6 text-center text-slate-500 hover:text-orange-300" />
                    </Link>
                    <Link className="text-xl" href="https://zeronosho.github.io/weather/">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="px-2 h-5 text-slate-500 hover:text-orange-300" />
                    </Link>
                  </div>
                </div>
                <Image src="/weath.png" width={520} height={340} alt="profile" className="rounded-md m-auto xl:h-auto xl:w-5/12 max-[765px]:absolute max-[765px]:h-full max-[765px]:w-full md:w-80 md:h-36" />
              </div>
            </div>

            <div className="work-me-2 my-20 max-[765px]: my-5">
              <div className="flex max-[765px]:relative max-[765px]:grid">
                <Image src="/ecom.png" width={520} height={340} alt="profile" className="rounded-md xl:w-5/12 xl:h-auto max-[765px]:absolute max-[765px]:h-full max-[765px]:w-full md:m-auto md:w-80 md:h-36" />
                <div className="m-auto ml-10 color-bg-or2 max-[765px]:ml-0 max-[765px]:z-20 max-[765px]:opacity-95 max-[765px]:rounded-xl">
                  <p className="text-slate-300 text-2xl font-bold max-[765px]:px-5 max-[765px]:pt-5">e-commerce App</p>
                  <div className="color-bg-or4 mt-5 rounded">
                    <p className="text-slate-500 text-lg w-fit text-justify max-[765px]:py-1 max-[765px]:px-5 max-[765px]:text-sm">
                      An Online Store application built with ReactJS, With this application, you can see various types of sales based on existing categories. Plus, with a sleek and intuitive user interface, you&apos;ll have all the
                      information you need at your fingertips.
                    </p>
                  </div>
                  <p className="text-slate-500 text-sm pt-5 pb-2 pl-1 max-[765px]:pl-5 max-[765px]:text-xs">React, Bulma, API, Firebase</p>
                  <div className="pl-1 text max-[765px]:pl-4 max-[765px]:pb-5">
                    <Link className="text-2xl" href="https://github.com/ZeroNoSho/Store">
                      <FontAwesomeIcon icon={faGithub} className="px-2 h-6 text-center text-slate-500 hover:text-orange-300" />
                    </Link>
                    <Link className="text-xl" href="https://aristore-6d487.web.app/">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="px-2 h-5 text-slate-500 hover:text-orange-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-me-3 my-20 max-[765px]: my-5">
              <div className="flex max-[765px]:relative max-[765px]:grid">
                <div className="m-auto mr-10 color-bg-or2 max-[765px]:mr-0 max-[765px]:z-20 max-[765px]:opacity-95 max-[765px]:rounded-xl">
                  <p className="text-slate-300 text-2xl font-bold max-[765px]:px-5 max-[765px]:pt-5">Downloader App</p>
                  <div className="color-bg-or4  mt-5 rounded">
                    <p className="text-slate-500 text-lg w-fit text-justify max-[765px]:py-1 max-[765px]:px-5 max-[765px]:text-sm">
                      Online Download Application built with ReactJS. With this application, you can download videos on IG and YouTube directly and can also download Tiktok videos without a watermark. Plus, with a sleek and intuitive user
                      interface, you&apos;ll have all the information you need at your fingertips.
                    </p>
                  </div>
                  <p className="text-slate-500 text-sm pt-5 pb-2 pl-1 max-[765px]:pl-5 max-[765px]:text-xs">React, Bulma, API, Firebase</p>
                  <div className="pl-1 text max-[765px]:pl-4 max-[765px]:pb-5">
                    <Link className="text-2xl" href="https://github.com/ZeroNoSho/Downloader">
                      <FontAwesomeIcon icon={faGithub} className="px-2 h-6 text-center text-slate-500 hover:text-orange-300" />
                    </Link>
                    <Link className="text-xl" href="https://downloder-f966c.web.app/">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="px-2 h-5 text-slate-500 hover:text-orange-300" />
                    </Link>
                  </div>
                </div>
                <Image src="/downloader.png" width={520} height={340} alt="profile" className="rounded-md xl:w-5/12 xl:h-auto max-[765px]:absolute max-[765px]:h-full max-[765px]:w-full md:m-auto md:w-80 md:h-36" />
              </div>
            </div>
          </div>

          <div className="work-other-content my-20 max-[765px]:my-5 ">
            <p className="p-color-style text-center font-semibold">Other Noteworthy Projects</p>
            <div className="flex flex-wrap importan">
              <div className="w-6/12 px-4 py-5 max-[765px]:w-full max-[765px]:px-0">
                <div className="color-bg-or3  mt-5 rounded">
                  <div className="flex justify-between">
                    <p className="p-5 text-slate-300 text-2xl font-bold">
                      <FontAwesomeIcon icon={faFolder} className="p-color-style text-3xl pr-5" /> 3D App
                    </p>
                    <div className=" text p-5">
                      <Link className="text-2xl" href="https://github.com/ZeroNoSho/Love">
                        <FontAwesomeIcon icon={faGithub} className="px-3 text-center text-slate-500 hover:text-orange-300 max-[765px]:px-1 max-[765px]:w-full" />
                      </Link>
                      <Link className="text-xl" href="https://love-beige.vercel.app/kuro">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="px-3 text-slate-500 hover:text-orange-300 max-[765px]:px-1 max-[765px]:w-full" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-slate-500 text-lg pl-5 pr-5 w-fit text-justify max-[765px]:py-1 max-[765px]:px-5 max-[765px]:text-sm">
                    3D flowers app built with ReactJS. With this application, you can see beautiful flowers and you can add your partner.
                  </p>
                  <p className="p-5 text-slate-500 text-sm max-[765px]:text-xs">React, ThreeJS, Vercel</p>
                </div>
              </div>

              <div className="w-6/12 px-4 py-5 max-[765px]:w-full max-[765px]:px-0">
                <div className="color-bg-or3  mt-5 rounded">
                  <div className="flex justify-between">
                    <p className="p-5 text-slate-300 text-2xl font-bold">
                      <FontAwesomeIcon icon={faFolder} className="p-color-style text-3xl pr-5" /> Movie App
                    </p>
                    <div className=" text p-5">
                      <Link className="text-2xl" href="https://github.com/ZeroNoSho/movie">
                        <FontAwesomeIcon icon={faGithub} className="px-3 text-center text-slate-500 hover:text-orange-300 max-[765px]:px-1 max-[765px]:w-full" />
                      </Link>
                      <Link className="text-xl" href="https://zeronosho.github.io/movie/">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="px-3 text-slate-500 hover:text-orange-300 max-[765px]:px-1 max-[765px]:w-full" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-slate-500 text-lg pl-5 pr-5 w-fit text-justify max-[765px]:py-1 max-[765px]:px-5 max-[765px]:text-sm">
                    Movie application built with Vanila Js. With this application, you can search for movies by title, view movie details.
                  </p>
                  <p className="p-5 text-slate-500 text-sm max-[765px]:text-xs">Bootstrap, API</p>
                </div>
              </div>

              <div className="w-6/12 px-4 py-5 max-[765px]:w-full max-[765px]:px-0">
                <div className="color-bg-or3  mt-5 rounded">
                  <div className="flex justify-between">
                    <p className="p-5 text-slate-300 text-2xl font-bold">
                      <FontAwesomeIcon icon={faFolder} className="p-color-style text-3xl pr-5" /> Recipe App
                    </p>
                    <div className=" text p-5">
                      <Link className="text-2xl" href="https://github.com/ZeroNoSho/resep">
                        <FontAwesomeIcon icon={faGithub} className="px-3 text-center text-slate-500 hover:text-orange-300 max-[765px]:px-1 max-[765px]:w-full" />
                      </Link>
                      <Link className="text-xl" href="https://resep-zeronosho.vercel.app/">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="px-3 text-slate-500 hover:text-orange-300 max-[765px]:px-1 max-[765px]:w-full" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-slate-500 text-lg pl-5 pr-5 w-fit text-justify max-[765px]:py-1 max-[765px]:px-5 max-[765px]:text-sm">
                    The Food Recipes app is built with ReactJS. With this application, you can get a variety of meal recipes.
                  </p>
                  <p className="p-5 text-slate-500 text-sm max-[765px]:text-xs">React, Bootstrap, API, Vercel</p>
                </div>
              </div>

              <div className="w-6/12 px-4 py-5 max-[765px]:w-full max-[765px]:px-0">
                <div className="color-bg-or3  mt-5 rounded">
                  <div className="flex justify-between">
                    <p className="p-5 text-slate-300 text-2xl font-bold">
                      <FontAwesomeIcon icon={faFolder} className="p-color-style text-3xl pr-5" /> Clone App
                    </p>
                    <div className=" text p-5">
                      <Link className="text-2xl" href="https://github.com/ZeroNoSho/Comp">
                        <FontAwesomeIcon icon={faGithub} className="px-3 text-center text-slate-500 hover:text-orange-300 max-[765px]:px-1 max-[765px]:w-full" />
                      </Link>
                      <Link className="text-xl" href="https://comp-eight.vercel.app/">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="px-3 text-slate-500 hover:text-orange-300 max-[765px]:px-1 max-[765px]:w-full" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-slate-500 text-lg pl-5 pr-5 w-fit text-justify max-[765px]:py-1 max-[765px]:px-5 max-[765px]:text-sm">
                    The Clone BCA Digital application is built with ReactJS. This application is just a clone that looks like BCA Digital.
                  </p>
                  <p className="p-5 text-slate-500 text-sm max-[765px]:text-xs">React, Bulma, API, Firebase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="outside max-[765px]:hidden">
        <div className="fixed bottom-0 right-12 p-color-style flex inline-block1 items-center gap-2">
          <Link className="p-color-style text-lg" href="mailto:rachmanari745@gmail.com">
            inukuro351@gmail.com
          </Link>
          <div className="color-bg-or h-40"></div>
        </div>

        <div className="fixed bottom-0 left-12 p-color-style flex inline-block1 items-center gap-2">
          <Link className="p-color-style text-lg" href="https://vercel.com/zeronosho/portofolio-wajp">
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffcb74" }} className="items-center pl-1" />
          </Link>
          <div className="color-bg-or h-20"></div>
          <Link className="p-color-style text-ls" href="https://vercel.com/zeronosho/portofolio-wajp">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffcb74" }} className="items-center pl-1" />
          </Link>
          <div className="color-bg-or h-20"></div>
          <Link className="p-color-style text-lg" href="https://vercel.com/zeronosho/portofolio-wajp">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffcb74" }} className="items-center pl-1" />
          </Link>
          <div className="color-bg-or h-20"></div>
        </div>
      </div>
    </main>
  );
}
