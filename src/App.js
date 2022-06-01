import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

function App() {
	return (
		<>
			<CustomCursor />
			<Navbar />
			<div className="bg-center bg-cover bg-backgroundgr">
				<div className="bg-center bg-cover scrollContainer bg-backgroundgr">
					<div className="scrollElement ">
						<Home className="scrollElement" />
					</div>
					<div className="scrollElement">
						<About />
					</div>
					<div className="scrollElement">
						<Skills />
					</div>

					<Gallery />
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;