import React from 'react'
import Icons from './Icons'
import './input.scss'

export type ValueType = {
	key: string
	icon?: JSX.Element
	label: string,

}

export interface NumberInputProps {
	disabled?:boolean
	style?:React.CSSProperties
	value:number
	step?:number
	min?:number
	max?:number
	hideCmd?:boolean
	symbol?:string
	readOnly?:boolean
	onChange?:(value:number)=>void
}

export interface ComboInputProps {
	disabled?:boolean
	style?:React.CSSProperties
	value:string
	placeholder?:string
	blank?:boolean
	data:Array<ValueType>
	onRender?:(value:ValueType)=>JSX.Element|string
	onChange?:(value:string)=>void
	onSearch?:(find:string,value:ValueType)=>boolean
}

export interface MultiInputProps {
	disabled?:boolean
	style?:React.CSSProperties
	value:Array<string>
	placeholder?:string
	data:Array<ValueType>
	onChange?:(value:string)=>void
	onSearch?:(find:string,value:ValueType)=>boolean
}
const NumberInput = ({disabled,style,value,step,min,max,hideCmd,symbol,readOnly,onChange}:NumberInputProps) => {
	const [val,setVal] = React.useState(value)
	
	const changeValue = (num:number,offset?:number)=>{
		if (offset) num += offset;
		if (min && num < min) num = min;
		if (max && num > max) num = max;
		setVal(num)
		if (onChange) onChange(num)
	}
	const stepNum = step || 1
	return (<div className="number">
		<div className="flex" style={{position:'relative', flex: '1 1 auto'}}>
			{hideCmd ? null : <span className="cmd" onClick={()=>changeValue(val, -stepNum)}><Icons.Minus size={12} /></span>}
			<input readOnly={readOnly} disabled={disabled} type="number" style={style} step={stepNum} min={min} max={max} onChange={e=>changeValue(Number(e.target.value))} value={val} />
			{hideCmd ? null : <span className="cmd right" onClick={()=>changeValue(val, stepNum)}><Icons.Plus size={12} /></span>}
		</div>
		{symbol ? <span className="symbol">{symbol}</span> : null}
	</div>)
}

const ComboInput = ({disabled,style,value,placeholder,blank,data,onChange,onSearch,onRender}:ComboInputProps) => {
	const [lists,setLists] = React.useState(data)
	const [val,setVal] = React.useState(value)
	const [dropdown,setDropdown] = React.useState(false)
	let hasIcon = false;
	for(let v of data) {
		if (v.icon!==undefined) {
			hasIcon = true;
			break;
		}
	}
	React.useEffect(()=>{dropdown && setLists(data)},[dropdown])
	const onChangeValue = (value:string)=>{
		const results = []
		let currentValue:ValueType|null = null;
		for(let v of data) {
			if (onSearch) {
				if (onSearch(value, v)) results.push(v)
			} else {
				if (v.label===undefined) {
					debugger;
				}
				if (v.label.indexOf(value)!==-1 || v.key.indexOf(value)!==-1) results.push(v)
			}
			if (currentValue===null) {
				if (v.key===value || v.label===value) {
					currentValue = v
					value = v.key;
				}
			}
		}
		setLists(value==="" ? data : results)
		setVal(value)
		if (currentValue) onChange && onChange(currentValue.key)
	}
	const onValue = (key:string) => {
		setVal(key)
		onChange && onChange(key)
	}

	let current:ValueType|null = null;
	for(let v of data) {
		if (typeof v==='string') {
			if (v===val) current = v
		} else {
			if (v.key===val) current = v
		}
	}
	return (<div style={{position:'relative'}}>
		<input type="text" disabled={disabled} style={{...style, paddingLeft:(current?.icon ? 55 : 15)}} placeholder={placeholder} onChange={e=>onChangeValue(e.target.value)} onClick={()=>setDropdown(true)} onFocus={()=>setDropdown(true)} onBlur={()=>setTimeout(()=>setDropdown(false), 200)} value={current!==null ? current.label : val} />
		{current?.icon ? <div className="flex middle" style={{position:'absolute',top:0,bottom:0,left:15}}>{(current===null ? Icons.Search : current.icon )}</div> : null}
		<div className="dropmenu" style={{display:dropdown?'':'none'}}>
			<ul>
				{blank?<li key={0} onClick={()=>onValue('')}>{onRender ? onRender({key:'',label:''}) : ''}</li> : null}
				{lists.map(v=>{
					return <li key={v.key} onClick={()=>onValue(v.key)}>
						{onRender ? onRender(v) : <div className="flex middle">{v.icon || null}{v.label}</div>}
					</li>
				})}
			</ul>
		</div>
	</div>)

	/* onRender={k=><>
		<code style={{marginRight:10, color:'var(--gray)'}}>({Z(timezones[typeof k == 'string'?"":""])})</code>
		<span>{L['zone.'+k]}</span>
		<code style={{float:'right', color:'var(--gray)'}}>{getTime(unixtime, timezones[typeof k == 'string'?"":""])}</code>
	</>} onSearch={(q,v)=>String(timezones[v])===q || L['zone.'+v].toLowerCase().indexOf(q)!==-1} */
}

const MultiInput = ({disabled,style,value,placeholder,data,onChange}:MultiInputProps) => {
	const [val,setVal] = React.useState(value)
	const [dropdown,setDropdown] = React.useState(false)
	
	const changeValue = (value:string)=>{
		val.push(value)
		setVal(val)
		onChange && onChange(value)
	}

	return (<div style={{position:'relative'}}>
		<div className="flex">
			<input type="text" disabled={disabled} style={style} placeholder={placeholder} onChange={e=>changeValue(e.target.value)} onClick={()=>setDropdown(true)} onFocus={()=>setDropdown(true)} onBlur={()=>setTimeout(()=>setDropdown(false), 200)} value={val} />
		</div>
		
		<div className="dropmenu" style={{display:dropdown?'':'none'}}>
			<ul>
				{data.map(v=>{
					if (typeof v==='string') {
						return <li key={v} onClick={()=>changeValue(v)}>{v}</li>
					}
					return <li key={v.key} onClick={()=>changeValue(v.key)}>{v.label}</li>
				})}
			</ul>
		</div>
	</div>)
}

const Input = {
	Number: NumberInput,
	Combo: ComboInput,
	Multi: MultiInput,
}
export default Input