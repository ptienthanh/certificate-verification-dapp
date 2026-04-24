import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import VerifyPage from "./pages/VerifyPage";
import CertificateDetailPage from "./pages/CertificateDetailPage";
import CreateCertificatePage from "./pages/CreateCertificatePage";
import UpdateCertificatePage from "./pages/UpdateCertificatePage";
import ActivityPage from "./pages/ActivityPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/certificate/:id" element={<CertificateDetailPage />} />
          <Route path="/create" element={<CreateCertificatePage />} />
          <Route path="/update" element={<UpdateCertificatePage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;