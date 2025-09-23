// public/js/interview.js

document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time-display');
    const aiQuestionDiv = document.getElementById('ai-question');
    const userAnswerTextarea = document.getElementById('user-answer');
    const sendBtn = document.getElementById('send-btn');
    const voiceBtn = document.getElementById('voice-btn');

    let totalTimeInSeconds = timeDuration * 60;
    let timerInterval;
    let recognition;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const isSpeechRecognitionSupported = !!SpeechRecognition;

    if (!isSpeechRecognitionSupported) {
        voiceBtn.style.display = 'none';
        console.warn("Web Speech API is not supported in this browser.");
    }

    // Initialize the timer
    function startTimer() {
        timerInterval = setInterval(() => {
            if (totalTimeInSeconds <= 0) {
                clearInterval(timerInterval);
                timeDisplay.textContent = "Time's up!";
                endInterview();
                return;
            }
            totalTimeInSeconds--;
            const minutes = Math.floor(totalTimeInSeconds / 60);
            const seconds = totalTimeInSeconds % 60;
            timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }, 1000);
    }
    
    startTimer();

    // End interview logic
    async function endInterview() {
        clearInterval(timerInterval);
        const userConfirmed = window.confirm("Your time is over! Click OK to see your review.");
        
        if (userConfirmed) {
            try {
                const response = await fetch('/api/finish-interview', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ interviewId })
                });
                const result = await response.json();
                
                if (result.review) {
                    alert("Generating review... Check the console for the full review or redirect to a review page.");
                    console.log(result.review);
                    window.location.href = `/review/${result.interviewId}`;
                } else {
                    alert("Could not generate review. Please try again.");
                }

            } catch (err) {
                console.error("Error ending interview:", err);
                alert("An error occurred while finishing the interview.");
            }
        }
    }

    // Handle sending the user's answer
    sendBtn.addEventListener('click', async () => {
        const userResponse = userAnswerTextarea.value.trim();
        const currentQuestion = aiQuestionDiv.textContent.trim();
        
        if (!userResponse) {
            alert("Please provide a response.");
            return;
        }

        userAnswerTextarea.value = 'Thinking...';
        sendBtn.disabled = true;
        voiceBtn.disabled = true; // Disable voice button while processing

        try {
            const response = await fetch('/api/next-question', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ interviewId, userResponse, currentQuestion })
            });
            const result = await response.json();

            if (result.nextQuestion) {
                aiQuestionDiv.textContent = result.nextQuestion;
                userAnswerTextarea.value = '';
                sendBtn.disabled = false;
                voiceBtn.disabled = false; // Re-enable buttons
                
                speakText(result.nextQuestion);
            } else {
                alert("An error occurred. Please refresh.");
                sendBtn.disabled = false;
                voiceBtn.disabled = false; // Re-enable buttons
            }

        } catch (err) {
            console.error("Error fetching next question:", err);
            userAnswerTextarea.value = 'Failed to get a response.';
            sendBtn.disabled = false;
            voiceBtn.disabled = false; // Re-enable buttons
        }
    });

    // Implement Speech-to-Text (STT)
    if (isSpeechRecognitionSupported) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        voiceBtn.addEventListener('click', () => {
            voiceBtn.disabled = true;
            sendBtn.disabled = true; // Disable send button while speaking
            voiceBtn.textContent = '🔴 Speaking...';
            recognition.start();
        });

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            userAnswerTextarea.value = transcript;
            voiceBtn.textContent = '🎤';
            voiceBtn.disabled = false;
            sendBtn.disabled = false; // Re-enable send button
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            voiceBtn.textContent = '🎤';
            voiceBtn.disabled = false;
            sendBtn.disabled = false; // Re-enable send button
            alert(`Speech recognition error: ${event.error}. Please try again.`);
        };

        recognition.onend = () => {
            voiceBtn.textContent = '🎤';
            voiceBtn.disabled = false;
            sendBtn.disabled = false; // Re-enable send button
        };
    }
    
    // Implement Text-to-Speech (TTS)
    function speakText(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            console.warn("Text-to-speech not supported in this browser.");
        }
    }

    speakText(aiQuestionDiv.textContent);
});
