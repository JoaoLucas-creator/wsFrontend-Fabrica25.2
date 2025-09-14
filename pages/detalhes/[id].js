import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export default function Details(){
  const router = useRouter()
  const { id } = router.query
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    async function load(){
      setLoading(true)
      // id may be like '001' => remove leading zeros
      const numericId = parseInt(id, 10)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numericId}`)
      if (!res.ok) {
        setPokemon(null)
        setLoading(false)
        return
      }
      const data = await res.json()
      setPokemon(data)
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return (
    <>
      <Header />
      <main className="container"><p>Carregando...</p></main>
      <Footer />
    </>
  )

  if (!pokemon) return (
    <>
      <Header />
      <main className="container"><p>Pokémon não encontrado.</p></main>
      <Footer />
    </>
  )

  return (
    <>
      <Head>
        <title>{capitalize(pokemon.name)} - Detalhes</title>
      </Head>

      <Header />
      <main className="container details">
        <div className="detail-card">
          <img src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="meta">
            <h1>{capitalize(pokemon.name)}</h1>
            <p className="id">#{String(pokemon.id).padStart(3,'0')}</p>
            <p><strong>Tipo(s):</strong> {pokemon.types.map(t => capitalize(t.type.name)).join(', ')}</p>
            <p><strong>Peso:</strong> {pokemon.weight} hectograms</p>
            <p><strong>Experiência base:</strong> {pokemon.base_experience}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1) }
