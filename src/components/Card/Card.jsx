function Card() {
  return (
    <div className="max-w-xs h-auto mt-5 mx-5 flex flex-col items-center justify-center">
      <div className="px-2">
        <img
          className="rounded-md"
          src="src\assets\Burguer.jpg"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="bg-slate-400 shadow-2xl px-2 p-1 rounded-md mt-[-4px] relative w-11/12 text-newBlack flex flex-col">
        <h2 className="uppercase font-semibold">Burguer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span className="font-medium">15$</span>

        <span className="text-yellow-700 text-xs">/36 Reseñas</span>
      </div>
    </div>
  );
}

export { Card };
