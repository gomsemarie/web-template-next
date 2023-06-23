/*------------------------------------------------------------------------------------------------------------------------------------------
 * Movie.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { DaisySample } from "@/pages/sample";
import { useNavigate } from "react-router-dom";

interface MovieProps {
  id: number;
  medium_cover_image: string;
  title: string;
  summary: string;
  genres: [];
}

function Movie(props: MovieProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const { id, medium_cover_image, title, summary, genres } = props;
  const navigator = useNavigate();
  /* State ――――― */
  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <DaisySample.SampleBox title={title}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={medium_cover_image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <p
              className="link"
              onClick={() => navigator(`/sample/movie-sample/detail/${id}`)}
            >
              {title}
            </p>
          </h2>
          <p>{summary}</p>
          <div className="card-actions justify-end">
            <ul>
              {genres.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DaisySample.SampleBox>
  );
}

namespace Movie {}

export default Movie;
