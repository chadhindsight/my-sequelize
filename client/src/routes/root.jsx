import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import BaddieList from "../components/BaddieList";
export default function Root() {
  return (
    <main className="bg-neutral-200 text-center dark:bg-neutral-700">
    <section id="baddie-parent">
    <BaddieList/>
     
       <section id="detail">
        <Outlet />
      </section>
    </section>
      <Footer/>
    </main>
  );
}