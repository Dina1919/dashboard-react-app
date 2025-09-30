import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import BreadCrumb from "../../components/BreadCrumb";

function Home() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <div className="h-12 border-b border-b-[#E8E8E8] flex items-center p-12">
            <BreadCrumb />
          </div>
          <main className="flex-1 overflow-y-auto p-4 c bg-[#E8E8E8]">
            <div className="flex bg-white h-screen rounded-lg">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
