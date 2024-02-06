import Footer from "./components/Footer";
import Header from "./components/Header";
import Activity from "./screens/Activity";
import Company from "./screens/Company";
import Drops from "./screens/Drops";
import Home from "./screens/Home";
import Marketplace from "./screens/Marketplace";

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
