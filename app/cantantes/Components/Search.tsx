"use client";
import { useState } from "react"
import { fetchSingerById } from "../../utils/database";

export default function Search({ setter }) {
  const [search, setSearch] = useState("");

  const createItem = async (e) => {
    e.preventDefault();
    const response = await fetchSingerById(search)
    if (response[0]) {
      setter(response)
    } else {
      setter(null)
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={createItem} className="max-w-sm mx-auto flex" style={{ gap: 20 }}>
      <div className="mb-5">
        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buscar cantante por ID</label>
        <input
          type="number"
          value={search}
          onChange={handleChange}
          id="age"
          name="age"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button type="submit" style={{ height: "fit-content", margin: "auto" }} className="secondary"><Icon /></button>
    </form>
  )
}

const Icon = () => {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
  )
}