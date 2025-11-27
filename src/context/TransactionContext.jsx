import { createContext, useState, useEffect, useRef } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [alltxt, setAllTxt] = useState({});

  const allTransactions = () => {
    let data = JSON.parse(localStorage.getItem("transactions"));

    if (!data) {
      localStorage.setItem("transactions", JSON.stringify({}));
      return {};
    }
    return data;
  };

  useEffect(() => {
    const stored = allTransactions();
    setAllTxt(stored);
  }, []);

  useEffect(() => {
    if (Object.keys(alltxt).length === 0) return;
    localStorage.setItem("transactions", JSON.stringify(alltxt));
  }, [alltxt]);

  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const addTransaction = (txt) => {
    if (!currentUser) return;

    const stored = allTransactions();

    let userTxt = stored[currentUser];

    if (!userTxt) {
      userTxt = [];
    }

    const updatedAll = {
      ...stored,
      [currentUser]: [...userTxt, txt],
    };

    setAllTxt(updatedAll);
  };

  const getUserTransaction = () => {
    let allTxt = alltxt[currentUser] || [];

    return [...allTxt].reverse();
  };

  const getUserLastThreeTxt = () => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser) return;
    
    const stored = allTransactions();
    
    let allTxt = stored[currentUser] || [];
    const lastThreeTxt = allTxt.slice(-3).reverse();
    return lastThreeTxt;
  };

  const getPaginatedTransactions = (page = 1, limit = 5) => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const userTxt = alltxt[currentUser] || [];

    const reversed = [...userTxt].reverse();

    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      total: reversed.length,
      data: reversed.slice(start, end),
    };
  };

  const deleteTransaction = (id) => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser) return;

    const stored = allTransactions();
    const userArr = stored[currentUser] || [];

    const updatedUserArr = userArr.filter((t) => t.id !== id);

    const updatedAll = {
      ...stored,
      [currentUser]: updatedUserArr,
    };

    setAllTxt(updatedAll);
  };

  const editTxt = (id, updatedFields) => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser) return;

    const stored = allTransactions();
    const userArr = stored[currentUser] || [];

    const updatedArr = userArr.map((t) =>
      t.id === id ? { ...t, ...updatedFields } : t
    );

    const updatedAll = {
      ...stored,
      [currentUser]: updatedArr,
    };

    setAllTxt(updatedAll);
  };

  const getUserMonthlyIncome = () => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser) return 0;

    const userTxt = alltxt[currentUser] || [];

    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    return userTxt
      .filter((t) => {
        const d = new Date(t.date);
        return (
          t.category === "Income" &&
          d.getMonth() === month &&
          d.getFullYear() === year
        );
      })
      .reduce((sum, t) => sum + Number(t.amount), 0);
  };

  const getUserMonthlyExpense = () => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser) return 0;

    const userTxt = alltxt[currentUser] || [];

    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    return userTxt
      .filter((t) => {
        const d = new Date(t.date);
        return (
          t.category === "Expense" &&
          d.getMonth() === month &&
          d.getFullYear() === year
        );
      })
      .reduce((sum, t) => sum + Number(t.amount), 0);
  };

  const getUserRemaningAmount = () => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser) return 0;

    const userTxt = alltxt[currentUser] || [];

    const userIncome = Number(
      userTxt
        .filter((t) => t.category === "Income")
        .reduce((sum, t) => sum + Number(t.amount), 0)
    );
    const userExpense = Number(
      userTxt
        .filter((t) => t.category === "Expense")
        .reduce((sum, t) => sum + Number(t.amount), 0)
    );

    return userIncome - userExpense;
  };

  return (
    <TransactionContext.Provider
      value={{
        allTransactions,
        getUserTransaction,
        addTransaction,
        getUserLastThreeTxt,
        getPaginatedTransactions,
        deleteTransaction,
        editTxt,
        getUserMonthlyIncome,
        getUserMonthlyExpense,
        getUserRemaningAmount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
