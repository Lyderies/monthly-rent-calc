import Form from "./components/Form";

function App() {
  return (
    <div className="App container mx-auto w-screen h-screen flex flex-wrap place-items-center">
      <section className="m-2 p-2 text-center w-full font-BebasNeue">
        <article className=" text-3xl">
          <h1>Rent Calculator</h1>
        </article>
        <article className="text-xl">
          <p>Welcome to the rent calculator</p>
        </article>
      </section>
      <section className="container mx-auto m-2 p-2">
        <Form />
      </section>
    </div>
  );
}

export default App;
