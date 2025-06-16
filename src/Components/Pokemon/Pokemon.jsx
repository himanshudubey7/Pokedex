import { Link } from 'react-router-dom';
import './pokemon.css'

function Pokemon({ name, image,id  }) {
    return (
        <div className="pokemon">
          <Link to={`/pokemon/${id}`}>

           <div className='pokemon-name'>{name}</div> 
            <div>
                <img className= 'pokemon-name' src={image} alt={name} />
            </div>
            
              </Link>
        </div>
      
    );
}

export default Pokemon;






// function Pokemon({ name,image }){
//     return(
//         <div>
//             <div>{name}</div>
//             <div>img src={image} </div>
//         </div>
//     )
// }

// export default Pokemon;