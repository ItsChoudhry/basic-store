import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <UserProfile path="/profile" />
      <Link href="/dashboard">
        <button className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600">
          Back to Dashboard
        </button>
      </Link>
    </div>
  );
}
