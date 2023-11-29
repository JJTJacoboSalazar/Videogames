const verifyData = ({id, name, released, background_image, platforms, rating, genres, description}) => {
 if((!name || name.length < 2) || (genres.length === 0 || platforms.length === 0) || (rating > 10 && rating < 0)) {
    throw new Error ("Does not meet validation requirements.") 
 }

return {
    id,
    name,
    description: description ? description : "Unavailable informacion",
    released: released? released : "Unavailable information",
    background_image: background_image? background_image : "https://screencraft.org/wp-content/uploads/2021/08/Write-for-Video-Games-scaled.jpg", 
    platforms,
    rating,
    genres,
}
}

module.exports = verifyData;