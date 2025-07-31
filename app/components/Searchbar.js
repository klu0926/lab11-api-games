'use client'

import { useContext, useEffect, useState } from "react"
import { searchContext } from "./searchContext"
import { useSearchParams } from "next/navigation";


export default function Searchbar() {
  // when user are typing
  const [inputValue, setInputValue] = useState('')

  // when user stop typing
  const { searchTerm, setSearchTerm } = useContext(searchContext);

  useEffect(() => {
    // set the user input to the actual searchTerm (trigger fetch)
    const timeout = setTimeout(() => {
      setSearchTerm(inputValue)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [inputValue, searchTerm])

  return (
    <div className="sticky top-6 w-full flex items-center justify-center mt-5 z-100">
      <div className="w-200 p-4 relative">
        <input
          type="text"
          placeholder="search for games..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className=" p-2 px-5 rounded-full w-full bg-gray-800 text-white focus:outline-none"
        />

        <button
          className="absolute w-7 h-7 top-[22px] right-8 text-white cursor-pointer cover  p-2 rounded-full flex items-center justify-center
          hover:bg-gray-700
          "
          onClick={() => {
            setInputValue('')
            setSearchTerm('')
          }}
        >
          <span className="text-xl">x</span>
        </button>
      </div>

    </div>

  )

}