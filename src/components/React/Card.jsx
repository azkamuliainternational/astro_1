import { useEffect, useState } from "react"
import Button from "./Button"
import Skeleton from "./Skeleton"

export default function Card() {
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    const url = isEmpty(pokemon) ? import.meta.env.PUBLIC_BASE_URL + "?limit=10" : pokemon.next

    async function getPokemon() {
      const signal = controller.signal
      const res = await fetch(url, { signal })
      console.log(url)
      const data = await res.json()

      if (isEmpty(pokemon)) {
        setPokemon(data)
      } else {
        setPokemon((old) => ({
          ...data,
          results: [...old.results, ...data.results],
        }))
      }
      setIsLoading(false)
    }

    getPokemon()

    return () => {
      controller.abort()
    }
  }, [page])

  return isEmpty(pokemon) ? (
    <Skeleton />
  ) : (
    <>
      <section className="flex flex-wrap gap-3  justify-center ">
        {pokemon.results?.map((item) => (
          <a key={item.name} href={`/pokedex/${item.name}`}>
            <div className=" bg-blue-100 rounded-xl  shadow-xl  hover:bg-yellow-100 ">
              <figure className="flex w-[300px] h-[200px]  overflow-hidden hover:overflow-visible mx-auto py-3  ">
                <img class="mx-auto  object-contain transition-transform duration-200 ease-in-out hover:scale-125"
                  src={`${import.meta.env.PUBLIC_IMG_URL}/${item.url
                    .slice(34)
                    .replace("/", "")}.svg`}
                  alt="poke" 
                />
              </figure>
              <div class="pt-1">
                <p class="text-green-300 text-center text-lg bg-violet-700 h-10 mx-20 rounded-t-full pt-2 shadow-xl font-semibold ">{item.name}</p>
              </div>

              
            </div>
          </a>
        ))}
      </section>
      <div className="text-center mt-8">
        <Button onClick={() => setPage(page + 1)} disabled={isLoading}>
          Load More Pokemon
        </Button>
      </div>
    </>
  )
}

function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) return false
  }
  return true
}