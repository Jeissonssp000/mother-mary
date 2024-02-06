"use client";
import { useEffect, useState } from "react"
import { deleteSinger, fetchSingers } from "../utils/database";
import NewSinger from "./Components/NewSinger"
import Table from "./Components/Table"
import Search from "./Components/Search";

export default function page() {
  const [singers, setSingers] = useState([])
  const [searchList, setSearch] = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getSingers()
    reset()
  }, [])

  const getSingers = async () => {
    const response = await fetchSingers()
    setSingers(response);
  }

  const deleteItem = async (id) => {
    await deleteSinger(id)
    reset()
  }

  const reset = () => {
    getSingers()
    setSearch(null)
    setSelected(null)
  }

  return (
    <div className="flex flex-col">
      <h3 className="p-8">Consultar un cantante por ID</h3>
      <Search setter={setSearch} />
      {searchList ? <Table {...{ deleteItem, setSelected, singers: searchList }} /> : null}
      <h3 className="p-8">Listado de cantantes</h3>
      <Table {...{ deleteItem, setSelected, singers }} />
      <h3 className="p-8">{selected ? `Actualizar cantante ID: ${selected.id}` : "Crear un nuevo cantante"}</h3>
      <NewSinger {...{ reset, selected, setSelected }} />
      <br />
      <br />
    </div>
  )
}
