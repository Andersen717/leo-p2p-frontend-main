import React from 'react';
import Icons from '../components/Icons';
import useGlobal from '../useGlobal';
import Header from './Header';
import "./index.scss"

interface RegisterStatus {
	query: string
	submitLabel: string
	loading:boolean
}


const Register = () => {
	const {L} = useGlobal();

	// const [status, setStatus] = React.useState<RegisterStatus>({
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
			<h2>{L['register.title']}</h2>
			<p>{L['register.tips']}</p>
		</div>
		<ul className="tab" style={{marginTop:40}}>
			<li className="active">{L['register.mobile']}</li>
			<li>{L['register.email']}</li>
		</ul>
		<div style={{marginTop:30}} className="form">
			<label>
				{L['reset.email.label']}
				<input type="text" autoComplete="off" />
				<div className="flex middle" style={{color:'var(--red)'}}><Icons.Info className="mr" fill='currentColor' /> {L['login.err.blank']}</div>
			</label>
			<label>
				{L['reset.pass.label']}
				<input type="password" autoComplete="off" />
				<div className="progress"></div>
				<div className="flex middle" style={{color:'var(--red)'}}><Icons.Info className="mr" fill='currentColor' /> {L['login.err.blank']}</div>				
			</label>
			<label>
				{L['register.referral']}
				<input type="text" autoComplete="off" />
				<div className="flex middle" style={{color:'var(--red)'}}><Icons.Info className="mr" fill='currentColor' /> {L['login.err.blank']}</div>
			</label>
			<button className="btn btn-primary">{L['reset.submit']}</button>
		</div>
		<div style={{marginTop:30}}>
			<a href="/login" className="flex middle cmd"><Icons.Arrow className="mr" /> <b>Back to Login</b></a>
		</div>
		<div>
			{L['register.agree']}
		</div>
	</main>)
};

export default Register;