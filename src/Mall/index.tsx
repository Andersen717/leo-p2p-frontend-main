import React from 'react';
import Input from '../components/Input';
import Layout from '../components/Layout';
import useGlobal from '../useGlobal';
import Config from '../config/v1.json';
import Payments from '../config/payments.json';
import Currencies from '../config/currencies.json';
import Countries from '../config/countries.json';
import './index.scss'
import Icons from '../components/Icons';
import OfferList from '../components/Offer';
import ImgReferal from '../assets/mall-referal.svg'

const coins:any = Config.coins

interface MallStatus {
	loading:boolean
	coin: string
	icon:JSX.Element
	payment: string
	amount: number
	currency: string
	country: string
	trusted: boolean
}

interface MallProps {
	type: 'buy'|'sell'
	coin: string
	payment?: string
	amount?: string
	currency?: string
	country?: string
}

const Mall = ({type,coin}:MallProps) => {
	const {offers, profiles, L, T, NF, prices} = useGlobal();
	const [status, setStatus] = React.useState<MallStatus>({
		loading:false,
		coin,
		icon:<></>,
		payment: '',
		amount: 0,
		currency: '',
		country: '',
		trusted:false,
	})
	const updateStatus = (json:PayloadType) => setStatus({...status, ...json})
 

	const onPayment = (k:string) => {
		updateStatus({payment:k})
	}

	const onCurrency = (k:string) => {
		updateStatus({currency:k})
		/* setShowCurrencies(false) */
	}

	const onCountry = (k:string) => {
		updateStatus({country:k})
		/* setShowCurrencies(false) */
	}
	
	const onTrusted = (k:boolean) => {
		updateStatus({trusted:k})
		/* setShowCurrencies(false) */
	}

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
		console.log(coin)
	}, [])

	let title = '';
	if (status.payment && status.currency && L['payment.'+status.payment] && L['currency.'+status.currency]) {
		title = T(`mall.${type}.title.payment.currency`, {currency:L['currency.'+status.currency],payment:L['payment.'+status.payment],coinname:L[coin],coin:coin.toUpperCase()})
	} else if (status.payment && L['payment.'+status.payment]) {
		title = T(`mall.${type}.title.payment`, {payment:L['payment.'+status.payment],coinname:L[coin],coin:coin.toUpperCase()})
	} else if (status.currency && L['currency.'+status.currency]) {
		title = T(`mall.${type}.title.currency`, {currency:L['currency.'+status.currency],coinname:L[coin],coin:coin.toUpperCase()})
	} else {
		title = T(`mall.${type}.title`, {coinname:L[coin],coin:coin.toUpperCase()})
	}


	return <Layout>
		<section className="mall">
			<div className="row">
				<div className="col-md-3">
					<div className="mt5">
						<label>{L[`mall.filter.${type}`]}
							<Input.Combo value={status.coin} data={Object.keys(coins).map(k=>({key:k, icon:<i className={"ic coin "+k} style={{marginRight:15}} />, label:L[k]}))} onChange={v=>updateStatus({coin:v})} />
							{prices[status.coin]===undefined ? (
								<></>
							) : <p>1 {status.coin.toUpperCase()} = {NF(prices[status.coin])}</p>}	
						</label>
					</div>
					<div>
						<label>{L[`mall.filter.${type}.payment`]}
							<Input.Combo value="" placeholder={L['mall.filter.payment.all']} data={Object.keys(Payments).map(k=>({key:k,label:L['payment.'+k]}))} onChange={v=>onPayment(v)} />
						</label>
					</div>
					<div>
						<label>{L[`mall.filter.currency`]}
							<Input.Combo value="" placeholder={L['mall.filter.currency.all']} data={Currencies.map(k=>({key:k, icon:<code style={{marginRight:10}}>{k.toUpperCase()}</code>, label:k.toUpperCase()}))} onChange={v=>onCurrency(v)} />
						</label>
					</div>
					<div>
						<label>{L[`mall.filter.country`]}
							<Input.Combo value="" blank={true} data={Object.keys(Countries).map(k=>({key:k, icon:k==='' ? <div style={{width:20, height:15, marginRight:10, color: 'var(--gray)'}}><Icons.location/></div> : <img src={`/flags/${k}.svg`} loading="lazy" width={20} height={15} style={{marginRight:10}}/>,label:L['country.'+k]}))} onChange={v=>onCountry(v)} />
						</label>
					</div>
					<div>
						<button className="btn btn-primary w100">{L['mall.filter.submit']}</button>
					</div>
				</div>
				<div className="col-md-9 ">
					<h1>{title}</h1>
					<p>{L[`mall.${type}.desc`]}</p>
					<div>
						<div className="flex middle">
							<label className="switch">
								<i><input type="checkbox" onClick={(e:any)=>onTrusted(e.target.checked)} checked={status.trusted} /><span className="slider round"></span></i>
								<span>{L['mall.trusted.offers']}</span>
							</label>
						</div>
					</div>
					<OfferList type={type} coin={coin} profiles={profiles} offers={offers[type]} />
					<div className="justify mt2">
						<div>{}</div>
						<div><span className="mr3">{L['mall.create.desc']}</span><a href="/create-an-offer" className="btn inline-block">{L['mall.create']}</a></div>
					</div>
					<div className="flex referral mt5">
						<div className="flex middle p3">
							<img src={ImgReferal} loading="lazy" alt="referral"/>
						</div>
						<div className="fill flex p2">
							<div className="fill">
								<h3 className="mt0">{L['mall.affiliate']}</h3>
								<p className="mb0">{L['mall.affiliate.desc']}</p>
							</div>
							<div className="flex middle">
								<button className="btn btn-primary">{L['mall.affiliate.how']}</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
	</Layout>;
};

export default Mall;