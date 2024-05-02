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
