import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';
import ImgAvatar from '../assets/becomevendor-earn-more.png';
import Icons from '../components/Icons';  
import './developer.scss' 
import SettingMenus from './Menus';
import SideMenus from '../components/SideMenus';

interface DeveloperProps {
	uid: string
} 

const Developer = ({uid}:DeveloperProps) => {
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
	/* const menus:MenusType = {
		profile: {
			url: `/account/profile`,
			icon: <Icons.Idverify margin={10}/>,
			title: L['profile.menu.profile']
		},
		security: {
			url: `/account/security`,
			icon: <Icons.Settings margin={10}/>,
			title: L['profile.menu.security']
		},
		payment: {
			url: `/account/payment`,
			icon: <Icons.Address margin={10}/>,
			title: L['profile.menu.payment']
		},
		developer: {
			url: `/account/developer`,
			icon: <Icons.Partners margin={10}/>,
			title: L['profile.menu.developer']
		},
		verification: {
			url: `/account/verification`,
			icon: <Icons.Partners margin={10}/>,
			title: L['profile.menu.verification']
		},
		connectedapps: {
			url: `/account/connected`,
			icon: <Icons.location margin={10}/>,
			title: L['profile.menu.connected']
		}
	}
 */
	return <Layout>
		{account ? (
			<section>
				<div className="row">
					<div className="col-md-3 mt3">
						<SideMenus activeMenu="developer" menus={SettingMenus(L)}/>
					</div> 
					<div className="col-md-9 mt3"> 
						<div className="frame developer">
							<div className="flex" style={{backgroundColor:'transparent'}}>
								<div className="fill ml3">
										<h1 className="apikey-title">API Key</h1>
										<div className="h1" >OAuth 2.0 Support</div>
										<p className="pt1">Managing your API just got more flexible with our newly added OAuth 2.0 support. Check it out for yourself in the developer's portal</p>
										<button className="btn btn-primary p1">View more <Icons.star /></button> 
								</div> 
								<div className="flex middle">
									<img src={ImgAvatar} style={{width:'100%', maxWidth:300,  borderRadius:'50%'}} alt="bg" />
								</div>
							</div>
							
							<p className="gray">To generate your API key, enter the two-factor authentication code you use for logging in to your account.</p>
							<div className="addkey">
								<div>
									<p>Two-Factor Code:</p>
									<input type="text" className="w100" placeholder=''  />
									<div>
										<button className="btn btn-primary w100 mt3 p2">Add new API key</button> 
									</div>
									<p className="text-center">API secret will be shown only once after generation</p>
								</div>
							</div>
							<p className="pt5">Please read developer introduction <b className="btn-link">here</b> and find API documentation <b className="btn-link">here</b></p>
						</div>
					</div>
				</div>  
			</section>
		) : (
			null
		)}
		
	</Layout>;
};

export default Developer;