import { Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
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

  const queryKey: [string, queryParams] = ["beers", queryParams];

  const params = Object.entries(queryParams)
    .filter((pair) => pair[1])
    .map((pair) => pair.join("="))
    .join("&");

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

  const infiniteQuery = useInfiniteQuery({
    queryKey,
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  return (
    <div>
      <h1>Diy Dog</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Recipes
              infiniteQuery={infiniteQuery}
              queryParams={queryParams}
              setQueryParams={setQueryParams}
              initialQueryParams={initialQueryParams}
            />
          }
        />
        <Route path="/beer/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
