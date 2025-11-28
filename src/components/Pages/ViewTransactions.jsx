import { useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";
import {useNavigate} from "react-router-dom"

const ViewTransactions = () => {
  const { getPaginatedTransactions , deleteTransaction  } = useContext(TransactionContext);
  const [page, setPage] = useState(1);
  const limit = 5;
  const { total, data } = getPaginatedTransactions(page, limit);
  const totalPages = Math.ceil(total / limit);

  const navigate = useNavigate();

  return (
    <div className="sm:px-16 px-6 h-[calc(100vh-64px-80px)] bg-gradient-to-r from-blue-200 to-green-200">
      <h1 className="text-3xl text-center md:text-left text-slate-800 font-bold pt-10">
        View Transaction
      </h1>

      <div className="h-auto bg-white shadow-xl rounded-3xl min-h-96 mt-6 p-4 sm:p-6">
        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead className="bg-gradient-to-r from-blue-100 to-green-100 text-gray-900">
              <tr>
                <th className="p-4 font-bold text-left border">Date</th>
                <th className="p-4 font-bold text-left border">Description</th>
                <th className="p-4 font-bold text-left border">Category</th>
                <th className="p-4 font-bold text-left border">
                  Payment Method
                </th>
                <th className="p-4 font-bold text-left border">Amount</th>
                <th className="p-4 font-bold text-left border">Action</th>
              </tr>
            </thead>

            <tbody>
             {data.length === 0 ? (<tr>
      <td colSpan="6" className="text-center p-6 text-gray-600 font-semibold">
        No transactions added
      </td>
    </tr>) : data.map((txt, index) => {
                const isIncome = txt.category === "Income";
                const sign = isIncome ? "+" : "-";
                const dateStr = txt.date
                  ? new Date(txt.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "No date";
                return (
                  <tr  key={txt.id} className="border hover:bg-gray-50 transition">
                    <td className="p-4 font-semibold">{dateStr}</td>
                    <td className="p-4 font-semibold">{txt.description}</td>
                    <td className="p-4 font-semibold">{txt.category}</td>
                    <td className="p-4 font-semibold">Cash</td>
                    <td
                      className={`${
                        isIncome ? "text-green-700" : "text-red-600"
                      } p-4 font-semibold text-green-600`}
                    >
                      {sign}${txt.amount}
                    </td>
                    <td className="p-4">
                      <button  onClick={() => navigate(`/edit-transaction/${txt.id}`)} className="bg-blue-600 mr-3 px-2 py-1 rounded hover:bg-blue-800 text-white font-medium">
                        Edit
                      </button>
                      <button onClick={() => deleteTransaction(txt.id)} className="bg-red-500 px-2 py-1 hover:bg-red-800 rounded text-white font-medium">
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setPage(page - 1)}
            className={` ${page === 1  ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}
            } px-3 py-1 border rounded-lg bg-white hover:bg-gray-100 shadow-sm`}
             disabled={page === 1}
          >
            <span className="text-gray-600">&laquo;</span>
          </button>

          <button
            onClick={() => setPage(1)}
            className={` px-3 py-1 bg-blue-600 text-white rounded-lg shadow-sm`}
          >
            1
          </button>

          <button
            onClick={() => setPage(2)}
            className={`${ totalPages < 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"} px-3 py-1 border rounded-lg bg-white hover:bg-gray-100 shadow-sm`}
              disabled={totalPages < 1}
          >
            2
          </button>

          <button
            onClick={() => setPage(3)}
            className={`${ totalPages < 2 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"} px-3 py-1 border rounded-lg bg-white hover:bg-gray-100 shadow-sm`}
           disabled={totalPages < 2}>
            3
          </button>

          <button
            onClick={() => setPage(page + 1)}
            className={`${page >= totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"} px-3 py-1 border rounded-lg bg-white hover:bg-gray-100 shadow-sm`}
           disabled={page >= totalPages}>
            <span className="text-gray-600">&raquo;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTransactions;
