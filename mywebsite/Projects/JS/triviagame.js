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

    function displayMessageBox(message, isCorrect) {
        const messageBox = $(".message-box");
        messageBox.html(message);
        if (isCorrect) {
            messageBox.css("background-color", "#27ae60"); // Green background
            messageBox.css("color", "#fff"); // White text
        } else {
            messageBox.css("background-color", "#e74c3c"); // Red background
            messageBox.css("color", "#fff"); // White text
        }
        messageBox.addClass('show-message');
    }

    function updateButtonLabel() {
        if (currentQuestionIndex < dogTriviaQuestions.length - 1) {
            $("#next-button").text("Next");
        } else {
            $("#next-button").text("Finish");
        }
    }

    function showRestartAndPortfolioButtons() {
        $("#restart-button").show();
        $("#portfolio-button").show();
        $("#home-button").show();
    }

    function hideRestartAndPortfolioButtons() {
        $("#restart-button").hide();
        $("#portfolio-button").hide();
        $("#home-button").hide();
    }

    displayQuestion(currentQuestionIndex);
    updateButtonLabel();
    hideRestartAndPortfolioButtons(); // Initially hide the "Restart," "Home," and "Portfolio" buttons

    $(".options").click(function () {
        const selectedOption = $(this).text();
        const correctAnswer = dogTriviaQuestions[currentQuestionIndex].answer;

        if (selectedOption === correctAnswer) {
            displayMessageBox("Correct!", true);
            correctAnswers++;
        } else {
            displayMessageBox("The correct answer is " + correctAnswer, false);
        }

        $(".options").prop("disabled", true);
        enableNextButton();
    });

    $("#next-button").prop("disabled", true);

    $("#next-button").click(function () {
        resetOptions();
        currentQuestionIndex++;

        if (currentQuestionIndex < dogTriviaQuestions.length) {
            displayQuestion(currentQuestionIndex);
            $(".message-box").removeClass('show-message');
            updateButtonLabel();
            hideRestartAndPortfolioButtons(); // Hide the "Restart," "Home," and "Portfolio" buttons if not on the final screen
        } else {
            // Hide other elements as needed
            $("#question-container").hide();
            $("#answer-options").hide();
            $("#next-button").hide();
            $(".message-box").removeClass('show-message');
            $("#feedback").empty();

            const totalQuestions = dogTriviaQuestions.length;
            $("#score-message").text('You answered ' + correctAnswers + '/' + totalQuestions + ' questions correctly.');
            $("#score-message").show(); // Show the score message at the end

            // Show the "Restart" and "Portfolio" buttons on the final screen
            showRestartAndPortfolioButtons();
        }
        $(this).prop("disabled", true);
    });

    $("#restart-button").click(function () {
        // Reset the game by reloading the page
        location.reload();
    });

    $("#home-button").click(function () {
        // Redirect to the home page
        window.location.href = "../../index.html"; // Set the file directory for the "Home" button
    });

    $("#portfolio-button").click(function () {
        // Redirect to the Portfolio page
        window.location.href = "../Portfolio/projects.html"; // Set the file directory for the "Portfolio" button
    });
});