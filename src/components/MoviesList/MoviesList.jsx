import { ListLi, ListLink } from "./MoviesList.styled" 

  

export default function MoviesList({ movies, location }) {
    return (  
    <>
                     <ul>
            {movies.map(({ id, title, name }) => (
               <ListLi key={id} text={title ?? name}>
                  <ListLink to={{
                     pathname: `/movies/${id}`,
                     state: {
                        from: location
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