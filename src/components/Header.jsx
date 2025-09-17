import {
  Menu,
  X,
  Home,
  Star,
  Calendar,
  Archive,
  Trash2,
  Settings,
  Plus,
  Folder,
} from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Timeline } from "./Timeline";

const Header = () => {
  const location = useLocation();
  const navItems = [
    { icon: Star, label: "Favoris", path: "/favoris" },
    { icon: Folder, label: "Dossier", path: "/dossier" },
  ];

  return (
    <div className="text-lg">
      <div className="container mx-auto">
        {/* Barre de navigation supérieure */}
        <div className="flex items-center justify-between p-4">
          {/* Logo et bouton menu mobile */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              Post-it
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <label
              htmlFor="drawer-toggle"
              className="btn btn-ghost btn-circle "
            >
              <Menu className="w-5 h-5" />
            </label>
          </div>
        </div>
      </div>

      {/* Menu latéral */}
      <div className="drawer drawer-end text-white">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side z-30">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
          <div className="menu p-4 w-60 min-h-full bg-base-100 text-base-content border-r border-base-200">
            {/* en-tête menu latéral */}
            <div className=" flex justify-between items-center gap-2 mb-8 p-2">
												<div>
                <Link to="/">
                  <button
                    className="btn btn-ghost btn-sm w-full justify-start"
                    onClick={() => {
                      document.getElementById("drawer-toggle").checked = false;
                    }}
                  >
                    <Home className="" />
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">Menu</h2>
              </div>
             
            </div>
            {/* Profil utilisateur */}
            <div className="mb-8 p-4 bg-base-200 rounded-xl">
              <Link
                to="/user"
                onClick={() =>
                  (document.getElementById("drawer-toggle").checked = false)
                }
              >
                <button className="flex items-center  gap-3 mb-4">
                  <div className="avatar">
                    <div className="w-12 rounded py-1 bg-primary text-primary-content flex items-center justify-center">
                      <span className="text-2xl font-bold flex items-center justify-center">
                        L
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">User.name</h3>
                    <p className="text-xs opacity-40">Utilisateur</p>
                  </div>
                </button>
              </Link>
              <Link
                to="/parameter"
                onClick={() =>
                  (document.getElementById("drawer-toggle").checked = false)
                }
              >
                <button className="btn btn-ghost btn-sm w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </button>
              </Link>
            </div>{" "}
            {/* fin du profil utilisateur */}
            {/* Timeline */}
            <div className="card">
              <Timeline />
            </div>
            {/* Section corbeille */}
            <div className="mt-auto pt-4 border-t border-base-200">
              {/* Navigation */}
              <ul className="menu w-full p-0">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`${
                        location.pathname === item.path ? "active" : ""
                      } w-full`}
                      onClick={() => {
                        document.getElementById(
                          "drawer-toggle"
                        ).checked = false;
                      }}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/corbeille"
                className="flex items-center gap-3 p-3 text-error rounded-lg hover:bg-error/10"
                onClick={() => {
                  document.getElementById("drawer-toggle").checked = false;
                }}
              >
                <Trash2 className="w-5 h-5" />
                Corbeille
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
