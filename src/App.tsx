import { Routes, Route, Outlet } from "react-router-dom";

import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";
import Bag from "./pages/Bag";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="sacola" element={<Bag />} />
          <Route path="confirmacao" element={<Confirmation />} />
          <Route path="pagamento" element={<Payment />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
