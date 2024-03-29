export default function SlideCard( {image} ) {
  return (
    <div className="slideCard bg-slate-500 rounded-2xl w-64 h-64 content-end">
      <img src={image} alt="" className="object-cover rounded-2xl h-full w-full"/>
    </div>
  );
}
