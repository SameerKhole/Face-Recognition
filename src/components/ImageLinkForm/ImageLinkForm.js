import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return(
			<div>
				<p className="f3">
					{'This magic will detect faces in your picture. Give it a try.'}
				</p>
				<div className='center'>
					<div className='pa4 br3 shadow-5 center form'>
						<input className='f4 pa2 w-70 center' type='tex'/>
						<button className='f4 grow w-30 link ph3 pv2 dib link white bg-light-purple'>Detect</button>
					</div>
				</div>
			</div>
		)

}

export default ImageLinkForm;