import { Check, X } from "lucide-react";
import { useState } from "react";

export function NewFolder({ onAddFolder, handleClose }) {
  const [newTitle, setNewTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("yellow");
  const [description, setDescription] = useState("");

  const colors = [
    { value: "yellow", label: "Jaune (par défaut)", hex: "#f59e0b" },
    { value: "red", label: "Rouge", hex: "#ef4444" },
    { value: "blue", label: "Bleu", hex: "#3b82f6" },
    { value: "green", label: "Vert", hex: "#10b981" },
    { value: "purple", label: "Violet", hex: "#8b5cf6" },
  ];

  const handleColorChange = (colorValue) => {
    setSelectedColor(colorValue);
  };

  

  const handleAddFolder = () => {
    if (newTitle.trim() !== "") {
      onAddFolder({
        id: Date.now(),
        newTitle,
        selectedColor,
        description,
      });
      setNewTitle("");
      setSelectedColor("yellow");
      setDescription("");
    }
  };

  return (
    <div className="text-white">
      {/* Titre du dossier - Input customisé */}
      <p>Créer un nouveau dossier dossier</p>
      <div className="form-control">
        <input
          type="text"
          className="w-full px-3 py-2 text-sm bg-base-200/50 border border-base-content/10 rounded-md 
                     focus:border-base-content/30 focus:outline-none focus:bg-base-200/70
                     transition-all duration-150 placeholder:text-base-content/50"
          placeholder="Nouveau dossier"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </div>

      {/* Sélection de couleur */}
      <div className="form-control">
        <label className="label py-1">
          <span className="label-text text-sm text-base-content/80">Choisissez une couleur</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <label
              key={color.value}
              className={`flex items-center cursor-pointer px-2 py-1.5 rounded-md border transition-all duration-150 
                         hover:bg-base-content/5 ${
                selectedColor === color.value
                  ? "border-base-content/20 bg-base-content/10"
                  : "border-base-content/10 bg-base-200/30"
              }`}
            >
              <input
                type="radio"
                name="color"
                value={color.value}
                onChange={(e) => handleColorChange(e.target.value)}
                checked={selectedColor === color.value}
                className="sr-only"
              />
              <div
                className="w-5 h-5 rounded-full mr-2 border border-base-content/20"
                style={{ backgroundColor: color.hex }}
                title={color.label}
              />
              <span className="text-xs text-base-content/80">
                {color.label}
              </span>
              {selectedColor === color.value && (
                <div className="ml-2">
                  <Check size={12} className="text-base-content/60" />
                </div>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Description - Textarea customisée */}
      <div className="form-control">
        <label className="label py-1">
          <span className="label-text text-sm text-base-content/80">Description</span>
          <span className="label-text-alt text-xs text-base-content/50">(facultatif)</span>
        </label>
        <div className="relative">
          <textarea
            className="w-full px-3 py-2 text-sm bg-base-200/50 border border-base-content/10 rounded-md 
                       focus:border-base-content/30 focus:outline-none focus:bg-base-200/70
                       transition-all duration-150 placeholder:text-base-content/50 resize-none
                       min-h-[50px]"
            placeholder="Décrivez ce dossier..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={100}
            rows="3"
          />
          <div className="absolute bottom-2 right-2">
            <span className="text-xs text-base-content/40">
              {description.length}/100
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="modal-action justify-end gap-2 mt-6">
        <button 
          type="button" 
          className="btn btn-ghost btn-sm btn-circle"
          title="Annuler"
          onClick={handleClose}
        >
          <X size={16} />
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm btn-circle disabled:btn-disabled"
          onClick={handleAddFolder}
          disabled={!newTitle.trim()}
          title="Créer le dossier"
        >
          <Check size={16} />
        </button>
      </div>
    </div>
  );
}