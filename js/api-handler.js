// Function to save quiz score to the database
async function saveScore(userId, quizId, finalScore) {
    const dataPayload = {
        user_id: userId,
        quiz_id: quizId,
        score: finalScore
    };

    try {
        // Sending data to our PHP API using Fetch
        const response = await fetch('http://localhost/educa-platform/backend/save_progress.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataPayload)
        });

        const result = await response.json();
        
        if(result.message) {
            console.log("Success:", result.message);
            alert("Score Saved to Database! 🏆");
        } else {
            console.error("Error:", result.error);
        }
    } catch (error) {
        console.error("API Call Failed:", error);
    }
}