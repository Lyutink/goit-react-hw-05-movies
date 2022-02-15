import { ListLi, ListLink } from "./MoviesList.styled";
import { useLocation} from "react-router-dom";
import PropTypes from "prop-types";
  

export default function MoviesList({ movies }) {
   const location = useLocation();
    return (  
    <>
      <ol>
         {movies.map(({ id, title, name }) => (
            <ListLi key={id} text={title ?? name}>
               <ListLink to={`/movies/${id}`}
                  state={{from: location}}>
                  {title ?? name} 
               </ListLink>
            </ListLi>
            )
         )}
      </ol>
   </>
        )
}

MoviesList.propTypes = {
   movies: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         title: PropTypes.string,
         name: PropTypes.string,
      })
   )
}