import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Temperature = () => {
    const [value, setValue] = useState(1);
    const [result, setResult] = useState();
    const [origem, setOrigem] = useState('C');
    const [destino, setDestino] = useState('F');
  
    useEffect(() => {
      convertUnit(origem,destino,1);
    }, []);
  
    const convertUnit = (origem, destino, valor) => {
      if(origem === 'C' && destino === 'F') {
        setResult((valor *9/5) + 32);
      }
      if(origem === 'C' && destino === 'K') {
        setResult(valor + 273);
      }
      if(origem === 'F' && destino === 'C') {
        setResult((valor - 32) * 5/9);
      }
      if(origem === 'F' && destino === 'K') {
        setResult((valor - 32) * 5/9 + 273);
      }
      if(origem === 'K' && destino === 'F') {
        setResult((valor - 273) * 9/5 + 32);
      }
      if(origem === 'K' && destino === 'C') {
        setResult(valor - 273);
      }
    }
  
    return (
      <>
        <h1 className='text-center mb-5'>Temperature Converter</h1>
        <div className='d-flex justify-content-center mb-3'>
          <Form.Select className='select me-3' defaultValue={origem} onChange={e => {convertUnit(e.target.value,destino,value); setOrigem(e.target.value)}} aria-label="Default select example">
            <option value="C">Celsius</option>
            <option value="F">Fahrenheint</option>
            <option value="K">Kelvin</option>
          </Form.Select>
          <Form.Select className='select' defaultValue={destino} onChange={e => {convertUnit(origem,e.target.value,value); setDestino(e.target.value)}} aria-label="Default select example">
            <option value="C">Celsius</option>
            <option value="F">Fahrenheint</option>
            <option value="K">Kelvin</option>
          </Form.Select>
        </div>
        <Form className='d-flex justify-content-center mb-3'>
          <Form.Group className="mb-3 me-3">
            <Form.Control defaultValue={1} onChange={(e) => {convertUnit(origem,destino,e.target.value); setValue(e.target.value)}} id="input-celsius" className='bg-red' type="number" placeholder="Enter Temperature" />
          </Form.Group>
          <Form.Group className="mb-3">
            <h4 className='result py-2 ps-3'>{result}</h4>
          </Form.Group>
        </Form>
      </>
    );
  }
  
  export default Temperature;