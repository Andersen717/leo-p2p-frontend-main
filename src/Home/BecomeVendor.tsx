import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';

import ImgBecomeVendor from '../assets/becomevendor.png'
import IconFeatures from '../assets/becomevendor-features.png'
import IconUsers from '../assets/becomevendor-users.png'
import IconVendors from '../assets/becomevendor-vendors.png'
import IconSupport from '../assets/becomevendor-support.png'

import ImgVendors from '../assets/becomevendor-vendorsbrowser.png'

import ImgAppEn from '../assets/becomevendor-app-en.jpg'
import ImgAppCn from '../assets/becomevendor-app-cn.jpg'

import ImgTradeEarnProfit from '../assets/becomevendor-trade-earn-profit.png'
import ImgCreateFindOffer from '../assets/becomevendor-create-find-offer.png'
import ImgBuildProfile from '../assets/becomevendor-build-profile.png'


const imgApp:{[key:string]:string} = {
	en: ImgAppEn,
	cn: ImgAppCn,
}


interface BecomeVendorStatus {
	query: string
	submitLabel: string
	loading:boolean
}

const BecomeVendor = () => {
	const G = useGlobal();
	const L = G.L
	const price = 58268.05;
	// const [status, setStatus] = React.useState<BecomeVendorStatus>({
	// 	submitLabel:'',
	// 	loading:false,
	// 	query: '',
	// })
	// const [isPending, setPending] = React.useState(false)
	// const updateStatus = (json:PayloadType) => setStatus({...status, ...json})

	

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
		<section className="ad container container-xl">
			
			<article className="row">
				<div className="col-xl-6">
					<h2 style={{color:'var(--gray)'}}>{L['becomevendor.heading']}</h2>
					<h1>{L['becomevendor.title']}</h1>
					
					<p>{L['becomevendor.desc']}</p>
					<div style={{marginTop:100}}>
						<button className="btn btn-primary" style={{paddingTop:15, paddingBottom:15}}>{L['becomevendor.submit']}</button>
					</div>
				</div>
				<div className="col-xl-6 flex center">
					<img src={ImgBecomeVendor} style={{width:'auto',height:'500px'}} alt="bg" />
				</div>
			</article>
			<article className="row" style={{marginTop:150, textAlign:'center'}}>
				<div className="col-md-3">
					<div><img src={IconFeatures} width={100} alt="feature" /></div>
					<p style={{marginTop:50}}>{L['becomevendor.feature']}</p>
				</div>
				<div className="col-md-3">
					<div><img src={IconUsers} width={100} alt="users" /></div>
					<p style={{marginTop:50}}>{L['becomevendor.users']}</p>
				</div>
				<div className="col-md-3">
					<div><img src={IconVendors} width={100} alt="vendor" /></div>
					<p style={{marginTop:50}}>{L['becomevendor.vendors']}</p>
				</div>
				<div className="col-md-3">
					<div><img src={IconSupport} width={100} alt="support" /></div>
					<p style={{marginTop:50}}>{L['becomevendor.support']}</p>
				</div>
			</article>
			<article className="row" style={{marginTop:150}}>
				<div className="col-md-8">
					<img src={ImgVendors} style={{width:'100%', height:'auto'}} alt="vendor"/>
				</div>
				<div className="col-md-4 flex middle">
					<div>
						<h2>{L['becomevendor.sub1']}</h2>
						<ul>{L['becomevendor.desc1'].split(/\n/g).map((v,k)=><li key={k}>{v}</li>)}</ul>
					</div>
				</div>
			</article>

			<article style={{marginTop:100}}>
				<h2>{L['becomevendor.weeklytrade']}</h2>
			</article>
			
			<article className="text-center" style={{marginTop:100}}>
				<h1>{L['becomevendor.sub2']}</h1>
				<p>{L['becomevendor.price'].replace('{price}', String(price))}</p>
			</article>
			<article className="row" style={{marginTop:100}}>
				<div className="col-md-4">
					<img src={ImgCreateFindOffer} style={{width:'100%',height:'auto'}} alt="offer" />
				</div>
				<div className="col-md-4 flex middle order">
					<div>
						<h2>{L['becomevendor.sub3']}</h2>
						<p>{L['becomevendor.desc3']}</p>
					</div>
				</div>
			</article>
			<article className="row" style={{marginTop:100}}>
				<div className="col-md-4">
				</div>
				<div className="col-md-4 flex middle">
					<div>
						<h2>{L['becomevendor.sub4']}</h2>
						<p>{L['becomevendor.desc4']}</p>
					</div>
				</div>
				<div className="col-md-4">
					<img src={ImgBuildProfile} style={{width:'100%',height:'auto'}} alt="profile"/>
				</div>
			</article>
			<article className="row" style={{marginTop:100}}>
				<div className="col-md-4">
					<img src={ImgTradeEarnProfit} style={{width:'100%',height:'auto'}} alt="earn"/>
				</div>
				<div className="col-md-4 flex middle order">
					<div>
						<h2>{L['becomevendor.sub5']}</h2>
						<p>{L['becomevendor.desc5']}</p>
					</div>
				</div>
			</article>
			<article style={{marginTop:100}}>
				<div style={{position:'relative'}}>
					<img src={imgApp[G.lang]} width="100%" height="auto" alt={L['becomevendor.alt6']} />
					<div className="img-text">
						<div className="row">
							<div className="col-md-4">
								<div>
									<h2>{L['becomevendor.sub6']}</h2>
									<p>{L['becomevendor.desc6']}</p>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</article>
		</section>
	</Layout>;
};

export default BecomeVendor;