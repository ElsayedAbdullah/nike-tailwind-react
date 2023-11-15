import Nav from "./components/Nav";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SuperQuality,
} from "./sections";
import SpecialOffer from "./sections/SpecialOffer.jsx";
import Subscribe from "./sections/Subscribe.jsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative bg-white dark:bg-black">
        <Nav />
        <section className="padding-b">
          <Hero />
        </section>
        <section id="products" className="padding scroll-mt-10">
          <PopularProducts />
        </section>
        <section id="about-us" className="padding scroll-mt-20">
          <SuperQuality />
        </section>
        <section id="services" className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue dark:bg-slate-300">
          <CustomerReviews />
        </section>
        <section
          id="contact-us"
          className="padding-x scroll-mt-16 py-16 sm:py-32"
        >
          <Subscribe />
        </section>
        <section className="padding-x padding-t bg-black pb-8 dark:bg-slate-800">
          <Footer />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
