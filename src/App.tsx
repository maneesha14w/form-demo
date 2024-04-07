import { useState } from "react"
import { CardWithForm } from "./components/CardComponent"
import { ThemeProvider } from "./components/ui/theme-provider"
import { ModeToggle } from "./components/ui/mode-toggle"

const App = () => {
	const [data, setData] = useState({ name: "Maneesha", district: "Colombo" })
	function onSubmit(
		e: React.MouseEvent<HTMLButtonElement>,
		formName: string,
		formDistrict: string,
	) {
		e.preventDefault()
		setData({ name: formName, district: formDistrict })
	}

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex min-h-screen flex-col items-center justify-center gap-14">
				<header className="flex items-center gap-8 text-2xl">
					<div>{data.name + " is from " + data.district}</div>
					<div className="hidden lg:block">
						<ModeToggle />
					</div>
				</header>
				<CardWithForm setData={setData} onSubmit={onSubmit}></CardWithForm>
			</div>
		</ThemeProvider>
	)
}

export default App
