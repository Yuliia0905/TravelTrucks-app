import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Features from "./components/Features/Features.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import AppBar from "./components/AppBar/AppBar.jsx";

import css from "./App.module.css";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage.jsx"));

function App() {
  return (
    <div className={css.container}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
