export interface LayoutElement {
	name: string;
	color: string;
	visible: boolean;
	negative: boolean;
	is_selected: boolean;
}

export const defaultElement: LayoutElement = {
    name: '',
    color: '#fff',
    visible:false,
    negative: false,
	is_selected: false
}


export const elementsList: { [index: string]: LayoutElement } = {
	KN: {
		name: 'n- карман, включающий p- транзиторы',
		color: '#b36b6b7b',
		visible: true,
		negative: true,
		is_selected: false
	},
	KP: {
		name: 'Отсутствует p- карман',
		color: '#c7cc3eae',
		visible: true,
		negative: false,
		is_selected: true
	},
	NA: {
		name: 'n++ - активная область n- транзитора',
		color: '#b02a22b3',
		visible: true,
		negative: false,
		is_selected: true
	},
	NK: {
		name: 'n++ - контактная область к n- карману',
		color: '#780b05b3',
		visible: true,
		negative: false,
		is_selected: true
	},
	NE: {
		name: 'n++ - контактная область к n- карману, эквипотенциально соединенная с p++ активной областью',
		color: '#ae1a83b3',
		visible: true,
		negative: false,
		is_selected: true
	},
	PA: {
		name: 'p++ - контактная область к p- карману',
		color: '#7472e0d6',
		visible: true,
		negative: false,
		is_selected: true
	},
	PK: {
		name: 'p++ - контактная область к p- карману',
		color: '#22209cd6',
		visible: true,
		negative: false,
		is_selected: true
	},
	PE: {
		name: 'p++ - контактная область к p- карману, эквипотенциально соединенная с n++ активной областью',
		color: '#81209cd6',
		visible: true,
		negative: false,
		is_selected: true
	},
	LN: {
		name: 'n - подзатворная область',
		color: '#910c0c6b',
		visible: true,
		negative: false,
		is_selected: true
	},
	LP: {
		name: 'p - подзатворная область',
		color: '#191c6d6b',
		visible: true,
		negative: false,
		is_selected: true
	},
	N: {
		name: 'n++ - область легирования',
		color: '#d5635a6b',
		visible: true,
		negative: false,
		is_selected: true
	},
	P: {
		name: 'p++ - область легирования',
		color: '#5a5fd56b',
		visible: true,
		negative: true,
		is_selected: false
	},
	SI: {
		name: 'Поликремний, в том числе закрылок транзистора',
		color: '#5dd55ac8',
		visible: true,
		negative: false,
		is_selected: true
	},
	SN: {
		name: 'Затвор n- транзитора',
		color: '#a3e703f7',
		visible: true,
		negative: false,
		is_selected: true
	},
	SP: {
		name: 'Затвор p- транзитора',
		color: '#03e795e2',
		visible: true,
		negative: false,
		is_selected: true
	},
	SZ: {
		name: 'Закрылок транзистора',
		color: '#449679e2',
		visible: true,
		negative: false,
		is_selected: true
	},
	CNA: {
		name: 'Контактное окно между М1C_ и NA_',
		color: '#ff1212ff',
		visible: true,
		negative: false,
		is_selected: true
	},
	CNK: {
		name: 'Контактное окно между М1C_ и NK_',
		color: '#870303ff',
		visible: true,
		negative: false,
		is_selected: true
	},
	CNE: {
		name: 'Контактное окно между М1C_ и NE_',
		color: '#690202ff',
		visible: true,
		negative: false,
		is_selected: true
	},
	CPA: {
		name: 'Контактное окно между М1C_ и PA_',
		color: '#0275dfff',
		visible: true,
		negative: false,
		is_selected: true
	},
	CPK: {
		name: 'Контактное окно между М1C_ и PK_',
		color: '#2569a8ff',
		visible: true,
		negative: false,
		is_selected: true
	},
	CPE: {
		name: 'Контактное окно между М1C_ и PE_',
		color: '#8225a8ff',
		visible: true,
		negative: false,
		is_selected: true
	},
	CSI: {
		name: 'Контактное окно между M1C_ и SI_',
		color: '#09b706ff',
		visible: true,
		negative: false,
		is_selected: true
	},
	M1: {
		name: 'Металл нижний',
		color: '#5ff8f566',
		visible: true,
		negative: false,
		is_selected: true
	},
	M1C: {
		name: 'Металл нижний, окружающий контакт',
		color: '#6cdedc66',
		visible: true,
		negative: false,
		is_selected: true
	},
	M1A: {
		name: 'Металл нижний при большой ширине линии (> 10 лямбда, для пропускания большого тока)',
		color: '#75b4b366',
		visible: true,
		negative: false,
		is_selected: true
	},
	CM: {
		name: 'Контактное окно между М2C_ и M1C_',
		color: '#c0aceeff',
		visible: true,
		negative: false,
		is_selected: true
	},
	CM1: {
		name: 'Отсутствует контактное окно между М2C_ и M1C_',
		color: '#c0aceeff',
		visible: true,
		negative: false,
		is_selected: true
	},
	M2: {
		name: 'Металл верхний',
		color: '#daa24f66',
		visible: true,
		negative: false,
		is_selected: true
	},
	M2C: {
		name: 'Металл верхний, окружающий контакт',
		color: '#caa16566',
		visible: true,
		negative: false,
		is_selected: true
	},
	M2A: {
		name: 'Металл второй при большой ширине линии (> 10 лямбда, для пропускания большого тока)',
		color: '#ab8f6666',
		visible: true,
		negative: false,
		is_selected: true
	},
	CM2: {
		name: 'Отсутствует контактное окно между М3C_ и M2C_',
		color: '#f7f78bff',
		visible: true,
		negative: false,
		is_selected: true
	},
	M3: {
		name: 'Отсутствует металл третий',
		color: '#f7f78b38',
		visible: true,
		negative: true,
		is_selected: false
	},
	M3C: {
		name: 'Отсутствует металл третий, окружающий контакт',
		color: '#f0f09938',
		visible: true,
		negative: true,
		is_selected: false
	},
	M3A: {
		name: 'Отсутствует металл третий при большой ширине линии',
		color: '#e1e1a138',
		visible: true,
		negative: true,
		is_selected: false
	},
	CM3: {
		name: 'Отсутствует контактное окно между М4C_ и M3C_',
		color: '#a1e1a5ed',
		visible: true,
		negative: false,
		is_selected: true
	},
	M4: {
		name: 'Отсутствует металл четвертый',
		color: '#e222a93e',
		visible: true,
		negative: true,
		is_selected: false
	},
	M4C: {
		name: 'Отсутствует металл четвертый, окружающий контакт',
		color: '#ce36a13e',
		visible: true,
		negative: true,
		is_selected: false
	},
	M4A: {
		name: 'Отсутствует металл четвертый при большой ширине линии',
		color: '#b75c9c3e',
		visible: true,
		negative: true,
		is_selected: false
	},
	CM4: {
		name: 'Отсутствует контактное окно между М5C_ и M4C_',
		color: '#965cb7e1',
		visible: true,
		negative: false,
		is_selected: true
	},
	M5: {
		name: 'Отсутствует металл пятый',
		color: '#c50f0f3e',
		visible: true,
		negative: true,
		is_selected: false
	},
	M5C: {
		name: 'Отсутствует металл пятый, окружающий контакт',
		color: '#b121213e',
		visible: true,
		negative: true,
		is_selected: false
	},
	M5A: {
		name: 'Отсутствует металл пятый при большой ширине линии',
		color: '#8b35353e',
		visible: true,
		negative: true,
		is_selected: false
	},
	CM5: {
		name: 'Отсутствует контактное окно между М6C_ и M5C_',
		color: '#fb936fff',
		visible: true,
		negative: false,
		is_selected: true
	},
	M6: {
		name: 'Отсутствует металл верхний',
		color: '#06a24a47',
		visible: true,
		negative: true,
		is_selected: false
	},
	M6C: {
		name: 'Отсутствует металл верхний, окружающий контакт',
		color: '#17a55547',
		visible: true,
		negative: true,
		is_selected: false
	},
	M6A: {
		name: 'Отсутствует металл верхний при большой ширине линии',
		color: '#23764747',
		visible: true,
		negative: true,
		is_selected: false
	},
	B1: {
		name: 'Границы фрагмента левая и правая',
		color: '#13131347',
		visible: true,
		negative: false,
		is_selected: true
	},
	B2: {
		name: 'Границы фрагмента нижняя и верхняя',
		color: '#131313b1',
		visible: true,
		negative: false,
		is_selected: true
	},
	CW: {
		name: 'Контактное окно с внешним выводом БИС',
		color: '#131313f9',
		visible: true,
		negative: true,
		is_selected: true
	}
};
