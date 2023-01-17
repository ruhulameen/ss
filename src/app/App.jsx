import React, { useEffect, useState, createContext } from 'react'
import { ModalProvider } from 'react-modal-hook'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from './Layout'
import Router from './Router'

export const Store = createContext()
export const DataBase = createContext()

function App() {
	const [authChecked, setAuthChecked] = useState(false)

	const [isNavBarOpen, setIsNavBarOpen] = useState(false)
	const [store, setStore] = useState({
		user: {
			balance: '',
			email: '',
			username: '',
			day: '',
			month: '',
			year: '',
			password: '',
			updated: '',
			cardInfo: {
				number: '',
				month: '',
				year: '',
				holder: '',
				cvv: ''
			}
		},
		isUserLoggedIn: false
	})

	const [dataBase, setDataBase] = useState(store)

    async function authCheck() {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if(storedUser) {
                const response = await fetch('/api/auth/me?token=' + storedUser.token, {
                    method: 'GET',
                    headers: {
                        'Authorization':  storedUser.token,
                        'Content-Type': 'application/json'
                    },
                });
                const responseJson = await response.json();
                setAuthChecked(true);
				if(responseJson.message) {
					console.log('Auth check up failed: ' + responseJson.message);
					localStorage.removeItem('user');
				} else {
					console.log('Auth check succeeded, overriding local storage');
					setStore({user: { ...storedUser, balance: responseJson.user.balance.usd.formatted }, isUserLoggedIn: true });
				}
                console.log(responseJson);
        }
    }
    if(!authChecked) {
        authCheck();
    }
	useEffect(() => {
		localStorage.setItem('DataBase', JSON.stringify(dataBase))
	}, [dataBase])

	return (
		<BrowserRouter>
			<Store.Provider value={[store, setStore]}>
				<DataBase.Provider value={[dataBase, setDataBase]}>
					<ModalProvider>
						<Layout
							isNavBarOpen={isNavBarOpen}
							setIsNavBarOpen={setIsNavBarOpen}
						>
							<Router isNavBarOpen={isNavBarOpen} />
						</Layout>
					</ModalProvider>
				</DataBase.Provider>
			</Store.Provider>
		</BrowserRouter>
	)
}

export default App
