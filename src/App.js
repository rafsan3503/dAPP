import "./App.css";
import background from "./assets/BearCaveBackground_Website.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrencyConverter from "./components/CurrencyConverter";

const homeStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: "100%",
};

function App() {
  return (
    <div style={homeStyle} className="min-h-screen">
      <CurrencyConverter />
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
}

export default App;
