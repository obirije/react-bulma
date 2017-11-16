import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import BasicExample from './js/client.js';

const app = document.getElementById('app');

ReactDOM.render((
	<Router>
		<BasicExample />
	</Router>	
), app);