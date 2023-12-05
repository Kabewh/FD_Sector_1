import { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Form = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();

  const ChoiceButton = ({ text, handleClick }) => {
    return (
      <div
        onClick={handleClick}
        className="w-20 h-10 bg-complementary rounded-lg flex items-center justify-center cursor-pointer shadow-xl hover:border hover:border-white transition fade-in-out rounded-lg shadow-xl font-bold transition duration-300"
      >
        {text}
      </div>
    );
  };

  const handleNextClick = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <section
      id="form"
      className="w-full h-full bg-primary flex text-center md:mt-0"
    >
      <div className="flex flex-col space-y-2 text-base">
        <img className="w-full mt-24" src="/logoOrizontal.jpeg" />
        <div className="mx-4">
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
          {currentQuestion === 3 && router.push("/qrpage/intrebari/implica-te")}
        </div>
      </div>
    </section>
  );
};

export default Form;
