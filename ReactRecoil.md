# Create Recoil
```
import { atom } from "recoil";

export const countAtom = atom({
  key: "countKey",
  default: 0,
});

```

# 

```
      <RecoilRoot>
        <RecoilUse></RecoilUse>            // This is component which is using the recoil 
      </RecoilRoot>
```


# get count


```
function RecoilUse() {
  const onlyValue = useRecoilValue(countAtom);
        return <div>{onlyValue}</div>
}


```

# setState
```
  const setCountState = useSetRecoilState(countAtom);
```