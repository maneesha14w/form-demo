import { useState } from "react"
import { CardWithForm } from "./components/CardComponent"
import { ThemeProvider } from "./components/ui/theme-provider"
import { ModeToggle } from "./components/ui/mode-toggle"

const App = () => {
	const [name, setName] = useState("Maneesha")
	const [district, setDistrict] = useState("Colombo")

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex min-h-screen flex-col items-center justify-center gap-14">
				<header className="flex items-center gap-8 text-2xl">
					<div>{name + " is from " + district}</div>
					<ModeToggle />
				</header>
				<CardWithForm
					setDistrict={setDistrict}
					setName={setName}
				></CardWithForm>
			</div>
		</ThemeProvider>
	)
}

export default App
