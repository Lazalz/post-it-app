import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";
import { User } from "./components/user";
import { Parameters } from "./components/Parameters";
import { Dossier } from "./components/Dossier";
import { Acceuil } from "./components/Acceuil";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto p-4 md:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/user" element={<User />} />
          <Route path="/parameters" element={<Parameters />} />
          <Route path="/dossier" element={<Dossier />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
