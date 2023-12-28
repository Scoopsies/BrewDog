import { FormEvent, useState } from "react";
import FilterProps from "../Types/ParamType.types";

const Filters = ({ queryParams, setQueryParams, initialQueryParams }: FilterProps) => {
  const [formData, setFormData] = useState(queryParams);
  const [filterMode, setFilterMode] = useState(false)

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prevQueryParams) => ({
      ...prevQueryParams,
      [name]: value,
    }));
    console.log(formData)
  };

  const clearParams = () => {
    setQueryParams(initialQueryParams);
    setFormData(initialQueryParams)
    setFilterMode(false)
    console.log(queryParams)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setQueryParams(formData);
    setFilterMode(false);
    console.log(queryParams)
  }

  if (!filterMode) return (
    <div className="filters">
    <button onClick={() => setFilterMode(!filterMode)}>Filter</button>
  </div>
  )

  return (
    <div className="filters">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="search"
            name="beer_name"
            value={formData.beer_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ABV Less Than:
          <input
            type="number"
            name="abv_lt"
            value={formData.abv_lt}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ABV Great Than:
          <input
            type="number"
            name="abv_gt"
            value={formData.abv_gt}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          IBU Less Than:
          <input
            type="number"
            name="ibu_lt"
            value={formData.ibu_lt}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          IBU Greater Than:
          <input
            type="number"
            name="ibu_gt"
            value={formData.ibu_gt}
            onChange={handleChange}
          />
        </label>
        <br />

        <div className="filterButtons">
          <button type="submit">set filters</button>
          <button type="button" onClick={clearParams}>Clear</button>
        </div>
      </form>
    </div>
  );
};
export default Filters;
