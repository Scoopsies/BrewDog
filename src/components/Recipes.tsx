import BeerType from "../Types/BeerType.types";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Filters from "./Filters";
import { ScrollButton } from "./ScrollToTop";
import {  useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";
const punkapi = import.meta.env.VITE_punkAPI



const Recipes = () => {
  const {search} = useLocation()
  console.log(search)

  const fetchData = async (): Promise<any> => {
    const { data } = await axios.get(
      punkapi + '/beers' + search
      // `http://localhost:8080/beers` //For dev
      // `https://brewdog-api.onrender.com/beers` //For production
      // `https://api.punkapi.com/v2/beers?page=${pageParam}&${search.slice(1)}`
    );
    console.log(search)
    return data;
  };
  // const queryKey : [string] = ['beers']
  const {isLoading, isError, data, error} = useQuery({
    queryKey: ['beers', search],
    queryFn: fetchData,
  });

  // const { ref, inView } = useInView({
  //   threshold: 0,
  // });

  // useEffect(() => {
  //   if (inView && hasNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{`${error}`}</div>;
  console.log(data)

  const recipes = data?.map((beer: BeerType) => {
    return <Card key={beer.id} beer={beer} search={search} />;
  }
  );

  return (
    <div className="recipes" >
      <div className="italic">Click any recipe card to view recipe.</div>
      <Filters/>
      <div className="recipeContainer">{recipes}</div>
      {/* <div className="loading">
        <div ref={ref}>{hasNextPage ? "Loading More..." : "End of list"}</div>
      </div> */}
      <ScrollButton />
    </div>
  );
};
export default Recipes;
