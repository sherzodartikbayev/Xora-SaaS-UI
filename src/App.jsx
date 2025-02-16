import { Faq, Features, Header, Hero, Pricing, Testimonials } from './sections'

const App = () => {
	return (
		<main className='overflow-hidden'>
      <Header />
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<Testimonials />
		</main>
	)
}

export default App