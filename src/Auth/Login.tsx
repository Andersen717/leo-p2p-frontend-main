import React from 'react';
import Icons from '../components/Icons';
import useGlobal from '../useGlobal';
import Header from './Header';
import "./index.scss"


interface LoginStatus {
	query: string
	submitLabel: string
	loading:boolean
}


const Login = () => {
	const {L} = useGlobal();

	// const [status, setStatus] = React.useState<LoginStatus>({
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

	return (<div className="auth">
		<Header />
		<div style={{marginTop:30}}>
			<h2>{L['login.title']}</h2>
			<div className="alert-info">
				<div className="flex middle">
					<Icons.Info fill="#0091d2"/>
					<span style={{paddingLeft:10}}>{L['login.tips']}</span>
				</div>
				<div style={{paddingLeft:26, marginTop:10}}>
					<img src="/url.webp" alt="url" />
				</div>
			</div>
		</div>
		<div style={{marginTop:30}} className="form">
			<label>
				{L['login.email']}
				<input type="text" autoComplete="off" />
				<div className="flex middle" style={{color:'var(--red)'}}><Icons.Info className="mr" fill='currentColor' /> {L['login.err.blank']}</div>
			</label>
			<label>
				<div className="justify">
					{L['login.password']}
					<a className="cmd" href="/reset-password">{L['login.forgot']}</a>
				</div>
				<input type="password" autoComplete="new-password" />
				<div className="flex middle" style={{color:'var(--red)'}}><Icons.Info className="mr" fill='currentColor' /> {L['login.err.blank']}</div>
			</label>
			<button className="btn btn-primary">{L['login.submit']}</button>
		</div>
		<hr style={{marginTop:30}}/>
		<div style={{marginTop:10}}>
			{L['login.register.label']} <a className="cmd" href="/register">{L['login.register']}</a>
		</div>
	</div>)
};

export default Login;