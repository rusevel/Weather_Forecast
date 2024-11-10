// teste.js
const apiKey = 'a9bd785c431f4778ca0a5dd3cea16e09';

async function obterPrevisao() {
    const cidade = document.getElementById('cidade').value;
    if (!cidade) {
        alert('Por favor, insira o nome de uma cidade');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('resultado').innerHTML = 'Cidade não encontrada!';
        } else {
            const temperatura = data.main.temp;
            const descricao = data.weather[0].description;
            const umidade = data.main.humidity;
            const cidadeNome = data.name;

            document.getElementById('resultado').innerHTML = `
                <h2>${cidadeNome}</h2>
                <p>Temperatura: ${temperatura}°C</p>
                <p>Condição: ${descricao}</p>
                <p>Umidade: ${umidade}%</p>
            `;
        }
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        document.getElementById('resultado').innerHTML = 'Erro ao obter a previsão do tempo.';
    }
}
