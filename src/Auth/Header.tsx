import Lang from '../components/Lang';
import Icons from '../components/Icons';
import "./index.scss"


const Header = () => (
	<div className="header justify">
		<a className="justify" href="/" style={{color:'var(--primary)'}}>
			<Icons.Logo margin={5} />
			<span className="h2">iBitGo</span>
		</a>
		<Lang />
	</div>
)

export default Header;