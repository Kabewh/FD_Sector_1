import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <section className="hidden md:block w-full h-20 bg-white text-primary font-bold">
        <ul className="w-1/2 mx-auto h-full flex justify-center items-center">
          <Link
            href="/"
            className="w-32 h-full flex items-center justify-center border-x hover:bg-complementary hover:text-white transition ease-in-out duration-300"
          >
            ACASA
          </Link>
          <Link
            href="/descopera/intrebari"
            className="w-32 h-full flex items-center justify-center border-x hover:bg-complementary hover:text-white transition ease-in-out duration-300"
          >
            DESCOPERA
          </Link>
          <Link
            href="/descopera/intrebari/implica-te"
            className="w-32 h-full flex items-center justify-center border-x hover:bg-complementary hover:text-white transition ease-in-out duration-300"
          >
            IMPLICA-TE
          </Link>
          <Link
            href="#"
            className="w-32 h-full flex items-center justify-center border-x hover:bg-complementary hover:text-white transition ease-in-out duration-300"
          >
            CONTACT
          </Link>
        </ul>
      </section>
    </>
  );
}
