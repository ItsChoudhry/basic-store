import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blend-darken">
      <h1 className="text-3xl font-bold mb-6">basic store</h1>
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
      />
    </div>
  );
}
