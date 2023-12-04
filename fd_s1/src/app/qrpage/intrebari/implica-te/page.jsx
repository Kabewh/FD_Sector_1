"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Adeziune() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const logo = "../logo.jpeg";

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://fd-s1.fly.dev/api/collections/users/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
      }),
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    router.refresh();
  };

  return (
    <>
      <div className="h-screen w-screen bg-primary text-white">
        <div className="w-2/3 md:w-1/2 mx-auto">
          <img src={""}></img>
          <h1 className="font-black text-center text-3xl pt-12">Implica-te!</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-start items-center space-y-5 mt-12"
          >
            <div className="max-w-12">
              <label>Nume</label>
              <input
                className="w-full text-complementary"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Nume"
              />
            </div>
            <div>
              <label>Prenume</label>
              <input
                className="w-full text-complementary"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="Prenume"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className="w-full text-complementary"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />
            </div>
            <div>
              <label>Numar de telefon</label>
              <input
                className="w-full text-complementary"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                placeholder="Numar de telefon"
              />
            </div>
            <button
              type="submit"
              className="bg-complementary px-5 py-3 rounded-xl shadow-xl font-bold"
            >
              Trimite
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
