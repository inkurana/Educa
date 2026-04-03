async function loadXMLQuiz() {
    const contentDiv = document.getElementById('dynamic-content');
    
    // Loading State
    contentDiv.innerHTML = `<div class="stellar-header"><h1 class="gradient-text">Loading Data...</h1></div>`;

    // Update active state on sidebar for Quiz
    document.querySelectorAll('.nav-links button').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.quiz-btn').classList.add('active');

    try {
        const response = await fetch('data/lessons.xml');
        const xmlText = await response.text();
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        
        const quizzes = xmlDoc.getElementsByTagName("quiz");
        
        // Stellar style Header for Quiz
        let quizHTML = `
            <div class="stellar-header">
                <h1 class="gradient-text">Knowledge Check</h1>
                <p>Questions are dynamically loaded from your XML database.</p>
            </div>
        `;
        
        // Loop through each question
        for(let i=0; i < quizzes.length; i++) {
            let qText = quizzes[i].getElementsByTagName("question")[0].textContent;
            let options = quizzes[i].getElementsByTagName("option");
            
            // Using the new 'bento-card' class instead of glassmorphism
            quizHTML += `
            <div class="bento-card" style="margin-bottom: 20px;">
                <h3 style="margin-bottom: 20px; font-size: 18px; font-weight: 500;">Q${i+1}: ${qText}</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">`;
                
            for(let j=0; j < options.length; j++) {
                let isCorrect = options[j].getAttribute("correct") === "true";
                let optText = options[j].textContent;
                
                // Stellar style options buttons
                quizHTML += `
                    <button class="primary-btn" 
                            style="background: var(--bg-dark); border: 1px solid var(--card-border); color: var(--text-primary); text-align: left; padding: 16px; font-weight: 400;" 
                            onclick="checkXMLAnswer(${isCorrect}, this)">
                        ${optText}
                    </button>`;
            }
            quizHTML += `</div></div>`;
        }
        
        contentDiv.innerHTML = quizHTML;
        
    } catch (error) {
        console.error("Error loading XML:", error);
        contentDiv.innerHTML = `
            <div class="bento-card">
                <h2 style="color: #ef4444; margin-bottom: 10px;">Error Loading Quiz</h2>
                <p style="color: var(--text-muted);">Make sure you are running the site through a Local Server (like Live Server or XAMPP) to parse XML correctly.</p>
            </div>
        `;
    }
}

// Function to handle the answer click visually
function checkXMLAnswer(isCorrect, buttonElement) {
    // Prevent clicking multiple times
    if(buttonElement.disabled) return;

    if(isCorrect) {
        buttonElement.style.background = "rgba(34, 197, 94, 0.1)"; // Soft green
        buttonElement.style.borderColor = "#22c55e";
        buttonElement.style.color = "#22c55e";
        buttonElement.innerHTML = `<span>${buttonElement.innerText}</span> <i class="ph ph-check-circle" style="float: right; font-size: 20px;"></i>`;
    } else {
        buttonElement.style.background = "rgba(239, 68, 68, 0.1)"; // Soft red
        buttonElement.style.borderColor = "#ef4444";
        buttonElement.style.color = "#ef4444";
        buttonElement.innerHTML = `<span>${buttonElement.innerText}</span> <i class="ph ph-x-circle" style="float: right; font-size: 20px;"></i>`;
    }
    
    // Disable sibling buttons so user can't click others after answering
    const allButtons = buttonElement.parentElement.querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);
}