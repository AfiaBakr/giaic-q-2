import Link from "next/link";
export default function Gallery() {
  return (
    <div>
      
      <h1 className="text-center mt-4 text-4xl">G A L L E R Y</h1>

      <div className="flex item-justify justify-center m-4 gap-10 ">
        <img className="ring-2 hover: hover:scale-110 transition-transform 0.4s ease"
          src="gallerypic/exam.jpg"
          alt="image"
          width={300}
          height={150}
        ></img>{" "}
        <br />
        <img className="ring-2 hover: hover:scale-110 transition-transform 0.4s ease" src="gallerypic/c.jpg" alt="image" width={300} height={150}></img>
        <br/>
        <img className="ring-2 hover: hover:scale-110 transition-transform 0.4s ease" src="gallerypic/d.jpg" alt="image" width={300} height={150}></img>{" "}
      </div>
      <br />
      <div className="flex item-justify justify-center m-4 gap-10">
      <img className="ring-2 hover: hover:scale-110 transition-transform 0.4s ease" src="gallerypic/e.jpg" alt="image" width={300} height={150}></img>
        <br />
        <img className="ring-2 hover: hover:scale-110 transition-transform 0.4s ease" src="gallerypic/f.jpg" alt="image" width={300} height={150}></img>{" "}
        <br />
        <img className="ring-2 hover: hover:scale-110 transition-transform 0.4s ease" src="gallerypic/g.jpg" alt="image" width={300} height={150}></img>
      </div>
      <br />
      
      </div>
    
  );
}
