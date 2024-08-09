import Navbar from "./Navbar";
import Hero from "./Hero";
import BeyondPremium from "./Beyond";
import Destination from "./Destination";
import Luxury from "./Luxury";
import ArticleSection from "./Article";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BeyondPremium />
      <Destination />
      <Luxury />
      <ArticleSection />
      <Footer />
    </div>
  );
};

export default Homepage;
