import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <div>
          <Header />
        </div>
      </header>

      <main className="flex-grow max-w-[1440px] mx-auto w-full">
        <Outlet />
      </main>

      <footer>
        <div className="card-bg">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
