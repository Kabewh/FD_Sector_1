"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

export default function Adeziune() {
  const pb = new PocketBase("https://forta-dreptei.pockethost.io");

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const logo = "../logo.jpeg";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    };

    const record = await pb.collection("users").create(data);

    // console.log(resultList);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    router.refresh();
  };

  return (
    <>
      <div className="h-screen w-screen bg-primary text-white">
        <div className="md:w-1/2 mx-auto">
          <img className="w-full" src="/logoOrizontal.jpeg" />
          <h1 className="font-black text-center text-3xl  font-gotham">
            Implica-te!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-start items-center space-y-7 mt-12"
          >
            <div className="flex flex-col">
              <input
                className="w-64 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Nume"
              />
            </div>
            <div className="flex flex-col">
              <input
                className="w-64 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="Prenume"
              />
            </div>
            <div className="flex flex-col">
              <input
                className="w-64 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col">
              <input
                className="w-64 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600 mb-10"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                placeholder="Numar de telefon"
              />
            </div>
            <button
              type="submit"
              className="bg-complementary hover:border hover:border-white transition fade-in-out px-8 py-3 rounded-lg shadow-xl font-bold"
            >
              Trimite
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
