import React from 'react'
import useGlobal from '../useGlobal';
import Icons from './Icons'
import Payments from '../config/payments.json'
import './offer.scss'

const payments = Payments as PaymentConfigType

export interface OfferProps {
	mine?: boolean
	id: string
	p: ProfileType
	v: OfferType
}

export interface OfferListProps {
	mine?: boolean
	coin?: string
	type: string
	profiles: {[uid:number]:ProfileType}
	offers: {[id:string]:OfferType}
}

export const Offer = ({mine,id,p,v}:OfferProps) => {
	const {L, T, NF, getTradeTime, timeAgo,getPrice} = useGlobal();
	
	

	return (<div className="tr">
		{mine ? null : (
			<div className="counterparty">
				<div>
					<div className="l15">
						<a className="flex middle cmd" style={{fontSize:'1.2em'}}><img src={`/flags/${p.country}.svg`} loading="lazy" style={{width:20, height:16, marginRight:10}} alt={p.country} />{p.alias}</a>
					</div>
					<div className="flex middle">
						<div className="thumb up mr">
							<Icons.Thumbup margin={10} />
							{p.feedback.positive}
						</div>
						<small className="trust"><Icons.Check margin={5} size={12} />{L['mall.trust']}</small>
					</div>
				</div>
				
				<div>
					<span className="gray mr">{L['mall.seen']}</span>
					<span>{timeAgo(p.lastSeen)}</span>
				</div>
			</div>
		)}
		<div className="payment">
			<div className="flex middle l15">{payments[v.payment].icon ? <img src={`/payments/${payments[v.payment].icon}`} loading="lazy" alt={v.payment} style={{width:"auto", height:16,marginRight:5}}  /> : null}<b>{L[`payment.${v.payment}`]}</b></div>
			
			<div className="gray">{v.title}</div>
			<div>{v.tags.map(k=><span key={k} className="tag">{L['createoffer.tags.' + k]}</span>)}</div>
		</div>
		<div className="limit">
			<h3 className="mt0 mb0">{getPrice(v.buy, v.coin, v.margin, v.currency)} <small className="gray">{v.currency.toUpperCase()}</small></h3>
			<div className="l15 gray">{L['mall.limits']} {NF(v.min,0) + ' ~ ' + NF(v.max,0) + ' ' + v.currency.toUpperCase()}</div>
			<div className="gray">{L[`mall.tradespeed`]}: {v.payment ? getTradeTime(p.tradeTimes[v.payment]) : '-'}</div>
		</div>
		<div className="rate">
			<div style={{textAlign:'right'}}>{T('mall.' + (v.margin > 0 ? 'above':'below'), {num:v.margin})}</div>
			{mine ? null : (
				<div style={{display:'flex', justifyContent:'right'}}>
					<a href={'/' + (v.buy?'buy':'sell') + "-"+ L[v.coin] +"/" + id} className={`btn btn-${v.buy?'primary':'success'} flex middle`}>
						<i className={`ic coin ${v.coin}`} />{L['mall.'+(v.buy?'buy':'sell')]}
					</a>
				</div>
			)}
		</div>
	</div>)
}

const OfferList = ({mine, type, profiles, offers, coin}:OfferListProps) => {
	const {L, T} = useGlobal();
	return (<div className={"offers" + (mine ? '' : ' frame')}>
		<div className={"head" + (mine ? ' mine' : '')}>
			{mine? null : <div className="counterparty">{L[`mall.${type}.counterparty`]}</div>}
			<div className="payment">{L[`mall.${type}.payment`]}</div>
			<div className="limit">{coin ? T(`mall.rate.with`, {coinname:L[coin]}) : L['mall.rate']}</div>
			<div className="rate"></div>
		</div>
		<div className={"body" + (mine ? ' mine' : '')}>
			{Object.keys(offers).map(k=><Offer key={k} id={k} mine={!!mine}v={offers[k]} p={profiles[offers[k].uid]} />)}
		</div>
	</div>)
}

export default OfferList