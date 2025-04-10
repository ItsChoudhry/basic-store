import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold mb-6">Welcome to basic store</h1>
      <p className="text-lg mb-8">
        Unlock the power of language models—sign in to get started!
      </p>
      <Link href="/sign-in">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Sign In
        </button>
      </Link>
    </div>
  );
}
