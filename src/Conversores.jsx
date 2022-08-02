//Convert Units

const unidadesMassa = {
    ton: 10**6,
    kg: 1000.0,
    g: 1,
    mg: 0.001,
    ug: 10**-6,
    libra: 453.592,
    onca: 28.3495,
}

//Convert Functions

export const ConvertMassa = (origem, destino, valor) => {
    let result = (valor * unidadesMassa[origem]) / unidadesMassa[destino];
    if (result < .01) {
        return result.toExponential(6);
    }
    return result;
}
export const ConvertTemperature = (origem, destino, valor) => {
    let result = 0;
  if(origem === 'C' && destino === 'F') {
    result = ((valor *9/5) + 32);
  }
  if(origem === 'C' && destino === 'K') {
    result = (valor + 273);
  }
  if(origem === 'F' && destino === 'C') {
    result = ((valor - 32) * 5/9);
  }
  if(origem === 'F' && destino === 'K') {
    result = ((valor - 32) * 5/9 + 273);
  }
  if(origem === 'K' && destino === 'F') {
    result = ((valor - 273) * 9/5 + 32);
  }
  if(origem === 'K' && destino === 'C') {
    result = (valor - 273);
  }
  console.log(result);
  return result.toPrecision(3);
}
