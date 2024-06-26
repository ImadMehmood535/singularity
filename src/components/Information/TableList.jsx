"use client";
import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const TableList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(50);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(data.length / entriesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEntriesChange = (entries) => {
    setEntriesPerPage(entries);
    setCurrentPage(1);
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="TableList py-20 bg-[#0F121D]">
      <div className="containerCust">
        <div className="table-count-changer mb-4">
          <div className="dropdown flex items-center flex-row">
            <p className="mr-2 text-white">Show</p>
            <div tabIndex={0} role="button" className="btn m-1 border border-white bg-[#ffffff38] w-[70px]">
              {entriesPerPage}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={() => handleEntriesChange(50)}>
                <a>50</a>
              </li>
              <li onClick={() => handleEntriesChange(100)}>
                <a>100</a>
              </li>
            </ul>
            <p className="ml-2 text-white">entries</p>
          </div>
        </div>
        <div className="rounded-[21px] p-3 border-2 border-[#4B4D55]">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <td className="py-2 w-[15%] rounded-tl-xl px-2 bg-gradient-to-r from-[#0F29C3] to-[#32BB98] text-white font-semibold text-base">
                    Country
                  </td>
                  <td className="py-2 w-[15%] px-2 bg-gradient-to-r from-[#0F29C3] to-[#32BB98] text-white font-semibold text-base">
                    Region
                  </td>
                  <td className="py-2 w-[15%] px-2 bg-gradient-to-r from-[#0F29C3] to-[#32BB98] text-white font-semibold text-base">
                    Rate
                  </td>
                  <td className="py-2 w-[20%] px-2 bg-gradient-to-r from-[#0F29C3] to-[#32BB98] text-white font-semibold text-base">
                    Rate type
                  </td>
                  <td className="py-2 w-[75%] rounded-tr-xl px-2 bg-gradient-to-r from-[#0F29C3] to-[#32BB98] text-white font-semibold text-base">
                    Description
                  </td>
                </tr>
              </thead>
              <tbody>
                {currentEntries.map((item, key) => (
                  <tr key={key} className="my-2 md:my-0 border-b border-[#4B4D55] md:border-none">
                    <td className="py-2 px-2 text-white text-base">
                      {item.country}
                    </td>
                    <td className="py-2 px-2 text-white text-base">
                      {item.region}
                    </td>
                    <td className="py-2 px-2 text-white text-base">
                      {item.rate}
                    </td>
                    <td className="py-2 px-2 text-white text-base">
                      {item.ratetype}
                    </td>
                    <td className="py-2 px-2 text-white text-base">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 rounded-2xl pagination-bar bg-[#252731] py-4 px-3 flex flex-col gap-3 md:flex-row justify-between items-center">
          <p className="text-white text-base">
            Showing {indexOfFirstEntry + 1} to{" "}
            {Math.min(indexOfLastEntry, data.length)} of {data.length} entries
          </p>
          <div className="btn-area flex justify-between items-center gap-3 max-w-[150px]">
            <button
              onClick={handlePrevious}
              className={`flex flex-row items-center justify-between gap-1 text-white ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
              disabled={currentPage === 1}
            >
              <FaAngleLeft /> Previous
            </button>
            <button
              onClick={handleNext}
              className={`flex flex-row items-center justify-between gap-1 text-white ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
              disabled={currentPage === totalPages}
            >
              Next <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
