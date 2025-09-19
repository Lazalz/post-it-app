import { Folder } from "lucide-react";
import { useState } from "react";

export function ExistingFolder({ folders }) {
  const [selectedFolder, setSelectedFolder] = useState("");

  const handleFolderSelect = (folderId) => {
    setSelectedFolder(folderId);
  };

  return (
    <div className="p-2 ">
      {/* Titre */}
      <div className="form-control">
        <label className="label py-1">
          <span className="label-text text-sm text-base-content/80">
            Mettre la note dans un dossier
          </span>
        </label>
      </div>

      {/* Liste des dossiers */}
      <div className="flex flex-wrap gap-2">
        {folders.map((folder) => (
          <button
            key={folder.id}
            onClick={() => handleFolderSelect(folder.id)}
            className={`flex items-center px-3 py-2 rounded-md border transition-all duration-150 
                       hover:bg-base-content/5 text-sm transform hover:scale-[1.02] active:scale-[0.98] ${
              selectedFolder === folder.id
                ? "border-base-content/20 bg-base-content/10 shadow-sm scale-[1.02]"
                : "border-base-content/10 bg-base-200/30"
            }`}
          >
            <Folder 
              className={`w-4 h-4 mr-2 transition-transform duration-150 ${
                selectedFolder === folder.id ? 'rotate-12' : ''
              }`}
              style={{ color: folder.selectedColor === 'yellow' ? '#f59e0b' : 
                              folder.selectedColor === 'red' ? '#ef4444' :
                              folder.selectedColor === 'blue' ? '#3b82f6' :
                              folder.selectedColor === 'green' ? '#10b981' :
                              folder.selectedColor === 'purple' ? '#8b5cf6' : '#f59e0b' }}
            />
            <span className={`text-base-content/80 transition-colors duration-150 ${
              selectedFolder === folder.id ? 'text-base-content/90 font-medium' : ''
            }`}>
              {folder.newTitle}
            </span>
            {selectedFolder === folder.id && (
              <div className="ml-2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
      
    </div>
  );
}