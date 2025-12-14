import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div>
      <Header />

      <LeftSidebar />

      {/* CONTENT SHOULD START UNDER HEADER AND SIDE BAR */}
      <main
        style={{
          marginLeft: "70px", // sidebar width collapsed
          marginTop: "70px",  // header height
          padding: "20px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
