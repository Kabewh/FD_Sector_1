"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const create = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8090/api/collections/users/records", {
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
    <form onSubmit={create} className="flex flex-col space-y-5 text-black">
      <h3>Inscrie-te!</h3>
      <input
        type="text"
        placeholder="Nume..."
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Prenume..."
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Numar de telefon..."
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit">Trimite</button>
    </form>
  );
}
