import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PostIts from "./components/PostIts";
import { Corbeille } from "./components/Corbeille";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import { User } from "./components/user";
import { Parameters } from "./components/Parameters";
import { useState } from "react";
import { Folder, Plus } from "lucide-react";
import { Dossier } from "./components/Dossier";

const App = () => {
  // Exemple de données pour les post-its
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "undefined",
      content: "Acheter du pain",
      color: "bg-yellow-200",
    },
    {
      id: 2,
      title: "hello test",
      content: "hello post",
      color: "bg-green-200",
    },
  ]);

  function handleAddPost(post) {
    setPosts([...posts, post]);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto p-4 md:p-6 lg:p-8">
        <Routes>
          <Route
            path="/"
            element={
              /* les postits en grid */
              <div className="grid grid-cols-1 mx-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 text-black">
                {posts.map((post) => (
                  <PostIts
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    color={post.color}
                  />
                ))}

                {/* bouton + pour ajouter un postit */}
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded transition-colors">
                  <ErrorBoundary
                    fallback={
                      <p className="text-red-500">Une erreur est survenue</p>
                    }
                  >
                    <AddPost />
                  </ErrorBoundary>
                </div>
              </div>
            }
          />
          <Route path="/user" element={<User />} />
          <Route path="/parameter" element={<Parameters />} />
          <Route path="/dossier" element={<Dossier />} />
          <Route path="/corbeille" element={<Corbeille />} />
        </Routes>
      </main>
    </div>
  );
};

/* Le composant pour ajouter un postit */
function AddPost() {
  const [openParameters, setOpenParameters] = useState(false);

  return (
    <div>
      {/* bouton + pour afficher le dialogue */}
      <div>
        <button
          className="btn w-15 h-15 shadow-accent-content btn-warning rounded-full"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <span className="text-4xl">+</span>
        </button>
      </div>

      {/* contenu du dialogue */}
      <div>
        <dialog id="my_modal_1" className="modal text-white">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Nouvelle note</h3>
            {/* fonctionnalité pour le plus de paramètres */}
            <button
              className="text-blue-400 cursor-pointer mt-4 mb-1 "
              onClick={() => setOpenParameters(!openParameters)}
            >
              Plus de paramètres ...
            </button>

            {/* dans le plus de paramètres */}
            {openParameters && <PlusParams />}
            <p className="mt-2 ">Entrer votre note</p>
            <textarea
              className="textarea my-3 textarea-ghost border rounded text-base border-gray-300 h-24 w-full"
              placeholder="Écrivez votre note ici..."
              required
            ></textarea>
            <div className="modal-action ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn mr-2">Close</button>
                <button type="submit" className="btn btn-neutral">
                  Ajouter
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

function PlusParams() {
  const [openFolder, setOpenFolder] = useState(false);
  const [folders, setFolders] = useState([]);
  const handleAddFolder = (folderName) => {
    setFolders([...folders, folderName]);
  };

  const handleOpenFolder = () => {
    setOpenFolder(!openFolder);
  };

  const folderData = {
    handleAddFolder,
  };
  return (
    <div className="text-sm">
      <p className="opacity-50">Placer le note dans un dossier : </p>
      {/* bouton pour séléctionner les dossiers */}
      <div>
        <ErrorBoundary
          fallback={
            <i className="text-red-500">
              Impossible d'afficher les dossiers éxistants
            </i>
          }
        >
          <DossierExistant folders={folders} />
        </ErrorBoundary>
      </div>
      <div className="my-1 flex items-center gap-1 ">
        <button
          className="btn rounded-full flex items-center"
          onClick={handleOpenFolder}
        >
          <Plus className="w-3 h-3" />
        </button>
        {openFolder && <AddForlder onAddFolder={handleAddFolder} />}{" "}
        {/* le folderName ici c'est un paramètre donc on peut lui attribuer un nom arbitraire mais pour la clarté on va le laisser comme ça  */}
      </div>
    </div>
  );
}

function AddForlder({ onAddFolder }) {
  const [folderName, setFolderName] = useState("");

  /* fonction pour récupérer le nom insérer pour le nouveau dossier */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (folderName.trim()) {
      // `.trim()` est une méthode JavaScript pour les chaînes de caractères. Elle supprime les espaces blancs (espaces, tabulations, retours à la ligne) du début et de la fin d'une chaîne. Elle renvoie une nouvelle chaîne sans modifier l'originale.
      console.log(folderName);
      onAddFolder(folderName);
      setFolderName("");
    }
    console.log("formulaire envoyé");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 my-2 ">
          <input
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="Nouveau dossier"
            className="input border w-full border-gray-300 input-ghost"
          />
          <button type="submit" className="btn">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

function DossierExistant({ folders }) {
  return (
    /* afficher toutes les dossiers existants */
    <div>
      <div className="flex items-center mt-2 overflow-x-auto overflow-y-hidden">
        {folders.map((folder, index) => (
          <button
            key={index}
            className="btn rounded-full text-green-500 flex items-center overf"
            id={`folder-${index}`}
          >
            <Folder className="mr-1" />
            {folder}
          </button>
          /* à l'avenir, pas pour le moment, il faut ajouter un bouton pour supprimer un dossier, mais pas n'importe lequel, on peut supprimer un dossier qui n'as rien dedans. */
        ))}
      </div>
    </div>
  );
}
export default App;
