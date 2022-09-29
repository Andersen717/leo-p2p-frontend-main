import React from 'react';
import Layout from '../components/Layout'; 
import Icons from '../components/Icons'; 
import useGlobal from '../useGlobal'; 
import SideMenus from '../components/SideMenus';
import SettingMenus from './Menus';


interface VerificationAppsProps {
	uid: string
}

const VerificationApps = ({uid}:VerificationAppsProps) => {  
	const  {account, L, T} = useGlobal();   
	return <Layout>
		{account ? (
			<section>
				<div className="row">
					<div className="col-md-3 mt3">
						<SideMenus activeMenu="verification" menus={SettingMenus(L)}/>
					</div>
					<div className="col-md-9 mt3">
						<div className="frame">
							<h2>Here is Verification.</h2>
						</div>
					</div>
				</div>
			</section>
		) : (
			null
		)}
		
	</Layout>;
};

export default VerificationApps;