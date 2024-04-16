import BeerType from "../Types/BeerType.types";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Filters from "./Filters";
import { ScrollButton } from "./ScrollToTop";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";
const punkapi = import.meta.env.VITE_punkAPI



const Recipes = () => {
  const {search} = useLocation()

  const fetchData = async ({
    pageParam,
    queryKey
  }: {
    pageParam?: number;
    queryKey: string[];
  }): Promise<any> => {
    const { data } = await axios.get(
      punkapi + '/beers'
      // `http://localhost:8080/beers` //For dev
      // `https://brewdog-api.onrender.com/beers` //For production
      // `https://api.punkapi.com/v2/beers?page=${pageParam}&${search.slice(1)}`
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

  const recipes = data?.pages.map((beers: BeerType[]) =>
    beers.map((beer: BeerType) => {
      return <Card key={beer.id} beer={beer} search={search} />;
    })
  );

  return (
    <div className="recipes" >
      <div className="italic">Click any recipe card to view recipe.</div>
      <Filters/>
      <div className="recipeContainer">{recipes}</div>
      <div className="loading">
        <div ref={ref}>{hasNextPage ? "Loading More..." : "End of list"}</div>
      </div>
      <ScrollButton />
    </div>
  );
};
export default Recipes;
