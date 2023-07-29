import React from 'react';
import Parse from 'parse/dist/parse.min.js';
import { Product } from './Product';
import { Badge, Button } from 'react-bootstrap';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


const PARSE_APPLICATION_ID = 'hneoElPiCrws1omd2U77pL4G4rAwJ3AJDFkuH59u';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '8INh0pVEne6PSTpcG8dbXF6S1v0jJELA4uDA0Yjq';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">

      <Product />
    </div>
  );
}

export default App;