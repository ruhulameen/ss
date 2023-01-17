import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useFormik } from 'formik'
import { BiCommentError } from 'react-icons/bi'
import 'react-toastify/dist/ReactToastify.css'

import { DataBase, Store } from 'app/App'
import { securitySchema } from 'shared/validations'

import styles from './styles.module.scss'

function Security() {
	const [dataBase, setDataBase] = useContext(DataBase)
	const [store, setStore] = useContext(Store)

	const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
		useFormik({
			initialValues: {
				pastPassword: '',
				password: '',
				confirmPassword: ''
			},
			validationSchema: securitySchema,
			onSubmit
		})

	const notify = () =>
		toast.error('Error', {
			position: 'top-left',
			autoClose: 3500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark'
		})

	function onSubmit(values, { resetForm }) {
		if (values.pastPassword !== store.user.password) {
			notify()
		} else {
			setStore((prev) => ({
				...prev,
				user: {
					...prev.user,
					password: values.password
				}
			}))
			setDataBase((prev) => {
				return {
					...prev,
					users: dataBase.users.map((user) => {
						if (user.email === store.user.email) {
							return {
								...user,
								password: values.password
							}
						} else {
							return user
						}
					})
				}
			})
		}
		resetForm({ values: '' })
	}

	return (
		<div>
			<form className={styles.cardVariantDefault} onSubmit={handleSubmit}>
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Password</h3>
					<label className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>Old Password</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input
							id='pastPassword'
							type='password'
							value={values.pastPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							style={
								errors.pastPassword && touched.pastPassword
									? { border: '2px solid #ff1f44' }
									: { border: '2px solid #2f4553' }
							}
							className={styles.sectionInput}
						/>
						{errors.pastPassword && touched.pastPassword && (
							<div className={styles.inputError}>
								<BiCommentError className={styles.errorIcon} />
								<span className={styles.error}>{errors.pastPassword}</span>
							</div>
						)}
					</label>
					<label className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>New Password</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input
							id='password'
							type='password'
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							style={
								errors.password && touched.password
									? { border: '2px solid #ff1f44' }
									: { border: '2px solid #2f4553' }
							}
							className={styles.sectionInput}
						/>
						{errors.password && touched.password && (
							<div className={styles.inputError}>
								<BiCommentError className={styles.errorIcon} />
								<span className={styles.error}>{errors.password}</span>
							</div>
						)}
					</label>
					<label className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>
								Confirm New Password
							</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input
							id='confirmPassword'
							type='password'
							value={values.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							style={
								errors.confirmPassword && touched.confirmPassword
									? { border: '2px solid #ff1f44' }
									: { border: '2px solid #2f4553' }
							}
							className={styles.sectionInput}
						/>
						{errors.confirmPassword && touched.confirmPassword && (
							<div className={styles.inputError}>
								<BiCommentError className={styles.errorIcon} />
								<span className={styles.error}>{errors.confirmPassword}</span>
							</div>
						)}
					</label>
					<div className={styles.sectionFooter}>
						<button type='submit' className={styles.btn}>
							<span>Save</span>
						</button>
						<ToastContainer />
					</div>
				</div>
			</form>
		</div>
	)
}

export default Security
