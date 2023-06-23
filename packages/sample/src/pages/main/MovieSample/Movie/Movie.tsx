/*------------------------------------------------------------------------------------------------------------------------------------------
 * Movie.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { React, useState, useEffect } from "react";
import MovieSub from "./component/MovieSub";
import { DaisySample } from "@/pages/sample";

interface MovieProps {}

function Movie(props: MovieProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;

  /* State ――――― */
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */
  const getMovies = async () => {
    const jsion = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();

    setMovies(jsion.data.movies);
    setLoading(false);
  };

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="daisySample">
      <DaisySample.goBack></DaisySample.goBack>
      {loading ? (
        <h1>"Loading..."</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieSub
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={
                movie.summary.length > 235
                  ? `${movie.summary.slice(0, 235)}...`
                  : movie.summary
              }
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

namespace Movie {}

export default Movie;
