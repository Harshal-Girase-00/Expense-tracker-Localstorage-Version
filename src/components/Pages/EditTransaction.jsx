import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import TransactionContext from "../../context/TransactionContext";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getUserTransaction, editTxt } = useContext(TransactionContext);

  const allUserTransactions = getUserTransaction();
  const selected = allUserTransactions.find((t) => t.id == id);

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState("");

  
  useEffect(() => {
    if (selected) {
      setDate(selected.date);
      setDescription(selected.description);
      setAmount(selected.amount);
      setCategory(selected.category);
      setMethod(selected.method);
    }
  }, [selected]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedFields = {
      date,
      description,
      amount,
      category,
      method,
    };

    editTxt(Number(id), updatedFields);

    navigate("/view-transactions");
  };

  if (!selected) {
    return <h1 className="text-center p-10 text-2xl text-red-600">Transaction Not Found</h1>;
  }

  return (
    <div className="sm:px-16 h-[calc(100vh-64px-80px)] bg-gradient-to-r from-blue-200 to-green-200">
      <h1 className="text-3xl text-center md:text-left text-slate-800 font-bold pt-10">
        Edit Transaction
      </h1>

      <div className="h-auto bg-white shadow-xl rounded-3xl min-h-96 mt-6 pb-10">
        <div className="flex md:flex-row gap-6 px-8 pt-8">
          <div className="w-1/3">
            <label className="w-full font-semibold text-slate-600 block mb-2">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-xl"
            />
          </div>

          <div className="w-full">
            <label className="w-full font-semibold text-slate-600 block mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-xl"
            ></textarea>
          </div>
        </div>

        <div className="flex md:flex-row gap-6 p-8">
          <div className="w-1/3">
            <label className="w-full font-semibold text-slate-600 block mb-2">
              Amount
            </label>

            <div className="w-full flex gap-2 items-center border-2 border-gray-300 rounded-xl">
              <div className="bg-gray-300 px-4 pt-2 pb-1 text-lg text-slate-400 font-bold rounded-l-lg">
                $
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="md:w-full outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-6">
            <div className="w-full sm:w-1/2">
              <label className="font-semibold text-slate-600 block mb-2">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border-2 border-gray-300 rounded-xl"
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            <div className="w-full sm:w-1/2">
              <label className="font-semibold text-slate-600 block mb-2">
                Method
              </label>

              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full p-2 border-2 border-gray-300 rounded-xl"
              >
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Upi">Upi</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-4 md:w-1/3 px-8">
          <button
            onClick={handleUpdate}
            className="rounded-xl bg-blue-700 py-2 px-4 text-white font-semibold"
          >
            Update Transaction
          </button>

          <button
            onClick={() => navigate("/view-transactions")}
            className="rounded-xl bg-[#bebdbd] py-2 px-4 text-slate-600 font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTransaction;
