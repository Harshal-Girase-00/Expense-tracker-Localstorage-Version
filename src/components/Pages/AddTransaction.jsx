import TransactionContext from "../../context/TransactionContext";
import { useContext,useState } from "react";

const AddTransaction = () => {
 
  const {addTransaction} = useContext(TransactionContext);
  const [date,setDate] = useState("");
  const [description,setDescription] = useState("");
  const [amount,setAmount] = useState("");
  const [category,setCategory] = useState("Select Your Option");
  const [method,setMethod] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const newTxt = {
      id: Date.now() + Math.random(),
      date,
      description,
      amount,
      category,
      method
    }

    addTransaction(newTxt);
    setDate("");
    setDescription("");
    setAmount("");
    setCategory("");
    setMethod("");

    alert("Transaction added.")
  }
  return (
    <div className="px-6  sm:px-16  h-[calc(100vh-64px-80px)] bg-gradient-to-r from-blue-200 to-green-200 ">
      <h1 className="text-3xl text-center md:text-left text-slate-800 font-bold pt-10">
        Add Transaction
      </h1>
      <form  onSubmit={handleAdd}  className=" h-auto bg-white  shadow-xl rounded-3xl min-h-96 mt-6  pb-10 ">
        <div className="sm:flex md:flex-row gap-6 px-8 pt-8">
          <div className="sm:w-1/3">
            <label
              htmlFor="date"
              className="w-full font-semibold text-slate-600 block mb-2"
            >
              Date
            </label> 
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full  mb-4 sm:mb-0 p-2 border-2 border-gray-300  rounded-xl"
            required/>
          </div>
          <div className="w-full">
            <label
              htmlFor="Description"
              className="w-full  font-semibold text-slate-600 block mb-2"
            >
              Description
            </label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full  border-2 mb-3 sm:mb-0 border-gray-300  rounded-xl"
             required />
          </div>
        </div>

        <div className="sm:flex md:flex-row gap-6 px-8 sm:p-8">
          <div className="sm:w-1/3">
            <label
              htmlFor="amount"
              className="w-full font-semibold text-slate-600 block mb-2"
            >
              Amount
            </label>
            <div className="w-full flex gap-2  overflow-hidden items-center border-2 border-gray-300  rounded-xl">
              <div className=" bg-gray-300 px-4 pt-2 pb-1 text-lg  text-slate-400 font-bold rounded-l-lg">
                $
              </div>
              <input type="number" value={amount}
              onChange={(e) => setAmount(e.target.value)} className="md:w-full  mb-4 sm:mb-0 outline-none"  required/>
            </div>
          </div>
          <div className="sm:flex flex-col sm:flex-row w-full gap-6">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="Category"
                className="w-1/2 font-semibold text-slate-600  block mt-4 sm:mt-0 mb-2"
              >
                Category
              </label>

              <select required value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border-2 border-gray-300  rounded-xl mb-4 sm:mb-0">
                 <option value="" className="hidden">Select your Option</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            <div className="w-full sm:w-1/2 ">
              <label
                htmlFor="method"
                className="w-full  font-semibold text-slate-600 block mb-2"
              >
                Method
              </label>
              <select required value={method}
              onChange={(e) => setMethod(e.target.value)} className="w-full p-2 border-2 border-gray-300  rounded-xl mb-6 sm:mb-0">
                <option value="" className="hidden">Select your Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Upi">Upi</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-10 sm:mb-0 flex gap-4 md:w-1/3 px-8">
          <button type="submit" className="rounded-xl bg-[#216b21] py-2 px-4  text-white font-semibold">
            Save Transaction
          </button>
          <button className="rounded-xl bg-[#bebdbd] py-2 px-4 text-slate-600 font-semibold">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
