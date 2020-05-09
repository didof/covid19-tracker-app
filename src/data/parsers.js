import format from './format'
import moment from 'moment'

function usStats(data) {
	return {
		cases: format.number(data.positive),
		deaths: format.number(data.death),
		recovered: format.number(data.recovered),
		ventilator: format.number(data.onVentilatorCurrently),
		hospitalized: format.number(data.hospitalized),
		icu: format.number(data.inIcuCurrently),
		tested: format.number(data.totalTestResults),
		updated: moment(data.lastModified).format('LLLL'),
	}
}

function stateStats(data) {
	return {
		cases: format.number(data.positive),
		deaths: format.number(data.death),
		recovered: format.number(data.recovered),
		ventilator: format.number(data.onVentilatorCurrently),
		hospitalized: format.number(data.hospitalized),
		icu: format.number(data.inIcuCurrently),
		tested: format.number(data.totalTestResults),
		updated: moment(data.lastModified).format('LLLL'),
	}
}

export default {
	usStats,
	stateStats
}
