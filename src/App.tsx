import { useState } from "react"
import { CardWithForm } from "./components/CardComponent"
import { ThemeProvider } from "./components/ui/theme-provider"
import { ModeToggle } from "./components/ui/mode-toggle"

const App = () => {
	/**
	 * State for storing user data.
	 * @type {object}
	 * @property {string} name - The name of the user.
	 * @property {string} district - The district where the user is from.
	 */
	const [data, setData] = useState({ name: "Maneesha", district: "Colombo" })
	/**
	 * Function to handle form submission.
	 * @param {React.MouseEvent<HTMLButtonElement>} e - The click event.
	 * @param {string} formName - The new name value from the form.
	 * @param {string} formDistrict - The new district value from the form.
	 */
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
