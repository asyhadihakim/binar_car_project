import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Find = () => {
  return (
    <div className="find-container">
      <div className="find-wrapper">
        <div className="car-name">
          <p>Nama Mobil</p>
          <input type="text" placeholder="Ketik nama/tipe mobil" />
        </div>
        <div className="category">
          <p>Kategori</p>
          <input type="text" placeholder="Masukkan kapasitas mobil" />
        </div>
        <div className="price">
          <p>Harga</p>
          <input type="text" placeholder="Masukkan harga sewa perhari" />
        </div>
        <div className="car-status">
          <p>Status</p>
          <input type="text" />
        </div>
        <div className="btn-search">
          <Link to="/result">
            <button>Cari Mobil</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Find;
