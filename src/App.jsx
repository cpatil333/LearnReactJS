import "./App.css";
import Employees from "./EmployeeSystem/components/Employees/Employees";
import Footer from "./EmployeeSystem/components/footer/Footer";
import Navbar from "./EmployeeSystem/components/navbar/Navbar";
import EmployeePopup from "./EmployeeSystem/components/EmployeePopup/EmployeePopup";
import DeletePopup from "./EmployeeSystem/components/deletePopup/deletePopup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getEmployees } from "./EmployeeSystem/store/features/employee/employee.thunk";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <EmployeePopup />
      <DeletePopup />
      <Navbar />
      <div className="flex-1 py-10">
        <Employees />
      </div>
      <Footer />
    </div>
  );
}

export default App;
