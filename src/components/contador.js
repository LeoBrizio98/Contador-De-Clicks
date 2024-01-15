import react from 'react';
import '../stylesheets/contador.css';


function Contador({ numClicks }) {
	return (
		<div className='counter'>
			{numClicks}
		</div>
		);
}

export default Contador