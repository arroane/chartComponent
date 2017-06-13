import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const data = [{"name":'Ray', "freq":2, "w1":4, "w2":2, "w3":6}, {"name":'Jo', "freq":1, "w1": 4, "w2":3, "w3":2}, {"name":'Abe', "freq":3, "w1":3, "w2":4, "w3":3}, {"name":"Gary", "freq":4, "w1":1, "w2":4, "w3":2}, {"name":'Jenny', "freq":2, "w1":4, "w2":2, "w3":5}, {"name":'Miss', "freq":3, "w1": 2, "w2":4, "w3":2}, {"name":'Roxie', "freq":2, "w1":2, "w2":4, "w3":5}, {"name":"Joan", "freq":3, "w1":3, "w2":3, "w3":6}]

ReactDOM.render(<App data={data} type="bar" title="TB" alert="red" alertMsg="There is an issue"/>, document.getElementById('root'));
registerServiceWorker();
