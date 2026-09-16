import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const apiUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

  useEffect(() => {
    fetch(`${apiUrl}/api/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [apiUrl]);

  return (
    <div>
      <h1>My notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;