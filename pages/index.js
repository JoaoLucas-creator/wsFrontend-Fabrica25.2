import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { fetchPokemonList } from '../src/utils/fetchPokemons'

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [query, setQuery] = useState('')
  const [view, setView] = useState('grid') // 'grid' or 'list'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const list = await fetchPokemonList(151)
      setPokemons(list)
      setLoading(false)
    }
    load()
  }, [])

  const filtered = pokemons.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.id.toString().padStart(3,'0').includes(query)
  )

  return (
    <>
      <Head>
        <title>PokeApp</title>
        <meta name="description" content="PokeApp - lista de Pokémons" />
      </Head>

      <Header />

      <main className="container">
        <section className="controls">
          <input
            aria-label="Pesquisar pokemons"
            placeholder="Pesquisar por nome ou id (ex: pik, 025)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur() }}
          />
          <div className="buttons">
            <button onClick={() => setView(view === 'grid' ? 'list' : 'grid')}>
              Alternar visual ({view})
            </button>
          </div>
        </section>

        {loading ? <p>Carregando Pokémons...</p> : (
          <section className={view === 'grid' ? 'grid' : 'list'}>
            {filtered.map(p => (
              <article key={p.id} className="card">
                <Link href={`/detalhes/${String(p.id).padStart(3,'0')}`}>
                    <img src={p.image} alt={p.name} />
                    <div className="info">
                      <h3>{capitalize(p.name)}</h3>
                      <p className="id">#{String(p.id).padStart(3,'0')}</p>
                    </div>
                </Link>
              </article>
            ))}
            {filtered.length === 0 && <p>Nenhum Pokémon encontrado.</p>}
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1) }
