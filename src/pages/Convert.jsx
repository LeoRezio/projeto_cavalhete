import { Form } from 'react-bootstrap';
import { useState } from 'react';

function Convert(listInput) {
    const list = listInput.listInput;
  const [value, setValue] = useState(1);
  const [result, setResult] = useState(list.defaultValue.value);
  const [origem, setOrigem] = useState(list.defaultValue.origem);
  const [destino, setDestino] = useState(list.defaultValue.destino);
  console.log(list);

  //useEffect(() => {
  //  setResult(list.converterFunction(origem,destino,value));
  //}, []);

  return (
    <>
    <h3 className='text-center mt-3 mb-5'>Convert {list.title}</h3>
      <div className='d-flex justify-content-center mb-3'>
        <Form.Select className='select me-3' defaultValue={list.defaultValue.origem} onChange={e =>{setResult(list.converterFunction(e.target.value,destino,value)); setOrigem(e.target.value)}} aria-label="Default select example">
          {list.option.map((data) => {
           return <option value={data.value}>{data.label}</option>
          })}
        </Form.Select>
        <Form.Select className='select' defaultValue={list.defaultValue.destino} onChange={e => {setResult(list.converterFunction(origem,e.target.value,value)); setDestino(e.target.value)}} aria-label="Default select example">
            {list.option.map((data) => {
             return <option value={data.value}>{data.label}</option>
            })}
        </Form.Select>
      </div>
      <Form className='d-flex justify-content-center mb-3'>
        <Form.Group className="mb-3 me-3">
          <Form.Control defaultValue={1} onChange={(e) =>{setResult(list.converterFunction(origem,destino,Number(e.target.value)))}} id="input-celsius" className='bg-red' type="number" placeholder="Enter Massa" />
        </Form.Group>
        <Form.Group className="mb-3">
          <h4 className='result py-2 ps-3'>{result}</h4>
        </Form.Group>
      </Form>
    </>
  );
}

export default Convert;