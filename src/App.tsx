import {
  memo,
  ReactElement,
  ReactNode,
  ReactPortal,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./App.css";
import { countContext } from "./contex";
import RecoilUse from "./assets/RecoilUse";
import { RecoilRoot } from "recoil";
import Todo from "./assets/Todo";
let i = 0;
interface BankData {
  income: number;
}

interface ExchangeData {
  returns: number;
}
// interface CountInterface {
//   counting: number;
// }
// const [count, setCount] = useState<CountInterface>({ counting: 0 });

function App() {
  // const count: number = useContext(countContext);

  const [bankData, setBankData] = useState<BankData>({ income: 0 });
  const [exchangeData1, setExchangeData1] = useState<ExchangeData>({
    returns: 0,
  });
  const [exchangeData2, setExchangeData2] = useState<ExchangeData>({
    returns: 0,
  });

  console.log("Render", i++);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData1({ returns: 100 });
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData2({ returns: 200 });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 5000);
  }, []);
  // const cryptoReturn = useMemo(() => {
  //   console.log("hi there");
  //   return exchangeData1.returns + exchangeData2.returns;
  // }, [exchangeData1, exchangeData2]);

  // const incomeTax = cryptoReturn + bankData.income * 0.3;

  const cryptoCalculator = useCallback(
    function () {
      return exchangeData1.returns + exchangeData2.returns;
    },
    [exchangeData1, exchangeData2]
  );

  const twoDPosi = useContext(countContext);

  return (
    <>
      {/* <div>Income Tax ammount : {incomeTax}</div> */}

      {/* <CryptoGainCalculator
        cryptoCalculator={cryptoCalculator}
      ></CryptoGainCalculator>

      <countContext.Provider value={twoDPosi}>
        <ContextUse />
      </countContext.Provider>

      <RecoilRoot>
        <RecoilUse></RecoilUse>
      </RecoilRoot> */}
      <RecoilRoot>
        <Todo></Todo>
      </RecoilRoot>
    </>
  );
}

const ContextUse = () => {
  const { x, y } = useContext(countContext);

  return (
    <div>
      <div>Use of Context API</div>
      <div>{x + y}</div>
    </div>
  );
};

const CryptoGainCalculator = memo(function ({
  cryptoCalculator,
}: {
  cryptoCalculator: () => number;
}) {
  console.log("Child re-render");
  return <div>Your crypto gain is {cryptoCalculator()}</div>;
});

export default App;
