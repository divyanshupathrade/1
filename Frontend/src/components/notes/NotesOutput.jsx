const NotesOutput = ({ notes }) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="font-semibold">Keywords</h3>
    <p>{notes.keywords.join(", ")}</p>
    <h3 className="font-semibold mt-2">Summary</h3>
    <ul>{notes.summary.map((s, i) => <li key={i}>{s}</li>)}</ul>
  </div>
);

export default NotesOutput;
