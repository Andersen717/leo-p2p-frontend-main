import React from 'react';
import Layout from '../components/Layout'; 
import Icons from '../components/Icons'; 
import useGlobal from '../useGlobal'; 
import SideMenus from '../components/SideMenus';
import SettingMenus from './Menus';


interface ConnectedAppsProps {
	uid: string
}

const ConnectedApps = ({uid}:ConnectedAppsProps) => {  
	const  {account, L, T} = useGlobal();   
	return <Layout>
		{account ? (
			<section>
				<div className="row">
					<div className="col-md-3 mt3">
						<SideMenus activeMenu="connectedapps" menus={SettingMenus(L)}/>
					</div>
					<div className="col-md-9 mt3">
						<div className="frame">
							<div className="h2 mt3">
								{L['userconnected.title']}
							</div>
							<div className="mt3">
								<p>{L['userconnected.content']}</p>
							</div>
							<div className="text-center mt5">
								<Icons.Settings />
								 <p>{L['userconnected.nosearch']}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		) : (
			null
		)}
		
	</Layout>;
};

export default ConnectedApps;