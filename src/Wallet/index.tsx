import React from 'react';
import Icons from '../components/Icons';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal'; 
import  './wallet.scss';

interface WalletStatus {
	query: string
	submitLabel: string
	loading:boolean,
	modal:boolean
}


const Wallet = () => {
	const {L} = useGlobal();

	  const [status, setStatus] = React.useState<WalletStatus>({
	 	submitLabel:'',
	 	loading:false,
	 	query: '',
		modal:true	
	 })
	// const [isPending, setPending] = React.useState(false)
	const updateStatus = (json:PayloadType) => setStatus({...status, ...json})

	const onModal = (k:boolean) => {
		updateStatus({modal:k})
	}
	
	

	React.useEffect(()=>{
		/* try {
			if (!G.inited && !G.loading) {
				G.update({loading:true})
				fetch(getApiUrl('all-tokens')).then(data=>data.json()).then(coins=>{
					if (coins) {
						console.log('coins', coins)
						checkPending()
						G.update({coins, ...G.getPending(), inited:true, loading:false})
					}
				}).catch(reason=>{
					G.update({loading:false, err:reason.message})
				})
			}
		} catch (error) {
			console.log(error)
		} */
	}, [])
 
	return <Layout className="Wallet">
		<section className="container container-xl wallet"> 
			<div className="modal" style={{display:status.modal===true?'':'none'}}>
				<div className="overlay" onClick={()=>onModal(false)}></div>
				<div className="modalContainer send">
					<h2>Send from Ibitto wallet</h2>
					<span className="closeBtn">x</span>
					<hr/> 
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-9">
							<h3>Available <b className="btn-link">0.000002342</b> BTC</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 text-right mt2 p"><b>BTC Amount</b></div>
						<div className="col-md-9"><input type="text" className="p mr3" placeholder="0.0000000"></input> <button className="btn btn-outline-primary  m" style={{position:'relative', marginLeft:'-100px'}}>BTC </button> ~ 0 USD</div>
					</div>
					<div className="row mt2">
						<div className="col-md-3 text-right mt2 p"><b>To Bitcoin address</b></div>
						<div className="col-md-9"><input type="text" className="p mr3 w100" placeholder="Enter Bitcoin address"></input></div>
					</div>
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-9"> 
							<p className="gray">A Bitcoin address looks like his:<b>32343534lkjljwrwrkjwerwr</b> (this on is yours)</p>
							<a className="btn-link">Send to Ibitgo username instead</a>
							<button className="btn right btn-primary p m">Continue</button>
						</div>
					</div>
				</div> 
			</div>
			<div id="balancePanel"> 
				<h1>My Wallet</h1>
				<div className="tabbar">
					<div className="tabmenu">Balanice</div>
					<div className="tabmenu">Balanice</div>
					<div className="tabmenu active">Balanice</div>
					<div className="tabmenu">Balanice</div>
				</div>
				<div className="justify">
					<div>
						<p className="gray">Total balance <Icons.Info /></p>
						<h3>5343435 USD</h3>
					</div> 
					<p className="gray">Take the tour to understand your wallet better <Icons.Whatnew /></p> 
				</div>
				<div className="row p m">
					<div className="col-md-4">
						<div className="frame"> 
							<p className="justify m0 p0">
								<b><Icons.Thumbup />Bitcoin</b>
								<p>Market price :<b>324,2424 USDT</b></p>
							</p>
							Current balance
							<h2 className="m0 p0">0.0000002192 BTC</h2>
							<p className="justify m0">
								<p> ` 1.08 USD</p> 
								<p>security depoist 0.005 BTC</p>
							</p>
							<button className="btn m">Send</button>
							<button className="btn m">Receive</button>
							<button className="btn m">...</button>
						</div>
					</div>
					<div className="col-md-4">
						<div className="frame"> 
							<p className="justify m0 p0">
								<b><Icons.Invite />Tether</b>
								<p>Market price :<b>324,2424 USDT</b></p>
							</p>
							Current balance
							<h2 className="m0 p0">0.0000002192 BTC</h2>
							<p className="justify m0">
								<p> ` 1.08 USD</p> 
							</p>
							<button className="btn m">Send</button>
							<button className="btn m">Receive</button>
							<button className="btn m">...</button>
						</div>
					</div>
					<div className="col-md-4">
						<div className="frame"> 
							<p className="justify m0 p0">
								<b><Icons.Thumbup />Ethereum</b>
								<p>Market price :<b>324,2424 USDT</b></p>
							</p>
							Current balance
							<h2 className="m0 p0">0.0000002192 BTC</h2>
							<p className="justify m0">
								<p> ` 1.08 USD</p> 
							</p>
							<button className="btn m">Send</button>
							<button className="btn m">Receive</button>
							<button className="btn m">...</button>
						</div>
					</div>
				</div>
				<h3 className="mt5">Latest transactions</h3>
				<div className="row m3">
					<div className="col-md-2">Transaction</div>
					<div className="col-md-6">Details</div>
					<div className="col-md-2">STATUS</div>
					<div className="col-md-1">AMOUNT</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
			</div>
			<div id="addressPanel">
				<div className="row">
					<button className="btn m p"><i className="ic coin bnb"></i>Bitcoin </button>
					<button className="btn m p"><i className="ic coin usdt"></i>Tether</button>
					<button className="btn btn-outline-primary m p"><i className="ic coin eth"></i> Ethereum</button>
				</div>
				<h2>Your crypto addresses</h2>
				<div className="row">
					<div className="col-md-7">ADDRESS</div>
					<div className="col-md-3">CREATED</div>
					<div className="col-md-2">RECEIVE TO ADDRESS</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-7"><Icons.Minus />0x23342348BSEF9SDFFSFF FSDFWF9SFSFS</div>
					<div className="col-md-3">Dec 5 11;38 AM</div>
					<div className="col-md-2 right">
						<b>+0 USD</b>
						<p> +0 ETH</p>
					</div>
				</div>
			</div>
			<div id="transactionPanel">
				<div className="row">
					<button className="btn m p"><i className="ic coin bnb"></i>Bitcoin </button>
					<button className="btn m p"><i className="ic coin usdt"></i>Tether</button>
					<button className="btn btn-outline-primary m p"><i className="ic coin eth"></i> Ethereum</button>
				</div>
				<h2>Finished transactions</h2>
				<div className="row">
					<div className="col-md-3">TRANSACTION</div>
					<div className="col-md-5">DETAILS</div>
					<div className="col-md-2">STATUS</div>
					<div className="col-md-2">AMOUNT</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
				<div className="row wallet-row">
					<div className="col-md-2 flex">
						<Icons.SortAsc className="middle"/>
						<div className="ml2 middle"> 
							<b>Sent Out</b>
							<p className="gray">Dec 5, 4:04 PM</p>
						</div>
					</div>
					<div className="col-md-6">
						<p className="gray">Sent to <span className="btn-link">YernKanyu324</span> in trade <span className="btn-link">wAGmxENYQoo</span></p>
					</div>
					<div className="col-md-2">
						<span className="spanCnt">Completed</span>
					</div>
					<div className="col-md-2 text-right">
						<b>+1,234.23 USDT</b>
						<p className="gray">-23423 CNY</p>
					</div>
				</div>
			</div>
		</section>
	</Layout>;
};

export default Wallet;