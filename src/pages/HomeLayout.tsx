import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollToTop, SubscriptionBox } from "../components";

const HomeLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <SubscriptionBox/>
      <Footer />
    </>
  );
};
export default HomeLayout;
