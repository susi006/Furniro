
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartSidebar from "./CartSidebar";

export default function Layout() {
  const { pathname } = useLocation();

  // Always start a new page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <CartSidebar />
    </>
  );
}

