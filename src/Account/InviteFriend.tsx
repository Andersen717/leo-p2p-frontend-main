import React from 'react';
import Layout from '../components/Layout'; 
import Icons from '../components/Icons'; 
import useGlobal from '../useGlobal'; 
import './invitefriend.scss' ; 
import img1 from '../assets/invites-1.png';
import img2 from '../assets/invites-2.png';
import img3 from '../assets/invites-3.png';
import img4 from '../assets/invites-4.png';
import img5 from '../assets/invites-5.png';
import img6 from '../assets/invites-6.png';
import img7 from '../assets/invites-7.png';

interface InviteFriendProps {
	uid: string
}

const InviteFriend = ({uid}:InviteFriendProps) => {  
	const  {account, L, T} = useGlobal();   
	return <Layout>
		{account ? (
			<section className="container container-xl invitefriend">
					<div className="row">
						<div className="col-md-6">
							<h1><span className="grt-text red">Get Paid</span > for Bringing People to Ibitgo</h1>
							<p>Our Bitcoin Affiliate Program helps you bring financial freedom to your community. And as a bonus. you get a steady stream of income too.</p>
							<button className="btn btn-primary mt5">Go to y Affiliate Dashboard</button>
						</div>
						<div className="col-md-6">
							<img src={img1} />
						</div>
					</div>
					<div className="row"> 
						<h1 className="centerh1"><span className="grt-text red">Instant Income </span > on Every Trade</h1>
					</div>
					<div className="row">
						<div className="col-md-6"> 
							<img src={img2} />
						</div>
						<div className="col-md-6 p mt5">
							<p>You make money every time the people you introduce to Ibitg, buy Bitcoin and the people they invite. </p>
							<div className="div mt5">
								<h2>Earn  <span className="grt-text blue">50%</span> Escrow Fee</h2>
								<p>Wen the people you invite buy Bitcoin on ibitgo</p>
							</div>
							<div className="div mt5">
								<h2>Earn  <span className="grt-text red">10%</span> Escrow Fee</h2>
								<p>Wen the people you invite buy Bitcoin on ibitgo</p>
							</div>
						</div>
					</div>
					<div className="row"> 
						<h1 className="centerh1"><span className="grt-text red">Why Become</span > an Affiliate</h1>
						<p className="centerh1">Our Bitcoin Affiliate Program is a great way for you to spread the word of crypto in your community.</p>
					</div>
					<div className="row">
						<div className="col-md-6 p mt5">
							<div className="frame mt3">
								<h2>Earn Bitcoin</h2>
								<p>You make 50% of the escrow fee every time one of your affiliates buys Bitcoin.</p>
							</div>
							<div className="frame mt3">
								<h2>Earn Bitcoin</h2>
								<p>You make 10% of the escrow fee every tie somebody from your extended newtowrk buys Bitcoin.</p>
							</div>
							<div className="frame mt3">
								<h2>Earn Bitcoin</h2>
								<p>Once you've earned at least 10 USD worth of Bitcoin, you can cash out your earnings into your iBitGo wallet any time you want</p>
							</div>
						</div>
						<div className="col-md-6"> 
							<img src={img3} />
						</div>
					</div>
					<div className="row"> 
						<h1 className="centerh1">How <span className="grt-text red">Does It Work</span > ?</h1>
						<p className="centerh1">It's pretty simple, acctually-become a Bitcoin Affiliate in three quick steps.</p>
					</div>
					<div className="row">
						<div className="col-md-7">
							<img src={img4} />
						</div>
						<div className="col-md-5 p mt5">
							<h1 className="emptyh1">1</h1>
							<h2>Invite Anyone</h2>
							<p>Share your Affiliate code or link on social media, crypto forums, or communities. You can find your unique code or link under your Affiliate Dashboard (web) or Affiliate tab (mobile).</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5 p mt5">
							<h1 className="emptyh1">2</h1>
							<h2>Get Them to Trade</h2>
							<p>Educate your affiliates about crypto and how to trade on iBitGo. Every time they buy Bitcoin. you get 50% of their escrow fee. You also make 10% of the escrow fee every time one of their affiliates buys Bitcoin on Ibitgo.</p>
						</div>
						<div className="col-md-7">
							<img src={img5} />
						</div>
					</div>
					<div className="row">
						<div className="col-md-7">
							<img src={img6} />
						</div>
						<div className="col-md-5 p mt5">
							<h1 className="emptyh1">3</h1>
							<h2>Get Paid</h2>
							<p>Track your affiliates' activity from your Affiliate Dashboard and watch your earnings automatically build up. Once your earnings are worth at least 10 USD, you can cash out to your Ibitgo wallet.</p>
						</div>
					</div>
					<div className="row">
						<img src={img7}/>
						<div className="frame"  style={{position:'relative', top:'-200px', left:'20%', backgroundColor:'white', zIndex:'10'}}>
							<h2 className="centerh1">Sounds fun right?</h2>
							<h1 className="centerh1"><span className="grt-text red">Let's Get You Started!</span ></h1>
							<p>Share your Bitcoin affiliate link with everyone you kenow, and watch the power of crypto evelate your community and yourself.</p>
							<button className="btn btn-primary centerh1">Become an Affiliate</button>
						</div>
					</div>
					<h1 className="centerh1" style={{position:'relative'}}> <span className="grt-text red">Affiliate</span > FAQ</h1>
					<p className="centerh1">You probably have a few questions on yuor mind. Below, we've answered some of the most common ones.</p>
					<div className="row mt2">
						<div className="col-md-6">
							<div className="w100  justify frame">
								<p>What is Ibitgo?</p>
								<p>+</p>
							</div>
							<div className="w100  justify frame">
								<p>Where can I view my affilate earnings?</p>
								<p>+</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="w100  justify frame">
								<p>When do I get paid?</p>
								<p>+</p>
							</div>
							<div className="w100  justify frame">
								<p>Where can I find my affiliate link?</p>
								<p>+</p>
							</div>
						</div>
					</div>
			</section>
		) : (
			null
		)}
		
	</Layout>;
};

export default InviteFriend;