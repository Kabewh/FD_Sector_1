"use client";
import AutoplayVideo from "./Video";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";

export default function QrPage() {
  redirect("/");
  return <div>redirect</div>;
}
