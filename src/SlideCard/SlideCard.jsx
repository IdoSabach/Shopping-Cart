export default function SlideCard( {item , type} ) {
  return (
    <div className="slideCard bg-slate-500 rounded-2xl w-64 h-80 content-end">
      <div className="textOnCard flex flex-col items-start p-4">
        <div className="titleType font-bold">{item}</div>
        <div className="subType pr-2 rounded-xl">{type}</div>
      </div>
    </div>
  );
}
