import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal'; 
import searchImg from '../assets/becomevendor-support.png';
import Icons from '../components/Icons'; 
import '../index.scss'
import './vendor.scss'  
interface VendorStatus {
	query: string
	submitLabel: string
	loading:boolean
}


const Vendor = () => {
	const {L} = useGlobal();  
	return <Layout>
		<section className="container container-xl Vendor">
			<h1 className="text-center">Vendor Dashboard</h1>
			<div className="tabbar text-center">
				<div className="tabmenu  active" onClick={()=>{{}}}>Overview</div>
				<div className="tabmenu">Detailed Statistics</div>
			</div>
			<div id="tabContainer1">
				<div className="justify alertBox">
					<div>
						<img src={searchImg} style={{maxWidth:30}}/>Set up your corporate account. <a className="btn-link">Read more</a>
					</div>
					<span className="closeBtn">x</span>
				</div>
				<h2>Account Level</h2>
				<div className="frame">
					<h3>Level 3</h3>
					<p>Unlimited trades and send outs. <a className="btn-link">Learn more </a><Icons.Info /></p>
				</div> 
				<h2>My Offers<span className="spanCnt">123</span></h2>
				<button className="btn btn-outline-primary">Turn OFF All Offers</button>
				<div className="alertBox mt2"> 
					<Icons.Info />   	You have outdated offers. Please add a bank account to these offers and accept our new terms to pervent them dropping down our offer search results.
				</div>
				<div className="tabbar">
					<div className="tabmenu active" onClick={()=>{{}}}>Overview<span className="spanCnt">123</span></div>
					<div className="tabmenu">Detailed Statistics<span className="spanCnt">4</span></div>
				</div>
				<div className="frame">
					<div className="row justify">
						<div className="col-md-6">
							<p>Security deposit <Icons.Info /></p>
							<span className="btc-bar"></span>
							<div className="justify">
								<p>Deposited:0.005 BTC</p>
								<p>Required:0 BTC</p>
							</div>
						</div>
						<div className="col-md-1"><button className="btn disabled">Deposit</button></div>
						<div className="col-md-2"><button className="btn">Withdraw</button> <Icons.Info /></div>
						<div className="col-md-2">Offers that need a security deposit <b>0</b></div>
					</div>
				</div>
				
				<div className="vendorList mt5">
					<div className="vendor-item">
						<div className="row"> 
							<div className="col-md-3"></div>
							<div className="col-md-3"><b>Rate</b></div>
							<div className="col-md-2"><b>Min-max amount</b></div>
							<div className="col-md-3"><b>Payment method</b></div>
							<div className="col-md-2"><b>Offer Views</b></div> 
						</div>
					</div>
					<div className="vendor-item">
						<div className="row"> 
							<div className="col-md-3  text-center justify"> 
								<label className="switch">
									<i><input type="checkbox"   checked={true} /><span className="slider round"></span></i> 
								</label>
								<span className="markType">T</span>
								<button className="btn">View</button>
								<button className="btn btn-outline-primary">Edit</button>
							</div>
							<div className="col-md-3 text-center  middle center" >
								1,434 USD <span className="spanCnt">+44%</span>
							</div>
							<div className="col-md-2  ">
								<span className="spanCnt">+23</span>32-<span className="spanCnt">500</span> USD 
							</div>
							<div className="col-md-3">
							Adidas Gifd Card 
							<Icons.Invite />
							<Icons.SortAsc />
								<p className="gray">reliable and fast</p>
								<span className="spanCnt">e-codes accepted</span>
								<span className="spanCnt">friends and family</span>
							</div>
							<div className="col-md-1">
								<p>12</p><Icons.Eye />
							</div> 
						</div> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
					</div>
					<div className="vendor-item ">
						<div className="row"> 
							<div className="col-md-3  text-center justify"> 
								<label className="switch">
									<i><input type="checkbox"   checked={true} /><span className="slider round"></span></i> 
								</label>
								<span className="markType">T</span>
								<button className="btn">View</button>
								<button className="btn btn-outline-primary">Edit</button>
							</div>
							<div className="col-md-3 text-center  middle center" >
								1,434 USD <span className="spanCnt">+44%</span>
							</div>
							<div className="col-md-2  ">
								<span className="spanCnt">+23</span>32-<span className="spanCnt">500</span> USD 
							</div>
							<div className="col-md-3">
							Adidas Gifd Card 
								<p className="gray">reliable and fast</p>
								<span className="spanCnt">e-codes accepted</span>
								<span className="spanCnt">friends and family</span>
							</div>
							<div className="col-md-1">
								<p>12</p><Icons.Eye />
							</div> 
						</div> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
					</div>
					<div className="vendor-item">
						<div className="row"> 
							<div className="col-md-3  text-center justify"> 
								<label className="switch">
									<i><input type="checkbox"   checked={true} /><span className="slider round"></span></i> 
								</label>
								<span className="markType">T</span>
								<button className="btn">View</button>
								<button className="btn btn-outline-primary">Edit</button>
							</div>
							<div className="col-md-3 text-center  middle center" >
								1,434 USD <span className="spanCnt">+44%</span>
							</div>
							<div className="col-md-2  ">
								<span className="spanCnt">+23</span>32-<span className="spanCnt">500</span> USD 
							</div>
							<div className="col-md-3">
							Adidas Gifd Card 
							<Icons.Invite />
							<Icons.SortAsc />
								<p className="gray">reliable and fast</p>
								<span className="spanCnt">e-codes accepted</span>
								<span className="spanCnt">friends and family</span>
							</div>
							<div className="col-md-1">
								<p>12</p><Icons.Eye />
							</div> 
						</div> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
					</div>
					<div className="vendor-item ">
						<div className="row"> 
							<div className="col-md-3  text-center justify"> 
								<label className="switch">
									<i><input type="checkbox"   checked={true} /><span className="slider round"></span></i> 
								</label>
								<span className="markType">T</span>
								<button className="btn">View</button>
								<button className="btn btn-outline-primary">Edit</button>
							</div>
							<div className="col-md-3 text-center  middle center" >
								1,434 USD <span className="spanCnt">+44%</span>
							</div>
							<div className="col-md-2  ">
								<span className="spanCnt">+23</span>32-<span className="spanCnt">500</span> USD 
							</div>
							<div className="col-md-3">
							Adidas Gifd Card 
								<p className="gray">reliable and fast</p>
								<span className="spanCnt">e-codes accepted</span>
								<span className="spanCnt">friends and family</span>
							</div>
							<div className="col-md-1">
								<p>12</p><Icons.Eye />
							</div> 
						</div> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
					</div>
					<div className="vendor-item">
						<div className="row"> 
							<div className="col-md-3  text-center justify"> 
								<label className="switch">
									<i><input type="checkbox"   checked={true} /><span className="slider round"></span></i> 
								</label>
								<span className="markType">T</span>
								<button className="btn">View</button>
								<button className="btn btn-outline-primary">Edit</button>
							</div>
							<div className="col-md-3 text-center  middle center" >
								1,434 USD <span className="spanCnt">+44%</span>
							</div>
							<div className="col-md-2  ">
								<span className="spanCnt">+23</span>32-<span className="spanCnt">500</span> USD 
							</div>
							<div className="col-md-3">
							Adidas Gifd Card 
							<Icons.Arrow />
							<Icons.Trading />
								<p className="gray">reliable and fast</p>
								<span className="spanCnt">e-codes accepted</span>
								<span className="spanCnt">friends and family</span>
							</div>
							<div className="col-md-1">
								<p>12</p><Icons.Eye />
							</div> 
						</div> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
					</div>
					<div className="vendor-item">
						<div className="row"> 
							<div className="col-md-3  text-center justify"> 
								<label className="switch">
									<i><input type="checkbox"   checked={true} /><span className="slider round"></span></i> 
								</label>
								<span className="markType">T</span>
								<button className="btn">View</button>
								<button className="btn btn-outline-primary">Edit</button>
							</div>
							<div className="col-md-3 text-center  middle center" >
								1,434 USD <span className="spanCnt">+44%</span>
							</div>
							<div className="col-md-2  ">
								<span className="spanCnt">+23</span>32-<span className="spanCnt">500</span> USD 
							</div>
							<div className="col-md-3">
							Adidas Gifd Card 
							<Icons.Invite />
							<Icons.SortAsc />
								<p className="gray">reliable and fast</p>
								<span className="spanCnt">e-codes accepted</span>
								<span className="spanCnt">friends and family</span>
							</div>
							<div className="col-md-1">
								<p>12</p><Icons.Eye />
							</div> 
						</div> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
					</div>
					<div className="vendor-item ">
						<div className="row"> 
							<div className="col-md-3  text-center justify"> 
								<label className="switch">
									<i><input type="checkbox"   checked={true} /><span className="slider round"></span></i> 
								</label>
								<span className="markType">T</span>
								<button className="btn">View</button>
								<button className="btn btn-outline-primary">Edit</button>
							</div>
							<div className="col-md-3 text-center  middle center" >
								1,434 USD <span className="spanCnt">+44%</span>
							</div>
							<div className="col-md-2  ">
								<span className="spanCnt">+23</span>32-<span className="spanCnt">500</span> USD 
							</div>
							<div className="col-md-3">
							Adidas Gifd Card 
								<p className="gray">reliable and fast</p>
								<span className="spanCnt">e-codes accepted</span>
								<span className="spanCnt">friends and family</span>
							</div>
							<div className="col-md-1">
								<p>12</p><Icons.Eye />
							</div> 
						</div> 
							<p className="yellow"> We've updated the maxium amount for this offer according to your current balance, deposit more Tether to raise </p> 
					</div>
				</div>

				<button className="btn   floatRight mt3">Create New Offer</button>
				<h2 className="mt5">My Affiliates</h2>
				<p>Share this link with people, bring them on iBitGo and earn every time they buy crypto.</p>
				
				<div style={{position:'relative'}}> 
					<input type="text" className="w100" placeholder="https://iBitGo.com/register?r=23fdsf2fs"></input>
					<button className="btn btn-primary" style={{position:'absolute', right:'4px', top:'5px'}}>Copy</button>
				</div>
				<div className="row mt3">
					<div className="col-md-4">
						<div className="card justify">
							<p>Affiliates</p>
							<p>0</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card justify">
							<p>Total Earnings</p>
							<p>0USD</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card justify">
							<p>Current Balance</p>
							<p>0 USD</p>
						</div>
					</div>
				</div>
				<div className="mt2">
					<button className="btn btn-primary floatRight">More Details</button>
				</div> 
				<h2 className="mt5">Have A Cool Idea?</h2>
				<p>Tell us about it in a few words:</p>
				<textarea className="w100" placeholder="keep it between 25 and 500 characters." rows={10}></textarea>
				<p>Characters left:500</p>
			</div>
			<div id="tabContainer2"> 
				<h2>Balance</h2>
				<div className="frame row">
					<div className="col-md-6"> 
						<p className="gray">Montly traded Bitcoin in total</p>
						<h2 className="dang"><Icons.Profile /> 0BTC</h2>
						<b>0 BTC</b> were sold and bought
						<p className="gray">
							in the previous month (November)
						</p>
					</div>
					<div className="col-md-6 leftborder"> 
						<p className="gray">Montly traded Bitcoin in total</p>
						<h2 className="dang"><Icons.Profile /> 232992932348.23 USDT</h2>
						<b>324234234 USDB</b> were sold and bought
						<p className="gray">
							in the previous month (November)
						</p>
					</div>
				</div>
				<h2 className="mt5">Trades</h2>
				<div className="frame row"> 
					<div className="col-md-4"> 
						<p className="gray">Montly traded Bitcoin in total</p>
						<h2 className="dang">0 Bitcoin trades</h2>
						<h2 className="dang">0102 Tether trades</h2> 
						<p className="gray">
							0 successful Bitcoin and 385 Tether trades in the previous month (November)
						</p>
					</div> 
					<div className="col-md-4 leftborder"> 
						<p className="gray">Monthly total</p>
						<h2 className="dang">293920332.USD</h2> 
						<p className="gray">
							0 successful Bitcoin and 385 Tether trades in the previous month (November)
						</p>
					</div>
					<div className="col-md-4 leftborder"> 
						<p className="gray">Monthly closing ratio total</p>
						<h2 className="dang">32%</h2> 
						<p className="gray">
							 66% closing ratio in the previous month (November)
						</p>
					</div>
				</div>
				<div className="row mt5">
					<div className="col-md-6">
						<div className="frame">
							<div className="frame">
								<b>Top successful offers</b>
								<p className="gray">Best offers by closing ratio</p>
							</div>
							<div className="frame mt1 justify">
								<div className="justify">
									<div className="nolist">1.</div>
									<div> 
										<b>Demestic Wire Transfer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify">
									<div className="nolist">2.</div>
									<div> 
										<b>Demestic Wire Transfer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify">
									<div className="nolist">3.</div>
									<div> 
										<b>Alipay</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify">
									<div className="nolist">4.</div>
									<div> 
										<b>Sephora Gift Card</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify">
									<div className="nolist">5.</div>
									<div> 
										<b>Payoneer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="frame">
							<div className="frame">
								<b>Expired</b>
								<p className="gray">Most expred offers</p>
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8expired 721 times%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Bank Transfer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>WeChat Pay</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Wise	</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
						</div>
					</div>
				</div>
				<div className="row mt5"> 
					<div className="col-md-6">
						<div className="frame">
							<div className="frame">
								<b>Expired</b>
								<p className="gray">Most expred offers</p>
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8expired 721 times%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Bank Transfer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>WeChat Pay</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Wise	</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
						</div>
					</div>
					
					<div className="col-md-6">
						<div className="frame">
							<div className="frame">
								<b>Expired</b>
								<p className="gray">Most expred offers</p>
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8expired 721 times%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Bank Transfer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>WeChat Pay</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Wise	</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
						</div>
					</div>
				</div>
				<div className="row mt5"> 
					<div className="col-md-6">
						<div className="frame">
							<div className="frame">
								<b>Expired</b>
								<p className="gray">Most expred offers</p>
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8expired 721 times%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Bank Transfer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>WeChat Pay</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Wise	</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<button className="btn btn-primary w100">Show All</button>
						</div>
					</div>
					
					<div className="col-md-6">
						<div className="frame">
							<div className="frame">
								<b>Expired</b>
								<p className="gray">Most expred offers</p>
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8expired 721 times%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Bank Transfer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>WeChat Pay</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Wise	</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							<div className="frame mt1 justify">
								<div className="justify"> 
									<div> 
										<b>Payoneer</b>
										<p className="gray">8(80%)</p>
									</div>
								</div>
								<Icons.Logout />
							</div>
							
							<button className="btn btn-primary w100">Show All</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>;
};

export default Vendor;