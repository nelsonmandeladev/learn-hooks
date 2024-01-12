import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { useShareContent } from './hooks/useShareContent';

interface PokemonType {
  name: string;
  url: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonType[]>([])
  // use ref example
  // const ref = useRef<HTMLDivElement>(null);
  // const refContent = '<div>ref content</div>';

  // function handleChangeRefBgColor() {
  //   if (ref.current) {
  //     ref.current.style.backgroundColor = 'green';
  //     ref.current.innerHTML = refContent;
  //     ref.current.style.color = 'white';
  //     ref.current.style.padding = '10px';
  //   }
  // }

  // useMemo example

  const name = useMemo(() => {
    return 'memo & and count is: ' + count;
  }, []);

  // useEffect example
  useEffect(() => {
    console.log('useEffect');
    setCount(count + 1);
  }, []);

  async function handleFetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    console.log({ data: data.results })
    setPokemons(data.results as PokemonType[]);
  }

  // useCallback example
  const handleFetchPokemonCallback = useCallback(async () => {
    handleFetchPokemon();
  }, []);

  useEffect(() => {
    // handleFetchPokemon();
    setCount(count + 1);
    handleFetchPokemonCallback();
  }, []);

  // useContext example
  const { shareData, setShareData } = useShareContent();


  return (
    <>
      {/* <div
      // ref={ref}
      >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => {
          setCount(count + 1);
          setShareData('Hello, world');
          // handleChangeRefBgColor()
        }}>
          count is {count} & name is {name}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Hell, this is share data: {shareData}
      </p>
    </>
  )
}

export default App
