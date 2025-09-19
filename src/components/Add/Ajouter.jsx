import { useState } from "react";
import { Plus, Settings, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ParamsSupl } from "./ParamsSupl";

export function AddPost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("yellow");
  const [openParameters, setOpenParameters] = useState(false);

  const handleToggleParameters = () => {
    setOpenParameters(!openParameters);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      title: title.trim() || "Sans titre",
      content: content.trim(),
      color: color,
    };

    onAddPost(newPost);
    setTitle("");
    setContent("");
    document.getElementById("my_modal_1").close();
  };

  return (
    <div className="text-white">
      {/* Bouton d'ouverture */}
      <button
        className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 
                   hover:from-yellow-500 hover:to-yellow-600 rounded-full shadow-lg hover:shadow-xl
                   transform hover:scale-110 active:scale-95 transition-all duration-200
                   flex items-center justify-center group"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <Plus className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-200" />
      </button>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-base-200 p-0 overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-base-content/10">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-base-content">
                Nouvelle note
              </h3>
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_1").close()}
                className="btn btn-ghost btn-sm btn-circle"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Toggle paramètres */}
            <button
              type="button"
              onClick={handleToggleParameters}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-150 w-full text-left
                         hover:bg-base-content/5 mb-4 ${
                           openParameters
                             ? "text-primary bg-primary/10"
                             : "text-base-content/80"
                         }`}
            >
              <Settings
                className={`w-4 h-4 transition-transform duration-200 ${
                  openParameters ? "rotate-90" : ""
                }`}
              />
              <span className="flex-1">
                {openParameters
                  ? "Masquer les paramètres"
                  : "Paramètres supplémentaires (facultatifs) ..."}
              </span>
              <div
                className={`w-2 h-2 rounded-full transition-colors ${
                  openParameters ? "bg-primary" : "bg-transparent"
                }`}
              />
            </button>

            {/* Paramètres supplémentaires avec animation */}
            <AnimatePresence>
              {openParameters && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    marginBottom: "1rem",
                    transition: {
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3, ease: "easeInOut" },
                      marginBottom: { duration: 0.2 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                    transition: {
                      opacity: { duration: 0.1 },
                      height: { duration: 0.2, ease: "easeInOut" },
                      marginBottom: { duration: 0.1 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <ParamsSupl
                    title={title}
                    setTitle={setTitle}
                    color={color}
                    setColor={setColor}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contenu principal */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text text-sm text-base-content/80">
                  Contenu
                </span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm bg-base-100/50 border border-base-content/10 rounded-md 
                           focus:border-base-content/30 focus:outline-none focus:bg-base-100/70
                           transition-all duration-150 placeholder:text-base-content/50"
                placeholder="Écrivez votre note ici..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                autoFocus
              />
            </div>

            {/* Actions */}
            <div className="modal-action mt-6 justify-end">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn btn-primary transform hover:scale-105 active:scale-95 
                           transition-all duration-150 flex items-center gap-1"
              >
                <Check className="w-4 h-4" />
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
