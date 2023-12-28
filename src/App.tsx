import axios from "axios";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Card from "./components/Card";
import BeerType from "./Types/BeerType.types";
import Filters from "./components/Filters";
import { queryParams } from "./Types/ParamType.types";

function App() {
  const initialQueryParams = {
    beer_name: "",
    abv_lt: 0,
    abv_gt: 0,
    ibu_lt: 0,
    ibu_gt: 0,
  };

  const [queryParams, setQueryParams] = useState(initialQueryParams);

  const params = Object.entries(queryParams)
    .filter((pair) => pair[1])
    .map((pair) => pair.join("="))
    .join("&");
  console.log(params);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchData = async ({
    pageParam,
    queryKey,
  }: {
    pageParam?: number;
    queryKey: [string, queryParams];
  }): Promise<any> => {
    const params = Object.entries(queryKey[1])
      .filter((pair) => pair[1])
      .map((pair) => pair.join("="))
      .join("&");
    const { data } = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${pageParam}&${params}`
    );
    return data;
  };

  const queryKey: [string, queryParams] = ["beers", queryParams];

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey,
      queryFn: fetchData,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{`${error}`}</div>;

  const content = data?.pages.map((beers) =>
    beers.map((beer: BeerType) => {
      return <Card key={beer.id} beer={beer} />;
    })
  );

  return (
    <div>
      <h1>Your the man now Diy Dog</h1>
      <Filters 
      queryParams={queryParams}
      setQueryParams={setQueryParams}
      initialQueryParams={initialQueryParams}
      />
      <div className="recipeContainer">{content}</div>
      <div ref={ref}>{hasNextPage ? "Loading more..." : "End of list"}</div>
    </div>
  );
}

export default App;
