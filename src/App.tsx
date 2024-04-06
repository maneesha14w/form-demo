import { CardWithForm } from "./components/CardComponent"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className=" mx-auto flex h-screen items-center justify-center ">
				<CardWithForm></CardWithForm>
			</div>
		</ThemeProvider>
	)
}

export default App
