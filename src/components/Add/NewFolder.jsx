import { Check, X } from "lucide-react";

export function NewFolder({ color, setColor, title, setTitle, onSave }) {
  return (
    <div className="space-y-4">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Titre (optionnel)</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full focus:ring-2 focus:ring-primary/50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de la note"
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-medium">Couleur</span>
        </label>
        <select
          className="select select-bordered w-full focus:ring-2 focus:ring-primary/50"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="bg-yellow-200">Jaune</option>
          <option value="bg-green-200">Vert</option>
          <option value="bg-blue-200">Bleu</option>
          <option value="bg-pink-200">Rose</option>
          <option value="bg-purple-200">Violet</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2 pt-2">
        <button
          className="btn btn-ghost btn-circle rounded-full bg-red-500 text-white"
          onClick={() => setTitle("")}
        >
          <X className="w-5 h-5" />
        </button>
        <button
          className="btn btn-success btn-circle rounded-full hover:bg-green-600"
          onClick={onSave}
        >
          <Check className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
