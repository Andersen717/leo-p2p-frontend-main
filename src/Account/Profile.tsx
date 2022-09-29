import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';
import ImgAvatar from '../assets/avatar.png';
import Icons from '../components/Icons';
import Input from '../components/Input'; 
import './profile.scss'
import SideMenus from '../components/SideMenus';
import Countries from '../config/countries.json';
import Timezones from '../config/timezones.json';
import SettingMenus from './Menus';

const timezones = Timezones as {[key:string]:number}
interface SettingProfileProps {
	uid: string
}
interface SettingProfileStatus {
	usertype: Number ,
	countries: Array<string>, 
	timezone:string,
	requireVerified1:boolean
	requireVerified2:boolean
	requireVerified3:boolean
	requireVerified4:boolean
}

const SettingProfile = ({uid}:SettingProfileProps) => {
	const  {account, L, T, Z, getTime, getISOTimeText, fromISOTimeText, fillTimes} = useGlobal();   
	const [status, setStatus] = React.useState<SettingProfileStatus>({
	 	usertype:1 ,
		 countries:[], 
		timezone:'',
		requireVerified1:true,
		requireVerified2:true,
		requireVerified3:true,
		requireVerified4:true
	});

	const [settings, setSettings] = React.useState([
		{
			"title":"Bitcoin price change",
			"web":true,
			"Email":false,
			"Telegram":true,
			"App":true
		}, 
		{
			"title":"Buyer stared uploading cards",
			"web":true,
			"Email":false,
			"Telegram":true,
			"App":true
		}, 
		{
			"title":"Cryptocurrency deposit confirmed",
			"web":true,
			"Email":false,
			"Telegram":true,
			"App":true
		}, 
		{
			"title":"Incoming trade",
			"web":false,
			"Email":false,
			"Telegram":true,
			"App":false
		}, 
		{
			"title":"New chat message",
			"web":true,
			"Email":false,
			"Telegram":false,
			"App":true
		}, 
		{
			"title":"New moderator message",
			"web":false,
			"Email":false,
			"Telegram":true,
			"App":true
		}, 
	]);

	// const [isPending, setPending] = React.useState(false)
	 const updateStatus = (json:any) => setStatus({...status, ...json})

	
	 const [times] = React.useState<{from:string[],until:string[]}>({from:fillTimes(0),until:fillTimes(1800)})
	 const onCurrency = (k:string) => {
		updateStatus({currency:k})
		/* setShowCurrencies(false) */
	}

	const onTimezone = (k:string) => {
		updateStatus({timezone:k})
	}
	
	const unixtime = new Date().getTime()
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
			<section>
				<div className="row">
					<div className="col-md-3 mt3">
						<SideMenus activeMenu="profile" menus={SettingMenus(L)}/>
					</div>
					<div className="col-md-9 mt3">
						<div className="frame profile">
							<span className="h1 title">{L['profile.accountsetting']}</span>
							<span className="h2 verify">  {L['profile.id.verified']}</span>
							<div className="mt1">
								<span>({account.email})</span>
								<a className="changelink">  {L['profile.changeemail']}</a>
							</div>
							<div className="mt3">
								<b>{L['profile.yourname']}</b>
							</div>
							<div className="mt2">
								<span>{account.profile.description}</span> 
								<Icons.Info margin={10} />
							</div>
							<div className="mt3">    
								<label>
									<input type="radio" name="typename" onClick={()=>updateStatus({usertype:1})} checked={status.usertype===1}/>
									{L['profile.yourname.setting1']}
								</label>
							</div>
							<div className="mt2">    
								<label>
									<input type="radio" name="typename" onClick={()=>updateStatus({usertype:2})} checked={status.usertype===2}/>
									{L['profile.yourname.setting2']}
								</label>
							</div>
							<div className="mt2">    
								<label>
									<input type="radio" name="typename" onClick={()=>updateStatus({usertype:3})} checked={status.usertype===3}/>
									{L['profile.yourname.setting3']}
								</label>
							</div> 
							<div className="mt3">
								<div className="row">
									<div className="col-md-5"> 
										<b>{L['profile.phone']}</b>
										<div>
											<input type="text" style={{width:'100%'}} placeholder='132 323323 323'  />
										</div>
										<div className="mt2">
											<a className="changelink">  {L['profile.changephone']}</a>
										</div>
									</div>
									<div className="col-md-7">
										<div className="justify" style={{alignItems:'flex-start'}}> 
											<img src={ImgAvatar} style={{maxWidth:100}} alt="bg" />
											<div>
												<p>{L['profile.username']}</p>
												<b>{account.profile.alias}</b>
												<div className="mt2"> 
													<button className="btn justify f10" style={{width:'80%'}}>Upload Image
														<Icons.Plus />
													</button>
												</div>
												<div className="mt2">
													<p>
														{L['profile.photo.discript']}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> 
							<hr />
							<div className="row">
								<div className="col-md-6"> 
									<p><b>{L['profile.bio.title']}</b> </p>
									<textarea placeholder={L['createoffer.terms.placeholder']} rows={4} style={{width:'100%'}}></textarea>
									<p style={{color:'var(--gray)'}}>Maximum 3 lines and 180 characters</p>
								</div>
								<div className="col-md-6"> 
									<p><b>{L['profile.preferred.currency']}</b>  </p>
									<Input.Combo value="" style={{width:'100%'}} placeholder={L['select.optional']} data={Object.keys(Countries).map(k=>({key:k,label:L['country.'+k]}))} onChange={v=>onCurrency(v)} onRender={k=>L['country.'+k]} />
									<p style={{color:'var(--gray)'}} >{L['profile.preferred.discript']}</p>
								</div>
							</div> 

							<div className="row mt3">
								<div className="col-md-6"></div>
								<div className="col-md-6">
									<div className="row"> 
										<div className="col-3 text-center">
											<Icons.Whatnew />
											<label>{L['profile.web']}</label>
										</div> 
										<div className="col-3 text-center">
											<Icons.Email />
											<label>{L['profile.email']}</label>
										</div> 
										<div className="col-3 text-center">
											<Icons.Idverify />
											<label>{L['profile.telegram']}</label>
										</div> 
										<div className="col-3 text-center">
											<Icons.Phone />
											<label>{L['profile.app']}</label>
										</div> 	
									</div>
								</div>
							</div> 
							
							{settings.map((v,k)=>(
								<div className="row" key={k}>  
									<div className="col-md-6">{v['title']}</div>
									<div className="col-md-6">
										<div className="row"> 
											<div className="col-3 text-center">
												<label className="check center">
													<input type="checkbox" checked={v['web']===true?true:false} />
												</label>
											</div> 
											<div className="col-3 text-center">
												<label className="check center">
													<input type="checkbox" checked={v['Email']===true?true:false} />
												</label>
											</div> 
											<div className="col-3 text-center">
												<label className="check center">
													<input type="checkbox" checked={v['Telegram']===true?true:false} />
												</label>
											</div> 
											<div className="col-3 text-center">
												<label className="check center">
													<input type="checkbox" checked={v['App']===true?true:false} />
												</label>
											</div> 	
										</div>
									</div> 
								</div>
								))}

							<div className="mt3">
								<p><b>{L['profile.timeinterval']}</b></p>
								<div className="row">
									<div className="col-md-4">   
									<Input.Number onChange={min=>updateStatus({min})} value={9} step={10} min={0} max={100} symbol='minutes' />
									</div>
									<div className="col-md-8">
										{L['profile.timeintervaldis']}	  
									</div>
								</div>
							</div>
							<hr />
							<div className="mt3"> 
								<label className="check m p">
									<input type="checkbox" onClick={(e:any)=>updateStatus({requireVerified1:e.target.checked})} checked={status.requireVerified1} />
									{L['profile.check1']}
								</label>
								<hr />
								<label className="check m p">
									<input type="checkbox" onClick={(e:any)=>updateStatus({requireVerified2:e.target.checked})} checked={status.requireVerified2} />
									{L['profile.check2']}
								</label>
								<hr />
								<label className="check m p">
									<input type="checkbox" onClick={(e:any)=>updateStatus({requireVerified3:e.target.checked})} checked={status.requireVerified3} />
									{L['profile.check3']}
								</label>
								<hr />
								<label className="check m p">
									<input type="checkbox" onClick={(e:any)=>updateStatus({requireVerified4:e.target.checked})} checked={status.requireVerified4} />
									{L['profile.check4']}
								</label>
								<hr />
							</div>
							<div className="mt2">
								<p><b>{L['profile.timezone']}</b></p>
								<Input.Combo value="" placeholder={L['select.optional']} data={Object.keys(timezones).map(k=>({key:k, icon:<code style={{marginRight:10, color:'var(--gray)'}}>({Z(timezones[typeof k == 'string'?"":""])})</code>, label:L['zone.'+k], value:getTime(unixtime, timezones[typeof k == 'string'?"":""])}))} style={{width:'50%'}} onChange={v=>onTimezone(v)} />
							</div>
							<div className="text-center mt3">  
								<button className="btn btn-primary f11">{L['profile.submit']}</button>
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

export default SettingProfile;