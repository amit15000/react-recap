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



# Selector
```
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});
```


# Map and filter
```
{todos
  .filter(todo => todo.category === "Gym") // Filter todos where category is "Gym"
  .map((todo, index) => ( // Map over filtered todos
    <div key={index}>
      <p>Title: {todo.title}</p>
      <p>Category: {todo.category}</p>
      <p>Description: {todo.desc}</p>
    </div>
  ))}

```


# Filter Using Selector 
```
export const filteredItem = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(TodoAtom);
    const filter = get(todoFilter);
    return todos.filter((todo) => todo.category === filter);
  },
});
```


$$ Import filtered Items $$
```
const selectedTodos = useRecoilValue(filteredItem);
return (
  <>     {todos.map((todo, index) => (
        <div key={index}>
          <p>Title :{todo.title}</p>
          <p>category :{todo.category}</p>
        </div>
      ))}
      <div>Filtered Categories</div>
      {selectedTodos.map((todo, index) => (
        <div key={index}>
          <p>Title : {todo.title}</p>
        </div>
      ))}
  </>
)
```