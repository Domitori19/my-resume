import { Outlet } from "react-router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@/components/Layout/Layout.module.css";
const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.Content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
