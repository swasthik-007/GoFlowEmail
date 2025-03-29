import LinkAccountButton from "./_components/link-account-button";
import Link from "next/link";
export default async function Home() {
  return (
    <>
      <LinkAccountButton />
      {/* <h1>helloo bhayyy</h1> */}
      <footer className="mt-6">
        <Link href="/privacypolicy" className="text-blue-500 underline">
          Privacy Policy
        </Link>
      </footer>
    </>
  );
}
