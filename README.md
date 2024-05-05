interface CountInterface {
  counting: number;
} 

# useState 
const [count, setCount] = useState<CountInterface>({ counting: 0 });

# useEffect

```
useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);
```

# useMemo
cryptoReturn will be caluculated when any element of dependency array chages
```
 const cryptoReturn = useMemo(() => {
    console.log("hi there");
    return exchangeData1.returns + exchangeData2.returns;
  }, [exchangeData1, exchangeData2]);
```
# useCallback and memo --- > to memorize a function

```
  const cryptoCalculator = useCallback(
    function () {
      return exchangeData1.returns + exchangeData2.returns;
    },
    [exchangeData1, exchangeData2]
  );

```
$$ Child component will not render -- if the paramemtors not change $$
```
  return (
    <>
      {/* <div>Income Tax ammount : {incomeTax}</div> */}

      <CryptoGainCalculator
        cryptoCalculator={cryptoCalculator}
      ></CryptoGainCalculator>
    </>
  );
```

```
const CryptoGainCalculator = memo(function ({
  cryptoCalculator,
}: {
  cryptoCalculator: () => number;
}) {
  console.log("Child re-render");
  return <div>Your crypto gain is {cryptoCalculator()}</div>;
});
```

```
# React Lazy Loading

--- export component as  default

like -> 

export default function f_name(){
  ----
}


-->import it as

const CmpName = React.lazy(()=> import('./components/compName'))

---> use component in return of App.tsx like->
return (
  <>
  <Route path="/path_to_component" element={<Suspense fallback={"loading..."}><CmpName/><Suspense/>}/>
)

# Suspense API 
$$ Used to fetch asynchronus component, asynchronus data fetching$$

# Context API

```
$$ Create a context $$

```
import { createContext } from "react";

export const countContext = createContext<number>(0);
```
$$ Use the context $$

$ wrap the component with Provider and pass context variable in value as props $

```
      <countContext.Provider value={count}>
        <ContextUse count={count}></ContextUse>
      </countContext.Provider>
```

$$ The componet uses passed vp $$

```
const ContextUse = ({ count }: { cou  nt: number }) => {
  return <div>{count}</div>;
};
```