"use client";
import AutoplayVideo from "./Video";
import Navbar from "../components/navbar";
import Form from "./intrebari/Form";

export default function QrPage() {
  const video = "orbanReal.mp4";

  return (
    <div className="h-screen white-tree">
      <Navbar />
      <section className="flex flex-col h-full md:h-none md:h-auto md:justify-start bg-primary md:bg-transparent md:mt-12 items-center md:w-5/6 md:mx-auto md:pb-48">
        <img
          src="/logoOrizontal.jpeg"
          className="block w-2/5 pt-2 pb-6 md:hidden lg:w-2/4 xl:-mt-56 2xl:-mt-72"
        />
        <img
          src="/greenonwhitelogo.jpg"
          className="hidden md:block my-6 w-2/4"
        />
        <div className="">
          <AutoplayVideo videoSource={video} className="shadow-xl" />
        </div>
        <div className="md:hidden h-2/4 text-white md:mt-12 mt-4 mx-4 flex flex-col items-center justify-center text-center">
          <p className="font-bold mb-1 font-gotham">PARTIDUL POLITIC</p>
          <h1 className="text-3xl mb-1 font-gotham">Autentic de dreapta</h1>
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
