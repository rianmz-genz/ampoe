import React, { useEffect } from "react";
import "../index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function History() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="fade-up" className="bghistory py-12 flex flex-col max-tablet:w-11/12 items-center">
      <div data-aos="fade-right" className="historytop max-tablet:flex-col max-tablet:hidden ">
        <img src="./images/Group 1.png" />
        <div className="ceritaatas mb-7">
          <h1 className="font-bold text-3xl">Sejarah Kami</h1>
          <p className="text-md">
            Memiliki keterampilan dan kemampuan menciptakan gagasan, merancang,
            menulis, mengeksekusi pesan iklan dalam media digital. serta
            melahirkan animator yang profesional.
          </p>
        </div>
      </div>
      <h2 data-aos="fade" className="text-2xl italic text-center font-medium mt-48 max-tablet:mt-3">
        Semua yang kami usahakan membuahkan hasil yang memuaskan.
      </h2>
      <div data-aos="fade-left" className="flex justify-around mt-20 items-center w-4/5 max-tablet:w-11/12 m-auto max-tablet:flex-col-reverse">
        <div className="w-2/5 max-tablet:w-full">
          <h2 className="font-bold text-3xl mb-5">Ampu Televisi</h2>
          <p className="text-md mb-5">
            Memiliki keterampilan dan kemampuan menciptakan gagasan, merancang,
            menulis, mengeksekusi pesan iklan dalam media digital. serta
            melahirkan animator yang profesional.
          </p>
          <a className="py-1 px-3 bg-black text-white rounded-lg italic cursor-pointer transition ease-in-out delay-150 hover:bg-blue-500 hover:text-white hover:duration-300">lihat aktivitas</a>
        </div>
        <img src="./images/image 7.png" className="w-2/5 max-tablet:w-full" />
      </div>
      <div data-aos="fade-right" className="flex justify-around mt-20 items-center w-11/12 m-auto max-tablet:flex-col">
      <img src="./images/image 9.png" className="w-2/5 max-tablet:w-full" />
        <div className='w-6/12 max-tablet:w-full'>
          <h2 className="font-bold text-3xl mb-5">Ampu Animasi</h2>
          <p className="text-md mb-5">
            Memiliki keterampilan dan kemampuan menciptakan gagasan, merancang,
            menulis, mengeksekusi pesan iklan dalam media digital. serta
            melahirkan animator yang profesional.
          </p>
          <a className="py-1 px-2 bg-black  text-white rounded-lg italic cursor-pointer transition ease-in-out delay-150 hover:text-white hover:bg-blue-500 duration-300">lihat aktivitas</a>
        </div>
      </div> 
      <div data-aos="fade-left" className="flex justify-around mt-20 items-center w-4/5 max-tablet:w-11/12 m-auto max-tablet:flex-col-reverse">
        <div className="w-2/5 max-tablet:w-full">
          <h2 className="font-bold text-3xl mb-5">Ampu Radio</h2>
          <p className="text-md mb-5">
            Memiliki keterampilan dan kemampuan menciptakan gagasan, merancang,
            menulis, mengeksekusi pesan iklan dalam media digital. serta
            melahirkan animator yang profesional.
          </p>
          <a className="py-1 px-3 bg-black text-white rounded-lg italic cursor-pointer transition ease-in-out delay-150 hover:bg-blue-500 hover:text-white hover:duration-300">lihat aktivitas</a>
        </div>
        <img src="./images/image 8.png" className="w-2/5 max-tablet:w-full" />
      </div>
      <img data-aos="fade" src="./images/LogoAmpu.png" className="mt-20"></img>
      <h3 data-aos="fade" className="font-bold">AMPU STUDIO</h3>
      <p data-aos="fade" className="max-tablet:text-xs">Jl. Let. Jend. Pol. Soemarto (Depan spn) Purwokerto.</p>
    </div>
  );
}

export default History;
