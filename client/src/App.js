import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import GlobalFonts from 'theme/fonts'
import HomePage from 'containers/HomePage'
import AboutPage from 'containers/AboutPage'
import theme from './theme'

export default function App() {
	return (
		<div>
			<GlobalFonts />
			<ThemeProvider theme={theme}>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/about">
						<AboutPage />
					</Route>
				</Switch>
			</ThemeProvider>
		</div>
	)
}
