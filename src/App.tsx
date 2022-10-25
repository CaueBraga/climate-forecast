function App() {
  return (
    <div className="flex justify-center items-start w-screen h-screen bg-gradient-to-t from-yellow-400 to-orange-500">
      <div className="flex flex-col gap-20">
        <h1 className=" mt-40 text-white text-6xl">Weather Forecast</h1>
        <input placeholder="Insira aqui o nome da cidade"></input>
      </div>
    </div>
  );
}

export default App;
