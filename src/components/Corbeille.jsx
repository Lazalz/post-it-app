import { useState } from "react";

export function Corbeille() {
  // État pour stocker les éléments dans la corbeille
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Document important.pdf",
      deletedAt: "2023-09-14",
      size: "2.4 MB",
    },
    { id: 2, name: "Image.png", deletedAt: "2023-09-13", size: "1.2 MB" },
    { id: 3, name: "Rapport.xlsx", deletedAt: "2023-09-12", size: "3.7 MB" },
  ]);

  // Fonction pour restaurer un élément
  const handleRestore = (id) => {
    // Logique de restauration
    setItems(items.filter((item) => item.id !== id));
  };

  // Fonction pour supprimer définitivement un élément
  const handleDelete = (id) => {
    // Logique de suppression définitive
    setItems(items.filter((item) => item.id !== id));
  };

  // Fonction pour vider la corbeille
  const emptyTrash = () => {
    setItems([]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Corbeille</h1>
        {items.length > 0 && (
          <button onClick={emptyTrash} className="btn btn-error btn-sm">
            Vider la corbeille
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center p-8 bg-base-200 rounded-lg">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium">La corbeille est vide</h3>
          <p className="mt-1 text-sm text-gray-500">
            Les éléments que vous supprimez apparaîtront ici
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Date de suppression</th>
                <th>Taille</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="hover">
                  <td className="font-medium">{item.name}</td>
                  <td>{item.deletedAt}</td>
                  <td>{item.size}</td>
                  <td>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleRestore(item.id)}
                        className="btn btn-ghost btn-xs"
                        title="Restaurer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-ghost btn-xs text-error"
                        title="Supprimer définitivement"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
