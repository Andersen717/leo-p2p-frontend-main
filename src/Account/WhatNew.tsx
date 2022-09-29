import React from 'react';
import Layout from '../components/Layout'; 
import Icons from '../components/Icons'; 
import useGlobal from '../useGlobal'; 


interface WhatsNewProps {
	uid: string
}

const WhatsNew = ({uid}:WhatsNewProps) => {  
	const  {account, L, T} = useGlobal();   
	return <Layout>
		{account ? (
			<section className="container container-xl">
				<div className="row"> 
                    <h2>Here is what's New Page.</h2>
				</div>
			</section>
		) : (
			null
		)}
		
	</Layout>;
};

export default WhatsNew;