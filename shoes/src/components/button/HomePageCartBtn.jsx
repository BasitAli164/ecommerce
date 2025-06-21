"use client";
import { useRouter } from "next/navigation";

export default function HomePageCartBtn({ btnText, link }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(link)}
      className="px-8 py-3 bg-transparent text-white font-semibold uppercase border rounded-full cursor-pointer "
    >
      {btnText}
    </button>
  );
}
