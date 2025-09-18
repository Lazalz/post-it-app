import { Plus } from "lucide-react";
import { NewFolder } from "./NewFolder";
import { useState } from "react";
import { ExistingFolder } from "./ExistingFolder";

export function ParamsSupl() {
  const [openNewFolder, setOpenNewFolder] = useState(false);
  const handleOpenFolder = () => setOpenNewFolder(!openNewFolder);
  const [folders, setFolders] = useState([]);

  const handleAddFolder = (folder) => {
    setFolders((prevFolders) => [...prevFolders, folder]);
    setOpenNewFolder(false);
  };
  return (
    <div className="card bg-base-100 shadow-sm p-4 mb-6">
      <div className="card-body p-0">
        <div>
          <ExistingFolder folders={folders}/>
        </div>
        <div>
          <button
            className="btn btn-ghost btn-circle btn-sm"
            onClick={handleOpenFolder}
          >
            <Plus className="w-5 h-5" />
          </button>

          {openNewFolder && <NewFolder onAddFolder={handleAddFolder} />}
        </div>
      </div>
    </div>
  );
}
