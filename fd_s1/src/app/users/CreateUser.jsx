import { useRouter } from "next/navigation";

export default async function CreateUser({
  firstName,
  lastName,
  email,
  phoneNumber,
}) {
  const router = useRouter();

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

  router.refresh();
}
