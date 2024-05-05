import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function UpdateState({ children }: { children: any }) {
  //   return <b>{children}</b>;

  const setCountState = useSetRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => setCountState((prev) => prev - 1)}>
        Decrease Value
      </button>
      {children}
      <button onClick={() => setCountState((prev) => prev + 1)}>
        Increase Value
      </button>
    </div>
  );
}

export default UpdateState;
