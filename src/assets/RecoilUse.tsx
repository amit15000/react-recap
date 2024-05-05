import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";

function RecoilUse() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <div className="">This is value from Store of atom named CountAtom</div>
      <div>{count}</div>
    </div>
  );
}

export default RecoilUse;
