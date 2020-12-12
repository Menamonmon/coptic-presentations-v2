import {
	Agpeya,
	Psalmody,
	Pascha,
	Liturgies,
	StBasilLiturgy,
	StGregoryLiturgy,
	StCyrilLiturgy,
	Readings,
	Melodies,
	Antiphonary,
	Clergy,
	Special
} from './pages'

const pagesData = [
  {
	path: "/agpeya",
	name: "Agpeya",
	component: Agpeya,
	subsections: []
  },
  {
	path: "/pascha",
	name: "Pascha",
	component: Pascha,
	subsections: []
  },
  {
	path: "/readings",
	name: "Readings",
	component: Readings,
	subsections: []
  },
  {
	path: "/melodies",
	name: "Melodies",
	component: Melodies,
	subsections: []
  },
  {
	path: "/antiphonary",
	name: "Antiphonary",
	component: Antiphonary,
	subsections: []
  },
  {
	path: "/clergy",
	name: "Clergy",
	component: Clergy,
	subsections: []
  },
  {
	path: "/liturgies",
	name: "Liturgies",
	component: Liturgies,
	subsections: [
		{
			path: '/stbasil',
			name: "St. Basil",
			component: StBasilLiturgy,
		},
		{
			path: '/stgregory',
			name: "St. Gregory",
			component: StGregoryLiturgy,
		},
		{
			path: '/stcyril',
			name: "St. Cyril",
			component: StCyrilLiturgy,
		}
		
	]
  },
  {
	path: "/psalmody",
	name: "Psalmody",
    component: Psalmody,
	subsections: []
  },
  {
	path: "/special",
	name: "Special",
	component: Special,
	subsections: []
  }
]

export default pagesData;