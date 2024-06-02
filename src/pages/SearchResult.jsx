import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Find from "../components/Find";
import FindResult from "../components/FindResult";

const SearchResult = () => {
  return (
    <div>
      <Navbar />
      <Banner title="ini banner 1" showBtn={false} />
      <Find />
      <FindResult />
      <Footer />
    </div>
  );
};

export default SearchResult;
