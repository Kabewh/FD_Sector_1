"use client";
import AutoplayVideo from "./Video";
import Navbar from "../components/navbar";
import Form from "./intrebari/Form";

export default function QrPage() {
  const video = "orbanReal.mp4";

  return (
    <div className="overflow-hidden h-full white-tree">
      <Navbar />
      <section className="flex flex-col h-full md:justify-start items-center bg-primary md:w-5/6 md:mx-auto md:shadow-2xl">
        <img
          src="/logoOrizontal.jpeg"
          className="block md:hidden lg:w-2/4 xl:-mt-56 2xl:-mt-72"
        />
        <img
          src="/logoVertical2Long.jpg"
          className="hidden md:block my-6 w-2/4"
        />
        <div className="w-5/6">
          <AutoplayVideo videoSource={video} className="shadow-xl" />
        </div>
        <div className="md:hidden text-white mt-12 mx-4 flex flex-col items-center justify-center text-center">
          <p className="font-bold mb-1">PARTIDUL POLITIC</p>
          <h1 className="text-4xl mb-2 font-gotham">Autentic de dreapta</h1>
          <h3 className="italic font-medium">
            Adevărații liberali sunt alături <br></br> de Ludovic Orban și Forța
            Dreptei, oameni care își respectă cuvântul dat în alegeri și care
            sunt loiali doar cetățenilor.
          </h3>
          <img src="/prinNoiInsine.png" className="w-48 mt-2" />
        </div>
      </section>
    </div>
  );
}
