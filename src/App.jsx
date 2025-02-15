import { Features, Header, Hero, Pricing } from './sections'

const App = () => {
	return (
		<main className='overflow-hidden'>
      <Header />
			<Hero />
			<Features />
			<Pricing />
		</main>
	)
}

export default App