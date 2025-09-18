import { Check, X } from "lucide-react";

export function NewFolder({ title, color }) {
  return (
    <div>
      <input
        type="text"
        className="input input-ghost border border-gray-50 w-full my-3"
        placeholder="Nouveau dossier"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        Choisissez une couleur
        <div>
          <button className="btn btn-ghost rounded-full">
            <span className="badge badge-warning"></span>
          </button>
        </div>

      </div>
      {/* Action pour valider tout ça ou annuler */}
      <div className="modal-action ">
        <button type="button" className="btn btn-circle">
          <X />
        </button>
        <button type="submit" className="btn btn-secondary btn-circle">
          <Check />
        </button>
      </div>
    </div>
  );
}
