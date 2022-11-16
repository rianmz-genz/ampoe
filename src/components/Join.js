import React, { useEffect } from "react";
import "../index.css";
import DataJoin from "./DataJoin";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Join() {
 
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up" className="join max-tablet:w-11/12">
      <h1 className="titleJoin text-4xl font-bold max-[640px]:text-xl">Alasan Gabung Dengan Kami</h1>
      <div className="card max-tablet:w-full" data-aos="fade-up">
        {DataJoin.map((datas, index) => {
          return (
            <div className="isicard max-tablet:grid-cols-1" key={index}>
              <img src={datas.src} className="gambarjoin" />
              <h1 className="number text-3xl font-bold">{datas.number}</h1>
              <h2 className="judulcard font-bold">{datas.judul}</h2>
              <p className="deskcard text-xs w-3/4">{datas.desk}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Join;
