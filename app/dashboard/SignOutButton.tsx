"use client";

import SignOut from "./SignOut";
import { Suspense } from "react";

const SignOutButton = () => {
  return (
    <Suspense
      fallback={
        <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
          Sign Out
        </button>
      }
    >
      <SignOut />
    </Suspense>
  );
};

export default SignOutButton;
