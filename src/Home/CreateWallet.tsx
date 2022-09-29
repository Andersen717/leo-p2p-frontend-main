import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';
import Bg1 from '../assets/create-wallet-img-1.svg';
import ImgBenefits from '../assets/create-wallet-img-benefits.svg';
import ImgFlexible from '../assets/create-wallet-img-flexible.svg';
import ImgFreedom from '../assets/create-wallet-img-freedom.svg';
import World from '../assets/world.svg';
/* import Play from '../assets/icon_play-button.svg'; */
import './index.scss'

/* interface CreateWalletStatus {
	query: string
	submitLabel: string
	loading:boolean
} */


const CreateWallet = () => {
	const {L} = useGlobal();

	// const [status, setStatus] = React.useState<CreateWalletStatus>({
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
			<div className="row">
				<div className="col-xl-6">
					<h1>{L['walletcreate.title']}</h1>
					<h2>{L['walletcreate.subtitle']}</h2>
					<p className="p">{L['walletcreate.desc']}</p>
					<div style={{marginTop:100}}>
						<button className="btn btn-primary" style={{paddingTop:15, paddingBottom:15}}>{L['walletcreate.submit']}</button>
					</div>
				</div>
				<div className="col-xl-6">
					<img src={Bg1} style={{width:'100%',height:'auto'}} alt="bg"/>
				</div>
			</div>
			<div className="p" style={{marginTop:150}}>
				<div className="text-center">
					<h2>{L['walletcreate.sub1']}</h2>
					<div>{L['walletcreate.note11']}</div>
					<div>{L['walletcreate.note12']}</div>
				</div>
				<div className="row" style={{marginTop:100, textAlign:'center'}}>
					<div className="col-md-4">
						<h2 style={{color:'var(--primary)'}}>0%</h2>
						<p>{L['walletcreate.nofee']}</p>
					</div>
					<div className="col-md-4">
						<h2 style={{color:'var(--primary)'}}>6,000,000</h2>
						<p>{L['walletcreate.satisfied']}</p>
					</div>
					<div className="col-md-4">
						<h2 style={{color:'var(--primary)'}}>+2,000,000</h2>
						<p>{L['walletcreate.walletcount']}</p>
					</div>
				</div>
				<div style={{marginTop:100}}>
					<div  style={{overflowY:'auto',display:'flex'}}>
						<img src={World} className="map" style={{width:'auto', height:500}} alt="world_map"/>
					</div>
				</div>
				<div className="text-center" style={{marginTop:100}}>
					<h2>{L['walletcreate.sub2']}</h2>
					<p>{L['walletcreate.note2']}</p>
				</div>
				<div className="row" style={{marginTop:100}}>
					<div className="col-md-6">
						<img src={ImgBenefits} style={{width:'100%',height:'auto'}} alt="benefits"/>
					</div>
					<div className="col-md-6">
						<h2>{L['walletcreate.sub3']}</h2>
						<p>{L['walletcreate.note3']}</p>
					</div>
				</div>
				<div style={{marginTop:100}}>
					<div className="row" style={{marginTop:100}}>
						<div className="col-md-6 flex middle">
							<div>
								<h3>{L['walletcreate.sub4']}</h3>
								<p>{L['walletcreate.note4']}</p>
							</div>
						</div>
						<div className="col-md-6">
							<img src={ImgFlexible} style={{width:'100%',height:'auto'}} alt="flexible"/>
						</div>
					</div>
				</div>
				<div style={{marginTop:100}}>
					<div className="row" style={{marginTop:100}}>
						<div className="col-md-6">
							<img src={ImgFreedom} style={{width:'100%',height:'auto'}} alt="freedom"/>
						</div>
						<div className="col-md-6 flex middle">
							<div>
								<h3>{L['walletcreate.sub5']}</h3>
								<p>{L['walletcreate.note5']}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
};

export default CreateWallet;