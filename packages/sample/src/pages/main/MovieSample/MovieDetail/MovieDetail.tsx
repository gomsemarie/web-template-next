/*------------------------------------------------------------------------------------------------------------------------------------------
 * MovieDetail.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieSub from "../Movie/component/MovieSub";
import { DaisySample } from "@/pages/sample";

interface MovieDetailProps {}

function MovieDetail(props: MovieDetailProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;

  /* State ――――― */
  const [movie, setMovie] = useState({
    id: 0,
    medium_cover_image: "",
    title: "",
    summary: "",
    genres: [],
  });

  /* Const ――――― */
  const { id } = useParams();
  console.log(id);

  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);

    setMovie({
      id: json.data.movie.id,
      medium_cover_image: json.data.movie.medium_cover_image,
      title: json.data.movie.title,
      summary: json.data.movie.description_full,
      genres: json.data.movie.genres,
    });

    console.log(movie);
  };

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  useEffect(() => {
    getMovie();
  }, []);

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="movieDetail">
      <DaisySample.goBack></DaisySample.goBack>

      <MovieSub
        key={movie.id}
        id={movie.id}
        medium_cover_image={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
      />
    </div>
  );
}

namespace MovieDetail {}

export default MovieDetail;
