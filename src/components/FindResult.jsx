import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Leftbtn from "../assets/leftbutton.png";
import Rightbtn from "../assets/rightbutton.png";
const FindResult = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const getCars = () => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?page=${page}&name=${search}`
      )
      .then((res) => {
        console.log(res);
        const data = res.data.cars;
        setCars(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCars();
  }, []);

  //updating
  useEffect(() => {
    getCars();
  }, [page, search]);

  return (
    <div className="search-result-container">
      <div className="search-result-wrapper">
        {cars.map((data) => (
          <div className="search-result-card">
            <div className="search-result-card-img">
              <img src={data.image} alt="innova" />
            </div>
            <div className="search-result-card-content">
              <p>{data.name}</p>
              <h2>Rp {data.price} / hari</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate nulla assumenda, pariatur ratione architecto placeat
              </p>

              <Link to={`/detail/${data.id}`}>
                <div>
                  <button>Pilih Mobil</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="pagination">
        <img
          src={Leftbtn}
          alt="leftbtn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        <h3>{page}</h3>
        <img src={Rightbtn} alt="rightbtn" onClick={() => setPage(page + 1)} />
      </div>
    </div>
  );
};
export default FindResult;
