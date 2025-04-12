"use client";

import { redirect } from "next/navigation";
import SignOut from "./SignOut";
import { Suspense } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!user) redirect("/sign-in");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.firstName}</h1>
      <p>We in!</p>
      <Suspense
        fallback={
          <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
            Sign Out
          </button>
        }
      >
        <SignOut />
      </Suspense>
      <Link href="/profile">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
          Go to Profile
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
