export function Timeline() {
  return (
    <ul className="list flex flex-column">
      <li className="p-4 pb-2 opacity-60 tracking-wide">Récent</li>
      <li className="list-item">
        <a href="#" className="border-b border-base-200">
          {new Date().toLocaleDateString()}
        </a>
      </li>
      <li className="list-item">
        <a href="#" className="border-b border-base-200">
          {new Date().toLocaleDateString()}
        </a>
      </li>
      <li className="list-item">
        <a href="#" className="border-b border-base-200">
          {new Date().toLocaleDateString()}
        </a>
      </li>
      
    </ul>
  );
}
