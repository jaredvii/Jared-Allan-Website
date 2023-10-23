$(document).ready(function () {
    const dogTriviaQuestions = [
        {
            question: "What is the lifespan of the average dog?",
            options: ["7-10 years", "12-15 years", "20-25 years", "3-5 years"],
            answer: "12-15 years",
        },
        {
            question: "Which food is toxic to dogs?",
            options: ["Peanut butter", "Chocolate", "Carrots", "Apples"],
            answer: "Chocolate",
        },
        {
            question: "What is a dog's most powerful sense?",
            options: ["Sight", "Hearing", "Taste", "Smell"],
            answer: "Smell",
        },
        {
            question: "What is the term for a dog's sense of smell?",
            options: ["Olfaction", "Scent-sense", "Sniffing", "Aroma-feel"],
            answer: "Olfaction",
        },
        {
            question: "What is a group of pugs called?",
            options: ["Pack", "Puddle", "Grumble", "Clowder"],
            answer: "Grumble",
        },
        {
            question: "What is a Dachshund known for?",
            options: ["Long tail", "Short legs", "Blue eyes", "Spots"],
            answer: "Short legs",
        },
        {
            question: "What is the name of the world's smallest dog breed?",
            options: ["Chihuahua", "Pomeranian", "Shih Tzu", "Yorkshire Terrier"],
            answer: "Chihuahua",
        },
        {
            question: "What is a dog's favorite treat?",
            options: ["Cheese", "Bananas", "Steak", "Kibble"],
            answer: "Cheese",
        },
        {
            question: "What is a group of corgis called?",
            options: ["Herd", "Pack", "Bundle", "Gaggle"],
            answer: "Herd",
        },
        {
            question: "Which dog breed has a waterproof coat and webbed feet?",
            options: ["Golden Retriever", "Newfoundland", "Labrador Retriever", "Cocker Spaniel"],
            answer: "Newfoundland",
        },
        {
            question: "How fast can a Greyhound run in miles per hour?",
            options: ["30 mph", "40 mph", "50 mph", "60 mph"],
            answer: "40 mph",
        },
        {
            question: "What's the most popular dog name in the United States?",
            options: ["Max", "Lucy", "Charlie", "Bella"],
            answer: "Bella",
        },
    ];

    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    function displayQuestion(index) {
        const question = dogTriviaQuestions[index];
        $("#question").text(question.question);

        $(".options").each(function (i) {
            $(this).text(question.options[i]);
        });
    }

    function resetOptions() {
        $(".options").prop("disabled", false);
    }

    function enableNextButton() {
        $("#next-button").prop("disabled", false);
    }

    displayQuestion(currentQuestionIndex);

    $(".options").hover(function () {
        $(this).css("background-color", "#a14171");
    }, function () {
        $(this).css("background-color", "hotpink");
    });

    $(".options").click(function () {
        const selectedOption = $(this).text();
        const correctAnswer = dogTriviaQuestions[currentQuestionIndex].answer;

        if (selectedOption === correctAnswer) {
            displayFeedback(true);
            correctAnswers++; 
          
        } else {
            displayFeedback(false);
        }

        $(".options").prop("disabled", true);
        enableNextButton();
    });

    function displayFeedback(isCorrect) {
        const feedback = $("#feedback");
        if (isCorrect) {
            feedback.html('<div class="correct-feedback">Correct!</div>');
        } else {
            const correctAnswer = dogTriviaQuestions[currentQuestionIndex].answer;
            feedback.html('<div class="incorrect-feedback">The correct answer is ' + correctAnswer + '</div>');
        }
    }

    $("#next-button").prop("disabled", true);

    $("#next-button").click(function () {
        resetOptions();
        currentQuestionIndex++;

        if (currentQuestionIndex < dogTriviaQuestions.length) {
            displayQuestion(currentQuestionIndex);
            $("#feedback").empty();
        } else {
            $("#question-container").text("Congratulations! You have completed the dog trivia game.");
            $("#answer-options").hide();
            $("#next-button").hide();
            $("#feedback").empty();

            const totalQuestions = dogTriviaQuestions.length;
            $("#question-container").append('<p id="congratulations-message">You answered ' + correctAnswers + '/' + totalQuestions + ' questions correctly!</p>');

 $("#congratulations-message").css("color", "hotpink");
        }
        $(this).prop("disabled", true);
    });
});
