const questions = [
    {
        question: "Увеличить размер шрифта можно, используя  тег?",
        optionA: "FONT",
        optionB: "IMG",
        optionC: "P",
        optionD: "I",
        correctOption: "optionA"
    },

    {
        question: "Чтобы закончить строку и начать новую используют тег?",
        optionA: "HR",
        optionB: "A",
        optionC: "BR",
        optionD: "P",
        correctOption: "optionC"
    },

    {
        question: "Какой из тегов разместит текст посередине окна браузера?",
        optionA: "P align=center",
        optionB: "MIDDLE",
        optionC: "MIDDLE",
        optionD: "FONT",
        correctOption: "optionA"
    },

    {
        question: "Какой из тегов служит для управления различными параметрами шрифтового оформления?",
        optionA: "H1",
        optionB: "FONT",
        optionC: "FINT",
        optionD: "SIZE",
        correctOption: "optionB"
    },

    {
        question: "Какие из тегов не являются парными?",
        optionA: "H1",
        optionB: "BR",
        optionC: "TABLE",
        optionD: "A",
        correctOption: "optionB"
    },

    {
        question: "С помощью тега I можно?",
        optionA: "Оформить текст курсивом",
        optionB: "Создать гиперссылку",
        optionC: "Вставить рисунок",
        optionD: "Оформить текст полужирным",
        correctOption: "optionA"
    },

    {
        question: "С помощью тега TR можно создать..?",
        optionA: "Заголовок таблицы;",
        optionB: "Ячейку таблицы;",
        optionC: "Строку таблицы;",
        optionD: "Абзац;",
        correctOption: "optionC"
    },


    {
        question: "Назначение тега TD:?",
        optionA: "Создает строку таблицы;",
        optionB: "С создает таблицу;",
        optionC: "Создает абзац;",
        optionD: "Создает ячейку таблицы;",
        correctOption: "optionD"
    },
    {
        question: "Пометить элемент списка можно с помощью тега:?",
        optionA: "OL",
        optionB: "LI",
        optionC: "H1",
        optionD: "UL",
        correctOption: "optionB"
    },

    {
        question: "Выберите контейнер который нельзя помещать в BODY?",
        optionA: "STYLE",
        optionB: "SCRIPT",
        optionC: "CENTER",
        optionD: "IMG",
        correctOption: "optionA"
    },


    {
        question: "Заголовок (контейнер head) html-документа используется для:?",
        optionA: "размещения форм;",
        optionB: "размещения МЕТА-тегов;",
        optionC: "описания фреймов;",
        optionD: " размещения стилей;",
        correctOption: "optionB"
    },

    {
        question: "Где отображается содержание контейнера title?",
        optionA: "в адресной строке браузера;",
        optionB: "в заголовке окна браузера;",
        optionC: "на странице;",
        optionD: "в заголовке текста ;",
        correctOption: "optionB"
    },

    {
        question: "Какой тег определяет фоновое изображение документа?",
        optionA: "BODY BGCOLOR=...",
        optionB: "BODY LINK=...",
        optionC: "BODY TEXT...",
        optionD: "BODY BACKGROUND=...",
        correctOption: "optionD"
    },


    {
        question: "Название страницы, отображаемый в браузере содержится:?",
        optionA: "в тэге BODY",
        optionB: "в тэге TITLE",
        optionC: "в тэге NAME",
        optionD: "в тэге META",
        correctOption: "optionB"
    },

    {
        question: "Какой тег позволяет указать кодировку символов(CHARSET)?",
        optionA: "LINK",
        optionB: "STYLE",
        optionC: "META",
        optionD: "OBJECT",
        correctOption: "optionC"
    },

    {
        question: "Как можно при открытии страницы выполнить автоматическую переадресацию на другой URL?",
        optionA: "это невозможно",
        optionB: "с помощью тега A",
        optionC: "с помощью тега META",
        optionD: "с помощью тега LINK",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
  
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            
            correctOption = option.labels[0].id
        }
    })

    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }


    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 3) {
        remark = "Плохой результат,почитай теорию и возвращайся."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 8) {
        remark = "Неплоха,но ты можешь лучше."
        remarkColor = "orange"
    }
    else if (playerScore >= 8) {
        remark = "Отлично,ты молодец."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

   
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}