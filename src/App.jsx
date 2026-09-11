import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import WhoWeAre from "./Whoweare.jsx";
import Whatwedo from "./Whatwedo.jsx";
import { LanguageProvider } from './LanguageContext';
import ContactUs from "./Contactus.jsx";

function App() {
  return (
    <>
    <LanguageProvider>
      <Header />
      <Hero />
      <WhoWeAre />
      <Whatwedo />
      <ContactUs/>
      <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
