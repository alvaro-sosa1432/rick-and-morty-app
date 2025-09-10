import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { CharacterDetail } from "../pages/CharacterDetail";
import { CharacterList } from "../pages/CharacterList";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/characterlist" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
