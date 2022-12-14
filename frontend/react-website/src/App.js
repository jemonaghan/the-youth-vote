import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Vote from "./pages/Vote";
import Results from "./pages/Results";
import SignUp from "./pages/SignUp"
import NoPage from "./pages/NoPage";
import LearnMore from "./pages/Learn";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vote" element={<Vote />} />
          <Route path="results" element={<Results />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="learn-more" element={<LearnMore />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

