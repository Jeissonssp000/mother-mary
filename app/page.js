import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Activity from "@/src/screens/Activity";
import Company from "@/src/screens/Company";
import Drops from "@/src/screens/Drops";
import Home from "@/src/screens/Home";
import Marketplace from "@/src/screens/Marketplace";

export default function App() {
  return (
    <main className="max-w-screen-xl flex flex-col w-full">
      <Header />
      <Home />
      <Drops />
      <Marketplace />
      <Activity />
      <Company />
      <Footer />
    </main>
  );
}
