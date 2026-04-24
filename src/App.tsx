import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/auth/AuthPage";
import AuthLayout from "./layouts/MainLayouts/AuthLayout";
import MainLayout from "./layouts/MainLayouts/MainLayout";
import ProfilePage from "./pages/profile/ProfilePage";
import Profile from "./components/profile/Profile";
import SprintLayout from "./layouts/SprintLayout";
import HallLayout from "./layouts/HallLayout";
import AchivementsLayout from "./layouts/AchivementsLayout";
import StatisticLayout from "./layouts/StatisticLayout";
import HistoryLayout from "./layouts/HistoryLayout";
import SettingsLayout from "./layouts/SettingsLayout";

function App() {
  const isAuth = localStorage.getItem("token");
  return (
    <Routes>
      {/* Страница логина - без header/footer */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<AuthPage />} />
      </Route>

      {/* Страница профиля - с header и footer */}
      <Route element={<MainLayout />}>
        <Route path="/profile" element={<ProfilePage />}>
          {/* Индексный маршрут - будет показываться на /profile */}
          <Route index element={<Profile />} />
          <Route path="sprint" element={<SprintLayout />} />
          <Route path="hall" element={<HallLayout />} />
          <Route path="achivements" element={<AchivementsLayout />} />
          <Route path="statistic" element={<StatisticLayout />} />
          <Route path="history" element={<HistoryLayout />} />
          <Route path="settings" element={<SettingsLayout/>} />
        </Route>
      </Route>

      {/* Редирект с корня на логин */}
      <Route
        path="/"
        element={isAuth ? <Navigate to="/profile" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
