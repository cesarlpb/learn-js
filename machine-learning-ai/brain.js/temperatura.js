// Datos de entrenamiento: Celsius y sus equivalentes en Fahrenheit
const celsius = [0, 100, 30, -40, 37];
const fahrenheit = [32, 212, 86, -40, 98.6];

// Función para calcular la media
function mean(array) {
  return array.reduce((sum, value) => sum + value, 0) / array.length;
}

// Cálculo de la pendiente (m) y la intersección (b) de la regresión lineal
function linearRegression(x, y) {
  const xMean = mean(x);
  const yMean = mean(y);

  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < x.length; i++) {
    numerator += (x[i] - xMean) * (y[i] - yMean);
    denominator += (x[i] - xMean) ** 2;
  }

  const slope = numerator / denominator;
  const intercept = yMean - slope * xMean;

  return { slope, intercept };
}

// Entrena el modelo de regresión lineal
const { slope, intercept } = linearRegression(celsius, fahrenheit);

// Predicción de un valor nuevo
function predict(x) {
  return slope * x + intercept;
}

// Prueba el modelo con 50°C
const inputCelsius = 50;
const predictedFahrenheit = predict(inputCelsius);

console.log(`${inputCelsius}°C es aproximadamente ${predictedFahrenheit.toFixed(2)}°F`);
console.log(`Pendiente (m): ${slope.toFixed(2)}, Intersección (b): ${intercept.toFixed(2)}`);

// Gráfica
// Datos de entrenamiento: Celsius y sus equivalentes en Fahrenheit
// const celsius = [0, 100, 30, -40, 37];
// const fahrenheit = [32, 212, 86, -40, 98.6];

celsius.push(50)
fahrenheit.push(predictedFahrenheit)

// Crear una gráfica con Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Celsius vs Fahrenheit',
      data: celsius.map((c, i) => ({ x: c, y: fahrenheit[i] })),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      pointRadius: 5
    }]
  },
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Celsius (°C)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Fahrenheit (°F)'
        }
      }
    }
  }
});