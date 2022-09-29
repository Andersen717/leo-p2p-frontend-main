declare interface Window  {
	ethereum: 	any;
	Web3: 		any;
}

declare interface DictType {
	[key:string]:string
}
declare interface PaymentType {
	type: string
	icon?: string
	acceptable: string[]
	details?: {
		description: string
		key: string
		name: string
	}
}
declare interface PaymentConfigType {
	[payment:string]:PaymentType
}
declare interface OfferType {
	uid:		number
	buy:	 	boolean
	coin:	 	string
	payment:	string
	currency:	string
	tags:		string[]
	min:	 	number
	max:	 	number
	margin:	 	number
	time:	 	number
	terms:		string
	title:	 	string
}

declare interface TradeType extends OfferType {
	status:		'pending'|'paid'|'completed'|'expired'|'disputbybuyer'|'disputbyseller'|'cancelbybuyer'|'cancelbyseller'
	other:		number
	price:		number
	quantity:	number
	amount:		number
	fee:		number
	feedback:	number		// positive 1, negative: -1
	feedText:	string
	feedbackOther:number	// positive 1, negative: -1
	feedTextOther:string
	updated:	number
}

declare interface AlertType {
	url:		string
	title:		string
	created:	number
}

declare interface ProfileType {
	alias: 		string
	description:string
	avatar: 	string
	stared: 	number
	credit: 	number
	joined: 	number
	lastSeen:	number
	powertrader:boolean
	country: 	string
	currency: 	string
	lang: 		string
	timezone: 	number
	feedback: 	{
		positive: number
		negative: number
	},
	partners:	number
	trades:		number
	canceledTrades:		number
	trustedBy: 	number
	blockedBy: 	number
	blocked: 	number
	tradeTimes: {
		[payment:string]:number // per 10K 
	}
	verify: {
		phone: 	boolean
		email:	boolean
		id: 	boolean
		address:boolean
	}
	socials: {
		[name:string]:string
	}
	volumns: {
		[coin:string]:number // per 10K 
	}
	volumnByPayments: {
		[payment:string]:number // per 10K 
	}
	offers: {
		buy:{[id:string]:OfferType}
		sell:{[id:string]:OfferType}
	}
	feedbacks: {
		buy: {
			positive: number
			negative: number
			data: 	{[id:string]:TradeType}
		},
		sell:{
			positive: number
			negative: number
			data: 	{[id:string]:TradeType}
		}
	}
	withYou?: 	TradeType[]
}

declare interface AccountType {
	uid:		number
	email:		string
	phone:		string
	lastLogged:	number
	lastIP:		string
	isVendor:	boolean
	profile:	ProfileType
	
}

declare interface StoreTypes {
	lang:		string
	fee:		number
	account:	AccountType|null
	prices: 	{[coin:string]:number}
	offers: {
		buy:{[id:string]:OfferType}
		sell:{[id:string]:OfferType}
	}
	profiles:	{[uid:number]:ProfileType}
	orders:		{[id:string]:TradeType}
	alerts:		{[id:string]:AlertType}
	coin:		string
	loading:	boolean
	inited:		boolean
}

declare interface PayloadType {
	[key:string]:string|number|boolean|AccountType|String[]
}

interface AppTypes extends StoreTypes {
	L: DictType
	locales: {[lang:string]:DictType}
	isMobile: boolean
	A(key:string, args?:{[key:string]:string}):string[]
	T(key:string, args?:{[key:string]:string|number}|string|number):string
	Z(offset:number):string
	NF(num:number,p?:number)
	getPrice(buy:boolean, coin:string, margin:number, currency:string):string

	getTime(time:number, offset?:number):string
	getTradeTime(t:number)
	timeAgo(time:number):string
	getISOTimeText(time:number):string
	fromISOTimeText(time:string):number
	fillTimes(offset:number):string[]
	update(payload:PayloadType)
}

declare interface ResultType {
	err: 		string,
	result: 	string
}