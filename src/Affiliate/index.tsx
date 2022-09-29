import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';
import QRCode from '../assets/qrcode.png';
import sitemark from '../assets/avatar.png';
import searchImg from '../assets/becomevendor-support.png';
import Icons from '../components/Icons'; 
import '../index.scss'
import './affiliate.scss' 
import { relative } from 'path';
import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';

interface AffiliateStatus {
	query: string
	submitLabel: string
	loading:boolean
}


const Affiliate = () => {
	const {L} = useGlobal(); 

	return <Layout>
		<section className="container container-xl Affiliate">
			<h1 className="text-center">Affiliate Dashboard</h1>
			<div className="tabbar">
				<div className="tabmenu active" onClick={()=>{{}}}>Dashboard</div>
				<div className="tabmenu">My Affiliates</div>
			</div>
			<div id="tabContainer1">
				<div className="row ">
					<div className="col-md-4">
						<div className="frame">
							<div className="h3">Affiliate Balance</div>
							<div className="h1 mt3">0 BTC</div>
							<p className="gray">=0 USD</p>
							<button className="btn w100 p"> Transfer to Wallet </button>
							<p className="gray">Minimum transfer: 10.00 USD</p>
						</div>
					</div> 
					<div className="col-md-4">
						<div className="frame" style={{height:'100%'}}>
							<h3>My Affiliates</h3>
							<div className="mt3 justify">
								<label className="gray">Tier 1 Affiliates</label>
								<div className="roundCnt">0</div>
							</div>
							<div className="mt3 justify">
								<label className="gray">Tier 1 Affiliates</label>
								<div className="roundCnt">0</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="frame" style={{height:'80%'}}>
							<h3>iBitGo Peer</h3>
							<p className="mt3">
									Join the Peer Program to not only increase your Affiliate Program benefits but to also help elevate your community through crypto. Find out how.
							</p>
							<label className="mt2">Application status</label>
							<button className="btn">Rejected</button>
						</div>

						<button className="btn btn-outline-primary mt2 w100">Apply Now</button>
					</div>
				</div>
				<hr className="mt3"/>
				<h3 className="text-center">Grow Your Network</h3>
				<p>
					Share your link and earn 50%  of the escrow fee when the people you bring on board buy Bitcoin on iBitGo. Then, earn another 10% from the people they invite.
				</p>
				<div className="row">
					<div className="col-md-6">
						<div className="frame">
							<h3>Invite by Link</h3>
							<hr />
							<p><b>"Your Affiliate Link"</b></p>
							<div style={{position:'relative'}}> 
								<input type="text" className="w100" placeholder="https://iBitGo.com/register?r=23fdsf2fs"></input>
								<button className="btn btn-primary" style={{position:'absolute', right:'4px', top:'5px'}}>Copy</button>
							</div>
							<a className="btn-link">Advanced link tracking </a> (Track ID)
							<p>Share link on Social media</p>
							<img src={sitemark} style={{maxWidth:30}} alt="bg" />
							<img src={sitemark} style={{maxWidth:30}} alt="bg" />
							<img src={sitemark} style={{maxWidth:30}} alt="bg" />
							<img src={sitemark} style={{maxWidth:30}} alt="bg" />
							<img src={sitemark} style={{maxWidth:30}} alt="bg" />
						</div>
					</div> 
					<div className="col-md-6">
						<div className="frame" style={{height:'100%'}}>
							<h3>Invite by QR Code</h3>
							<hr />
							<div className="flex justify">
									<img src={QRCode} style={{maxWidth:130, border:'2px solid black', margin:'1em', borderRadius:'10px'}}/>
									<div> 
										<p>Anyone who scans this QR code will become your affiliate on iBitGo.</p> 
										<a className="btn-link">Embed QR code to your web site.</a> 
									</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-6">
						<div className="frame">
							<h3>My Earnings</h3>
							<hr/>
							<div className="justify flex p">
								<div>
									<p className="gray">THIS MONTH (DEC)</p>
									<h3 className="gray">0 USD</h3>
									<p className="gray">0 USD</p>
								</div>
								<div>
									<p className="gray">LAST MONTH (NOV)</p>
									<h3 className="gray">0 USD</h3>
									<p className="gray">0 USD</p>
								</div>
								<div>
									<p className="gray">TOTAL</p>
									<h3 className="gray">0 USD</h3>
									<p className="gray">0 USD</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="frame">
							<h3>Affiliate Activity</h3>
							<hr/>
							<div className="justify flex p">
								<div>
									<p className="gray">THIS MONTH (DEC)</p>
									<h3 className="gray">0 new affiliates</h3>
									<p className="gray">no active</p>
								</div>
								<div>
									<p className="gray">LAST MONTH (NOV)</p>
									<h3 className="gray">0 new affiliates</h3>
									<p className="gray">No active</p>
								</div>
								<div>
									<p className="gray">TOTAL</p>
									<h3 className="gray">0 affiliates</h3>
									<p className="gray">No active</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<h3>Recent Transactions</h3>
				<p>There are no sales yet</p>
			</div>
			<div id="tabContainer2">
				<h3>My Affiliates</h3>
				<div className="text-center mt5 mb3">
					<img src={searchImg} /> 
				</div>
				<hr />
				<div className="text-center mt5">
					<h3>Affiliate Program Terms of Service</h3>
					<p>Learn more about using <a className="btn-link">IBITGO</a>s Affiliate Program on our Terms of Service page.</p>
					<button className="btn btn-outline-primary">Learn More</button>
				</div>
			</div>
		</section>
	</Layout>;
};

export default Affiliate;