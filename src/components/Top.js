import React, { useEffect, useState } from "react";
import "../index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Top() {
  document.addEventListener("mousemove", paralax);
  const [content, setContent] = useState(false);
  const [load, setload] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setload(false);
      setContent(true);
    }, 3500);
    AOS.init();
  }, []);

  function paralax(e) {
    document.querySelectorAll(".pak").forEach(function (move) {
      var moving = move.getAttribute("data-value");
      var x = (e.clientX * moving) / 800;
      var y = (e.clientY * moving) / 400;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }

  return (
    <div className="topContainer" id="topContainer" data-value="3">
      {load && (
        <div className="w-full h-screen absolute z-1 bg-white flex justify-center items-end">
          <div id="loader">
            <div id="box"></div>
            <div id="hill"></div>
          </div>
        </div>
      )}
      {content && (
        <div data-aos="fade" className="isiTop max-[640px]:flex-col-reverse max-[640px]:w-11/12 max-[640px]:justify-center max-[640px]:mt-8 max-[640px]:h-max">
          <div className="left max-[640px]:w-full max-[640px]:h-screen ">
            <h1 className="title text-4xl font-bold max-[640px]:text-xl ">
              Selamat Datang Di <br/>
              Ampu Studio
            </h1>
            <p className="topDescription text-lg max-[640px]:text-base">
              Melahirkan jurnalis profesional yang terampil merancang dan
              melaksanakan pekerjaan profesional di bidang jurnalisme
              <br />
              <br />
              Memiliki keterampilan dan kemampuan menciptakan gagasan,
              merancang, menulis, mengeksekusi pesan iklan dalam media digital.
              serta melahirkan animator yang profesional. Membuat animasi
              hiburan anak anak yang mendidik dengan kualitas yang bagus.
              <br/>
              <br/>
              . Rahman Rosyidi .</p>
          </div>
          <div className="right max-[640px]:w-5/12 max-[640px]:inset-x-1/4">
            <img src="images/Rectangle 5.png" className="square" />
            <img src="images/image 2.png" className="pak" data-value="5" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Top;
