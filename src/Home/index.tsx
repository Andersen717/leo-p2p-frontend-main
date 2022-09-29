import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';

interface HomeStatus {
	query: string
	submitLabel: string
	loading:boolean
}


const Home = () => {
	const {L,A,T} = useGlobal();
	/* React.useEffect() */
	// const [status, setStatus] = React.useState<HomeStatus>({
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
		<section className="container container-xl home">
			<div className="row">
				<div className="col-md-6">
					
				</div>
				<div className="col-md-6">
					<div style={{position:'relative'}}>
						{L['home.title.types'].split(',').map((v,k)=><h1 className="title" key={k}>{A('home.title',{act:v}).map((v1,k1)=><div key={k1}>{v1}</div>)}</h1>)}
					</div>
					<div style={{marginTop:120}}>
						{A('home.title.desc').map((v,k)=><div key={k}>{v}</div>)}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-3">
					<div></div>	
					<p>{L['home.article1']}</p>
				</div>
				<div className="col-md-3">
					<div></div>	
					<p>{L['home.article2']}</p>
				</div>
				<div className="col-md-3">
					<div></div>	
					<p>{L['home.article3']}</p>
				</div>
				<div className="col-md-3">
					<div></div>	
					<p>{L['home.article4']}</p>
				</div>
			</div>
			<div className="mt5">
				<h1 className="text-center">{L['home.payments']}</h1>
				<p className="text-center">{L['home.payments.desc']}</p>
			</div>
			<div className="row mt5">
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.payment1']}</b></div>
						<div>{L['home.payment1.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.payment2']}</b></div>
						<div>{L['home.payment2.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.payment3']}</b></div>
						<div>{L['home.payment3.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.payment4']}</b></div>
						<div>{L['home.payment4.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.payment5']}</b></div>
						<div>{L['home.payment5.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.payment6']}</b></div>
						<div>{L['home.payment6.desc']}</div>
					</div>
				</div>
			</div>
			<div className="flex center">
				<a className="btn btn-primary">{L['home.offers']}</a>
			</div>
			<div className="mt5">
				<h1 className="text-center">{L['home.media']}</h1>
				<p className="text-center">{L['home.media.desc']}</p>
			</div>
			<div>

			</div>
			<div className="mt5">
				<h1 className="text-center">{L['home.vendor']}</h1>
				<p className="text-center">{L['home.vendor.desc']}</p>
			</div>
			<div className="row mt5">
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<h1>12,000+</h1>
						<div>{L['home.trusted.offers']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<h1>12,000+</h1>
						<div>{L['home.trusted.vendors']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<h1>12,000+</h1>
						<div>{L['home.happy.customers']}</div>
					</div>
				</div>
			</div>
			<div className="flex center">
				<a className="btn btn-primary">{L['home.become.vendor']}</a>
			</div>
			<div className="mt5">
				<h1 className="text-center">{L['home.testimonials']}</h1>
				<p className="text-center">{L['home.testimonials.desc']}</p>
			</div>
			<div>

			</div>
			<div className="mt5">
				<h1 className="text-center">{L['home.with']}</h1>
				<p className="text-center">{L['home.with.desc']}</p>
			</div>
			<div className="row mt5">
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.with1']}</b></div>
						<div>{L['home.with1.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.with2']}</b></div>
						<div>{L['home.with2.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.with3']}</b></div>
						<div>{L['home.with3.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.with4']}</b></div>
						<div>{L['home.with4.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.with5']}</b></div>
						<div>{L['home.with5.desc']}</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="frame" style={{marginBottom:'3em'}}>
						<div><b>{L['home.with6']}</b></div>
						<div>{L['home.with6.desc']}</div>
					</div>
				</div>
			</div>
			
			<div className="mt5">
				<h1 className="text-center">{L['home.start']}</h1>
				<p className="text-center">{L['home.start.desc']}</p>
			</div>
			<div className="flex center">
				<a className="btn btn-primary">{L['home.offers']}</a>
			</div>
		</section>
	</Layout>;
};

export default Home;