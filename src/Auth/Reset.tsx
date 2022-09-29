import React from 'react';
import Icons from '../components/Icons';
import useGlobal from '../useGlobal';
import Header from './Header';
import "./index.scss"

interface ResetStatus {
	query: string
	submitLabel: string
	loading:boolean
}


const Reset = () => {
	const {L} = useGlobal();

	// const [status, setStatus] = React.useState<ResetStatus>({
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

	return (<main className="auth">
		<Header />
		<div style={{marginTop:30}}>
			<h2>{L['reset.title']}</h2>
			<p>{L['reset.tips']}</p>
		</div>
		<ul className="tab" style={{marginTop:40}}>
			<li className="active">{L['reset.mobile']}</li>
			<li>{L['reset.email']}</li>
		</ul>
		<div style={{marginTop:30}} className="form">
			<label>
				{L['reset.email.label']}
				<input type="text" autoComplete="off" />
				<div className="flex middle" style={{color:'var(--red)'}}><Icons.Info className="mr" fill='currentColor' /> {L['login.err.blank']}</div>
			</label>
			<button className="btn btn-primary">{L['reset.submit']}</button>
		</div>
		<div style={{marginTop:30}}>
			<a href="/login" className="flex middle cmd"><Icons.Arrow className="mr" /> <b>Back to Login</b></a>
		</div>
	</main>)
};

export default Reset;