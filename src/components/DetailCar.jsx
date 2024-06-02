import ImageCarPerson from "../assets/carpersons.png";
import ImageCar from "../assets/innova.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const DetailCar = () => {
  const Param = useParams();
  const [cars, setCars] = useState({});
  const getCarDetail = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${Param.id}`)
      .then((res) => {
        console.log(res);
        const data = res.data;
        setCars(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCarDetail();
  }, {});

  console.log("state", cars);

  return (
    <div className="detail-car-container">
      <div className="detail-car-wrapper">
        <div className="detail-car-content-left">
          <p>Tentang Paket</p>
          <p>Include</p>
          <ul>
            <li>Apa saja yang termasuk dalam paket misalnya tanpa bagian</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <p>Exclude</p>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <p>Refund, Reschedule, Overtime</p>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
        <div className="detail-car-content-right">
          <div className="detail-car-content-right-img">
            <img src={cars.image} alt="innova" />
            <p>{cars.name}</p>
            <img src={ImageCarPerson} alt="" width="70px" />
          </div>
          <div className="car-total">
            <p>Total</p>
            <p>Rp {cars.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCar;
