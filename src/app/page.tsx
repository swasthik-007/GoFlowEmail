// import LinkAccountButton from "./_components/link-account-button";
// import Link from "next/link";
export default async function Home() {
  return (
    <>
      {/* <LinkAccountButton />
      {/* <h1>helloo bhayyy</h1> */}
      {/* <footer className="mt-6">
        <Link href="/privacypolicy" className="text-blue-500 underline">
          Privacy Policy
        </Link>
      </footer> */}

      <div className="flex min-h-screen flex-col justify-between">
        <div className="p-6">
          <h1 className="text-xl font-bold">Welcome to GoFloww Atoms</h1>
          {/* Your homepage content */}
        </div>

        {/* Footer with privacy policy link */}
        <footer className="bg-gray-100 p-4 text-center">
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </footer>
      </div>
    </>
  );
}
