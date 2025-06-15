function Pokemon({ name, image }) {
    return (
        <div className="pokemon-card">
            <h3>{name}</h3>
            <img src={image} alt={name} />
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