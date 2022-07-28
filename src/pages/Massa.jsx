import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Massa = () => {
    const [value, setValue] = useState(1);
    const [result, setResult] = useState();
    const [origem, setOrigem] = useState('g');
    const [destino, setDestino] = useState('mg');
    const unidades = {
      ton: 10**6,
      kg: 1000.0,
      g: 1,
      mg: 0.001,
      ug: 10**-6,
      libra: 453.592,
      onca: 28.3495,
  }
  
    useEffect(() => {
      convertUnit(origem,destino,1);
    }, []);
  
    const convertUnit = (origem, destino, valor) => {
      setResult((valor * unidades[origem]) / unidades[destino])
    }
  
    return (
      <>
        <h1 className='text-center mb-5'>Massa Converter</h1>
        <div className='d-flex justify-content-center mb-3'>
          <Form.Select className='select me-3' defaultValue={origem} onChange={e =>{convertUnit(e.target.value,destino,value); setOrigem(e.target.value)}} aria-label="Default select example">
            <option value="ton">Toneladas</option>
            <option value="kg">Kilogramas</option>
            <option value="g">Gramas</option>
            <option value="mg">MiliGramas</option>
            <option value="ug">Microgramas</option>
            <option value="libra">Libras</option>
            <option value="onca">Onças</option>
          </Form.Select>
          <Form.Select className='select' defaultValue={destino} onChange={e => {convertUnit(origem,e.target.value,value); setDestino(e.target.value)}} aria-label="Default select example">
            <option value="ton">Toneladas</option>
            <option value="kg">Kilogramas</option>
            <option value="g">Gramas</option>
            <option value="mg">MiliGramas</option>
            <option value="ug">Microgramas</option>
            <option value="libra">Libras</option>
            <option value="onca">Onças</option>
          </Form.Select>
        </div>
        <Form className='d-flex justify-content-center mb-3'>
          <Form.Group className="mb-3 me-3">
            <Form.Control defaultValue={1} onChange={(e) =>{convertUnit(origem,destino,e.target.value); setValue(e.target.value)}} id="input-celsius" className='bg-red' type="number" placeholder="Enter Massa" />
          </Form.Group>
          <Form.Group className="mb-3">
            <h4 className='result py-2 ps-3'>{result}</h4>
          </Form.Group>
        </Form>
      </>
    );
  }
  
  export default Massa;