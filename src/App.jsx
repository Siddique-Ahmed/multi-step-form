import { BrowserRouter, Route, Routes } from "react-router-dom";
import BudgetPage from "./assets/Pages/BudgetPage";
import DetailPage from "./assets/Pages/DetailPage";
import SubmitedPage from "./assets/Pages/SubmitedPage";
import Header from "./assets/components/Header";

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<BudgetPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/submit" element={<SubmitedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
