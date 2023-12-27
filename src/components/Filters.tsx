import { FormEvent, useState } from "react";
import FilterProps from "../Types/ParamType.types";

const Filters = ({ setFilterMode, queryParams, setQueryParams, initialQueryParams }: FilterProps) => {
  const [formData, setFormData] = useState(queryParams);

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
    setFilterMode(false)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setQueryParams(formData);
    setFilterMode(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name
          <input
            type="string"
            name="beer_name"
            value={formData.beer_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ABV Less Than
          <input
            type="number"
            name="abv_lt"
            value={formData.abv_lt}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ABV Great Than
          <input
            type="number"
            name="abv_gt"
            value={formData.abv_gt}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          IBU Less Than
          <input
            type="number"
            name="ibu_lt"
            value={formData.ibu_lt}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          IBU Greater Than
          <input
            type="number"
            name="ibu_gt"
            value={formData.ibu_gt}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">set filters</button>
        <button type="button" onClick={clearParams}>Clear</button>
      </form>
    </div>
  );
};
export default Filters;
