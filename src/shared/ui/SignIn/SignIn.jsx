import React, { useContext, useState } from 'react'
import { IoIosClose, IoLogoTwitch } from 'react-icons/io'
import { AiOutlineGoogle } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import { sleep } from 'shared/helpers/common.js'
import { guestPostApi } from 'shared/helpers/api_communication.js'

import styles from 'shared/ui/SignIn/styles.module.scss'
import { DataBase, Store } from 'app/App'

function SignIn({ hideSignInModal }) {
    const [, setStore] = useContext(Store)
    const [dataBase] = useContext(DataBase)
    const [emailOrUsername, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [apiResponse, setApiResponse] = useState('')
    const [loading, setLoading] = useState(false);
    function sleeper(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    async function handleTokenLoginClick(event) {
		event.preventDefault()
        setLoading(true)
        setError('')
		if (emailOrUsername === '' || password === '') {
			setError('Please fill form completely.')
            setLoading(false)
		} else {
            const response = await guestPostApi('/api/auth/login', { email : emailOrUsername, password: password }).then(data => data.json());
				await sleeper(650);
				console.log(response.user);
			if(response.message) {
            	setLoading(false)
                setError(response.message)
                setPassword('')
            } else {
               	const userStored = JSON.stringify((
					{
						username: response.user.name,
						email: response.user.email,
						day: (response.user.dob).split('-')[2],
						month: (response.user.dob).split('-')[1],
						year: (response.user.dob).split('-')[0],
						token: response.access_token,
						cardInfo: {
							number: '1111 1111 1111 1111',
							month: '1',
							year: '21',
							holder: 'Admin',
							cvv: '111'
                   		}
                	}
				));
                localStorage.setItem('user', userStored);
                if(userStored) {
					setStore(() => ({ user: { ...userStored }, isUserLoggedIn: true }))
					setError('')
					setEmailOrUsername('')
					setPassword('')
					hideSignInModal()
                    console.log('Auth completed succesfully and was able to store token in browser\'s local storage')
                } else {
                    setError("Unable to save session in your browser\'s local storage API");
                }
            }


            /*

            if (fetching.ok) {

            } else {
                console.log(fetching)

                try {
                    setError(fetching.message)

                } catch(err) {
                    setError("Something went wrong..")
                }

            }

			dataBase.users.forEach((user) => {
				if (
					(emailOrUsername === user.email && password === user.password) ||
					(emailOrUsername === user.username && password === user.password)
				) {
					setStore(() => ({ user: { ...user }, isUserLoggedIn: true }))
					setError('')
					setEmailOrUsername('')
					setPassword('')
					hideSignInModal()
					console.log('auth complete')
				} else {
					setError('User not found')
				}
			})
*/
		}
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modalAuth}>
				<div className={styles.overlay} onClick={() => hideSignInModal()}></div>
				<div className={styles.regWrapper} onClick={(e) => e.stopPropagation()}>
					<div className={styles.scroll}>
						<div className={styles.modalContent}>
							<div className={styles.closeBtnWrapper}>
								<button
									onClick={() => hideSignInModal()}
									className={styles.closeBtn}
								>
									<IoIosClose className={styles.closeIcon} />
								</button>
							</div>
							<div className={styles.content}>
								<div className={styles.centerWrapperTitle}>
									<h1 className={styles.title}>Sign In</h1>
								</div>
								<form className={styles.form}>
									<label className={styles.stacked}>
										<div className={styles.inputTitleWrapper}>
											<div className={error && styles.colorRed}>
												Email or Username*
											</div>
										</div>
										<div className={styles.inputDateContent}>
											<label className={styles.stackedInput} htmlFor='email'>
												<div className={styles.inputWrapper}>
													<div className={styles.inputContent}>
														<input
															autoFocus
															value={emailOrUsername}
															onChange={(e) =>
																setEmailOrUsername(e.target.value)
															}
															type='text'
															className={styles.input}
														/>
													</div>
												</div>
											</label>
										</div>
									</label>
									<label className={styles.stacked}>
										<div className={styles.inputTitleWrapper}>
											<div className={error && styles.colorRed}>Password*</div>
										</div>
										<div className={styles.inputDateContent}>
											<label className={styles.stackedInput} htmlFor='password'>
												<div className={styles.inputWrapper}>
													<div className={styles.inputContent}>
														<input
															value={password}
															onChange={(e) => setPassword(e.target.value)}
															type='password'
															className={styles.input}
														/>
													</div>
												</div>
											</label>
										</div>
									</label>
									{error && (
										<div className={styles.errorTextWrapper}>
											<span className={styles.errorText}>{error}</span>
										</div>
									)}
									<button
										className={styles.playNowBtn}
                                        onClick={(e) => handleTokenLoginClick(e)}
									>
                                        {!loading ? (
                                                <span className={styles.btnText}>Play Now</span>
                                                ) : (
                                                <span className={styles.btnText}>Logging in..</span>
                                        )}

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
									<button className={styles.regButton}>
										<span className={styles.regButtonText}>
											Forgot Password
										</span>
									</button>
									<span className={styles.footerBtn}>
										Don't have an account?
										<button className={styles.linkBtn}>
											<span className={styles.linkBtnText}>
												{' '}
												Register an Account
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

export default SignIn
