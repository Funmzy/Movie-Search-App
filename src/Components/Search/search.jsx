import React, {useState} from 'react'
import './search.css'
import MovieCard from '../MovieCard/MovieCard';
import {MdMovieFilter} from "react-icons/md"

const Search =() => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])


    const searchMovies = async(e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const res= await fetch(url);
            const data = await res.json();
            setMovies(data.results)
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
        
    }
  return (
    <div>
        <form className='form' onSubmit={searchMovies}>
            <label className='label' htmlFor='query'>Movie Title: </label>
            <input className='input' 
                type="text" name='query' 
                placeholder='i.e Jurassic Park...'
                value={query}
                onChange= {(e) => setQuery(e.target.value)}
            />
            <button className='button' type='submit'>Search</button>
        </form>
        <div className='card-list'>
            {movies.length>0 ?
            
            movies.filter(movie => movie.poster_path).map(movie => (
               <MovieCard movie={movie} key={movie.id}/> 
            )):
                <div className='void-container'>
                    <MdMovieFilter className='void-image' />
                    <p className='void-text'>put a keyword e.g Jurassic Park in the search box and click on the search button</p>
                </div>
            }
        </div>
    </div>
  )
}

export default Search
