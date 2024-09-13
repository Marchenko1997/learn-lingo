import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Container from "./components/Container/Container";

const HomePage = lazy(() => import("./pages/Home"));
const TeacherPage = lazy(() => import("./pages/Teachers"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));
const FavoritePage = lazy(() => import("./pages/Favorites"));

function App() {
  return (
    <Container>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Layout>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/teachers" element={<TeacherPage />} />
            </Routes>
          </main>
        </Layout>
      </Suspense>
    </Container>
  );
}

export default App;
