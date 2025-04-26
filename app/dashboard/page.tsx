import { redirect } from "next/navigation";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import SignOutButton from "./SignOutButton";

async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.firstName}</h1>
      <p>We in!</p>
      <SignOutButton />
      <Link href="/profile">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
          Go to Profile
        </button>
      </Link>
    </div>
  );
}

export default Dashboard;
