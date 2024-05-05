import { useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";
import UpdateState from "./UpdateState";

function RecoilUse() {
  const onlyValue = useRecoilValue(countAtom);
  return (
    <div>
      <div className="">This is value from Store of atom named CountAtom</div>
      <UpdateState>
        <div>{onlyValue}</div>
      </UpdateState>
      {!useRecoilValue(evenSelector) && <div>It is even</div>}
    </div>
  );
}

export default RecoilUse;
