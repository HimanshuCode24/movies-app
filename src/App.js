import Result from "./Components/Results";
import axios from "axios";
import { useEffect, useState } from "react";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeThesearch = (event) => {
    // console.log(event.target.value)
    setSearch(event.target.value)
  }

  const getAllMovies = () => {
    axios.get(APIURL)
    .then(
      (response) => {
        setMovies(response.data.results)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
      
    )
  }
  const getSearchedMovies = () => {
    axios.get(
      SEARCHAPI+search
    )
    .then(
      (response) =>{
        setMovies(response.data.results)
      }
    ).catch(
      (error) => {
        console.og(error)
      }
    )
    }

  useEffect(
    () => {
     setMovies([])
      if(search === ""){
        getAllMovies()
      }else{
        getSearchedMovies()
      }
    },
    [search]
  )

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
    <div className="max-w-[1240px] w-full mx-4 bg-gray-800 rounded-lg overflow-hidden shadow-xl ">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Search for Movies</h1>
        <input
          type="search"
          value={search}
          onChange={changeThesearch}
          className="w-full border border-gray-700 rounded-lg px-4 py-2 text-white bg-gray-700 focus:outline-none focus:border-purple-500 transition duration-300"
          placeholder="Search for movies..."
        />
      </div>
      <div className="p-6">
        {movies.length === 0 ? (
          <div className="text-xl text-center text-gray-400">Loading...</div>
        ) : (
          <Result movies={movies} />
        )}
      </div>
    </div>
  </div>
  
   
  );
}

export default App