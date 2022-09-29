import React from 'react';

import { BrowserRouter, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Config from './config/v1.json'

import Home from './Home';
import Mall from './Mall';

import Login from './Auth/Login';
import Register from './Auth/Register';
import Reset from './Auth/Reset';

import Profile from './Home/Profile';
import Offer from './Home/Offer';

import Vendor from './Vendor';
import Wallet from './Wallet';
import CreateWallet from './Home/CreateWallet';
import CreateOffer from './Offer/CreateOffer';
import Affiliate from './Affiliate';
import BecomeVendor from './Home/BecomeVendor';
/* import { connected } from 'process'; */
import WhatsNew from './Account/WhatNew';
import ConnectedApps from './Account/ConnectedApps';


import SettingProfile from './Account/Profile';
import Security from './Account/Security';
import Payment from './Account/Payments';
import Developer from './Account/Developer';
import Verification from './Account/Verification';
import TradePartner from './Account/TradePartner';
import TradeHistory from './Account/TradeHistory';
import Trade from './Account/Trade';
import InviteFriend from './Account/InviteFriend';
import WhatNew from './Account/WhatNew';

const urls:{[coin:string]:string} = {}
const coins:any = Config.coins
for(let k in coins) {
	urls[coins[k].slug] = k
}

function BuyCrypto() {
	let { tag } = useParams<{[key:string]:string}>();
	const coin = urls[tag] || Config.default
	return <Mall type='buy' coin={coin} />;
}
function SellCrypto() {
	let { tag } = useParams<{[key:string]:string}>();
	const coin = urls[tag] || Config.default
	return <Mall type='sell' coin={coin} />;
}

const BuyOffer = ()=>{
	let {id} = useParams<{[key:string]:string}>();
	return <Offer id={id} type="buy" />;
}
const SellOffer = ()=>{
	let {id} = useParams<{[key:string]:string}>();
	return <Offer id={id} type="sell" />;
}

function UserProfile() {
	let { uid } = useParams<{[key:string]:string}>();
	return <Profile uid={uid} />;
}
function TradeById() {
	let { id } = useParams<{[key:string]:string}>();
	return <Trade id={id} />;
}
function App() {
	return (
		<BrowserRouter forceRefresh={false}>
			<Switch>
				<Route path="/login" component={Login}></Route>
				<Route path="/register" component={Register}></Route>
				<Route path="/reset-password" component={Reset}></Route>
				<Route path="/buy-:tag/:id" component={BuyOffer} />
				<Route path="/sell-:tag/:id" component={SellOffer} />
				<Route path="/buy-:tag" component={BuyCrypto} />
				<Route path="/sell-:tag" component={SellCrypto} />
				<Route path="/user/profile/:uid" component={UserProfile} />
				<Route path="/vendor" component={Vendor} />
				<Route path="/create-an-offer" component={CreateOffer} />
				<Route path="/create-wallet" component={CreateWallet} />
				<Route path="/become-a-vender" component={BecomeVendor} />
				<Route path="/wallet" component={Wallet} />
				<Route path="/affiliate" component={Affiliate} />
				<Route path="/trade/:id" component={TradeById} /> 
				<Route path="/account/profile" component={SettingProfile} />
				<Route path="/account/security" component={Security} />
				<Route path="/account/payment" component={Payment} />
				<Route path="/account/developer" component={Developer} />
				<Route path="/account/verification" component={Verification} /> 
				<Route path="/account/connected" component={ConnectedApps} /> 
				<Route path="/account/trade-partners" component={TradePartner} /> 
				<Route path="/account/trade-history" component={TradeHistory} /> 
				<Route path="/account/invite-friends" component={InviteFriend} /> 
				<Route path="/account/whats-new" component={WhatsNew} /> 
				<Route path="*" component={Home}></Route>
			</Switch>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
