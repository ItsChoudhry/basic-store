"use client";

import { SignOutButton } from "@clerk/nextjs";

const SignOut = () => {
  return (
    <SignOutButton redirectUrl={"/"}>
      <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600">
        {"Sign Out"}
      </button>
    </SignOutButton>
  );
};

export default SignOut;
