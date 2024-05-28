import "./style.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ServiceCar from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import Rental from "./components/Rental";
import Faq from "./components/Faq";
function App() {
  return (
    <div>
      <Navbar />
      <Banner title="ini banner 1" showBtn={true} />
      <ServiceCar />
      <WhyUs />
      <Testimonial />
      <Rental />
      <Faq />
    </div>
  );
}

export default App;
