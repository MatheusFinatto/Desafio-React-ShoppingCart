import { Routes, Route, Outlet } from "react-router-dom";

import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";
import Bag from "./pages/Bag";
import Summary from "./components/Summary";
import { useEffect, useState } from "react";
import { ICart } from "./interfaces/Item";

function App() {
  const [data, setData] = useState<ICart>({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0,
    items: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async (): Promise<void> => {
    setIsLoading(true);
    const res = await fetch(
      "https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd"
    );
    const data = await res.json();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            path="sacola"
            element={<Bag data={data} loading={isLoading} />}
          />
          <Route path="confirmacao" element={<Confirmation />} />
          <Route path="pagamento" element={<Payment />} />
        </Route>
      </Routes>
      <Outlet />
      <Summary data={data} loading={isLoading} />
    </div>
  );
}

export default App;
