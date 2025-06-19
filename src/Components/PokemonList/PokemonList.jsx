import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList(){


  const [pokemonListState,setPokemonListState]= usePokemonList(false);

    return (
   <div  className="pokemon-List-wrapper">
      <div className="pokemon-wrapper">
           {( pokemonListState.isLoading) ? 'Loading.....':
              pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} /> )
        }
       </div>
       <div className="controls">
        <button disabled={pokemonListState.prevUrl == null} onClick={()=>{
            const UrlToset= pokemonListState.prevUrl;
            setPokemonListState ({...pokemonListState, pokedexUrl:UrlToset})
            }}>Prev</button>
        <button  disabled={pokemonListState.nextUrl == null}onClick={()=>{ 
             const UrlToset= pokemonListState.nextUrl;
            setPokemonListState ({...pokemonListState, pokedexUrl:UrlToset})
            }}>Next</button>
       </div>
     

    </div>
    );
}


export default PokemonList;