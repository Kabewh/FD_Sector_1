import PocketBase from "pocketbase";

export default async function CreateUser({
  firstName,
  lastName,
  email,
  phoneNumber,
}) {
  const pb = new PocketBase("https://forta-dreptei.pockethost.io");

  const data = {
    firstName,
    lastName,
    email,
    phoneNumber,
  };
 
  const record = await pb.collection("users").create(data);
}
