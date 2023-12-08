import { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar";

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();

  const ChoiceButton = ({ text, handleClick }) => {
    return (
      <div
        onClick={handleClick}
        className="w-20 h-10 lg:w-32 lg:text-xl lg:h-16 bg-complementary rounded-lg flex items-center justify-center cursor-pointer shadow-xl hover:border hover:border-white transition fade-in-out rounded-lg shadow-xl font-bold transition duration-300"
      >
        {text}
      </div>
    );
  };

  const handleNextClick = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <div className="overflow-hidden h-screen white-tree">
      <Navbar />
      <section
        id="form"
        className="md:w-1/2 mx-auto h-full bg-primary flex text-center md:mt-0"
      >
        <div className="md:w-full flex flex-col items-center text-base">
          <img
            className="md:hidden pt-10 pb-6 w-2/5"
            src="/logoOrizontal.jpeg"
          />
          <img
            className="hidden md:block w-full md:mt-36"
            src="/logoVertical2long.jpg"
          />
          <div className="mx-4 h-2/4 flex items-center justify-center md:py-5 md:w-full">
            {currentQuestion === 0 && (
              <div className="transition ease-in-out duration-300">
                <h1 className="text-white font-black text-3xl lg:text-5xl mb-4">
                  Ești gata să faci o schimbare?
                </h1>
                <div className="flex justify-center items-center space-x-20 mt-10 text-white font-bold">
                  <ChoiceButton text={"DA"} handleClick={handleNextClick} />
                  <ChoiceButton text={"NU"} handleClick={handleNextClick} />
                </div>
              </div>
            )}
            {currentQuestion === 1 && (
              <div className="transition ease-in-out duration-300">
                <h1 className="text-white font-black text-3xl lg:text-5xl mb-4">
                  Vrei să fii vocea schimbării?
                </h1>
                <div className="flex justify-center items-center space-x-20 mt-10 text-white font-bold">
                  <ChoiceButton text={"DA"} handleClick={handleNextClick} />
                  <ChoiceButton text={"NU"} handleClick={handleNextClick} />
                </div>
              </div>
            )}
            {currentQuestion === 2 && (
              <div className="transition ease-in-out duration-300">
                <h1 className="text-white font-black text-3xl lg:text-5xl mb-4">
                  Crezi în puterea unității?
                </h1>
                <div className="flex justify-center items-center space-x-20 mt-10 text-white font-bold">
                  <ChoiceButton text={"DA"} handleClick={handleNextClick} />
                  <ChoiceButton text={"NU"} handleClick={handleNextClick} />
                </div>
              </div>
            )}
            {currentQuestion === 3 &&
              router.push("/descopera/intrebari/implica-te")}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
