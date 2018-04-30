import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';

class App extends React.Component {
	render(){
		return(
			<div className="AppCss ph4">
				<Navigation />
				<Logo />
				<ImageLinkForm />
			</div>
		)
	}
}

export default App;