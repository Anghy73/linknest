"use client";

import { getAllLinks } from "@/lib/actions";
import useLinksStore from "@/lib/store";
import Image from "next/image";
import { useEffect } from "react";
import { MdOutlineSaveAlt } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { PiShareBold } from "react-icons/pi";
import Questions from "@/ui/questions";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  const setGuestId = useLinksStore((store) => store.setGuestId);
  const guestId = useLinksStore((store) => store.guestId);
  const saveLinks = useLinksStore((store) => store.saveLinks);
  const saveLinksFilter = useLinksStore((store) => store.saveLinksFilter);

  useEffect(() => {
    const initGuest = async () => {
      let storedGuestId = localStorage.getItem("guestId");
      if (!storedGuestId) {
        storedGuestId = crypto.randomUUID();
        localStorage.setItem("guestId", storedGuestId);
      }
      setGuestId(storedGuestId);

      const rest = await getAllLinks(storedGuestId);
      saveLinks(rest);
      saveLinksFilter([]);
    };
    initGuest();
  }, [guestId]);

  return (
    <>
      <main className="font-sans min-h-screen px-4 pt-6 pb-20 md:px-20">
        <section className="border-3 border-black py-10 rounded-2xl min-h-screen">
          <header className="flex justify-between items-center px-2 md:px-20">
            <h1 className="font-bold text-2xl md:text-3xl">Link Nest</h1>
            <Link href={`/account/user/${guestId}`}>
              <button className="font-medium cursor-pointer border-2 border-black px-3 py-2 rounded-lg">
                ¡Empieza ya!
              </button>
            </Link>
          </header>
          <div className="w-full h-screen flex justify-center items-center flex-col pt-30 pb-45">
            <div className="max-w-xl flex justify-center items-center flex-col">
              <h2 className="text-2xl md:text-4xl font-bold text-center">
                Organiza, guarda y encuentra tus links en un solo lugar.
              </h2>
              <p className="text-center text-lg md:text-xl opacity-65 mt-3">
                Convierte tu caos de pestañas abiertas en una biblioteca
                personal de enlaces.
              </p>
              <Link href={`/account/user/${guestId}`}>
                <button className="font-medium cursor-pointer border-2 border-black px-6 py-2 rounded-xl mt-6  hover:scale-105 transition-transform">
                  Empieza gratis
                </button>
              </Link>
            </div>
            <div className="relative w-full h-10 flex justify-center items-center">
              <figure className="absolute top-0 mt-25 hidden md:block left-0 border-2 border-black overflow-hidden rounded-2xl mx-10">
                <Image
                  src="/images/linkNest-desktop.png"
                  alt="Image of Link nest page for desktop"
                  width={1900}
                  height={1100}
                ></Image>
              </figure>
              <figure className="absolute top-0 mt-10 md:hidden left-0 border-2 border-black overflow-hidden rounded-2xl mx-10">
                <Image
                  src="/images/linkNest-mobile.png"
                  alt="Image of Link nest page for desktop"
                  width={580}
                  height={950}
                ></Image>
              </figure>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col justify-center items-center max-w-5xl mx-auto mt-70 min-[400px]:mt-100 min-[500px]:mt-150 min-[600px]:mt-180 min-[650px]:mt-200 min-[768px]:mt-100 min-[1200px]:mt-120 lg:mt-150">
          <h3 className="font-bold text-4xl mb-16">Beneficios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col justify-center items-center border-2 border-black pt-10 py-15 px-2 bg-black/5 hover:bg-white transition-colors rounded-lg cursor-pointer">
              <div className="mb-5">
                <MdOutlineSaveAlt size={40} />
              </div>
              <h4 className="font-bold text-xl">Guarda lo que importa</h4>
              <p className="opacity-65 text-center pt-3 px-9">
                Guarda cualquier enlace en segundos, desde artículos hasta
                videos.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-black py-10 px-2 bg-black/5 hover:bg-white transition-colors rounded-lg cursor-pointer">
              <div className="mb-5">
                <BiEdit size={40} />
              </div>
              <h4 className="font-bold text-xl">Organiza a tu manera</h4>
              <p className="opacity-65 text-center pt-3 px-9">
                Clasifica con categorías, etiquetas y vistas personalizadas.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-black py-10 px-2 bg-black/5 hover:bg-white transition-colors rounded-lg cursor-pointer">
              <div className="mb-5">
                <PiShareBold size={40} />
              </div>
              <h4 className="font-bold text-xl">Comparte fácilmente</h4>
              <p className="opacity-65 text-center pt-3 px-9">
                Envía enlaces o colecciones completas con un solo clic.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-40">
          <h3 className="font-bold text-4xl text-center">
            Preguntas frecuentes
          </h3>
          <p className="text-center opacity-75 mb-10 mt-2">
            Todo lo que necesitas saber acerca de Link Nest.
          </p>
          <Questions></Questions>
        </section>
      </main>
      <footer className="h-50 bg-[#111] mt-30 text-white flex justify-center items-center">
        <ul className="flex gap-4 sm:gap-20 text-xl flex-wrap px-10">
          <li>
            <span>
              Creado por{" "}
              <a
                href="https://github.com/Anghy73"
                target="_blank"
                className="hover:text-[#00beef]"
              >
                Andy
              </a>
            </span>
          </li>
          <li className="flex justify-center items-baseline gap-1">
            <FaGithub />
            <span>
              <a
                className="cursor-pointer hover:text-[#00beef]"
                href="https://github.com/Anghy73/linknest"
                target="_blank"
              >
                Repositorio
              </a>
            </span>
          </li>
        </ul>
      </footer>
    </>
  );
}
