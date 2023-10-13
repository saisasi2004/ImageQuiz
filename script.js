const questions = [
  {
    image: "ameca.jpg",
    answer: "ameca",
  },
  {
    image: "atlas.jpg",
    answer: "atlas",
  },
  {
    image: "spot.jpg",
    answer: "spot",
  },
  {
    image: "stretch.jpg",
    answer: "stretch",
  },
  {
    image: "sophia.jpg",
    answer: "sophia",
  },
];

let currentQuestionIndex = 0;

let score = 0;

const playButton = document.getElementById("play-button");
const quizContainer = document.getElementById("quiz-container");
const quizImage = document.getElementById("quiz-image");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const resultText = document.getElementById("result");
let s = 0;
if (s == 0) {
  quizContainer.style.display = "none";
  s++;
}
if (s == 1) {
  playButton.addEventListener("click", () => {
    // playButton.style.display = 'none';
    quizContainer.style.display = "block";
    showQuestion(currentQuestionIndex);
  });
}

submitButton.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    showResult();
  }

  answerInput.value = "";
});

function showQuestion(index) {
  const question = questions[index];
  quizImage.src = question.image;
  answerInput.placeholder = "Type your answer";
  resultText.textContent = "";
}

function showResult() {
  quizContainer.style.display = "none";
  resultText.textContent = `You scored ${score} out of ${questions.length}`;
  if (score == 5) {
    showCongratulationsPopup();
  } else {
    showSomethingelse();
  }
}

function showCongratulationsPopup() {
  // const popup = document.createElement('div');
  // popup.classList.add('popup');
  // popup.innerHTML = `
  //     <h2>Congratulations!</h2>
  //     <p>You have finished the quiz.</p>
  // `;
  // document.body.appendChild(popup);
  var modal1 = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal1.toggle();

  const audio = document.createElement("audio");
  audio.src = "congo.mp3";

  audio.autoplay = true;

  popup.appendChild(audio);
  document.body.appendChild(popup);
}
function showSomethingelse() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
        <h2>Sorry Dude !!</h2>
        <a href="/">Retry</a>
    `;
  resultText.appendChild(popup);
}
