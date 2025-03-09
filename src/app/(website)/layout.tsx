import Footer from "@/components/home/footer/Footer";
import Navbar from "@/components/home/navbar/Navbar";
import SecondWrapper from "@/components/shared/SecondWrapper";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="my-14">
        <SecondWrapper>{children}</SecondWrapper>
      </main>
      <Footer />
    </div>
  );
}
export default layout;
