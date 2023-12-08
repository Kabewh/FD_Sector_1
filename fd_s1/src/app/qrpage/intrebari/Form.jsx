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
        <div className="md:w-full flex flex-col md:items-center text-base">
          <img className="md:hidden w-full mt-24" src="/logoOrizontal.jpeg" />
          <img
            className="hidden md:block w-full md:mt-36"
            src="/logoVertical2long.jpg"
          />
          <div className="mx-4 md:flex h-3/5 md:items-center md:justify-center md:py-5 md:w-full">
            {currentQuestion === 0 && (
              <div className="transition ease-in-out duration-300">
                <h1 className="text-white font-black text-3xl lg:text-5xl mb-4">
                  Ai fost de acord cu mesajul urmarit?
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
                  Simti nevoia de a face parte din schimbare?
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
                  Doresti o echipa care sa-ti ajute scopul?
                </h1>
                <div className="flex justify-center items-center space-x-20 mt-10 text-white font-bold">
                  <ChoiceButton text={"DA"} handleClick={handleNextClick} />
                  <ChoiceButton text={"NU"} handleClick={handleNextClick} />
                </div>
              </div>
            )}
            {currentQuestion === 3 &&
              router.push("/qrpage/intrebari/implica-te")}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
