import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';
import ImgAvatar from '../assets/avatar.png'; 
import Icons from '../components/Icons';
import Input from '../components/Input'; 
import './profile.scss'  ; 
import OfferList from '../components/Offer';
import { Trade } from '../components/Trade';
 
interface ProfileProps {
	uid: string
}
interface ProfileStatus {
	buyOffers:boolean
	buyFeedBacks:boolean
}

const Profile = ({uid}:ProfileProps) => {
	const  {account, profiles, L, T, Z, getTime, getISOTimeText, fromISOTimeText, timeAgo, fillTimes} = useGlobal();   
	const [status, setStatus] = React.useState<ProfileStatus>({
	 	buyOffers:true,
		buyFeedBacks:true
	});
	const [now, setNow] = React.useState(Math.round(new Date().getTime()/1000))

	const updateStatus = (json:any) => setStatus({...status, ...json})

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
	const feebacks = account && account.profile.feedbacks[status.buyFeedBacks ? 'buy' : 'sell']
	return <Layout>
		{account && feebacks ? (
			<section className="profile">
				<div className="row mt3">
					<div className="col-md-3">
						<img src={ImgAvatar} style={{width:'100%'}} alt="bg" />
					</div>
					<div className="col-md-9">
						<div className="justify">
							<h1>{account.profile.alias}</h1>
							<div className="flex middle">
								<img className="mr1" src="/socials/google.svg" 	 alt="google" />
								<img className="mr1" src="/socials/facebook.svg" alt="facebook" />
								<img className="mr1" src="/socials/twitter.svg"  alt="twitter" /> 
							</div>
						</div>
						<p className="gray">{account.profile.description}</p>
						<div className="flex middle mt2 mb2">
							<i className={"lastseen mr2 " + (now - account.profile.lastSeen < 300 ? 'online' : 'offline')} /> {timeAgo(account.profile.lastSeen)}	
						</div>
						
						<div className="row">
							<div className="col-xl-4 col-6"> 
								<div className="feedback positive">
									<div className="justify">
										<b className="green">+{account.profile.feedback.positive}</b>
										<Icons.Thumbup className="green" size={25} />
									</div>
									<div>
										{L['profile.positive']}
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-6"> 
								<div className="feedback negative">
									<div className="justify ">
										<b className="red">-{account.profile.feedback.negative}</b>
										<Icons.Thumbdown className="red" size={25}/>
									</div>
									<div>
										{L['profile.negative']}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt3">
					<div className="col-md-3">
						<div className="frame">
							<h3>{L['profile.verification']}</h3>
							<p><Icons.Phone className={account.profile.verify?.phone ? "green" : 'red'} margin={10} />{L[account.profile.verify?.phone ? 'profile.phone.verified' : 'profile.phone.notverified']}</p>
							<p><Icons.Email className={account.profile.verify?.email ? "green" : 'red'} margin={10} /> {L[account.profile.verify?.email ? 'profile.email.verified' : 'profile.email.notverified']}</p>
							<p><Icons.Idverify className={account.profile.verify?.id ? "green" : 'red'} margin={10} />{L[account.profile.verify?.id ? 'profile.id.verified' : 'profile.id.notverified']}</p>
							<p><Icons.Address className={account.profile.verify?.address ? "green" : 'red'} margin={10} />{L[account.profile.verify?.address ? 'profile.address.verified' : 'profile.address.notverified']}</p>
							{account.profile.powertrader ? <div className="btn p w100"><Icons.star margin={10} />{L['profile.powertrader']}</div> : null}
						</div>
						<div className="frame mt3">
							<h3>{L['profile.info.title']}</h3>
							<p>{L['profile.info.location']}: <img src={"/flags/" + account.profile.country + '.svg'} width={20} height={15} style={{marginRight:10}} alt={account.profile.country} /> <b>{L['country.' + account.profile.country]}</b></p>
							<p>{L['profile.info.language']}: {L['lang.' + account.profile.lang]}</p>
							<p dangerouslySetInnerHTML={{ __html:T('profile.info.tradepartners', {num:account.profile.partners})}} />
							<p dangerouslySetInnerHTML={{ __html:T('profile.info.trade', {num:account.profile.trades})}} />
							<p>{L['profile.info.tradevolume']}:</p>
							{Object.keys(account.profile.volumnByPayments).map(k=><p key={k} className='pl3' dangerouslySetInnerHTML={{__html: L['payment.' + k] + ': ' + T('profile.info.tradevolumesize',{num:account.profile.volumnByPayments[k]*10 + 'K'})}} />)}
							<p>{L['profile.info.tradevolume']}:</p>
							<p dangerouslySetInnerHTML={{ __html:T('profile.info.trustedby', {num:account.profile.trustedBy})}} />
							<p dangerouslySetInnerHTML={{ __html:T('profile.info.blockedby', {num:account.profile.blockedBy})}} />
							<p dangerouslySetInnerHTML={{ __html:T('profile.info.hasblocked', {num:account.profile.blocked})}} />
							<p>{L['profile.info.joined']}: {timeAgo(account.profile.joined)}</p>
						</div>
					</div>
					<div className="col-md-9">
						<div className="frame">
							<div className="justify">
								<h3>{L['profile.actives.title']}</h3>
								<Icons.Arrow />
							</div>
							<div className="tab">
								<div>
									<div className={'item' + (status.buyOffers ? " active" : '')} onClick={()=>updateStatus({buyOffers:true})}>
										{L['profile.actives.buy']}
										<small className="badge ml1">{Object.keys(account.profile.offers.buy).length}</small>
									</div>
									<div className={'item' + (!status.buyOffers ? " active" : '')} onClick={()=>updateStatus({buyOffers:false})}>
										{L['profile.actives.sell']}
										<small className="badge ml1">{Object.keys(account.profile.offers.sell).length}</small>
									</div>
								</div>
								<div className="justify">
									<input type="text"></input>
								</div>
							</div>
							<OfferList mine={true} type={status.buyOffers ? 'buy' : 'sell'} profiles={{[account.uid]:account.profile}} offers={account.profile.offers[status.buyOffers ? 'buy' : 'sell']} />
						</div>
						<div className="frame mt3">
							<div className="justify">
								<h3>{L['profile.feedback.title']}</h3>
								<Icons.Arrow />
							</div>
							<div className="tab">
								<div>
									<div className={'item' + (status.buyFeedBacks ? ' active' : '')} onClick={()=>updateStatus({buyFeedBacks:true})}>
										{L['profile.feedback.buyers']}
										<small className="badge ml1">{account.profile.feedbacks.buy.positive + account.profile.feedbacks.buy.negative}</small>
									</div>
									<div className={'item' + (!status.buyFeedBacks ? ' active' : '')} onClick={()=>updateStatus({buyFeedBacks:false})}>
										{L['profile.feedback.sellers']}
										<small className="badge ml1">{account.profile.feedbacks.sell.positive + account.profile.feedbacks.sell.negative}</small>
									</div>
								</div>
								<div className="flex">
									<p className='item'>{L['profile.feedback.all']} <small className="badge ml1">{feebacks.positive + feebacks.negative}</small></p>
									<p className='item'>{L['profile.feedback.positive']} <small className="badge ml1">{feebacks.positive}</small></p>
									<p className='item'>{L['profile.feedback.negative']} <small className="badge ml1">{feebacks.negative}</small></p>
								</div>
							</div>
							<div className='trade'>
								{Object.keys(feebacks.data).map(k=><Trade key={k} id={k} ps={profiles} v={feebacks.data[k]} />)}
							</div>
						</div>
						<p className="text-center"><a className="btn-link">show more feedback</a></p>
					</div>
				</div>
			</section>
		) : (
			null
		)}
		
	</Layout>;
};

export default Profile;