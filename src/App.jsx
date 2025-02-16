import { Faq, Features, Header, Hero, Pricing } from './sections'

const App = () => {
	return (
		<main className='overflow-hidden'>
      <Header />
			<Hero />
			<Features />
			<Pricing />
			<Faq />
		</main>
	)
}

export default App