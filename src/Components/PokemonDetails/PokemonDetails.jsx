import { useParams } from "react-router-dom";
import './PokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails({ pokemonName}){

const {id}= useParams();

const [pokemon]= usePokemonDetails(id,pokemonName);

return (
<div className="pokemon-details-wrapper">
 
    <img  className="pokemon-details-image"  src={pokemon.image}/>
    <div className="pokemon-details-name"><span>{pokemon.name}</span> </div>
    <div className="pokemon-details-name">Height: {pokemon.height}  </div>
    <div className="pokemon-details-name">Weight: {pokemon.weight} </div>
    <div  className="pokemon-details-types">
      {pokemon.types && pokemon.types.map((t) => <div key ={t}>  {t} </div>)}
      
  </div>
{
  pokemon.types && pokemon.similarPokemons && 
 <div>
    more{pokemon.types[0]} type pokemons
    <ul>
        {pokemon.similarPokemons.map((p)=> <li key={p.pokemon.url}>{p.pokemon.name}</li>)}

    </ul>
</div>
}
</div>

);
}

export default PokemonDetails;




// import { useParams } from "react-router-dom";
// import './PokemonDetails.css';
// import usePokemonDetails from "../../hooks/usePokemonDetails";

// function PokemonDetails({ pokemonName }) {
//   const { id } = useParams();
//   const [pokemon, similarPokemons] = usePokemonDetails(id, pokemonName);

//   return (
//     <div className="pokemon-details-wrapper">
//       {pokemon.image && (
//         <img className="pokemon-details-image" src={pokemon.image} alt={pokemon.name} />
//       )}

//       <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
//       <div className="pokemon-details-name">Height: {pokemon.height}</div>
//       <div className="pokemon-details-name">Weight: {pokemon.weight}</div>

//       <div className="pokemon-details-types">
//         {pokemon.types &&
//           pokemon.types.map((t) => (
//             <div key={t} className="pokemon-type">{t}</div>
//           ))}
//       </div>

//       {pokemon.types && similarPokemons.length > 0 && (
//         <div>
//           <h3>More {pokemon.types[0]} type Pokémon:</h3>
//           <ul>
//             {similarPokemons.map((p) => (
//               <li key={p.pokemon.url}>{p.pokemon.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PokemonDetails;
