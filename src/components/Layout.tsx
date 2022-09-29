import React from 'react';
import Icons from '../components/Icons';
import useGlobal from "../useGlobal";
import Lang from './Lang'
import Config from '../config/v1.json'
import "./index.scss"

interface CoinMenuProps {
	type:'buy'|'sell'
}

const CoinMenu = ({type}:CoinMenuProps) => {
	const {L} = useGlobal()
	return (<div className="menu">
		<span className="link">{L['menu.'+type]} <i className="pointer"></i></span>
		<ul>
			{Object.keys(Config.coins).map(k=>{
				const coins = Config.coins as any
				return <li key={k}>
					<a href={`/${type}-${coins[k].slug}`} className="ripple link flex" style={{paddingTop:15, paddingBottom:15, paddingRight:15}}>
						<i className={"ic coin big "+k} style={{marginRight:15}} />
						<div className="fill">
							<div>{L['menu.'+type+'.title'].replace('{coin}', L[k])}</div>
							<small>{L['menu.'+type+'.desc'].replace('{coin}', L[k])}</small>
						</div>
						<div>
							<span className="box" style={{marginLeft:30}}>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="#aaa">
									<path d="M4.294 13.292l5.292-5.293-5.292-5.293a1 1 0 111.414-1.414l6 6a.99.99 0 01.277.53L12 7.94v.118a.996.996 0 01-.291.648l-6 6a1 1 0 11-1.414-1.414z"/>
								</svg>
							</span>
						</div>
					</a>
				</li>
			})}
		</ul>
	</div>);
}

const Layout = (props:any) => {
	const {L, account, alerts} = useGlobal()

	return (<>
		<header>
			<div className="container container-xl">
				<a className="home" href="/">
					<Icons.Logo margin={5} />
					<span className="h2">{L['app.title']}</span>
				</a>
				<nav>
					<span className="menu">
						<CoinMenu type="buy" />
					</span>
					<span className="menu">
						<CoinMenu type="sell" />
					</span>
					<a className="menu" href="/create-an-offer">
						{L['menu.offer']}
					</a>
					{account===null ? (
						<>
							<a className="menu" href="/create-wallet">
								{L['menu.wallet']}
							</a>
							<a className="menu" href="/become-a-vender">
								{L['menu.becomevender']}
							</a>
						</>
					) : (
						<>
							<a className="menu" href="/wallet">
								{L['menu.wallet']}
							</a>
							<a className="menu" href="/vendor">
								{L['menu.vender']}
							</a>
							<a className="menu" href="/affiliate">
								{L['menu.affiliate']}
							</a>
						</>
					)}
				</nav>
				<div>
					{account===null ? (
						<>
							<a className="menu" href="/login">
								{L['menu.login']}
							</a>
							<a className="btn btn-primary" href="/register">
								{L['menu.register']}
							</a>
						</>
					) : (
						<>
							<div className="menu" style={{marginLeft:10}}>
								<span className="link"><i className="avatar"><Icons.Alert/></i><i className="pointer"></i></span>
								<ul className="right wide">
									<li className="sep"></li>
									{Object.keys(alerts).map(k=><li key={k}><a href={alerts[k].url} className="ripple link"><div>{alerts[k].title}<br/>{}</div></a></li>)}
								</ul>
							</div>
							<div className="menu" style={{marginLeft:10}}>
								<span className="link"><i className="avatar">{account.profile.avatar}</i><i className="pointer"></i></span>
								<ul className="right">
									<li><a href={"/user/profile/" + account.uid} 	className="ripple link"><Icons.Profile margin={10} /> {L['profile.menu.profile']}</a></li> 
									<li><a href={"/account/profile"} className="ripple link"><Icons.Settings margin={10} /> {L['menu.settings']}</a></li>
									<li><a href="/account/trade-history" 	className="ripple link"><Icons.Trading margin={10} /> {L['menu.trade']}</a></li>
									<li><a href="/account/trade-complete" 	className="ripple link"><Icons.Trading margin={10} /> trade completed</a></li>
									<li><a href="/account/trade-partners" 	className="ripple link"><Icons.Partners margin={10} /> {L['menu.partners']}</a></li>
									<li><a href="/account/invite-friends" 	className="ripple link"><Icons.Invite margin={10} /> {L['menu.invite']}</a></li>
									<li><a href="/account/whats-new" 		className="ripple link"><Icons.Whatnew margin={10} /> {L['menu.Whatsnew']}</a></li>
									<li className="sep"></li>
									<li><a href="/logout" 					className="ripple link"><Icons.Logout margin={10} /> {L['menu.logout']}</a></li>
								</ul>
							</div>
						</>
					)}
					<Lang />
				</div>
			</div>
		</header>
		<main className="container container-xl">
			{props.children}
		</main>
		
		<footer className="container container-xl">
			<div>
				<div>
					Copyright © 2021 iBitGo foundation. All Rights Reserved. iBitGo foundation. has no relation to MoneyGram, Western Union, Payoneer, WorldRemit, Paxum, Paypal, Amazon, OkPay, Payza, Walmart, Reloadit, Perfect Money, WebMoney, Google Wallet, BlueBird, Serve, Square Cash, NetSpend, Chase QuickPay, Skrill, Vanilla, MyVanilla, OneVanilla, Neteller, Venmo, Apple, ChimpChange or any other payment method. We make no claims about being supported by or supporting these services. Their respective wordmarks and trademarks belong to them alone.
				</div>
			</div>
		</footer>
	</>);
}

export default Layout;