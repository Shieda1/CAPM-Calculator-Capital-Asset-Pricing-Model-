// https://www.omnicalculator.com/finance/capm#capm-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const riskpremiumoftheassetRadio = document.getElementById('riskpremiumoftheassetRadio');
const expectedrateofreturnRadio = document.getElementById('expectedrateofreturnRadio');
const riskfreeinterestrateRadio = document.getElementById('riskfreeinterestrateRadio');
const broadmarketreturnRadio = document.getElementById('broadmarketreturnRadio');
const betaRadio = document.getElementById('betaRadio');

let riskpremiumoftheasset;
let riskfreeinterestrate = v1;
let broadmarketreturn = v2;
let beta = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

riskpremiumoftheassetRadio.addEventListener('click', function() {
  variable1.textContent = 'Risk-free interest rate';
  variable2.textContent = 'Broad market return';
  variable3.textContent = 'Beta';
  riskfreeinterestrate = v1;
  broadmarketreturn = v2;
  beta = v3;
  result.textContent = '';
});

expectedrateofreturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Risk-free interest rate';
  variable2.textContent = 'Broad market return';
  variable3.textContent = 'Beta';
  riskfreeinterestrate = v1;
  broadmarketreturn = v2;
  beta = v3;
  result.textContent = '';
});

riskfreeinterestrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Risk premium of the asset';
  variable2.textContent = 'Broad market return';
  variable3.textContent = 'Beta';
  riskpremiumoftheasset = v1;
  broadmarketreturn = v2;
  beta = v3;
  result.textContent = '';
});

broadmarketreturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Risk premium of the asset';
  variable2.textContent = 'Risk-free interest rate';
  variable3.textContent = 'Beta';
  riskpremiumoftheasset = v1;
  riskfreeinterestrate = v2;
  beta = v3;
  result.textContent = '';
});

betaRadio.addEventListener('click', function() {
  variable1.textContent = 'Risk premium of the asset';
  variable2.textContent = 'Risk-free interest rate';
  variable3.textContent = 'Broad market return';
  riskpremiumoftheasset = v1;
  riskfreeinterestrate = v2;
  broadmarketreturn = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(riskpremiumoftheassetRadio.checked)
    result.textContent = `Risk premium of the asset = ${computeriskpremiumoftheasset().toFixed(2)}`;
  
  else if(expectedrateofreturnRadio.checked)
    result.textContent = `Expected rate of return = ${computeExpectedrateofreturn().toFixed(2)}`;

  else if(riskfreeinterestrateRadio.checked)
    result.textContent = `Risk-free interest rate = ${computeriskfreeinterestrate().toFixed(2)}`;

  else if(broadmarketreturnRadio.checked)
    result.textContent = `Broad market return = ${computebroadmarketreturn().toFixed(2)}`;

  else if(betaRadio.checked)
    result.textContent = `Beta = ${computebeta().toFixed(2)}`;
})

// calculation

function computeriskpremiumoftheasset() {
  return Number(beta.value) * (Number(broadmarketreturn.value) - Number(riskfreeinterestrate.value));
}

function computeExpectedrateofreturn() {
  return Number(riskfreeinterestrate.value) + Number(beta.value) * (Number(broadmarketreturn.value) - Number(riskfreeinterestrate.value));
}

function computeriskfreeinterestrate() {
  return Number(broadmarketreturn.value) - (Number(riskpremiumoftheasset.value) / Number(beta.value));
}

function computebroadmarketreturn() {
  return (Number(riskpremiumoftheasset.value) / Number(beta.value)) + Number(riskfreeinterestrate.value);
}

function computebeta() {
  return Number(riskpremiumoftheasset.value) / (Number(broadmarketreturn.value) - Number(riskfreeinterestrate.value));
}