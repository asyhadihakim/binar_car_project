import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Find from "../components/Find";
import DetailCar from "../components/DetailCar";

const Detail = () => {
  return (
    <div>
      <Navbar />
      <Banner title="ini banner 1" showBtn={false} />
      <Find />
      <DetailCar />
      <Footer />
    </div>
  );
};

export default Detail;
