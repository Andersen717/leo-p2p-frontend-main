import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';
import ImgAvatar from '../assets/becomevendor-earn-more.png';
import Icons from '../components/Icons';  
import './payment.scss'
import SideMenus from '../components/SideMenus'; 
import SettingMenus from './Menus';

interface PaymentProps {
	uid: string
} 

const Payment = ({uid}:PaymentProps) => {
	const  {account, L, T, Z, getTime, getISOTimeText, fromISOTimeText, fillTimes} = useGlobal();   
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

	return <Layout>
		{account ? (
			<section className="container container-xl">
				<div className="row">
					<div className="col-md-3 mt3">
						<SideMenus activeMenu="payment" menus={SettingMenus(L)}/>
					</div> 
					<div className="col-md-9 mt3"> 
						<div className="frame payment">
							<div className="h2 title">Bank Accounts</div>
							<p>Add your bank account details below. You can share these details with your trade partner via trade chat, for bank transfter</p>
							<button className="btn btn-primary pl3 pr2">Add account <Icons.Plus /></button> 
							<div className="mt5">
								<b>Taklha Namdu</b>
								<div className="frame mt1">
									PERSONAL 
									<div className="flex justify">
										<div>
											<button className="btn m" style={{backgroundColor:'var(--indigo)', color:'white'}}>ICIC BANK LIMITED</button> 
											<button className="btn btn-success m">INR</button> 
											<span>23453423423</span>
										</div>
										<div>
											<a className=""><Icons.Minus /><span>Delete</span></a>
											<a className="ml2"><Icons.Info /><span>Edit</span></a>
										</div>
									</div>
								</div>
							</div>
							<div className="mt3">
								<b>Pe2</b>
								<div className="frame mt1">
									PERSONAL 
									<div className="flex justify">
										<div>
											<button className="btn m" style={{backgroundColor:'var(--indigo)', color:'white'}}>ICIC BANK LIMITED</button> 
											<button className="btn btn-success m">INR</button> 
											<span>23453423sdfsdfsdf423</span>
										</div>
										<div>
											<a className=""><Icons.Minus /><span>Delete</span></a>
											<a className="ml2"><Icons.Info /><span>Edit</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="frame mt3"> 
							<div className="mt1"> 
									<div className="h2 title">Online Wallets</div>
									<p>Add your online wallets below</p> 
									<button className="btn btn-primary m">Add New +</button> 
									<div className="mt2 text-center">
										<Icons.star />
										<p>No Online wallets</p>
									</div>
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

export default Payment;
