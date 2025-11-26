import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" flex items-center justify-center fixed bottom-0 left-0 w-full bg-[#0F172A] text-[#94A3B8] px-[3.6rem] h-16">
      <p>
        @ 2025 Expense Tracker For College Reactjs Project |{" "}
        <Link to="/contact">Contact</Link>{" "}
      </p>
    </div>
  );
};

export default Footer;
