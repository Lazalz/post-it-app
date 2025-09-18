import { Check, X } from "lucide-react";
import { useState } from "react";

export function NewFolder({ onAddFolder }) {
  const [newTitle, setNewTitle] = useState("");
  const [color, setColor] = useState("bg-yellow-200");
  const [description, setDescription] = useState("");

  const handleAddFolder = () => {
    if (newTitle.trim() !== "") {
      onAddFolder({
        newTitle,
        color,
        description,
      });

      setNewTitle("");
      setColor("bg-yellow-200");
      setDescription("");
    }
  };
  return (
    <div>
      <input
        type="text"
        className="input input-ghost border border-gray-50 w-full my-3"
        placeholder="Nouveau dossier"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <div>
        Choisissez une couleur
        <div>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="bg-yellow-200">Jaune</option>
            <option value="bg-green-200">Vert</option>
            <option value="bg-red-200">Rouge</option>
            <option value="bg-blue-200">Bleu</option>
          </select>
        </div>
      </div>
      <div>
        <p>Description (facultatif)</p>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {/* Action pour valider tout ça ou annuler */}
      <div className="modal-action ">
        <button type="button" className="btn btn-circle">
          <X />
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-circle"
          onClick={handleAddFolder}
        >
          <Check />
        </button>
      </div>
    </div>
  );
}
