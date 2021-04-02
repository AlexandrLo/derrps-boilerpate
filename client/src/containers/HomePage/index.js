import React, { useState } from 'react'
import Button from 'components/Button'

function getRandom(setNumber) {
	fetch('api/random')
		.then((res) => {
			res
				.json()
				.then((data) => setNumber(data))
				.catch(() => {
					setNumber('error')
				})
		})
		.catch(() => {
			setNumber('error')
		})
}

function HomePage() {
	const [number, setNumber] = useState(0)

	return (
		<div>
			<h1>Home</h1>
			<p>{number}</p>
			<Button onClick={() => getRandom(setNumber)}>
				Get random number from api
			</Button>
		</div>
	)
}

export default HomePage
