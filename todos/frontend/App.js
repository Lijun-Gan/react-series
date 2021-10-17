import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos';

document.addEventListener("DOMContentLoaded", () => {
	
    const root = document.getElementById("root");

	ReactDOM.render(<Todos/>, root);

});
