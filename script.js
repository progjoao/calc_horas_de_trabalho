let help = (el) => document.querySelector(el);
let hourForDay = help("#hour-for-day");
let dayForMonth = help("#day-for-month");
let spending = help("#spend");
let equipament = help("#equipament");
let percent = help("#percent");
let returnValues = help('#result')
let monthFromYear = 12; // value equipament for 12 month
let totalHoursWorked = hourForDay.value * dayForMonth.value;
let monthSpending = spending.value + equipament.value / monthFromYear.value;

function calculateResult() {
   console.log('Dados verificados e estão corretos')
   console.log('Agora calculando resultados')

   let equipamentForMonth = Number(equipament.value / 12);
   let totalSpending = equipamentForMonth + Number(spending.value);
   let monthlyHours = Number(hourForDay.value) * Number(dayForMonth.value);
   let percentValue = percent.value / 100;
   let result = ((totalSpending / monthlyHours) / (1 - percentValue));
   returnValues.innerHTML = `CALCULANDO`;

   setTimeout(() => {
      returnValues.innerHTML = `
               <p>O calculo se baseia no seu gasto mensal total, aonde você precisa suprir esse gasto e obter um lucro pelo trabalho.</p>
               <br><br>
               <p>Gasto fixo mensal: ${spending.value} reais.</p>
               <p>Parcela do equipamento: ${equipamentForMonth.toFixed(0)} reais.</p>
               <p>Gasto mensal total: ${spending.value} + ${equipamentForMonth.toFixed(0)} = ${totalSpending.toFixed(0)} reais.</p>
               <br><br>
               <p>Hora(s) trabalhada(s) por dia: ${hourForDay.value} hora(s).</p>
               <p>Dia(s) trabalhado(s) por mês: ${dayForMonth.value} dia(s).</p>
               <p>Total de hora(s) trabalhada(s) no projeto por mês: ${monthlyHours.toFixed(0)} hora(s).</p>
               <br><br>
               <p>Porcentagem em cima do valor cobrado: ${percent.value}%, é ${(result.toFixed(0) * monthlyHours.toFixed(0)) - totalSpending.toFixed(0)} de lucro.</p>
               <br><br>
               <p>Estipulamos que deve cobrar por hora, o valor de: ${result.toFixed(0)} reais.</p>
               <p>Se cobrar o valor de: ${result.toFixed(0)} reais, no final do mês recebera desse projeto um valor total de ${result.toFixed(0) * monthlyHours.toFixed(0)} reais.</p>
            `
   }, 1500);
   console.log('Dados calculados com sucesso')
}

function calculate() {
   console.log('Iniciou o calculo')
   let arrayInputs = [hourForDay.value, dayForMonth.value, spending.value, equipament.value]
   veryfiValue(arrayInputs);
}

function veryfiValue(data) {
   const number = new RegExp(/[0-9]/g);
   if(number.test(data)) {
      console.log('Fazendo a verificação dos dados')
      calculateResult()
   } else {
      console.log('Verificação feita e os dados estão errados')
      returnValues.innerHTML = `Desculpa, os dados estão incorretos`;
   }
}

function clean() {
   hourForDay.value = '';
   dayForMonth.value = '';
   spending.value = '';
   equipament.value = '';
   percent.value = 20;
   returnValues.innerHTML = '';
}
