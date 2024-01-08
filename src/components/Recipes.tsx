import BeerType from "../Types/BeerType.types";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import { ScrollButton } from "./ScrollToTop";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { queryParams } from "../Types/ParamType.types";
import { useLocation } from "react-router-dom";

const Recipes = () => {

  // const initialQueryParams = {
  //   beer_name: "",
  //   abv_lt: 0,
  //   abv_gt: 0,
  //   ibu_lt: 0,
  //   ibu_gt: 0,
  // };

  // const [queryParams, setQueryParams] = useState(initialQueryParams);
  const {search} = useLocation()

  const fetchData = async ({
    pageParam,
  }: {
    pageParam?: number;
    queryKey: string[];
  }): Promise<any> => {
    const { data } = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${pageParam}&${search.slice(1, search.length)}`
    );
    return data;
  };

  const {fetchNextPage, hasNextPage, isLoading, isError, data, error} = useInfiniteQuery({
    queryKey: ['beers', search],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{`${error}`}</div>;

  const content = data?.pages.map((beers: BeerType[]) =>
    beers.map((beer: BeerType) => {
      return <Card key={beer.id} beer={beer} />;
    })
  );

  return (
    <div>
      <Filters
        // queryParams={queryParams}
        // setQueryParams={setQueryParams}
        // initialQueryParams={initialQueryParams}
      />
      <div className="recipeContainer">{content}</div>
      <div className="loading">
        <div ref={ref}>{hasNextPage ? "Loading More..." : "End of list"}</div>
      </div>
      <ScrollButton />
    </div>
  );
};
export default Recipes;
