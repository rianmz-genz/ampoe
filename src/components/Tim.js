import React, { useState, useMemo } from 'react'
import DataTim from './DataTim'
import Pagination from './Pagination';

function Tim() {
    let PageSize = 8
    const [currentPage, setCurrentPage] = useState(1);

    const currentTimData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return DataTim.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);

  return (
    <div className='w-4/5 m-auto min-h-screen pt-14'>
      <h1 className='text-4xl font-bold mb-3 max-tablet:text-2xl'>Semua Tim Kami</h1>
      <p className='text-2xl font-medium mt-3 mb-3 max-tablet:text-xl'>Semua yang berkontribusi dalam mengembangkan Ampu Studio.</p>
      <div className=' w-full h-screen flex justify-center flex-col'>

          <div className='grid grid-cols-4 max-tablet:grid-cols-2 gap-y-12 gap-x-0 place-items-center mt-24 pt-24'>
            {currentTimData.map((item,index) => {
                  return (
                      <div key={index} className='w-54'>
                        <img src={item.foto} className='rounded-full w-52 ' />
                        <h1 className='text-xl font-bold text-center mt-3'>{item.nama}</h1>
                        <h1 className='text-md text-center'>{item.role}</h1>
                      </div>
                  )
              })}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={DataTim.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />


      </div>
    </div>
  )
}

export default Tim