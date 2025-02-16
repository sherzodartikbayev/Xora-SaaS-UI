import {
	Download,
	Faq,
	Features,
	Footer,
	Header,
	Hero,
	Pricing,
	Testimonials,
} from './sections'

const App = () => {
	return (
		<main className='overflow-hidden'>
			<Header />
			<Hero />
			<Features />
			<Pricing />
			<Faq />
			<Testimonials />
			<Download />
			<Footer />
		</main>
	)
}

export default App
