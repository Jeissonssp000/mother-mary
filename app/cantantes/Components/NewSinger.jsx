"use client";
import { useEffect, useState } from "react"
import { createSinger, updateSinger } from "../../utils/database";

export default function NewSinger({ reset, selected, setSelected }) {
  const [formData, setFormData] = useState({ name: '', age: '', genre: '' });

  useEffect(() => {
    if (selected) {
      setFormData({ name: selected.name, age: selected.age, genre: selected.genre })
    } else {
      setFormData({ name: '', age: '', genre: '' })
    }
  }, [selected])


  const createItem = async (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const age = e.target.age.value
    const genre = e.target.genre.value
    if (selected) {
      await updateSinger(selected.id, { name, age, genre })
    } else {
      await createSinger({ name, age, genre })
    }
    reset()
    setFormData({ name: '', age: '', genre: '' });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={createItem} className="max-w-sm mx-auto" style={{ gap: 20 }}>
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          id="name"
          name="name"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
        <input
          type="number"
          value={formData.age}
          onChange={handleChange}
          id="age"
          name="age"
          required
          min={18}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero musical</label>
        <input
          type="text"
          value={formData.genre}
          onChange={handleChange}
          id="genre"
          name="genre"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex" style={{ gap: 10 }}>
        {selected ? <button onClick={() => setSelected(null)} className="secondary">Cancelar</button> : null}
        <button type="submit" className="secondary">{selected ? "Actualizar" : "Crear"}</button>
      </div>
    </form>
  )
}