import { MenusType } from "../components/SideMenus"
import Icons from '../components/Icons'; 

const SettingMenus = (L:{[key:string]:string}):MenusType => ({
    recent: {
        url: `/account/trade-partners/recent`,
        icon: <Icons.SortDesc margin={10}/>,
        title: L['contactmenu.recent']
    },
    trust: {
        url: `/account/trade-partners/trust`,
        icon: <Icons.Info margin={10}/>,
        title: L['contactmenu.trust']
    },
    block: {
        url: `/account/trade-partners/block`,
        icon: <Icons.Partners margin={10}/>,
        title: L['contactmenu.block']
    },
    favourite: {
        url: `/account/trade-partners/favourite`,
        icon: <Icons.star margin={10}/>,
        title: L['contactmenu.favourite']
    }
})
export default SettingMenus