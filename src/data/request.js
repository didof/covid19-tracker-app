import axios from 'axios'
import parsers from './parsers'

async function usStats() {
	const response = await axios.get(
		'https://covidtracking.com/api/v1/us/current.json'
	)

	return parsers.usStats(response.data)
}

async function stateStats(state) {
	console.log(`[stateStats] fetch ${state} data...`)
		const response = await axios.get(
			`https://covidtracking.com/api/v1/states/${state}/current.json`
		)

		return await parsers.stateStats(response.data)
}

export default {
	usStats,
	stateStats,
}
