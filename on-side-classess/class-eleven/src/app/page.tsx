import Image from "next/image";
import ChildComponent from "./Components/ChildComponent";
import ParentComponent from "./Components/ParentComponen";
import ArrayMap from "./Components/ArrayMap";

export default function Home() {
  return (
    <div>
      
      <ParentComponent/>
      <ArrayMap/>
    </div>
  );
}
