'use client'

import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { searchContext } from "./searchContext"

export default function Games() {
  const defaultLimit = 40
  const { searchTerm, setSearchTerm } = useContext(searchContext)

  const [isLoading, setIsLoading] = useState(false)
  const [games, setGames] = useState([])

  useEffect(() => {
    async function fetchGames() {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/games?limit=${defaultLimit}&name=${searchTerm}`)

        if (!response.ok) throw new Error(response.status)
        const fetchGames = await response.json()

        console.log('fetchGames.results: ', fetchGames.results)

        setGames(fetchGames.results)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    // fetch games
    fetchGames()
  }, [searchTerm])

  return (
    <div className="flex flex-wrap gap-6 p-10 justify-center items-center">
      {isLoading ? (
        <div className="text-white flex gap-2" >
          <p>Loading Please Wait...</p>
          {/* Loading icon*/}
          <div className="h-4 w-4 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (

        // HAS RESULT
        games.length > 0 ? (
          games.map((game) => (
            <div key={game.id} className="flex flex-col items-center w-[180px] h-[260px] bg-gray-800 rounded-md pb-1 px-0 overflow-hidden">
              {/* image */}
              <div className="relative h-[185px] w-full border">
                {game.image?.thumb_url && (
                  <img
                    alt={game.name}
                    src={game.image.medium_url}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />

                )}
              </div>

              {/* name */}
              <p className="p-2 text-sm font-bold text-left  text-white w-full">
                {game.aliases ?? game.name}
              </p>
            </div>
          ))
        ) : (
          // NO RESULT
          <p className="text-white">No games found, please try again.</p>
        )


      )}
    </div>
  );
}