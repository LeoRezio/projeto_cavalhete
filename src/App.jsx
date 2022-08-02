import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { Form, Nav} from 'react-bootstrap';
import { ConvertMassa, ConvertTemperature } from './Conversores';
import { useEffect, useState } from 'react';
import Convert from './pages/Convert';


function App() {
  const [converter, setConverter] = useState('mass');

  const listInput= {
    mass: {
      title: 'Mass',
      option: [
        {label: 'Toneladas',value: 'ton'},
        {label: 'Kilogramas',value: 'kg'},
        {label: 'Gramas',value: 'g'},
        {label: 'Miligramas',value: 'mg'},
        {label: 'Microgramas',value: 'ug'},
        {label: 'Libras',value: 'libra'},
        {label: 'Onças',value: 'onca'}
      ],
      defaultValue: {origem: 'g', destino: 'mg', value: ConvertMassa('g','mg',1)},
      converterFunction: ConvertMassa,
    },
    temperature: {
      title: 'Temperature',
      option: [
        {label: 'Celsius',value: 'C'},
        {label: 'Fahrenheint',value: 'F'},
        {label: 'Kelvin',value: 'K'}
      ],
      defaultValue: {origem: 'C', destino: 'F',value: ConvertTemperature('C','F',1)},
      converterFunction: ConvertTemperature,
    }
  }
  return (
    <>
      <h1 className="text-center my-5">Unit Converter</h1>
      <div style={{marginTop: '10vh'}} className="App">
        <Form.Select className='select mx-auto' defaultValue="mass" onChange={e =>{setConverter(e.target.value)}} aria-label="Default select example">
          <option value="mass">Mass</option>
          <option value="temperature">Temperature</option>
        </Form.Select>
        <Convert listInput={listInput[converter]}></Convert>
      </div>
    </>
  );
}

export default App;
