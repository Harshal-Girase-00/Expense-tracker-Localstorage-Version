import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";
const Home = () => {
  const { user } = useContext(UserContext);
  const { getUserLastThreeTxt } = useContext(TransactionContext);
  const lastThree = getUserLastThreeTxt() || [];

  return (
    <>
      {!user ? (
        <>
          <div
            className="flex items-center bg-gradient-to-r from-[#E0F2FE] to-[#DCFCE7]
 w-full h-96"
          >
            <div className="lg:w-[25%] flex justify-center">
              <img src="/images/image1.png" className="lg:w-[70%]" alt="info" />
            </div>
            <div className="lg:w-[40%] flex justify-center">
              <img src="/images/image2.png" className="lg:w-96" alt="info" />
            </div>
            <div className="lg:w-[30%]">
              <h1 className="text-[#0F172A] text-5xl mb-2">
                Track Your <br />
                Expenses Easily
              </h1>
              <p className="text-md font-semibold mb-2">
                Gain control over your finances with intuitive tools and
                insightful reports
              </p>
              <button className="h-[52px] px-8 bg-[#5680db] text-white border rounded-xl mr-4">
                <Link to="/register">Register</Link>
              </button>
              <button className="h-[52px] px-8 bg-transferent text-[#5680db]  border border-[#1E293B] rounded-xl">
                <Link to="/about">Learn more</Link>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center lg:px-[18%] pt-4 pb-4 bg-slate-100">
            <img
              src="/images/image3.png"
              className="lg:w-[85%] justify-center "
              alt="main image"
            />
          </div>
          {""}
        </>
      ) : (
        <>
          <div
            className="flex flex-col  bg-gradient-to-r from-[#E0F2FE] to-[#DCFCE7]
 w-full pt-6 px-24 pb-16 h-auto font-sans"
          >
            <h1 className="pl-2 text-[2rem] text-[#0F172A] font-bold">
              Dashboard
            </h1>

            <div className="px-2 flex flex-col gap-6 md:flex-row w-full lg:gap-20 mt-6 justify-between">
              <div className="flex items-center w-full lg:w-[340px] bg-white h-36 pt-6 lg:py-6 rounded-3xl shadow-lg">
                <div className="ml-6 p-2 flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  <img src="/images/income.png" className="w-10" alt="income" />
                </div>
                <div className="ml-4 h-full">
                  <p className="text-lg text-slate-800 font-medium p-0">
                    Total Income
                  </p>
                  <p className="text-4xl text-black font-bold p-0">$12,500</p>
                  <p className="text-sm text-[#64748B] font-medium mt-1">
                    This month
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full lg:w-[340px] bg-white h-36 py-6 rounded-3xl shadow-lg">
                <div className="ml-6 p-2 flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                  <img
                    src="/images/expense.png"
                    className="w-10"
                    alt="income"
                  />
                </div>
                <div className="flex flex-col  ml-4 h-full">
                  <p className="text-lg text-slate-800 font-medium p-0">
                    Total Expense
                  </p>
                  <p className="text-4xl text-black font-bold p-0">$12,500</p>
                  <p className="text-sm text-[#64748B] font-medium mt-1">
                    This month
                  </p>
                </div>
              </div>

              <div className="flex items-center w-full lg:w-[340px]  bg-white h-36 py-6 rounded-3xl shadow-lg">
                <div className="ml-6 p-2 flex items-center justify-center ">
                  <img
                    src="/images/remaning.png"
                    className=" w-16 h-16 rounded-full"
                    alt="income"
                  />
                </div>
                <div className="ml-4 h-full">
                  <p className="text-lg text-slate-800 font-medium p-0">
                    Remaining Balance
                  </p>
                  <p className="text-4xl text-black font-bold p-0">$8,500</p>
                  <p className="text-sm text-[#64748B] font-medium mt-1">
                    Available
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col pb-28 lg:pb-0 lg:flex-row justify-between  items-center bg-gradient-to-r from-blue-50 to-green-200 min-h-96 px-24">
            <img
              src="/images/graph.png"
              className="w-full mb-6 md:m-0 md:w-[65%] h-72"
              alt="grap"
            />
            <table className="w-full bg-white shadow-lg rounded-lg sm:h-[250px] md:w-[70%] lg:w-[25%]">
              <thead>
                <tr>
                  <th className="text-2xl p-4 border-b text-left">
                    Recent Transactions
                  </th>
                </tr>
              </thead>

              <tbody>
                {lastThree.length === 0 ? (
                  <tr>
                    <td className="p-4 text-center text-gray-500">
                      No recent transactions
                    </td>
                  </tr>
                ) : (
                  lastThree.map((txt, idx) => {
                    const isIncome = txt.category === "Income";
                    const sign = isIncome ? "+" : "-";
                    const amountFormatted = Number(
                      txt.amount ?? 0
                    ).toLocaleString();
                    const dateStr = txt.date
                      ? new Date(txt.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "—";

                    return (
                      <tr key={idx}>
                        <td className="flex justify-between items-center border-b p-3">
                          <div className="flex gap-4">
                            <img
                              src="/images/cash.png"
                              alt="img"
                              className="bg-green-100 rounded-full h-12 w-12"
                            />
                            <div>
                              <p className="text-lg font-semibold">
                                {txt.category}
                              </p>
                              <p className="text-sm text-gray-600">{dateStr}</p>
                            </div>
                          </div>

                          <p
                            className={`text-xl font-bold ${
                              isIncome ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            {sign}${amountFormatted}
                          </p>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
