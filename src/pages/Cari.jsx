import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Find from "../components/Find";

const Cari = () => {
  return (
    <div>
      <Navbar />
      <Banner title="ini banner 1" showBtn={false}/>
      <Find />
      <Footer />
    </div>
  );
};

export default Cari;
