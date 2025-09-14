// Utilities to fetch Pokemon list and details
export async function fetchPokemonList(limit = 151){
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const data = await res.json()
  // data.results -> [{name, url}]
  const promises = data.results.map(async (p) => {
    // extract id from url
    const match = p.url.match(/\/pokemon\/(\d+)\//)
    const id = match ? Number(match[1]) : null
    // fetch detail to get image
    try {
      const detailRes = await fetch(p.url)
      const detail = await detailRes.json()
      const image = detail.sprites.other['official-artwork'].front_default || detail.sprites.front_default
      return { id, name: p.name, image }
    } catch (e) {
      return { id, name: p.name, image: null }
    }
  })
  const list = await Promise.all(promises)
  // sort by id
  list.sort((a,b) => a.id - b.id)
  return list
}
