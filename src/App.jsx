import { Banner } from "./components/Banner/Banner";
import { Card } from "./components/Card/Card";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/NavBar/Navbar";
function App() {
	return (
		<main>
			<Navbar />
			<Banner />
			<Card />
			<ContactUs />
			<Footer />
		</main>
	);
}

export default App;
