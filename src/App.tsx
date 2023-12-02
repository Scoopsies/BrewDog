import axios from "axios"
import { useEffect} from "react"
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import Card from "./components/Card";
import BeerType from "./Types/BeerType.types";

function App() {

  const { ref, inView} = useInView({
    threshold: 0,
  });

  const fetchData = async ({pageParam}: {pageParam: number}) => {
    const {data} = await axios.get(`https://api.punkapi.com/v2/beers?page=${pageParam}&per_page=10`)
    return data
  }


  const {data, isLoading, isError, error, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: ['beers'],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined
    }
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  },[inView, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{`${error}`}</div>

  const content = data?.pages.map(beers => beers.map((beer: BeerType, index : number) => {
    return <Card key={beer.id} beer={beer} />
  }))

  return (
    <div>
      <div className="recipeContainer">
        {content}
      </div>
      <div ref={ref}>{hasNextPage ? 'Loading more...' : 'End of list'}</div>
    </div>
  )


}

export default App
