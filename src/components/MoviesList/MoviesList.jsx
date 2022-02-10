import { ListLi, ListLink } from "./MoviesList.styled" 
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
  

export default function MoviesList({ movies }) {
   const location = useLocation();
    return (  
    <>
                     <ul>
            {movies.map(({ id, title, name }) => (
               <ListLi key={id} text={title ?? name}>
                  <ListLink to={{
                     pathname: `/movies/${id}`,
                     state: {
                        from: {
                           location,
                           
                        }
                     },
                  }}>
                     {title ?? name}
                  </ListLink>
               </ListLi>
               )
            )}
         </ul>
        </>
        )
}