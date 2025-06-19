import axios from "axios";
import {useEffect, useState } from "react";
// import usePokemonList from "./usePokemonList";


function usePokemonDetails(id,pokemonName){
  const [pokemon, setPokemon] = useState({});
  async function downloadPokemon(){
    try{
    let response;
    if(pokemonName){
       console.log('fetching by name')
       response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    }
    else{
       response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
    
    const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name:''}`)
      setPokemon ({
        name:  response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height:response.data.height,
        types: response.data.types.map((t)=> t.type.name),
        similarPokemons:pokemonOfSameTypes.data.pokemon
      });
      console.log(response.data.types);
      setPokemonListState({...pokemonListState,type:response.data.types ? response.data.types[0].type.name:''})

    
    
    }catch(e){
           console.log("something went wrong.....")
    }
  }
    const [pokemonListState,setPokemonListState] = useState({});

    useEffect(()=> {
      downloadPokemon();
      // console.log("List is: ", pokemon.types,pokemonListState);
     }, []);

     return [pokemon];
}
export default usePokemonDetails;




// import axios from "axios";
// import { useEffect, useState } from "react";

// function usePokemonDetails(id, pokemonName) {
//   const [pokemon, setPokemon] = useState({});
//   const [similarPokemons, setSimilarPokemons] = useState([]);

//   async function downloadPokemon() {
//     try {
//       let response;
//       if (pokemonName) {
//         console.log("Fetching by name...");
//         response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//       } else {
//         response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       }

//       const type = response.data.types?.[0]?.type?.name || "";
//       const similarResponse = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

//       setPokemon({
//         name: response.data.name,
//         image: response.data.sprites.other.dream_world.front_default,
//         weight: response.data.weight,
//         height: response.data.height,
//         types: response.data.types.map((t) => t.type.name),
//       });

//       setSimilarPokemons(similarResponse.data.pokemon);
//     } catch (e) {
//       console.log("Something went wrong while fetching Pokémon details:", e.message);
//     }
//   }

//   useEffect(() => {
//     downloadPokemon();
//   }, [id, pokemonName]);

//   return [pokemon, similarPokemons];
// }

// export default usePokemonDetails;

