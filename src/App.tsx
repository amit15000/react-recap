import { useEffect, useState } from "react";
import "./App.css";

interface BankData {
  income: number;
}

interface ExchangeData {
  returns: number;
}
interface CountInterface {
  counting: number;
}

function App() {
  const [bankData, setBankData] = useState<BankData>({ income: 0 });
  const [exchangeData, setExchangeData] = useState<ExchangeData>({
    returns: 0,
  });
  const [count, setCount] = useState<CountInterface>({ counting: 0 });

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({ returns: 100 });
    }, 3000);
  }, []);

  const incomeTax: number = bankData.income + exchangeData.returns;

  return <></>;
}

export default App;
