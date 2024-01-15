import react from 'react';
import '../stylesheets/boton.css';


function Boton( {text, isClickButton, driveClick} ) {
	return (
		<button 
			className={isClickButton ? 'click-button' : 'reset-button'}
			onClick={driveClick}>
			{text}
		</button>
		);
}

export default Boton;