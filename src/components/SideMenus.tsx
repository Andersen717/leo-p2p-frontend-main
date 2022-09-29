
import './sidemenus.scss'

export interface MenusType {
    [key:string]:{
        title:string,
        url:string
        icon:JSX.Element
    }
}

interface SideMenusProps {
    menus: MenusType
    activeMenu:string
}

const SideMenus = ({menus, activeMenu}:SideMenusProps) => {   
    /* const {L, T, account} = useGlobal(); */
	return (
        <div className="sidemenu">
            {Object.keys(menus).map(k=>(
                <a key={k} className={k===activeMenu?'active':''} href={menus[k].url}>
                    {menus[k].icon}
                    <span style={{color:'var(--gray)'}}>{menus[k].title}</span>
                </a>    
            ))}
        </div>
	);
}

export default SideMenus;
