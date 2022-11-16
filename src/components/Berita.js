import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DataBerita from "./DataBerita";
import ReactTooltip from 'react-tooltip';

function Berita() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-4/5 m-auto pt-9">
      <h1 data-aos="fade" className="text-4xl font-bold ml-6 max-tablet:text-2xl">
        Rangkaian Kegiatan
      </h1>

      <div className="wadahberita h-screen flex justify-around items-center max-tablet:flex-col">
        <div
          data-aos="fade-up"
          id="carouselExampleCrossfade"
          className="carousel slide carousel-fade relative  w-7/12 max-tablet:w-full"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active float-left w-full">
              <img
                src="./images/Group 3.png"
                className="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="./images/Group 4.png"
                className="block w-full"
                alt="Camera"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="./images/Group 3.png"
                className="block w-full"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div
          data-aos="fade-up"
          className="berita w-4/12 max-tablet:w-full  scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full border-neutral-400 border rounded-2xl p-6 h-4/6 max-tablet:h-3/6"
        >
          <h1 className="text-3xl font-bold mb-5 text-blue-600 pb-6 border-b border-neutral-800 max-tablet:text-2xl">
            Kegiatan Terkini
          </h1>
          {DataBerita.map((datas, index) => {
            return (
              <div  className="border-b py-6 my-6 border-black" key={index}>
                <h1 data-tip={datas.tooltip} className="text-2xl max-tablet:text-xl font-bold text-neutral-700">{datas.berita}</h1>
                <ReactTooltip textColor='black' backgroundColor="white" border={true} borderColor="black" delayHide={500} />
                <p  className="mt-3">{datas.tanggal}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Berita;
