import React from 'react';
import Layout from '../components/Layout'; 
import Icons from '../components/Icons'; 
import useGlobal from '../useGlobal'; 
import './tradepartner.scss' ; 
import SideMenus from '../components/SideMenus';
import ContactMenus from './ContactMenus';

import ImgAvatar from '../assets/avatar.png'

interface TradePartnerProps {
	uid: string
} 

const TradePartner = ({uid}:TradePartnerProps) => {  
	const  {account, L, T} = useGlobal();   
		
	const [trades, setTrades] = React.useState([
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12",
			"type":"trust"
		} ,
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":"trust"
		}, 
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":"favourite"
		} ,
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":"recent"
		} ,
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":""
		} ,
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":""
		} ,
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":""
		} ,
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":""
		} ,
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":""
		} ,
		{
			"img":"./assets/avatar.png",
			"username":"tanya0617",
			"result":1,
			"date":"2021-12-12 12:32:23",
			"type":""
		} 
	]);

	return <Layout>
		{account ? (
			<section className="container container-xl"> 
				<h1 className="mt5">Contact List</h1> 
				<div className="row">
					<div className="col-md-3"> 
						<SideMenus activeMenu="recent" menus={ContactMenus(L)}/>
					</div>
					<div className="col-md-9">
						<div className="frame tradepartners">
							<h2 className="title">Recent Trades</h2> 
							<div className="row p2">
								<div className="col-md-1"> 
								</div>
								<div className="col-md-4 ">
										Username
								</div>
								<div className="col-md-3 text-center">
									Result
								</div>
								<div className="col-md-4 text-center">
									Trade date
								</div> 
							</div>
							{trades.map((v,k)=>(
								<div className="trade-row" key={k}>  
									<div className="trade-col-img">
										<img src={ImgAvatar} style={{maxWidth:30}} alt="bg" />
									</div>
									<div className={`trade-col-username`}>
										{v['username']}
										<span className={v['type']}>{v['type']}</span>
									</div>
									<div className="trade-col-result">
										{v['result']===1?'successful':'failure'}
									</div>
									<div className="trade-col-date">
										{v['date']}
									</div>
								</div>
							))} 
							<div className="pagenumbar">
								<span className="pagenation">1</span>
								<span className="pagenation">2</span>
								<span className="pagenation active">3</span>
								<span className="pagenation">4</span>
								<span className="pagenation">5</span>
								<span className="pagenation">6</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		) : (
			null
		)}
		
	</Layout>;
};

export default TradePartner;