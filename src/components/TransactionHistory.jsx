import React from "react";

const TransactionHistory = () => {
  return (
    <div>
      <header className="flex md:flex-row justify-between  md:items-center mb-7">
        <h2 className="text-2xl font-bold mt-[60px] md:mb-0">Transaction History</h2>
        <div className="text-gray-600 flex items-center ">
          <div className=" md:mb-14">
         <p className="font-semibold text-lg"> Hi, Username </p> 
          <p className="text-blue-500 font-semibold text-sm ml-2 ">Credits Left: 300</p>
          </div>
          <img
                src="/image7.png"
                alt="Profile"
                className="h-12 w-12 rounded-full ml-1 md:mb-14"
              />
        </div>
      </header>

      <table className="table-auto w-full bg-white shadow rounded-lg overflow-hidden">
        <thead>
          <tr className="text-left">
            <th className="w-16 text-center px-4 py-2">
              <input type="checkbox" className="h-5 w-5 text-blue-500" />
            </th>
            <th className="px-4 py-2">Invoice</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Credits</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, index) => (
            <tr key={index} className="border-t">
              <td className="w-16 text-center px-4 py-2">
                <input type="checkbox" className="h-5 w-5 text-blue-500" />
              </td>
              <td className="px-4 py-2">INV-01-09072010</td>
              <td className="px-4 py-2 flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full inline-block mr-2"></span>
                <span className="text-green-500">Completed</span>
              </td>
              <td className="px-4 py-2">1200</td>
              <td className="px-4 py-2">$240</td>
              <td className="px-4 py-2 text-gray-500">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
