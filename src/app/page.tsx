// import LinkAccountButton from "./_components/link-account-button";
// import Link from "next/link";
// export default async function Home() {
//   return (

import Link from "next/link";

//     <>
{
  /* <LinkAccountButton />
      {/* <h1>helloo bhayyy</h1> */
}
{
  /* <footer className="mt-6">
        <Link href="/privacypolicy" className="text-blue-500 underline">
          Privacy Policy
        </Link>
      </footer> */
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-6">
      {/* Header Section */}
      <header className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">GoFloww Atom Mail</h1>
        <p className="mt-2 text-lg text-gray-600">
          AI-powered email management for effortless communication.
        </p>
      </header>

      {/* Main Content */}
      <section className="mt-10 w-full max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          📌 About GoFloww Atom Mail
        </h2>
        <p className="leading-relaxed text-gray-700">
          GoFloww Atom Mail is an advanced AI-powered email assistant that helps
          users efficiently manage their emails. It integrates with{" "}
          <strong>Google services</strong>, such as Gmail, to provide:
        </p>

        <ul className="mt-4 list-inside list-disc space-y-2 text-gray-700">
          <li>✅ AI-driven smart email composition.</li>
          <li>✅ Sentiment analysis for better communication.</li>
          <li>✅ Context-aware suggestions to streamline responses.</li>
        </ul>
      </section>

      {/* Privacy Policy Link */}
      <div className="mt-6">
        <Link
          href="/privacy-policy"
          className="text-lg font-medium text-blue-600 hover:underline"
        >
          🔒 View Privacy Policy
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center">
        © {new Date().getFullYear()} GoFloww Atom Mail. All rights reserved.
      </footer>
    </div>
  );
}
