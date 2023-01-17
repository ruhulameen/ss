import React, { useContext, useState } from 'react'
import { IoIosClose, IoLogoTwitch } from 'react-icons/io'
import { AiOutlineGoogle } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import { BiCommentError } from 'react-icons/bi'
import { useFormik } from 'formik'

import check from 'assets/icons/check.svg'

import styles from './styles.module.scss'

import { basicSchema } from 'shared/validations/common'
import { DataBase, Store } from 'app/App'

function Input({
	values,
	errors,
	touched,
	handleChange,
	handleBlur,
	id,
	type = 'text'
}) {
	return (
		<label className={styles.stacked} htmlFor={id}>
			<div className={styles.inputTitleWrapper}>
				<div>{id}</div>
			</div>
			<div className={styles.inputWrapper}>
				<div className={styles.inputContent}>
					<input
						id={id.toLowerCase()}
						value={values[id.toLowerCase()]}
						onChange={handleChange}
						onBlur={handleBlur}
						type={type}
						className={styles.input}
						style={
							errors[id.toLowerCase()] && touched[id.toLowerCase()]
								? { border: '2px solid #ff1f44' }
								: { border: '2px solid #2f4553' }
						}
					/>
				</div>
			</div>
			{errors[id.toLowerCase()] && touched[id.toLowerCase()] ? (
				<div className={styles.inputError}>
					<BiCommentError className={styles.errorIcon} />
					<span className={styles.error}>{errors[id.toLowerCase()]}</span>
				</div>
			) : (
				''
			)}
		</label>
	)
}

function SignUp({ hideSignUpModal }) {
	const [, setStore] = useContext(Store)
	const [, setDataBase] = useContext(DataBase)
	const [userAgree, setUserAgree] = useState(false)

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				email: '',
				username: '',
				day: '',
				month: '',
				year: '',
				password: ''
			},
			validationSchema: basicSchema,
			onSubmit
		})

	function onSubmit(values, { resetForm }) {
		setStore((prev) => {
			return {
				...prev,
				user: {
					...prev.user,
					email: values.email,
					username: values.username,
					day: values.day,
					month: values.month,
					year: values.year,
					password: values.password
				},
				isUserLoggedIn: true
			}
		})
		setDataBase((prev) => {
			return {
				...prev,
				users: [
					...prev.users,
					{
						balance: '',
						email: values.email,
						username: values.username,
						day: values.day,
						month: values.month,
						year: values.year,
						password: values.password,
						cardInfo: {
							number: '',
							month: '',
							year: '',
							holder: '',
							cvv: ''
						}
					}
				]
			}
		})
		hideSignUpModal()
		resetForm({ values: '' })
		console.log('auth complete')
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modalAuth}>
				<div className={styles.overlay} onClick={() => hideSignUpModal()}></div>
				<div className={styles.regWrapper} onClick={(e) => e.stopPropagation()}>
					<div className={styles.scroll}>
						<div className={styles.modalContent}>
							<div className={styles.closeBtnWrapper}>
								<button
									onClick={() => hideSignUpModal()}
									className={styles.closeBtn}
								>
									<IoIosClose className={styles.closeIcon} />
								</button>
							</div>
							<div className={styles.content}>
								<div className={styles.centerWrapperTitle}>
									<h1 className={styles.title}>Create an Account</h1>
								</div>
								<form onSubmit={handleSubmit} className={styles.form}>
									<Input
										id='Email'
										values={values}
										errors={errors}
										touched={touched}
										handleChange={handleChange}
										handleBlur={handleBlur}
									/>
									<Input
										id='Username'
										values={values}
										touched={touched}
										errors={errors}
										handleChange={handleChange}
										handleBlur={handleBlur}
									/>
									<Input
										id='Password'
										values={values}
										touched={touched}
										errors={errors}
										handleChange={handleChange}
										handleBlur={handleBlur}
										type='password'
									/>
									{/* Input for Date */}
									<label className={styles.stacked}>
										<div className={styles.inputTitleWrapper}>
											<div>Date of Birth</div>
										</div>
										<div className={styles.inputDateContent}>
											<label className={styles.stackedInput} htmlFor='day'>
												<div className={styles.inputWrapper}>
													<div className={styles.inputContent}>
														<input
															id='day'
															value={values.day}
															onChange={handleChange}
															onBlur={handleBlur}
															type='text'
															className={styles.input}
															placeholder='DD'
															style={
																errors.day && touched.day
																	? { border: '2px solid #ff1f44' }
																	: { border: '2px solid #2f4553' }
															}
														/>
													</div>
												</div>
												{errors.day && touched.day ? (
													<div className={styles.inputError}>
														<BiCommentError className={styles.errorIcon} />
														<span className={styles.error}>{errors.day}</span>
													</div>
												) : (
													''
												)}
											</label>
											<label className={styles.stackedInput} htmlFor='month'>
												<div className={styles.inputWrapper}>
													<div className={styles.inputContent}>
														<input
															id='month'
															value={values.month}
															onChange={handleChange}
															onBlur={handleBlur}
															type='text'
															className={styles.input}
															placeholder='Month'
															style={
																errors.month && touched.month
																	? { border: '2px solid #ff1f44' }
																	: { border: '2px solid #2f4553' }
															}
														/>
													</div>
												</div>
												{errors.month && touched.month ? (
													<div className={styles.inputError}>
														<BiCommentError className={styles.errorIcon} />
														<span className={styles.error}>{errors.month}</span>
													</div>
												) : (
													''
												)}
											</label>
											<label className={styles.stackedInput} htmlFor='year'>
												<div className={styles.inputWrapper}>
													<div className={styles.inputContent}>
														<input
															id='year'
															value={values.year}
															onChange={handleChange}
															onBlur={handleBlur}
															type='text'
															className={styles.input}
															placeholder='YYYY'
															style={
																errors.year && touched.year
																	? { border: '2px solid #ff1f44' }
																	: { border: '2px solid #2f4553' }
															}
														/>
													</div>
												</div>
												{errors.year && touched.year ? (
													<div className={styles.inputError}>
														<BiCommentError className={styles.errorIcon} />
														<span className={styles.error}>{errors.year}</span>
													</div>
												) : (
													''
												)}
											</label>
										</div>
									</label>
									<div className={styles.termsTextWrapper}>
										<div className={styles.registerTerms}>
											<button
												type='button'
												onClick={() => setUserAgree(!userAgree)}
												className={styles.btnTerms}
											>
												<div
													className={
														userAgree
															? styles.indicatorEnable
															: styles.indicatorDisabled
													}
												>
													{userAgree ? <img src={check} alt='Check' /> : ''}
												</div>
												<div className={styles.termsContent}>
													<div className={styles.termsText}>
														I agree and understand the Terms & Conditions*
													</div>
												</div>
											</button>
										</div>
									</div>
									<button
										className={styles.playNowBtn}
										onClick={(e) => e.preventDefault}
										type='submit'
									>
										<span className={styles.btnText}>Play Now</span>
									</button>
								</form>
								<div className={styles.authWrapper}>
									<div className={styles.orContent}>
										<span className={styles.orText}>OR</span>
									</div>
								</div>
								<div className={styles.auth}>
									<div className={styles.providerWrapper}>
										<button className={styles.provider}>
											<CgFacebook className={styles.fIcon} />
										</button>
									</div>
									<div className={styles.providerWrapper}>
										<button className={styles.provider}>
											<AiOutlineGoogle className={styles.fIcon} />
										</button>
									</div>
									<div className={styles.providerWrapper}>
										<button className={styles.provider}>
											<IoLogoTwitch className={styles.icon} />
										</button>
									</div>
								</div>
								<div className={styles.footer}>
									<span className={styles.footerBtn}>
										Already have an account?
										<button className={styles.linkBtn}>
											<span className={styles.linkBtnText}>Sign In</span>
										</button>
									</span>
									<span className={styles.footerLinkWrapper}>
										<button className={styles.footerLink}>
											<span className={styles.footerLinkText}>
												Terms & Conditions*
											</span>
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
