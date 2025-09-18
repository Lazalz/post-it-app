import { Folder } from "lucide-react";
import { useState } from "react";

export function ExistingFolder({folders}) {
  return (
    <div>
      <div>
        <h2>Metter le note dans un dossier</h2>
      </div>
      <div className="flex flex-row justify-start">
        {folders.map((folder) => (
          <div key={folder.id} style={{color: "red"}} > {/* style du dossier */}
            <button className="btn btn-ghost rounded-full">
              <Folder className="w-5 h-5 mr-2" />
              {folder.newTitle}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
