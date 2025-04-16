"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/providers";
import Image from "next/image";

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    debugger;
    e.preventDefault();

    if (email === "smyl@gamil.com" && password === "121@121") {
      login();
    } else {
      setError("Invalid credentials");
    }
  };

  if (isAuthenticated) return null;

  return (
    <div className="flex min-h-screen items-center justify-center fixed left-0 right-0 top-0 bottom-0 bg-white z-[9999]">
      <div className="shadow-blog rounded-[10px] p-5 max-w-full md:w-[600px]">
        <div className="text-center">
          <Image
            src="/smyl_logo512.png"
            height={100}
            width={100}
            alt="logo"
            className="mx-auto"
          />
          <h2 className="text-2xl font-bold text-center">Login</h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-3">
            <h6 className="text-base text-[#9796A1] leading-[32px] font-medium mb-2">
              Your Email
            </h6>
            <div className="border border-[#EEEEEE] rounded-[10px] flex items-center gap-4 px-4 hover:border-theme transition ease">
              <input
                type="email"
                placeholder="arlenemccoy54@gmail.com"
                className="w-full py-4 px-6 text-[14px] bg-transparent focus:outline-none placeholder:text-[#111719] text-primary"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete=""
              />
            </div>
          </div>
          <div className="mb-3">
            <h6 className="text-base text-[#9796A1] leading-[32px] font-medium mb-2">
              Password
            </h6>
            <div className="border border-[#EEEEEE] rounded-[10px] flex items-center gap-4 px-4 hover:border-theme transition ease">
              <input
                type="password"
                placeholder="***************"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-4 px-6 text-[14px] bg-transparent focus:outline-none placeholder:text-[#111719] text-primary"
                autoComplete=""
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="text-center mt-20">
            <button className="py-2 lg:py-3 px-4 lg:px-5 xl:px-7 relative inline-flex items-center justify-center overflow-hidden group rounded-[8px] font-bold transition ease text-[14px] lg:text-base xl:text-[18px] 2xl:text-[20px] bg-primary text-white text-[24px] leading-[30px] font-semibold bg-[#F5F5F7] py-4 bg-primary w-[184px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
