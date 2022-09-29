import React from 'react';
import Layout from '../components/Layout'; 
import Icons from '../components/Icons'; 
import useGlobal from '../useGlobal'; 
import './tradehistory.scss' ; 
import Avatar from '../assets/avatar.png';


interface TradeHistoryProps {
	uid: string
}

const TradeHistory = ({uid}:TradeHistoryProps) => {  
	const  {account, L, T} = useGlobal();   
	return <Layout>
		{account ? (
			<section className="container container-xl tradehistory">
				<div className="row" id="historyPanel">
					<div className="col-md-3 col-sm-12"> 
						<div className="leftNavPanel">
							<div className="justify">
								<h3 className="gray">Cryptocurrency</h3>
								<Icons.Arrow />
							</div>
							<label className="check">
								<input type="checkbox" checked={true} />Bitcoin
							</label>
							<label className="check">
								<input type="checkbox" checked={true} />Bitcoin
							</label>
							<label className="check">
								<input type="checkbox" checked={true} />Bitcoin
							</label>

							<div className="justify">
								<h3 className="gray">Trade Type</h3>
								<Icons.Arrow />
							</div>
							<label className="check">
								<input type="checkbox" checked={true} />Buy
							</label>
							<label className="check">
								<input type="checkbox" checked={true} />Sell
							</label> 
							
							<div className="justify">
								<h3 className="gray">Trade Outcome</h3>
								<Icons.Arrow />
							</div>
							<label className="check">
								<input type="checkbox" checked={true} />Completed
							</label>
							<label className="check">
								<input type="checkbox" checked={true} />Disputed
							</label> 
							<label className="check">
								<input type="checkbox" checked={true} />Expired
							</label> 
							<label className="check">
								<input type="checkbox" checked={true} />Canceled
							</label>  
							<div className="justify">
								<h3 className="gray">Select Date Range</h3> 
							</div>
								<input type="text"></input>
							<p className="gray">You can select dates up to a month apart.</p>

							
							<div className="justify">
								<h3 className="gray">Payment Methods</h3>
								<Icons.Arrow />
							</div>
							<label className="check">
								<input type="checkbox" checked={true} />Payoneer
							</label>
							<label className="check">
								<input type="checkbox" checked={true} />WeChat Pay
							</label> 
							<label className="check">
								<input type="checkbox" checked={true} />Bank Transfer
							</label> 
							<label className="check">
								<input type="checkbox" checked={true} />Sephora Gift Card
							</label>  
							<button className="btn disabled">Apply</button>
							<button className="btn">Clear All</button>
						</div>
					</div>
					<div className="col-md-9 col-sm-12">
						<div className="containerPanel">
							<h2 className="dang">Trade History</h2>
							<input type="text" placeholder="Export history"  className="w100 m p" />
							<input type="text" placeholder="Export history"  className="w100 m p" />	
							<div className="justify historyitem">
								<div>
									<h3>My Past Trades</h3>
									<p className="gray">Dec 1, 2021-dec5,201</p>
								</div>
								<div>
									<button className="btn m">Export Trides <Icons.SortDesc /></button>
									<button className="btn m">Copy Details <Icons.star/></button>
								</div>
							</div>
							<div className="historyitem row">
								<div className="col-md-5 justify">
									<img src={Avatar} style={{maxWidth:60, width:60, height:60}} />
									<div>
										<p> WeChat Pay</p>
										<span className="markType">T</span> Sell <a className="btn-link">ywer 323</a>  Dec 5, 2021 4:23 PM
									</div>
								</div>
								<div className="col-md-4 justify"> 
										<b>324234234 CNY</b>192919423 USDT
										<p className="gray">
											Rate:6.17 CNY/USDB
										</p> 
								</div>
								<div className="col-md-2">
									<button className="btn disabled btn-outline-primary">Successful</button>
								</div>
								<div className="col-md-1"><Icons.Arrow /></div> 
							</div>
							  
							<div className="historyitem row">
								<div className="col-md-5 justify">
									<img src={Avatar} style={{maxWidth:60, width:60, height:60}} />
									<div>
										<p> WeChat Pay</p>
										<span className="markType">T</span> Sell <a className="btn-link">ywer 323</a>  Dec 5, 2021 4:23 PM
									</div>
								</div>
								<div className="col-md-4 justify"> 
										<b>324234234 CNY</b>192919423 USDT
										<p className="gray">
											Rate:6.17 CNY/USDB
										</p> 
								</div>
								<div className="col-md-2">
									<button className="btn disabled btn-outline-primary">Successful</button>
								</div>
								<div className="col-md-1"><Icons.Arrow /></div> 
							</div>
							<div className="historyitem row">
								<div className="col-md-5 justify">
									<img src={Avatar} style={{maxWidth:60, width:60, height:60}} />
									<div>
										<p> WeChat Pay</p>
										<span className="markType">T</span> Sell <a className="btn-link">ywer 323</a>  Dec 5, 2021 4:23 PM
									</div>
								</div>
								<div className="col-md-4 justify"> 
										<b>324234234 CNY</b>192919423 USDT
										<p className="gray">
											Rate:6.17 CNY/USDB
										</p> 
								</div>
								<div className="col-md-2">
									<button className="btn disabled btn-outline-primary">Successful</button>
								</div>
								<div className="col-md-1"><Icons.Arrow /></div> 
							</div>
							<div className="historyitem row">
								<div className="col-md-5 justify">
									<img src={Avatar} style={{maxWidth:60, width:60, height:60}} />
									<div>
										<p> WeChat Pay</p>
										<span className="markType">T</span> Sell <a className="btn-link">ywer 323</a>  Dec 5, 2021 4:23 PM
									</div>
								</div>
								<div className="col-md-4 justify"> 
										<b>324234234 CNY</b>192919423 USDT
										<p className="gray">
											Rate:6.17 CNY/USDB
										</p> 
								</div>
								<div className="col-md-2">
									<button className="btn disabled btn-outline-primary">Successful</button>
								</div>
								<div className="col-md-1"><Icons.Arrow /></div> 
							</div>
							<div className="historyitem row">
								<div className="col-md-5 justify">
									<img src={Avatar} style={{maxWidth:60, width:60, height:60}} />
									<div>
										<p> WeChat Pay</p>
										<span className="markType">T</span> Sell <a className="btn-link">ywer 323</a>  Dec 5, 2021 4:23 PM
									</div>
								</div>
								<div className="col-md-4 justify"> 
										<b>324234234 CNY</b>192919423 USDT
										<p className="gray">
											Rate:6.17 CNY/USDB
										</p> 
								</div>
								<div className="col-md-2">
									<button className="btn disabled btn-outline-primary">Successful</button>
								</div>
								<div className="col-md-1"><Icons.Arrow /></div> 
							</div>
							<div className="historyitem row">
								<div className="col-md-5 justify">
									<img src={Avatar} style={{maxWidth:60, width:60, height:60}} />
									<div>
										<p> WeChat Pay</p>
										<span className="markType">T</span> Sell <a className="btn-link">ywer 323</a>  Dec 5, 2021 4:23 PM
									</div>
								</div>
								<div className="col-md-4 justify"> 
										<b>324234234 CNY</b>192919423 USDT
										<p className="gray">
											Rate:6.17 CNY/USDB
										</p> 
								</div>
								<div className="col-md-2">
									<button className="btn disabled btn-outline-primary">Successful</button>
								</div>
								<div className="col-md-1"><Icons.Arrow /></div> 
							</div>
							<div className="historyitem row">
								<div className="col-md-5 justify">
									<img src={Avatar} style={{maxWidth:60, width:60, height:60}} />
									<div>
										<p> WeChat Pay</p>
										<span className="markType">T</span> Sell <a className="btn-link">ywer 323</a>  Dec 5, 2021 4:23 PM
									</div>
								</div>
								<div className="col-md-4 justify"> 
										<b>324234234 CNY</b>192919423 USDT
										<p className="gray">
											Rate:6.17 CNY/USDB
										</p> 
								</div>
								<div className="col-md-2">
									<button className="btn disabled btn-outline-primary">Successful</button>
								</div>
								<div className="col-md-1"><Icons.Arrow /></div> 
							</div>
							<div className="historyitem row">
								<div className="col-md-5 justify">
									<img src={Avatar} style={{maxWidth:60, width:60, height:60}} />
									<div>
										<p> WeChat Pay</p>
										<span className="markType">T</span> Sell <a className="btn-link">ywer 323</a>  Dec 5, 2021 4:23 PM
									</div>
								</div>
								<div className="col-md-4 justify"> 
										<b>324234234 CNY</b>192919423 USDT
										<p className="gray">
											Rate:6.17 CNY/USDB
										</p> 
								</div>
								<div className="col-md-2">
									<button className="btn disabled btn-outline-primary">Successful</button>
								</div>
								<div className="col-md-1"><Icons.Arrow /></div> 
							</div>
						
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

export default TradeHistory;