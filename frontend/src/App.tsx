import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Titles } from "./components/Titles/Titles";
import { Footer } from "./components/UI/Footer";
import { Header } from "./components/UI/Header";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.jsx}></Route>
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
