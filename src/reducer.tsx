import { createSlice } from '@reduxjs/toolkit';

export const locales = {
    "en-US": require('./locales/en.json') as DictType,
    "zh-CN": require('./locales/cn.json') as DictType,
} as {[lang:string]:DictType};

const lang = 'en-US'
const coin = 'usdt'

const mockAlerts:{[id:string]:AlertType} = {
	1012321: {
		url:'/',
		title:'来自 WorthAlbatross924 交易的新信息',
		created:1637358748
	},
	1012322: {
		url:'/',
		title:'由 WorthAlbatross924 对您发起交易为WmMaaVhVPpZ的争议处理',
		created:1637358748
	},
	1012323: {
		url:'/',
		title:'Trade 3UdoFjz8Q2S was cancelled by JoabeAlves',
		created:1637358748
	}
}

const mockBuyOffers:{[id:string]:OfferType} = {
	100350261: {
		buy:	 	true,
		uid:		140150268,
		coin:	 	'btc',
		payment:	'alipay',
		currency:	'cny',
		min:	 	1000,
		max:	 	1000,
		margin:	 	2,
		time:	 	4,
		title:	 	'cash only',
		tags:		['no-verification-needed', 'receipt-required'],
		terms:		'Ваши Payeer RUB - мои USDT.\n\nВЫ МОЖЕТЕ ОТКРЫТЬ payeer ACCOUNT ЗДЕСЬ\n https://payeer.com/?partner=3111638',
	},
	100350262: {
		buy:	 	true,
		uid:		140150268,
		coin:	 	'btc',
		payment:	'alipay',
		currency:	'cny',
		min:	 	1000,
		max:	 	1000,
		margin:	 	2,
		time:	 	5,
		title:	 	'Fast reference number',
		tags:		['verified-paypal-only', 'with-receipt'],
		terms:		'Ваши Payeer RUB - мои USDT.\n\nВЫ МОЖЕТЕ ОТКРЫТЬ payeer ACCOUNT ЗДЕСЬ\n https://payeer.com/?partner=3111638',
	}
}

const mockSellOffers:{[id:number]:OfferType} = {
	100350261: {
		buy:	 	false,
		uid:		140150268,
		coin:	 	'btc',
		payment:	'alipay',
		currency:	'cny',
		min:	 	1000,
		max:	 	1000,
		margin:	 	2,
		time:	 	3,
		title:	 	'fast and reliable',
		tags:		['cash-in-person', 'no-negotiation', 'no-third-parties'],
		terms:		'Ваши Payeer RUB - мои USDT.\n\nВЫ МОЖЕТЕ ОТКРЫТЬ payeer ACCOUNT ЗДЕСЬ\n https://payeer.com/?partner=3111638',
	},
}
const mockBuyTrades:{[id:number]:TradeType} = {
	100350261: {
		status:     'pending',
		uid:		140150268,
		buy:	 	true,
		coin:	 	'btc',
		payment:	'alipay',
		currency:	'cny',
		min:	 	1000,
		max:	 	1000,
		margin:	 	2,
		time:	 	3,
		title:	 	'cash only',
		tags:		['no-verification-needed', 'receipt-required'],
		terms:		'Ваши Payeer RUB - мои USDT.\n\nВЫ МОЖЕТЕ ОТКРЫТЬ payeer ACCOUNT ЗДЕСЬ\n https://payeer.com/?partner=3111638',
		other:		140150260,
		price:		450000,
		quantity:	1,
		amount:		450000,
		fee:		0.005,
		feedback:	1,		// positive 1, negative: -1
		feedText:	"人爽快，付款也很快，非常效率",
		feedbackOther:1,	// positive 1, negative: -1
		feedTextOther:'靠谱买家，赞',
		updated:	0
	},
	100350262: {
		status:     'pending',
		uid:		140150268,
		buy:	 	true,
		coin:	 	'btc',
		payment:	'alipay',
		currency:	'cny',
		min:	 	1000,
		max:	 	1000,
		margin:	 	2,
		time:	 	5,
		title:	 	'Fast reference number',
		tags:		['verified-paypal-only', 'with-receipt'],
		terms:		'Ваши Payeer RUB - мои USDT.\n\nВЫ МОЖЕТЕ ОТКРЫТЬ payeer ACCOUNT ЗДЕСЬ\n https://payeer.com/?partner=3111638',
		other:		140150260,
		price:		450000,
		quantity:	1,
		amount:		450000,
		fee:		0.005,
		feedback:	1,		// positive 1, negative: -1
		feedText:	"人爽快，付款也很快，非常效率",
		feedbackOther:-1,	// positive 1, negative: -1
		feedTextOther:'靠谱买家，赞',
		updated:	0
	}
}

const mockSellTrades:{[id:string]:TradeType} = {
	100350261: {
		status:     'pending',
		uid:		140150268,
		buy:	 	false,
		coin:	 	'btc',
		payment:	'alipay',
		currency:	'cny',
		min:	 	1000,
		max:	 	1000,
		margin:	 	2,
		time:	 	5,
		title:	 	'fast and reliable',
		tags:		['cash-in-person', 'no-negotiation', 'no-third-parties'],
		terms:		'Ваши Payeer RUB - мои USDT.\n\nВЫ МОЖЕТЕ ОТКРЫТЬ payeer ACCOUNT ЗДЕСЬ\n https://payeer.com/?partner=3111638',
		other:		140150260,
		price:		450000,
		quantity:	1,
		amount:		450000,
		fee:		0.005,
		feedback:	1,		// positive 1, negative: -1
		feedText:	"人爽快，付款也很快，非常效率",
		feedbackOther:-1,	// positive 1, negative: -1
		feedTextOther:'靠谱买家，赞',
		updated:	0
	},
}

const mockProfiles:{[uid:number]:ProfileType} = {
	140150268: {
		alias: "turtle",
		description: "myname is turtle",
		lastSeen: 1638481667,
		avatar: "AB",
		stared: 0,
		credit: 0,
		joined: 100, // days
		powertrader:true,
		verify: {
			phone: true,
			email: true,
			id: false,
			address: true,
		},
		socials: {
			twitter:'',
			facebook:'',
		},
		country: 'cn',
		currency: 'cny',
		lang: 'zh-CN',
		timezone: 8,
		feedback: 	{
			positive: 1,
			negative: 0
		},
		partners: 12,
		trades: 325,
		canceledTrades:1,
		trustedBy: 5,
		blockedBy: 1,
		blocked: 2,
		volumns: {
			btc:2, // per 10K 
			eth:3, // per 10K 
			usdt:0, // per 10K 
		},
		tradeTimes: {},
		volumnByPayments: {
			paypal:0, // per 10K 
			payoneer:1 // per 10K 
		},
		offers: {
			buy: mockBuyOffers,
			sell:mockSellOffers
		},
		feedbacks: {
			buy: {
				positive: 90,
				negative: 1,
				data: 	mockBuyTrades
			},
			sell:{
				positive: 80,
				negative: 2,
				data: 	mockSellTrades
			}
		},
		withYou: 	[]
	},
	140150260: {
		alias: "bruce",
		description: "myname is turtle",
		lastSeen: 1638481667,
		avatar: "AB",
		stared: 0,
		credit: 0,
		joined: 100, // days
		powertrader:true,
		verify: {
			phone: true,
			email: true,
			id: false,
			address: true,
		},
		socials: {
			twitter:'',
			facebook:'',
		},
		country: 'cn',
		currency: 'cny',
		lang: 'zh-CN',
		timezone: 8,
		feedback: 	{
			positive: 1,
			negative: 0
		},
		partners: 12,
		trades: 325,
		canceledTrades:1,
		trustedBy: 5,
		blockedBy: 1,
		blocked: 2,
		volumns: {
			btc:2, // per 10K 
			eth:3, // per 10K 
			usdt:0, // per 10K 
		},
		tradeTimes: {},
		volumnByPayments: {
			paypal:0, // per 10K 
			payoneer:1 // per 10K 
		},
		offers: {
			buy: mockBuyOffers,
			sell:mockSellOffers
		},
		feedbacks: {
			buy: {
				positive: 90,
				negative: 1,
				data: mockBuyTrades
			},
			sell:{
				positive: 80,
				negative: 2,
				data: mockSellTrades
			}
		},
		withYou: 	[]
	}
}

const mockProfile:AccountType = {
	uid: 140150268,
	email:'iBitGo85126@gmail.com',
	phone:'',
	lastLogged:0,
	lastIP:'',
	isVendor:false,
	profile: mockProfiles[140150268],
}


const initialState:StoreTypes = {
	lang,
	fee:0.5,
	coin,
	account: null,
	prices: {
		btc: 56250,
		eth: 4325,
		usdt: 1,
		bnb: 432
	},
	offers: {
		buy: mockBuyOffers,
		sell:mockSellOffers
	},
	profiles: mockProfiles,
	orders: mockSellTrades,
	alerts: mockAlerts,
	loading: false,
	inited: false
}

const appKey = process.env.REACT_APP_GTAG + '-config'

const getStore = (initialState:any) => {
	try {
		const buf = window.localStorage.getItem(appKey)
		if (buf) {
			const json = JSON.parse(buf)
			for(let k in json) {
				if (initialState[k]!==undefined) {
					initialState[k] = json[k]
				}
			}
		}
		initialState.account = mockProfile
	} catch (err) {
		console.log(err)
	}
	return initialState
}

const setStore = (state:any) => {
	window.localStorage.setItem(appKey, JSON.stringify(state))
}

export default createSlice({
	name: 'store',
	initialState: getStore(initialState),
	reducers: {
		update: (state:any, action) => {
			for (const k in action.payload) {
				if (state[k] === undefined) throw(new Error('🦊 undefined account item'))
				state[k] = action.payload[k]
			}
			setStore(state)
		}
	}
})