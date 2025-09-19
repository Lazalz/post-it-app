import { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NewFolder } from "./NewFolder";
import { ExistingFolder } from "./ExistingFolder";

export function ParamsSupl() {
  const [openNewFolder, setOpenNewFolder] = useState(false);
  const [folders, setFolders] = useState([]);

  const handleAddFolder = (folder) => {
    console.log(folder);
    setFolders((prevFolders) => [...prevFolders, folder]);
    setOpenNewFolder(false);
  };

  const handleOpenFolder = () => {
    setOpenNewFolder(!openNewFolder);
  };

  return (
    <div className="card bg-base-100 shadow-sm p-2 mb-2">
      <div className="p-0">
        <div>
          <ExistingFolder folders={folders} />
        </div>
        <div className="p-2">
          <button
            className={`flex items-center justify-center my-2 w-8 h-8 rounded-full border transition-all duration-200 ${
              openNewFolder
                ? "bg-base-content/10 rotate-45 border-base-content/20"
                : "bg-base-200/30 border-base-content/10 hover:bg-base-content/10 hover:border-base-content/20"
            }`}
            onClick={handleOpenFolder}
          >
            <Plus className="w-4 h-4 text-base-content/70 transition-transform duration-200" />
          </button>

          <AnimatePresence>
            {openNewFolder && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: "0.5rem",
                  transition: {
                    opacity: { duration: 0.2 },
                    height: { duration: 0.3, ease: "easeInOut" },
                    marginTop: { duration: 0.2 },
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                  transition: {
                    opacity: { duration: 0.1 },
                    height: { duration: 0.2, ease: "easeInOut" },
                    marginTop: { duration: 0.1 },
                  },
                }}
                className="overflow-hidden"
              >
                <NewFolder
                  onAddFolder={handleAddFolder}
                  handleClose={handleOpenFolder}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
