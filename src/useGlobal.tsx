import React from 'react'
import Slice, {locales} from './reducer'
import { useSelector, useDispatch}	from 'react-redux';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import zh from 'javascript-time-ago/locale/zh.json'

TimeAgo.addLocale(en)
TimeAgo.addLocale(zh)

const timeAgos:{[key:string]:any} = {
	'en-US': new TimeAgo('en'),
	'zh-CN': new TimeAgo('zh'),
}

const useGlobal = ():AppTypes => {
	const G = useSelector((state:StoreTypes)=>state)
	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 768;
	const dispatch = useDispatch()
	const update = (payload:PayloadType) => dispatch(Slice.actions.update(payload))
	const L = locales[G.lang]
	
	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	  }, []);
	

	const T = (key:string, args?:{[key:string]:string|number}|string|number):string => {
		let text = L[key]
		if (text===undefined) throw new Error('Undefined lang key[' + key + ']')
		if (typeof args==='string' || typeof args==='number') {
			text = text.replace(/\{\w+\}/, String(args))
		} else {
			for(let k in args) text = text.replace(new RegExp('{'+k+'}', 'g'), String(args[k]))
		}
		return text
	}

	const A = (key:string, args?:{[key:string]:string}):string[] => {
		let text = L[key]
		if (text===undefined) throw new Error('Undefined lang key[' + key + ']')
		if (args) {
			for(let k in args) text = text.replace('{' + k + '}', args[k])
		}
		return text.split(/\r\n|\r|\n/g)
	}

	const Z = (offset:number):string => {
		if (offset===0) return 'UTC'
		const num = Math.abs(offset)
		const hh = Math.floor(num)
		const mm = Math.floor((num - hh) * 60)
		return 'GMT' + (offset > 0 ? '+' : '-') + (hh > 9 ? '' : '0') + hh + ':' + (mm > 9 ? '' : '0') + mm
	}

	const getTime = (time:number, offset?:number):string => {
		const d = new Date(time + (offset || 0) * 3600000)
		const hh = d.getUTCHours()
		const mm = d.getMinutes()
		return (hh > 9 ? '' : '0') + hh + ':' + (mm > 9 ? '' : '0') + mm
	}
	const getTradeTime = (t:number) => {
		const dd = Math.round(t / 1440);
		const hh = Math.round((t % 1440) / 60);
		const mm = t % 60;
		return [dd > 0 ? dd + ' ' + L.days : '', hh > 0 ? hh + ' ' + L.hours : '', mm > 0 ? mm + ' ' + L.minutes : ''].join(' ')
	}
	const getISOTimeText = (time:number):string => {
		let hh = Math.floor(time / 3600)
		let mm = (time - hh * 3600) / 60
		let am = hh < 12
		if (!am) hh -= 12
		if (am && hh===0) hh = 12
		return (hh > 9 ? '' : '0') + hh + ':' + (mm > 9 ? '' : '0') + mm +' ' + (am ? 'AM' : 'PM')
	}

	const fromISOTimeText = (time:string):number => {
		const matches = time.match(/(\d\d):(\d\d)\s(AM|PM)/)
		if (matches?.length===4) return (Number(matches[1]) + (matches[3]==='PM' ? 12 : 0)) + 3600 + Number(matches[2]) * 60
		return 0
	}

	const fillTimes = (offset:number):string[] => {
		const unixtime = Math.round(new Date().getTime()/1000)
		const startOfToday = unixtime - unixtime % 86400
		const times = [], diffTime = 1800
		for(let time=startOfToday + offset; time<startOfToday + 86400 - offset; time+=diffTime) {
			times.push(getISOTimeText(time - startOfToday))
		}
		return times
	}

	const timeAgo = (time:number):string => {
		if (time<1e12) time *= 1000
		return timeAgos[G.lang].format(time)
	}
	const getPrice = (buy:boolean, coin:string, margin:number, currency:string):string => {
		const price = G.prices[coin];
		const value = price * (100 + (buy?-margin:margin)) / 100
		return NF(value)
	}
	const NF=(num:number,p:number=2)=>num.toFixed(p).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
	/* const isURL = (text:string):boolean => {
		var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
		  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
		return !!pattern.test(text);
	}
	const isEmail = (text:string):boolean => {
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return !!re.test(text);
	} */
	/* const check = async (network:string, txs:Array<string>):Promise<{[txId:string]:number}> =>  {
		const results:{[txId:string]:number} = {}
		const net = networks[network]
		const web3 = new window.Web3(net.rpc)
		const height = await web3.eth.getBlockNumber()
		const limit = 20
		const count = txs.length
		for(let i=0; i<count; i+=limit) {
			const json:Array<{jsonrpc:string, method:string, params:Array<string>, id:number}> = []
			let iEnd = i + limit
			if (iEnd>count) iEnd = count
			for (let k=i; k<iEnd; k++) {
				json.push({jsonrpc: '2.0', method: 'eth_getTransactionReceipt', params: [txs[k]], id: k++})
			}
			const response = await fetch(net.rpc, {
				body:JSON.stringify(json),
				headers: {Accept: "application/json","Content-Type": "application/json"},
				method: "POST"
			})
			const result = await response.json();
			if (result!==null && Array.isArray(result)) {
				for(let v of result) {
					results[txs[v.id]] = v.result && v.result.status === '0x1' ? height - Number(v.result.blockNumber) + 1 : -1
				}
			}
		}
		return results
	} */
	
	return {...G, L, isMobile:width < breakpoint, locales, A, Z, T, NF, timeAgo, getPrice, getTradeTime, getTime, getISOTimeText, fromISOTimeText, fillTimes, update};
}

export default useGlobal
