export type queryParams = {
    beer_name: string;
    abv_lt: number;
    abv_gt: number;
    ibu_lt: number;
    ibu_gt: number;
  }

type FilterProps = {
  setFilterMode: React.Dispatch<React.SetStateAction<boolean>>,
  queryParams: queryParams,
  setQueryParams: React.Dispatch<React.SetStateAction<queryParams>>,
  initialQueryParams: queryParams
};

export default FilterProps