import { Link } from "react-router-dom";
const Rental = () => {
  return (
    <div className="rental-container">
      <div className="rental-wrapper">
        <div className="rental-box">
          <h2>Sewa Mobil di (Lokasimu) Sekarang </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/search">
            <div className="rental-box-btn">
              <button>Mulai Sewa Mobil</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rental;
