import './App.css';
import QR from './components/QR/QR';
import {useState} from "react"

function App() {

	const [value, setValue] = useState("https://cougarcs.com");

	const handleSubmit = (e) => {
		e.preventDefault()
		const field = e.target[0]
		setValue(field.value || "https://cougarcs.com")
		field.value = ""
	}

    return (
		<>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<input name="value" placeholder="Enter URL or UH ID" />
					<button>&rarr;</button>
				</form>
			</div>
			<div className="container">
				<QR value={value} />
				<p>{value}</p>
			</div>
		</>
    );
}

export default App;
