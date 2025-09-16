import { X, Edit2, Pin, Trash, Trash2 } from "lucide-react";

const PostIts = ({
  title,
  content,
  color = "bg-yellow-200",
  onDelete,
  onEdit,
}) => {
  return (
    /* carte du postit */
    <div
      className={`${color} w-full h-64 p-5 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 relative overflow-hidden `}
    >
      {/* Contenu du post-it */}
      <div className="h-full flex flex-col">
        {title && (
          <h3 className="text-lg font-bold mb-2 border-b border-black/10 pb-1">
            {title }
          </h3>
        )}

       

        <p className="flex-grow flex text-lg items-center justify-center whitespace-pre-wrap overflow-y-auto">
          {content || "Écrivez votre note ici..."}
        </p>
        <div className="flex justify-end space-x-1 mt-2 pt-2 border-t border-black/10">
          <button
            onClick={onDelete}
            className="hover:text-red-500 "
            aria-label="Supprimer la note"
            title="Supprimer"
          >
            <Trash2 className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostIts;
