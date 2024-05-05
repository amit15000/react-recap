import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";
import UpdateState from "./UpdateState";

function RecoilUse() {
  const onlyValue = useRecoilValue(countAtom);
  return (
    <div>
      <div className="">This is value from Store of atom named CountAtom</div>
      <UpdateState>
        <div>{onlyValue}</div>
      </UpdateState>
    </div>
  );
}

export default RecoilUse;
