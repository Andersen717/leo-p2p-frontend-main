import React from 'react';
import useGlobal from "../useGlobal";
import "./index.scss";

const Lang = () => {
	const G = useGlobal()
	const refLang = React.useRef<HTMLUListElement>(null)
	
	const onChangeLang = (lang:string) => {
		G.update({lang})
		if (refLang && refLang.current) {
			refLang.current.style.display = 'none'
			setTimeout(()=>(refLang && refLang.current && (refLang.current.style.display = '')), 100)
		}
	}
	return (<div className="menu" style={{marginLeft:10}}>
		<span className="link"><i className={"ic lang " + G.lang}></i><i className="pointer"></i></span>
		<ul className="right" ref={refLang}>
			{Object.keys(G.locales).map(k=>(
				<li key={k}><span onClick={()=>onChangeLang(k)} className="ripple link"><i className={"ic lang "+k}></i> {G.locales[k].lang}</span></li>
			))}
		</ul>
	</div>);
}

export default Lang;