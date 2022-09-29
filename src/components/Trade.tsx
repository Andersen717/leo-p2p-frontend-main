import React from 'react'
import useGlobal from '../useGlobal';
import Icons from './Icons'
import Payments from '../config/payments.json'
import './trade.scss'

const payments = Payments as PaymentConfigType

export interface TradeProps {
	id: string
	ps: {[uid:number]:ProfileType}
	v: TradeType
}

export interface TradeListProps {
	id: string
	coin: string
	type: string
	profiles: {[uid:number]:ProfileType}
	trades: {[id:string]:TradeType}
}

export const Trade = ({id, ps,v}:TradeProps) => {
	const {L, T, NF, timeAgo, getPrice} = useGlobal();
	
	/* const getTradeTime = (payment:string) => {
		const t = ps.tradeTimes[payment]
		if (t===undefined) return '-'
		const dd = Math.round(t / 1440);
		const hh = Math.round((t % 1440) / 60);
		const mm = t % 60;
		return [dd > 0 ? dd + ' ' + L.days : '', hh > 0 ? hh + ' ' + L.hours : '', mm > 0 ? mm + ' ' + L.minutes : ''].join(' ')
	} */
	const other = ps[v.other] || {}; 
	return (<div className="tr">
		<div className="account">
			<div className='flex'>
				<div>
					<i className="avatar big">{other.avatar}</i>
				</div>
				<div>
					<div className="btn-link">{other.alias}</div>
					<div>{timeAgo(v.updated)}</div>
					<div className='flex'>
						{v.feedbackOther!==0 ? (
							v.feedbackOther===1 ? (
								<small className={"tag success"}><Icons.Thumbup className='green' margin={5} /> <span>{L['profile.feedback.positive']}</span></small>
							) : (
								<small className={"tag danger"}><Icons.Thumbdown className='red' margin={5} /> <span>{L['profile.feedback.negative']}</span></small>
							)
						) : null}
					</div>
				</div>
			</div>
		</div> 
		<div className='payment'>
			<div><b className="btn-link">{L['payment.' + v.payment]}</b>{v.currency.toUpperCase()}</div>
			<div>{v.feedTextOther}</div>
		</div>
		<div>
			<p><a className="btn-link">View Offer</a></p>
		</div>
	</div>)
}

const TradeList = ({coin, type, profiles, trades}:TradeListProps) => {
	const {L, T} = useGlobal();
	return (<div className="Trades frame">
		<div className="head">
			<div className="counterparty">{L[`mall.${type}.counterparty`]}</div>
			<div className="payment">{L[`mall.${type}.payment`]}</div>
			<div className="limit">{T(`mall.rate`, {coinname:L[coin]})}</div>
			<div className="rate"></div>
		</div>
		<div className="body">
			{Object.keys(trades).map(k=><Trade key={k} id={k} v={trades[k]} ps={profiles} />)}
		</div>
	</div>)
}

export default TradeList