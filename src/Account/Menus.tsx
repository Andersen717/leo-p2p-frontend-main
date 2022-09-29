import { MenusType } from "../components/SideMenus"
import Icons from '../components/Icons'; 

const SettingMenus = (L:{[key:string]:string}):MenusType => ({
    profile: {
        url: `/account/profile`,
        icon: <Icons.Idverify margin={10}/>,
        title: L['profile.menu.profile']
    },
    security: {
        url: `/account/security`,
        icon: <Icons.Settings margin={10}/>,
        title: L['profile.menu.security']
    },
    payment: {
        url: `/account/payment`,
        icon: <Icons.Address margin={10}/>,
        title: L['profile.menu.payment']
    },
    developer: {
        url: `/account/developer`,
        icon: <Icons.Partners margin={10}/>,
        title: L['profile.menu.developer']
    },
    verification: {
        url: `/account/verification`,
        icon: <Icons.Partners margin={10}/>,
        title: L['profile.menu.verification']
    },
    connectedapps: {
        url: `/account/connected`,
        icon: <Icons.location margin={10}/>,
        title: L['profile.menu.connected']
    }
})
export default SettingMenus