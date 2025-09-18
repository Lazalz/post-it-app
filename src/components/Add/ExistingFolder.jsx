import { Folder } from "lucide-react";
import { useState } from "react";

export function ExistingFolder() {
  const [existingFolder, setExistingFolder] = useState([
    {
      id: 1,
      name: "Dossier 1",
    },
    {
      id: 2,
      name: "Dossier 2",
    },
  ]);
  const folderShown = (folder) => {
    setExistingFolder((prevFolders) => [...existingFolder, folder]);
  };
  return (
    <div>
      <div>
        <h2>Metter le note dans un dossier</h2>
      </div>
      <div className="flex flex-row justify-start">
        {existingFolder.map((folder) => (
          <div key={folder.id}>
            <button className="btn btn-ghost rounded-full">
              <Folder className="w-5 h-5 mr-2" />
              {folder.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
