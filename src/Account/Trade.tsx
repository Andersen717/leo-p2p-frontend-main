import React from 'react';
import Layout from '../components/Layout'; 
import Icons from '../components/Icons'; 
import useGlobal from '../useGlobal'; 
import './trade.scss' ; 
import Avatar from '../assets/avatar.png';


interface TradeProps {
	id: string
}
interface TradeStatus {
	showInfo: boolean
}

const Trade = ({id}:TradeProps) => {
	const  {account, orders, isMobile, L, T} = useGlobal();
	const [status, setStatus] = React.useState<TradeStatus>({showInfo: false})
	const updateStatus = (json:any) => setStatus({...status, ...json})

	const v = orders[id]
	return <Layout>
		{account ? (
			<section className="trade">
				<div className="row mt3" style={{display:(isMobile ? '' : 'none')}}> 
					<div className="col-6">
						<button onClick={()=>updateStatus({showInfo:true})} className={'btn btn' + ((!isMobile || status.showInfo) ? '' : '-outline') + '-primary w100'}>{T('trade.action')}</button>
					</div>
					<div className="col-6">
						<button onClick={()=>updateStatus({showInfo:false})} className={'btn btn' + ((!isMobile || !status.showInfo) ? '' : '-outline') + '-primary w100'}>{T('trade.chat')}</button>
					</div>
				</div>
				<h2>{T('trade.' + v.status)}</h2>
				<div className="row"> 
					<div className="col-md-6" style={{display:((!isMobile || status.showInfo) ? '' : 'none')}}>
						<div className="card">
							<p>You sold 1192.3234324 USDT</p>
							<hr />
							<p><b>Trade Summary</b></p>
							<div className="row">
								<div className="col-md-6 justify">
									<img src={Avatar} style={{width:50}}/>
									<div>
										<p><a className="btn-link">camonanes i <span className="spanCnt disabled">sold</span></a> </p>
										<p>3,234234 CNY  19932424,323 USDT</p>
									</div>
								</div>
								<div className="col-md-6 justify">
									<img src={Avatar} style={{width:50}}/>
									<div>
										<p><a className="btn-link">YernKanya423 <span className="spanCnt">Puchased</span></a> </p>
										<p>3,234234 CNY  19932424,323 USDT</p>
										<a className="btn-link"><Icons.Plus />Add to Contacts</a>
									</div>
								</div>
							</div>
							<b className="mt-3">How was your trading experience?</b>
							<p>You can leave only once feedback for each payment method trade.</p>
							<div className="frame justify">
								<div>
									<p><Icons.Thumbup className="green"/> Positive</p>
									<p><a className="btn-link">camonanesi</a></p>
									<p>example, keyword</p>
									<p><a className="btn-link"><b><Icons.Address />Edit feedback</b></a></p>
								</div>
								<p className="gray">Dec 5, 2021</p>
							</div>
							<div className="frame mt2">
								<Icons.Info /> YernKanyu324 has not left you feedback yet
							</div>
						</div> 
						<div className="frame">
							<button className="btn m p">Report Receipt</button>	
							<a><Icons.star />Add to favourites</a>
							<button className="btn btn-primary m p right">View in Dashboard</button>
						</div>
						<button className="btn m p">Report</button>
						<button className="btn m p">View Offer</button> 
						<div className="card">
							 <Icons.Info /> You are selling 1,239342,3242342342342432 USDT form 2,3234,24.23 CNY using wechat pay
						</div>
						<h3>Instructions</h3>
						<span className="spanCnt disabled">no verification needed</span>
						<span className="spanCnt disabled">no thired parties</span>
						<span className="spanCnt disabled">no negotiatin</span>

						<h3>Trade Infomation</h3>
						<p>1.23,2342234 USDT has been reserved for this trade. This includes Paxuful's fee of 11.2424234USDT</p>
						<div className="row">
							<div className="col-3">
								<p className="indigo">RATE</p>
								<p>6.767 CNY/USDT</p>
							</div>
							<div className="col-3">
								<p className="indigo">TRADE ID <Icons.Info /></p>
								<p>wAGmixENYQoo</p>
							</div>
							<div className="col-3">
								<p className="indigo">STARTED</p>
								<p>3 hours ago</p>
							</div>
							<div className="col-3">
								<p className="indigo">COMPLETED</p>
								<p>2 hours ago</p>
							</div>
						</div>
					</div>
					<div className="col-md-6" style={{display:((!isMobile || !status.showInfo) ? '' : 'none')}}>
						<div className="card"> 
							<div className="justify m p">
								<div><Icons.Logo />YernKanyu323 <img src={Avatar} style={{width:30}}/></div>
								<div><Icons.Logo /> <Icons.Phone /> <span className="spanCnt"><Icons.Thumbup />8</span></div>
							</div>
							<div className="justify m p">
								<div><Icons.Idverify />Sen 2 hours ago</div>
								<div><Icons.Info /><a className="btn-link">Partner details</a></div>
							</div>
							<hr/>
							<div>
								<p><Icons.Whatnew />Modenerator unavalable</p>
								<div>
									<div className="alert receive">
										<Icons.Info /><b>Success</b>
										<p>You 've sen tether to yernkanya324. Don't forget to leave your feedback.</p>
									</div>
									<p className="gray">DECEMBER 5, 2021 4:13</p>
									<div className="alert send">Your feedback for Yernkanya 324 has been recored</div>
									<p className="gray">DECEMBER 5, 2021 4:13</p>
								</div>
							</div>
							<hr />
							<textarea placeholder="write a message..."  className="w100 p" rows={4}></textarea>
							<button className="btn"><Icons.Invite /></button>
							<button className="btn"><Icons.Invite /></button>
							<button className="btn"><Icons.Invite /></button>
							<button className="right btn">Send</button>
						</div>
					</div>
				</div>
			</section>
		) : (
			null
		)}
		
	</Layout>;
};

export default Trade;