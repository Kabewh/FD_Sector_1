export const ChoiceButton = ({ text, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="w-20 h-10 lg:w-32 lg:text-xl lg:h-16 bg-complementary rounded-lg flex items-center justify-center cursor-pointer shadow-xl hover:border hover:border-white transition fade-in-out rounded-lg shadow-xl font-bold transition duration-300"
    >
      {text}
    </div>
  );
};
