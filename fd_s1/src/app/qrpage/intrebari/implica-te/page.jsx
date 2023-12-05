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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const logo = "../logo.jpeg";

  const [lastNameError, setLastNameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validateForm = () => {
    let valid = true;

    if (lastName.trim() === "") {
      setLastNameError("Numele este obligatoriu");
      valid = false;
    } else {
      setLastNameError(
        "w-64 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
      );
    }

    if (firstName.trim() === "") {
      setFirstNameError("Prenumele este obligatoriu");
      valid = false;
    } else {
      setFirstNameError("");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Introduceți o adresă de email validă");
      valid = false;
    } else {
      setEmailError("");
    }

    if (phoneNumber.trim() === "" || isNaN(phoneNumber)) {
      setPhoneNumberError("Introduceți un număr de telefon valid");
      valid = false;
    } else {
      setPhoneNumberError("");
    }

    return valid;
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
    if (value.trim() !== "") {
      setLastNameError("");
    }
  };

  const handleFirstNameChange = (value) => {
    setFirstName(value);
    if (value.trim() !== "") {
      setFirstNameError("");
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (/^\S+@\S+\.\S+$/.test(value)) {
      setEmailError("");
    }
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    if (value.trim() !== "" && !isNaN(value)) {
      setPhoneNumberError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    };

    setIsLoading(true);
    try {
      const record = await pb.collection("users").create(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    router.refresh();
  };

  return (
    <>
      <div className="h-full w-screen bg-primary text-white">
        <div className="md:w-1/2 mx-auto md:flex md:flex-col md:items-center md:justify-center">
          <img className="md:hidden w-full" src="/logoOrizontal.jpeg" />
          <img className="w-2/3" src="/logoOrizontal.jpeg" />
          <h1 className="font-black text-center -mt-5 text-3xl font-gotham">
            Implica-te!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-start items-center space-y-5 mt-5"
          >
            <div className="flex flex-col">
              <span className="text-red-500 font-semibold">
                {lastNameError}
              </span>
              <input
                className="w-72 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
                type="text"
                onChange={(e) => handleLastNameChange(e.target.value)}
                value={lastName}
                placeholder="Nume"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-red-500 font-semibold">
                {firstNameError}
              </span>
              <input
                className="w-72 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
                type="text"
                onChange={(e) => handleFirstNameChange(e.target.value)}
                value={firstName}
                placeholder="Prenume"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-red-500 font-semibold">{emailError}</span>
              <input
                className="w-72 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
                type="text"
                onChange={(e) => handleEmailChange(e.target.value)}
                value={email}
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-red-500  font-semibold">
                {phoneNumberError}
              </span>
              <input
                className="w-72 text-complementary h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
                type="text"
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
                value={phoneNumber}
                placeholder="Numar de telefon"
              />
            </div>
            <button
              type="submit"
              className="bg-complementary hover:border hover:border-white transition fade-in-out px-8 py-3 rounded-lg shadow-xl font-bold"
              disabled={isLoading}
            >
              {isLoading ? "Se trimite..." : "Trimite"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
