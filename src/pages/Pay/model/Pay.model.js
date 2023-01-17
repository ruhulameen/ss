const { makeAutoObservable } = require('mobx')

class PayModel {
	cardInfo = {
		number: '',
		month: '',
		year: '',
		holder: '',
		cvv: ''
	}

	constructor() {
		makeAutoObservable(this)
	}

	setCardNumber(value) {
		this.cardInfo.number = value
	}

	setCardMonth(value) {
		this.cardInfo.month = value
	}

	setCardYear(value) {
		this.cardInfo.year = value
	}

	setCardHolder(value) {
		this.cardInfo.holder = value
	}

	setCardCvv(value) {
		this.cardInfo.cvv = value
	}

	resetCardInfo() {
		this.cardInfo = {
			number: '',
			month: '',
			year: '',
			holder: '',
			cvv: ''
		}
	}
}

export default new PayModel('')
