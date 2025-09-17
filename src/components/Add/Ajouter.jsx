import { useState } from "react";
import { Plus } from "lucide-react";
import { ParamsSupl } from "./ParamsSupl";

export function AddPost({ onAddPost }) {
  const [openParameters, setOpenParameters] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("bg-yellow-200");

  const handleToggleParameters = () => {
    if (openParameters) {
      // Réinitialiser les valeurs si on cache les paramètres
      setTitle("");
      setColor("bg-yellow-200");
    }
    setOpenParameters(!openParameters);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      color: color,
    };

    onAddPost(newPost); // c'est subil mais onAddPost sert uniquement à récuperer le newPost que lui passe en props
    setTitle("");
    setContent("");
    document.getElementById("my_modal_1").close();
  };

  /* permet de soumettre le formulaire en appuyant sur la touche entrée */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div>
      <button
        className="btn w-15 h-15 shadow-accent-content btn-warning rounded-full"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <span className="text-4xl">+</span>
      </button>

      <dialog id="my_modal_1" className="modal text-white">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Nouvelle note</h3>
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              className="text-blue-400 cursor-pointer mt-4 mb-1"
              onClick={handleToggleParameters}
            >
              {openParameters
                ? "Masquer les paramètres"
                : "Paramètres supplémentaires (facultatifs) ..."}
            </button>

            {openParameters && (
              <ParamsSupl
                title={title}
                setTitle={setTitle}
                color={color}
                setColor={setColor}
              />
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Contenu</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full my-3"
                placeholder="Écrivez votre note ici..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyDown}
                
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Annuler
              </button>
              <button type="submit" className="btn btn-primary">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
