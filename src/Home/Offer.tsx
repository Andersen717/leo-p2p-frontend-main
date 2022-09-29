import React from 'react';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';
import ImgAvatar from '../assets/avatar.png'; 
import Icons from '../components/Icons';
import Input from '../components/Input'; 
import './offer.scss'  ; 
import OfferList from '../components/Offer';
import { Trade } from '../components/Trade';
 
interface OfferProps {
	type: 'buy'|'sell'
	id: string
}

interface OfferStatus {
	quantity:number
	amount:number
}

const Offer = ({type, id}:OfferProps) => {
	const  {account, profiles, fee, offers, L, T, Z, getPrice, getTradeTime, getTime, getISOTimeText, fromISOTimeText, timeAgo, fillTimes} = useGlobal();   
	const [status, setStatus] = React.useState<OfferStatus>({
	 	quantity:0,
		amount:0,
	});
	const updateStatus = (json:any) => setStatus({...status, ...json})

	
	React.useEffect(()=>{
	}, [])

	const v = offers[type][id]
	const p = profiles[v.uid];
	const feebacks = p.feedbacks[v.buy ? 'buy' : 'sell']
	
	const submit = () => {
		window.location.href="/trade/" + id
	}

	return <Layout>
		<section className="offer">
			<div>
				<h1 className='text-center'>{T('offer.' + type + '.title', {coinname:L[v.coin], payment:L['payment.' + v.payment], currency:v.currency.toUpperCase()})}</h1>
			</div>
			<div className='flex center'>
				<div className='frame md'>
					<h2 className='text-center'>{L['offer.' + type + '.label']}</h2>
					<div className="row mt3">
						<div className="col-md-6">
							<label>{T('offer.' + type + '.quantity.label')}
								<Input.Number onChange={quantity=>updateStatus({quantity})} value={status.quantity} step={5} min={30} max={4320} symbol={(type==='buy' ? v.currency : v.coin).toUpperCase()} />
							</label>
							<p>{L['offer.amount.placeholder']}</p>
						</div>
						<div className="col-md-6">
							<label>{T('offer.' + type + '.amount.label', {coinname:L[v.coin]})}
								<Input.Number value={status.amount} symbol={(type==='buy' ? v.coin : v.currency).toUpperCase()} />
							</label>
						</div>
					</div>
					<div className='mb2'>
						<button className='btn btn-primary w100' onClick={submit}>{L['offer.'+type+'.submit']}</button>
					</div>
				</div>
			</div>
			
			<div className="row mt3">
				<div className="col-md-6">
					<h3>{T('offer.about')}</h3>
					<div className='frame'>
						<div>
							{T('mall.rate')}
						</div>
						<div>
							<b>{getPrice(v.buy, v.coin, v.margin, v.currency)} {v.currency.toUpperCase()} </b>
							{v.margin!==0 ? T('mall.' + (v.margin>0 ? 'above' : 'below'), v.margin) : ''}
						</div>
						<div className='mt3'>
							{T('mall.limits')}
							<div dangerouslySetInnerHTML={{__html:T('offer.volumn.limit', {min:v.min, max:v.max, currency:v.currency.toUpperCase()})}} />
						</div>
						<div className="row mt3">
							<div className="col-6">
								{T('offer.time.limit')}
								<div><b>{getTradeTime(v.time)}</b></div>
							</div>
							<div className="col-6">
								{T('offer.fee')}
								<div><b>{fee}%</b></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<h3>{T('offer.' + type + '.about')}</h3>
					<div className='frame'>
						<div className='flex'>
							<div className='mr2'>
								<i className="avatar big">{p.avatar}</i>
							</div>
							<div>
								<div className="flex middle">
									<b>{p.alias}</b>
									<img src={"/flags/" + p.country + '.svg'} width={20} height={15} style={{marginLeft:10,marginRight:10}} alt={p.country} title={L['country.' + p.country]} />
								</div>
								<div className='flex middle'>
									{timeAgo(p.lastSeen)} 
									<small className='tag success ml2'>{p.powertrader ? T('profile.powertrader') : ''}</small>
								</div>
							</div>
						</div>
						<div className='mt3'>
							<div className="row">
								<div className="col-6"> 
									{L['profile.positive']}
									<div className='flex middle'>
										<Icons.Thumbup className="green" />
										<b className="green">+{p.feedback.positive}</b>	
									</div>
								</div>
								<div className="col-6"> 
									{L['profile.negative']}
									<div className='flex middle'>
										<Icons.Thumbdown className="red"/>
										<b className="red">-{p.feedback.negative}</b>	
									</div>
								</div>
							</div>
						</div>
						<div className='mt3'>
							<div className="row">
								<div className="col-6"> 
									<p><Icons.Phone className={p.verify?.phone ? "green" : 'red'} margin={10} />{L[p.verify?.phone ? 'profile.phone.verified' : 'profile.phone.notverified']}</p>
									<p><Icons.Email className={p.verify?.email ? "green" : 'red'} margin={10} /> {L[p.verify?.email ? 'profile.email.verified' : 'profile.email.notverified']}</p>
								</div>
								<div className="col-6"> 
									<p><Icons.Idverify className={p.verify?.id ? "green" : 'red'} margin={10} />{L[p.verify?.id ? 'profile.id.verified' : 'profile.id.notverified']}</p>
									<p><Icons.Address className={p.verify?.address ? "green" : 'red'} margin={10} />{L[p.verify?.address ? 'profile.address.verified' : 'profile.address.notverified']}</p>
								</div>
							</div>
						</div>
						<div className='mt3'>
							{T('mall.tradespeed')}
							<div><b>{getTradeTime(p.tradeTimes[v.payment])}</b></div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt3'>
				<h2>{T('createoffer.terms')}</h2>
				<div className='mb2'>{v.tags.map(k=><span key={k} className="tag">{L['createoffer.tags.' + k]}</span>)}</div>
				<div className='frame'>
					{v.terms.split(/\r|\n|\r\n/g).map((t,k)=><p key={k}>{t}</p>)}
				</div>
			</div>
			<div className='mt3'>
				<h2>{T('profile.feedback.title')}</h2>
				<div className='frame trade'>
				{Object.keys(feebacks.data).map(k=><Trade key={k} id={k} ps={profiles} v={feebacks.data[k]} />)}
				</div>
			</div>
		</section>
	</Layout>;
};

export default Offer;