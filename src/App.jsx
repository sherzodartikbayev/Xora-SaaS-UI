import {
	Download,
	Faq,
	Features,
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
		</main>
	)
}

export default App
