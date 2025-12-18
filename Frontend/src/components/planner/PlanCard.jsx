const PlanCard = ({ day, tasks }) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="font-semibold mb-2">{day}</h3>
    <ul className="list-disc ml-4">
      {tasks.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  </div>
);

export default PlanCard;
