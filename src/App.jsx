import "./App.css";
import Header from "./components/Header/Header.jsx";
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <h1>Employee dashboard</h1>
          <EmployeeList />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
