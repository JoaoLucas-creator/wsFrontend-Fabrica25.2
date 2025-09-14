export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="flex justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="Pokémon Logo"
            width={150}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h1></h1>
        <nav>
          <a href="/">Home</a>
        </nav>
      </div>
    </header>
  )
}
