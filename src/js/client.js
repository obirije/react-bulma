import React from "react";
import ReactDOM from "react-dom";
import '../main.sass';

class Layout extends React.Component {
	render(){
		return (
			<section class="section">
			    <div class="container">
			      <h1 class="title">
			        Hello World!
			      </h1>
			      <p class="subtitle">
			        My first website with <strong>Bulma</strong>!
			      </p>
			    </div>
			  </section>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);