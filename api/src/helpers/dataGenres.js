const dataGenres = (data) => {
    const genres = [];
    data.map((genre) => genres.push(genre.name));
    return genres;
}

module.exports = dataGenres;