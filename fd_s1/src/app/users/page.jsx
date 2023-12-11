import CreateUser from "./CreateUser";

export default async function Users() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    <CreateUser
      firstName={firstName}
      lastName={setLastName}
      email={setEmail}
      phoneNumber={setPhoneNumber}
    />;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 text-black"
      >
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
    </>
  );
}
