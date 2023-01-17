import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {
	Home,
	SponsorEverton,
	SponsorWatford,
	Settings,
	Casino,
	Pay,
	Withdraw,
	Promotion
} from 'pages'

import { ROUTES } from 'shared/consts'

function Router({ showRegModal, setShowRegModal, isNavBarOpen }) {
	return (
		<Routes>
			<Route
				path={ROUTES.HOME}
				element={
					<Home
						showRegModal={showRegModal}
						setShowRegModal={setShowRegModal}
						isNavBarOpen={isNavBarOpen}
					/>
				}
			/>
			<Route path={ROUTES.SPONSOR_EVERTON} element={<SponsorEverton />} />
			<Route path={ROUTES.SPONSOR_WATFORD} element={<SponsorWatford />} />
			<Route path={ROUTES.SETTINGS} element={<Settings />} />
			<Route path={ROUTES.PROMOTION} element={<Promotion />} />
			<Route path={ROUTES.CASINO} element={<Casino />} />
			<Route path={ROUTES.PAY} element={<Pay />} />
			<Route path={ROUTES.WITHDRAW} element={<Withdraw />} />
		</Routes>
	)
}

export default Router
