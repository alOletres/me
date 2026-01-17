import "./App.css";
import { Route, Routes } from "react-router";
import { RootLayout } from "./routes/+layout";
import { NotFound } from "./routes/notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* "/" */}
        {/* <Route index element={<Home />} /> */}
        {/* "/about" */}
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Route>
    </Routes>
  );
}

export default App;
