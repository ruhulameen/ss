import { PASSWORD } from 'shared/consts/regexp'
import * as yup from 'yup'

const date = new Date()

export const basicSchema = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('Required'),
	username: yup.string().required('Required'),
	day: yup.number().positive().max(31).integer().required('Required'),
	month: yup.number().positive().max(12).integer().required('Required'),
	year: yup
		.number()
		.positive()
		.max(date.getFullYear())
		.integer()
		.required('Required'),
	password: yup
		.string()
		.min(5, 'Password must be more than 5 characters')
		.matches(PASSWORD, 'Please create a stronger password')
		.required('Required')
})

export const depositSchema = yup.object().shape({
	deposit: yup
		.number('Please write amount')
		.positive('Deposit must be more than 1$')
		.min(1, 'Deposit must be more than 1$')
		.max(1000000, 'Maximum deposit at one time 1.000.000$')
		.required('Required')
})

export const withdrawSchema = yup.object().shape({
	withdraw: yup
		.number('Please write amount')
		.positive('Withdraw must be more than 1$')
		.min(1, 'Withdraw must be more than 1$')
		.max(1000000, 'Maximum withdraw at one time 1.000.000$')
		.required('Required')
})

export const securitySchema = yup.object().shape({
	pastPassword: yup
		.string()
		.min(5, 'Password must be more than 5 characters')
		.required('Required'),
	password: yup
		.string()
		.min(5, 'Password must be more than 5 characters')
		.matches(PASSWORD, 'Please create a stronger password')
		.required('Required'),

	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null])
		.required('Required')
})

export const email = yup.object().shape({
	email: yup.string().email('Please enter a valid email')
})
