
function Duelo() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">🟧 Crear Duelo</h2>
      <div className="bg-[#1c1b2d] p-6 rounded-xl max-w-md mb-10">
        <input placeholder="Jugador 1" className="block w-full p-2 mb-3 rounded" />
        <input placeholder="Jugador 2" className="block w-full p-2 mb-3 rounded" />
        <input placeholder="Juego (ej: Tekken 8)" className="block w-full p-2 mb-3 rounded" />
        <input type="time" className="block w-full p-2 mb-4 rounded" />
        <button className="bg-indigo-500 w-full p-2 rounded hover:bg-indigo-600">Crear Duelo</button>
      </div>

      <h2 className="text-xl font-bold mb-4">Duelos Activos</h2>
      {[
        { juego: "Dragon Ball FighterZ", vs: "Goku vs Vegeta", hora: "20:00", odds: ["1.65", "2.20"] },
        { juego: "Mortal Kombat 11", vs: "Scorpion vs Sub-Zero", hora: "21:30", odds: ["1.90", "1.90"] }
      ].map((duelo, i) => (
        <div key={i} className="bg-[#1c1b2d] p-4 rounded-xl mb-6">
          <h3 className="text-purple-400 font-semibold">🎮 {duelo.juego}</h3>
          <p>{duelo.vs}</p>
          <p className="text-sm mt-1">🕗 {duelo.hora}</p>
          <div className="flex gap-2 mt-2">
            <button className="bg-indigo-500 flex-1 rounded p-2">Apostar por {duelo.vs.split(' vs ')[0]} ({duelo.odds[0]})</button>
            <button className="bg-indigo-500 flex-1 rounded p-2">Apostar por {duelo.vs.split(' vs ')[1]} ({duelo.odds[1]})</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Duelo
