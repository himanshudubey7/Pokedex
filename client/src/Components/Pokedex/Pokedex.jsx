import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';


import './Pokedex.css';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import HomeLayout from '../../Layouts/HomeLayout';

     
function Pokedex(){

   const [searchTerm,setSearchTerm] = useState('');
  // return (
  //   <HomeLayout>
  //   <div className='pokedex-wrapper'>
  //      <Search updateSearchTerm = {setSearchTerm}/>
  //      { (!searchTerm) ? <PokemonList />: <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
  //    </div>
  //    </HomeLayout>
  // )
return (
 <HomeLayout>
  <div className="pokedex-wrapper">
    <div className="pokedex-inner">
      <Search updateSearchTerm={setSearchTerm} />
      {(!searchTerm) ? (
        <PokemonList />
      ) : (
        <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
      )}
    </div>
  </div>

</HomeLayout>
  
);
}

export default Pokedex; 