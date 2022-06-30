let getMoviesByName = async (string) => {
  const promise = new Promise((resolve, reject) => setTimeout(resolve, 3000));

  let response = await fetch(`http://www.omdbapi.com/?apikey=[apikey]&t=${string}`);

  return response;
};

let getMovieDetailsById = async(id) => {
  const promise = new Promise((resolve, reject) => setTimeout(resolve, 3000));

  let response = await fetch(`http://www.omdbapi.com/?apikey=[apikey]&i=${id}`);

  return response;
}

export { getMoviesByName, getMovieDetailsById };