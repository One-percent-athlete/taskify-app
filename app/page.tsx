import Image from "next/image";
import Sidebar from "./Components/SideBar";
import Dashboard from "./Components/Dashboard/Dashboard";

export default function Home() {
  return (
    <div className="poppins flex w-full h-screen">
      <Sidebar />
    </div>
  );
}
