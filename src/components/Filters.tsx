import { FormEvent, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Filters = () => {

  const {search} = useLocation()
  const theParams = Object.fromEntries(
    new URLSearchParams(search)
  )

  const [searchParams, setSearchParams] = useSearchParams()
  const [formData, setFormData] = useState(theParams);
  const [filterMode, setFilterMode] = useState(false)

  const handleChange = (e: FormEvent) => {
    const {name, value} = e.target as HTMLInputElement;
    setFormData((prevQueryParams) => ({
      ...prevQueryParams,
      [name]: value,
    }));
  }

  const clearParams = () => {
    setSearchParams('')
    setFilterMode(false)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const params = Object.entries(formData)
    .filter((pair) => pair[1])
    .map((pair) => pair.join("="))
    .join("&");
    setSearchParams(params)
    setFilterMode(false);
  }

  if (!filterMode) return (
    <div className="filters">
    <button onClick={() => setFilterMode(!filterMode)}>Search and Filter</button>
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
            value={formData.beer_name ? formData.beer_name : ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ABV Less Than:
          <input
            type="number"
            name="abv_lt"
            value={formData.abv_lt ? formData.abv_lt : ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ABV Great Than:
          <input
            type="number"
            name="abv_gt"
            value={formData.abv_gt ? formData.abv_gt : ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          IBU Less Than:
          <input
            type="number"
            name="ibu_lt"
            value={formData.ibu_lt ? formData.abv_lt : ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          IBU Greater Than:
          <input
            type="number"
            name="ibu_gt"
            value={formData.ibu_gt ? formData.ibu_gt : ''}
            onChange={handleChange}
          />
        </label>
        <div className="filterButtons">
          <button>Search</button>
          <button type="button" onClick={clearParams}>Clear</button>
        </div>
        <br />
      </form>
    </div>
  );
};
export default Filters;
