import axios from "axios";
import { useEffect, useState } from "react";


function usePokemonList( type){
   const [pokemonListState, setPokemonListState] = useState ({
       pokemonList:[],
       isLoading:true,
       pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
       nextUrl: '',
       prevUrl: ''
   });

   async function downloadPokemons(){
    // setIsLoading(true);
    
    //iterating over the array of pokemons , and using their url, to create an array of promises
    // that will download those 20 pokemons
  
    
  
    setPokemonListState((state)=>({...state, isLoading:true}));
    const response = await axios.get(pokemonListState.pokedexUrl);// this downloads list of 20 pokemon

    const pokemonResults = response.data.results; // we get the array of pokemons from result

    console.log("response is ", response.data.pokemon);
     console.log(pokemonListState);
  

        setPokemonListState((state)=>( {
            ...state, 
            nextUrl:response.data.next,
            prevUrl:response.data.previous
        })); 
 

    
    const pokemonResultPromise=pokemonResults.map((pokemon) => axios.get(pokemon.url));

    // passing that promise array to axios.all
    const pokemonData = await axios.all(pokemonResultPromise);// array of 20 pokemon detailed data
    console.log(pokemonData);
    // setPokemonListState({...pokemonListState,nextUrl: response.data.next});
    // setPrevUrl(response.data.previous);


    // now iterate on the data of each pokemon, and extract id, name, images , types 
    const pokeListResult= pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        return {
                id: pokemon.id,
                name : pokemon.name,
                image:( pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny ,
                types:pokemon.types
            }
    });
    console.log(pokeListResult);
    setPokemonListState((state)=>({
        ...state,
        pokemonList:pokeListResult,
        isLoading:false
    }));

   
    }

    useEffect (()=>{
        downloadPokemons();

    },[pokemonListState.pokedexUrl]);
    return[pokemonListState,setPokemonListState];
}

export default usePokemonList;