import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesSection from "./pages/ServicesSection";
import AllCardView from "./pages/AllCardView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServicesSection />} />
        <Route path="/cards" element={<AllCardView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
