import format from './format'
import moment from 'moment'

function usStats(data) {
	const [raw] = data

	return {
		case: format.number(raw.positive),
		deaths: format.number(raw.death),
		recovered: format.number(raw.recovered),
		ventilator: format.number(raw.onVentilatorCurrently),
		hospitalized: format.number(raw.hospitalized),
		icu: format.number(raw.inIcuCurrently),
		tested: format.number(raw.totalTestResults),
		updated: moment(raw.lastModified).format('LLLL'),
	}
}

export default {
	usStats,
}
