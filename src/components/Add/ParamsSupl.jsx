import { Plus } from "lucide-react";
import { NewFolder } from "./NewFolder";
import { useState } from "react";
import { ExistingFolder } from "./ExistingFolder";

export function ParamsSupl({ title, setTitle, color, setColor, onSave }) {
  const [openNewFolder, setOpenNewFolder] = useState(false);
  const handleOpenFolder = () => setOpenNewFolder(!openNewFolder);
  return (
    <div className="card bg-base-100 shadow-sm p-4 mb-6">
      <div className="card-body p-0">
        <div>
          <ExistingFolder />
        </div>
        <div>
          <button
            className="btn btn-ghost btn-circle btn-sm"
            onClick={handleOpenFolder}
          >
            <Plus className="w-5 h-5" />
          </button>

          {openNewFolder && (
            <NewFolder
              title={title}
              setTitle={setTitle}
              color={color}
              setColor={setColor}
              onSave={onSave}
            />
          )}
        </div>
      </div>
    </div>
  );
}
