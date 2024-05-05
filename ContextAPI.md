
# Create Context

```

import { createContext, useContext } from "react";

export const countContext = createContext({
  x: 0,
  y: 15,
});
```

# ParentComponent retrieves the context value using useContext(countContext) and provides it to the context provider.
```
const ParentComponent = () => {
  const twoDPosi = useContext(countContext);

  return (
    <countContext.Provider value={twoDPosi}>
      <ContextUse />
    </countContext.Provider>
  );
};
```


$$ ContextUse component then retrieves x and y from the context using useContext(countContext) and renders their sum. $$
```
const ContextUse = () => {
  const { x, y } = useContext(countContext);

  return <div>{x + y}</div>;
};
```