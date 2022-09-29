import React from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Icons from '../components/Icons';
import useGlobal from '../useGlobal';
import Config from '../config/v1.json';
import Payments from '../config/payments.json';
import Currencies from '../config/currencies.json';
import Countries from '../config/countries.json';
import Timezones from '../config/timezones.json';
import Tags from '../config/tags.json';
import './index.scss'

const timezones = Timezones as {[key:string]:number}

export interface CreateOfferStatus {
	buy:boolean
	coin:string
	payment:string
	currency:string
	min:number,
	max:number,
	margin:number
	time:number
	online:Array<{from:number,to:number}>
	tags:Array<string>
	label:string
	terms:string
	instruction:string
	requireVerified:boolean
	requireName:boolean
	targetCountry:string
	trusted:boolean
	minTrades:number
	newTraderVolumn:number
	allowCountry:number,
	countries: Array<string>
	preciseAlgorithm:boolean
	timezone:string
	customSchedule:boolean
	fromWork:number
	untilWork:number
	weeks:{[week:number]:{valid:boolean, from:number, until:number}}
	applyAll:boolean
}


const CreateOffer = () => {
	const G = useGlobal();
	const {account, L, T, Z, getTime, getISOTimeText, fromISOTimeText, fillTimes} = G

	const [status, setStatus] = React.useState<CreateOfferStatus>({
		buy:  false,
		coin: 'btc',
		payment: '',
		currency: '',
		min:0,
		max:0,
		margin:0,
		time:30,
		online:[],
		tags:[],
		label:'',
		terms:'',
		instruction:'',
		requireVerified:false,
		requireName:false,
		targetCountry:'',
		trusted:false,
		minTrades:0,
		newTraderVolumn:0,
		allowCountry:0,
		countries: [],
		preciseAlgorithm:false,
		timezone:'',
		customSchedule:false,
		fromWork:0,
		untilWork:0,
		weeks:{},
		applyAll:false
	})
	const [times] = React.useState<{from:string[],until:string[]}>({from:fillTimes(0),until:fillTimes(1800)})
	
	const updateStatus = (json:any) => setStatus({...status, ...json})

	const onPayment = (k:string) => {
		updateStatus({payment:k})
	}

	const onCurrency = (k:string) => {
		updateStatus({currency:k})
		/* setShowCurrencies(false) */
	}
	const onTimezone = (k:string) => {
		updateStatus({timezone:k})
	}
	const onWeek = (k:number) => {
		const week = status.weeks[k] || {valid:true, from:0, until:0}
		updateStatus({weeks:{...status.weeks, [k]:{...week, valid:!week.valid}}})
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
	}, [])
	const unixtime = new Date().getTime()
	const weeks = ['weekday1','weekday2','weekday3','weekday4','weekday5','weekday6','weekday0']
	return <Layout>
		<section className="container container-xl create-offer">
			<div className="form" style={{position:'relative'}}>
				<h1>{L['createoffer.title']} - {T('createoffer.' + (status.buy ? 'buy' : 'sell'), {coin:L[status.coin]})}</h1>
				<div className="flex">
					{Object.keys(Config.coins).map((v,k)=><button onClick={()=>updateStatus({coin:v})} key={k} className={`btn btn-${v===status.coin?'':'outline-'}primary coin`}><i className={'ic coin ' + v}/> {L[v]}</button>)}
				</div>
				<h3>{L['createoffer.type']}</h3>
				<div>
					<label>
						<input type="radio" name="type" onClick={()=>updateStatus({buy:true})} checked={status.buy} />
						{T('createoffer.buy', {coin:L[status.coin]})}
					</label>
					<p style={{paddingLeft:20, color:'var(--gray)'}}>{T('createoffer.buy.desc', {coin:L[status.coin]})}</p>
					<label>
						<input type="radio" name="type" onClick={()=>updateStatus({buy:false})} checked={!status.buy} />
						{T('createoffer.sell', {coin:L[status.coin]})}
					</label>
					<p style={{paddingLeft:20, color:'var(--gray)'}}>{T('createoffer.sell.desc', {coin:L[status.coin]})}</p>
					
				</div>
				{account ? (
					<>
						<h3>{L['createoffer.payment']}</h3>
						<div className="row">
							<div className="col-md-6">
								<label>
									{L['createoffer.payment']}
									<Input.Combo value="" placeholder={L['createoffer.typing']} data={Object.keys(Payments).map(k=>({key:k,label:L['payment.'+k]}))} onChange={v=>onPayment(v)} onRender={k=>L['payment.'+k]} />
								</label>
							</div>
							<div className="col-md-6">
								{/* <label>
									{L['createoffer.currency']}
									<Input.Combo value="" placeholder={L['createoffer.typing']} data={Currencies} onChange={v=>onCurrency(v)} onRender={k=><><code style={{marginRight:10}}>{k.toUpperCase()}</code><span style={{color:'gray'}}>{L['currency.'+k]}</span></>} onSearch={(q,v)=>v.toLowerCase().indexOf(q)!==-1 || L['currency.'+v].toLowerCase().indexOf(q)!==-1} />
								</label> */}
							</div>
						</div>
						<h3>{L['createoffer.limit']}</h3>
						<div className="row">
							<div className="col-md-6">
								<label>
									<b>{L['createoffer.min']}</b>
									<Input.Number onChange={min=>updateStatus({min})} value={status.margin} step={0.5} min={-20} max={20} symbol={status.currency.toUpperCase()} />
								</label>
							</div>
							<div className="col-md-6">
								<label>
									<b>{L['createoffer.max']}</b>
									<Input.Number onChange={max=>updateStatus({max})} value={status.max} step={5} min={30} max={90} symbol={status.currency.toUpperCase()} />
								</label>
							</div>
						</div>
						<div>
							<p style={{color:'var(--gray)'}}>{L['createoffer.limit.desc']}</p>
						</div>
						<div className="row">
							<div className="col-md-6">
								<label>
									<h3>{L['createoffer.margin']}</h3>
									<Input.Number onChange={margin=>updateStatus({margin})} value={status.margin} step={0.5} min={-20} max={20} symbol={'%'} />
								</label>
							</div>
						</div>
						<p style={{color:'var(--gray)'}}>{L['createoffer.margin.desc']}</p>
						<div className="row">
							<div className="col-md-6">
								<label>
									<h3>{L['createoffer.time']}</h3>
									<Input.Number onChange={time=>updateStatus({time})} value={status.time} step={5} min={30} max={4320} symbol={L['createoffer.timeunit']} />
								</label>
							</div>
						</div>
						<p style={{color:'var(--gray)'}}>{L['createoffer.time.desc']}</p>
						<h3>{L['createoffer.tags']}</h3>
						<div>
							{/* <Input.Multi placeholder={L['createoffer.tags.placeholder']} onChange={tags=>updateStatus({tags})} data={Tags.map(key=>({key,label:L['createoffer.tags.'+key]}))} value={status.tags} /> */}
						</div>
						<p style={{color:'var(--gray)'}}>{L['createoffer.tags.desc']}</p>
						<h3>{L['createoffer.label']}</h3>
						<div>
							<input type="text" value={status.label} placeholder={L['createoffer.label.placeholder']} onChange={e=>updateStatus({label:e.target.value})}/>
							<p style={{color:'var(--gray)'}}>{L['createoffer.label.desc']}</p>
						</div>
						<h3>{L['createoffer.terms']}</h3>
						<div>
							<textarea placeholder={L['createoffer.terms.placeholder']} rows={4} onChange={e=>updateStatus({terms:e.target.value})}>{status.terms}</textarea>
							<p style={{color:'var(--gray)'}}>{L['createoffer.terms.desc']}</p>
						</div>
						<h3>{L['createoffer.instruction']}</h3>
						<div>
							<textarea placeholder={L['createoffer.instruction.placeholder']} rows={4} onChange={e=>updateStatus({instruction:e.target.value})}>{status.instruction}</textarea>
							<p style={{color:'var(--gray)'}}>{L['createoffer.instruction.desc']}</p>
						</div>
						<h3>{L['createoffer.verify']}</h3>
						<div>
							<label className="check">
								<input type="checkbox" onClick={(e:any)=>updateStatus({requireVerified:e.target.checked})} checked={status.requireVerified} />
								{L['createoffer.requireverified']}
							</label>
							<label className="check">
								<input disabled={!status.requireVerified} type="checkbox" onClick={(e:any)=>updateStatus({requireName:e.target.checked})} checked={status.requireName} />
								{L['createoffer.requirename']}
							</label>
							<div style={{color:'var(--gray)', display:status.requireName?'flex':'none', alignItems:'flex-start'}}>
								<div style={{minWidth:30}} className="flex center"><Icons.Info /></div>
								<div>{L['createoffer.requirename.desc']}</div>
							</div>
						</div>
						<div className="card flex middle" style={{marginTop:50}}>
							<Icons.Settings margin={10} />
							<span>{L['createoffer.advanced']}</span>
						</div>
						<h3>{L['createoffer.targetcountry']}</h3>
						<div>
							<p style={{color:'var(--gray)'}}>{L['createoffer.targetcountry.desc']}</p>
							<Input.Combo value="" placeholder={L['select.optional']} data={Currencies.map(k=>({key:k, icon:<code style={{marginRight:10}}>{k.toUpperCase()}</code>, label:k.toUpperCase()}))} onChange={v=>onCurrency(v)} />
						</div>
						<h3>{L['createoffer.visibility']}</h3>
						<div>
							<label className="check">
								<input type="checkbox" onClick={(e:any)=>updateStatus({trusted:e.target.checked})} checked={status.trusted} />
								{L['createoffer.trusted']}
							</label>
						</div>
						<h3>{L['createoffer.mintrades']}</h3>
						<div className="row">
							<label className="col-md-6">
								{L['createoffer.mintrades.desc']}
								<Input.Number onChange={min=>updateStatus({min})} value={status.margin} step={10} min={0} max={100} symbol={L['createoffer.mintrades.unit']} />
							</label>
						</div>
						<h3>{L['createoffer.newuser']}</h3>
						<div className="row">
							<label className="col-md-6">
								{L['createoffer.newuser.desc']}
								<Input.Number onChange={min=>updateStatus({min})} value={status.margin} step={10} min={0} max={100} symbol={L['currency.' + status.currency]} />
							</label>
						</div>
						<h3>{L['createoffer.limitcountries']}</h3>
						<p>{L['createoffer.limitcountries.desc']}</p>
						<div>
							<label>
								<input type="radio" name="allowCountry" onClick={()=>updateStatus({allowCountry:0})} checked={status.allowCountry===0} />
								{L['createoffer.limitcountries.option1']}
							</label>
							<label>
								<input type="radio" name="allowCountry" onClick={()=>updateStatus({allowCountry:1})} checked={status.allowCountry===1} />
								{L['createoffer.limitcountries.option2']}
							</label>
							<label>
								<input type="radio" name="allowCountry" onClick={()=>updateStatus({allowCountry:2})} checked={status.allowCountry===2} />
								{L['createoffer.limitcountries.option3']}
							</label>
						</div>
						<div>
							{/* <Input.Multi value={[]} placeholder={L['createoffer.limitcountries.placeholder']} data={Object.keys(Countries).map(key=>({key,label:L['country.' + key]}))} onChange={v=>onCurrency(v)} />
							<p style={{color:'var(--gray)'}} dangerouslySetInnerHTML={{__html: status.allowCountry===1 ? L['createoffer.limitcountries.option2.desc'] : (status.allowCountry===2 ? L['createoffer.limitcountries.option3.desc'] : '')}} /> */}
						</div>
						<div>
							<label className="check">
								<input type="checkbox" onClick={(e:any)=>updateStatus({preciseAlgorithm:e.target.checked})} checked={status.preciseAlgorithm} />
								{L['createoffer.limitcountries.algorithm']}
							</label>
						</div>
						<h3>{L['createoffer.workingtime']}</h3>
						<p>{L['createoffer.workingtime.desc']}</p>
						<div>
							<p style={{color:'var(--gray)'}}>{L['createoffer.workingtime.zone']}</p>
							{/* <Input.Combo value="" placeholder={L['select.optional']} data={Object.keys(timezones)} onChange={v=>onTimezone(v)} onRender={k=><>
								<code style={{marginRight:10, color:'var(--gray)'}}>({Z(timezones[k])})</code>
								<span>{L['zone.'+k]}</span>
								<code style={{float:'right', color:'var(--gray)'}}>{getTime(unixtime, timezones[k])}</code>
							</>} onSearch={(q,v)=>String(timezones[v])===q || L['zone.'+v].toLowerCase().indexOf(q)!==-1} /> */}
						</div>
						<div>
							<label className="switch">
								<i><input type="checkbox" onClick={(e:any)=>updateStatus({applyAll:e.target.checked})} checked={status.applyAll} /><span className="slider round"></span></i>
								<span>{L['createoffer.workingtime.applyall']}</span>
							</label>
						</div>
						<div className="frame">
							
							<div className="row">
								<div className="col-lg-6">
									<label>{L['createoffer.workingtime.dayofweek']}</label>
									<div className="wrap">
										{weeks.map((v,k)=><div><button disabled={status.customSchedule} onClick={()=>onWeek(k)} className={'btn btn-' + ((!status.weeks[k] || status.weeks[k].valid)?'':'outline-') + 'primary'} style={{paddingTop:12,paddingBottom:12, marginRight:10, marginBottom:10, minWidth:70}}>{L[v]}</button></div>)}
									</div>
								</div>
								<div className="col-lg-6 flex">
									<div className="mr">
										<label>{L['createoffer.workingtime.from']}
											<Input.Combo disabled={status.customSchedule} value={getISOTimeText(status.fromWork)} style={{width:100}} data={times.from.map(k=>({key:k, label:k}))} onChange={v=>updateStatus({fromWork:fromISOTimeText(v)})} />
										</label>
									</div>
									<div>
										<label>{L['createoffer.workingtime.until']}
											<Input.Combo disabled={status.customSchedule} value={getISOTimeText(status.untilWork)} style={{width:100}} data={times.until.map(k=>({key:k, label:k}))} onChange={v=>updateStatus({untilWork:fromISOTimeText(v)})} />
										</label>
									</div>
								</div>
							</div>
							<hr />
							<div className="flex">
								<label className="switch">
									<i><input type="checkbox" onClick={(e:any)=>updateStatus({customSchedule:e.target.checked})} checked={status.customSchedule} /><span className="slider round"></span></i>
									<span>{L['createoffer.workingtime.custom']}
									</span>
								</label>
							</div>
							<div style={{display:(status.customSchedule?'':'none')}}>
								<div>{L['createoffer.workingtime.dayofweek']}</div>
								{weeks.map((v,k)=>(
									<div className="flex">
										<div className="flex middle" style={{width:120}}>
											<label className="switch">
												<i><input type="checkbox" onClick={()=>onWeek(k)} checked={!status.weeks[k] || status.weeks[k].valid} /><span className="slider round"></span></i>
												<span>{L[v]}</span>
											</label>
										</div>
										<div className="mr">
											<Input.Combo disabled={status.weeks[k] && !status.weeks[k].valid} value={getISOTimeText(status.fromWork)} style={{width:100,margin:'5px 0'}} data={times.from.map(k=>({key:k, label:k}))} onChange={v=>updateStatus({fromWork:fromISOTimeText(v)})} />
										</div>
										<div>
											<Input.Combo disabled={status.weeks[k] && !status.weeks[k].valid} value={getISOTimeText(status.untilWork)} style={{width:100,margin:'5px 0'}} data={times.until.map(k=>({key:k, label:k}))} onChange={v=>updateStatus({untilWork:fromISOTimeText(v)})} />
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="mt5">
							<button className="btn btn-primary w100 f15">{L['createoffer.submit']}</button>
						</div>
					</>
				) : (
					<div style={{position:'absolute',left:0,right:0,bottom:0,height:300,background:'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'}}></div>
				)}
			</div>
			{!account ? (
				<>
					<hr style={{marginTop:50}}/>
					<h3>{L['createoffer.signup.title']}</h3>
					<p>{L['createoffer.signup.desc']}</p>
					<div>
						<a className="btn btn-primary w100 f15 pl5 pr5" href="/register">{L['createoffer.signup']}</a>
					</div>
					<p>{L['createoffer.signup.hint']}</p>
				</>
			) : null}
		</section>
	</Layout>;
};

export default CreateOffer;