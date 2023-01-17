import React, { useContext } from 'react'

import { Store } from 'app/App'
import { Header, UserHeader, NavBar, NavBarWindow, Footer } from 'widgets'

function Layout({ children, isNavBarOpen, setIsNavBarOpen }) {
	const [store] = useContext(Store)

	return (
		<>
			{store.isUserLoggedIn ? <UserHeader /> : <Header />}
			<NavBarWindow
				isNavBarOpen={isNavBarOpen}
				setIsNavBarOpen={setIsNavBarOpen}
			/>
			<NavBar setIsNavBarOpen={setIsNavBarOpen} isNavBarOpen={isNavBarOpen} />
			<div>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
