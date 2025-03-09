import Navbar from "@/components/home/navbar/Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-124px)] flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
}
