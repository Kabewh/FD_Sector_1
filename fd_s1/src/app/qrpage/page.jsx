"use client";
import AutoplayVideo from "./Video";
import Form from "./intrebari/Form";

export default function QrPage() {
  const video = "orbanReal.mp4";

  return (
    <>
      <section className="flex flex-col justify-center items-center bg-primary h-screen">
        <img
          src="/logoOrizontal.jpeg"
          className="-mt-24 lg:w-2/4 xl:-mt-56 2xl:-mt-72"
        />
        <div className="sm:w-1/2 xl:-mt-24 2xl:-mt-56">
          <AutoplayVideo videoSource={video} className="shadow-xl " />
        </div>
        <div className="text-white mt-12 mx-4">
          <p className="font-bold">PARTIDUL POLITIC</p>
          <h1 className="font-black text-4xl">Autentic de dreapta</h1>
          <h3 className="italic font-medium">
            Adevărații liberali sunt alături de Ludovic Orban și Forța Dreptei,
            oameni care își respectă cuvântul dat în alegeri și care sunt loiali
            doar cetățenilor.
          </h3>
          <img src="/prinNoiInsine.png" className="w-48 mt-2" />
        </div>
      </section>
    </>
  );
}
