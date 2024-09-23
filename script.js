const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["París", "Londres", "Madrid", "Berlín"],
        correctAnswer: "París"
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Júpiter", "Saturno", "Tierra", "Marte"],
        correctAnswer: "Júpiter"
    },
    {
        question: "¿En qué año llegó el hombre a la luna?",
        options: ["1969", "1959", "1979", "1989"],
        correctAnswer: "1969"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
        correctAnswer: "Amazonas"
    },
    {
        question: "¿Qué país ganó la Copa Mundial de Fútbol en 2018?",
        options: ["Francia", "Brasil", "Alemania", "Argentina"],
        correctAnswer: "Francia"
    },
    {
        question: "¿Cuántos continentes hay en el mundo?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges", "Julio Cortázar"],
        correctAnswer: "Gabriel García Márquez"
    },
    {
        question: "¿Cuál es el metal más abundante en la Tierra?",
        options: ["Hierro", "Aluminio", "Cobre", "Oro"],
        correctAnswer: "Aluminio"
    },
    {
        question: "¿En qué continente se encuentra Egipto?",
        options: ["África", "Asia", "Europa", "Oceanía"],
        correctAnswer: "África"
    }
];

let shuffledQuestions = [];

function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function displayQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';
    shuffledQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="question${index}" value="${option}" required>
                    ${option}
                </label><br>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    shuffledQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.correctAnswer) {
            score += 10;
        }
    });

    document.getElementById('result').innerText = `Tu puntaje es: ${score}/100`;
    showCorrectAnswers();
}

function showCorrectAnswers() {
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '<h2>Respuestas Correctas</h2>';
    
    shuffledQuestions.forEach((q, index) => {
        const answerElement = document.createElement('div');
        answerElement.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong><br>Respuesta correcta: ${q.correctAnswer}</p>`;
        answersContainer.appendChild(answerElement);
    });
}

function restartQuiz() {
    shuffleQuestions();
    displayQuiz();
    document.getElementById('result').innerText = '';
    document.getElementById('answers').innerHTML = '';
}

window.onload = function() {
    shuffleQuestions();
    displayQuiz();
};
