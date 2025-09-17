import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AddPost } from "./Add/Ajouter";
import PostIts from "./PostIts";

export function Acceuil() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Exemple de note",
      content: "Bienvenue dans votre application de notes !",
      color: "bg-yellow-200",
    },
    {
      id: 2,
      title: "Note de test",
      content: "Ceci est un exemple de note",
      color: "bg-green-200",
    },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    /* grid des postits */
    <div className="grid grid-cols-1 mx-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 text-black">
      {posts.map((post) => (
        <PostIts
          key={post.id}
          title={post.title}
          content={post.content}
          color={post.color}
        />
      ))} 

      {/* bouton + pour ajouter un postit */}
      <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded transition-colors">
        <ErrorBoundary
          fallback={
            <p className="text-red-500">
              Une erreur est survenue lors du chargement du bouton d'ajout
            </p>
          }
        >
          <AddPost onAddPost={handleAddPost} />
          {/* onAddpost est la clé essentiel pour push le postit dans le state posts */}
        </ErrorBoundary>
      </div>
    </div>
  );
}
