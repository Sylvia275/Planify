import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignup from "./pages/LoginSignup.jsx";

import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import MyPlanPage from "./pages/MyPlanPage.jsx";
import SavedPage from "./pages/SavedPage";
import ExplorePage from "./pages/ExplorePage.jsx";
import PlanPage from "./pages/PlanPage";

// Thêm import này
import PlanDetailPage from "./pages/PlanDetailPage.jsx";

import Profile from "./pages/Profile.jsx";
import CreatePlan from "./pages/CreatePlan.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/plan" element={<MyPlanPage/>} />
          <Route path="/saved" element={<SavedPage/>} />
          <Route path="/commu" element={<ExplorePage />} />
          <Route path="/add" element={<CreatePlan />} />

          {/* Thêm dòng này - trang chi tiết kế hoạch */}
          <Route path="/plans/:id" element={<PlanDetailPage />} />

          {/* Có thể thêm Profile nếu muốn dùng layout chung */}
          {/* <Route path="/profile" element={<Profile />} /> */}

          {/* Add more pages here */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;