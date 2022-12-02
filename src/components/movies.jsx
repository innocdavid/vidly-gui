import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";


class Movies extends Component {

  //state
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4
  };

  // lifecycle hooks
  componentDidMount() {
    const genres = [{name: "All Genres"}, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  // handleDelete
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  }

  // handleLike
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  // page change for pagination
  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  //
  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  render() {
 
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, selectedGenre } = this.state;

    if (count === 0) 
      return <p>There are no movies in the database</p>

    // filter list of movies
    const filtered = selectedGenre && selectedGenre._id 
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    //pagination
    const movies = paginate(filtered, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup 
            items={this.state.genres} 
            selectedItem = {this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect} 
          />
        </div>
        <div className="col">
          <p>Showing { filtered.length } movies in the database</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              { movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like 
                      liked={movie.liked} 
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button 
                      onClick={ ()=> this.handleDelete(movie) } 
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        
            </tbody>
          </table>

          <Pagination 
            itemCount={filtered.length} 
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
        
      </div>
    )
  }
};

export default Movies;