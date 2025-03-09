import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-3">Error 404</h1>
      <p className="mb-6">Page not found</p>
      <Link href="/" className="text-blue-500">
        Return to homepage
      </Link>
    </div>
  );
}
