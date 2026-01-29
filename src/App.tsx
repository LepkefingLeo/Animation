import { useState } from "react";
import "./App.css";

function range(i: number) {
  return [...Array(i).keys()]
}

function App() {
  const [ articleCount, setArticleCount] = useState(3);
  
  return (
    <>
    <input type="number" onChange={e => setArticleCount(parseInt(e.currentTarget.value))} min={0} defaultValue={3}/>
    <p className="loading">Loading...</p>
      <section>
        {
          range(articleCount).map(() => <article>
            <h2>Cikk</h2>
            <p>Cikk tartalma</p>
          </article>
        )}
      </section>
      <section>
        <p className="szivarvany">Ez egy szivárványos szöveg</p>
      </section>
    </>
  );
}

export default App;
