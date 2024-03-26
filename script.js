// JavaScript functionality for the mood tracker

document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Function to create select element for mood
    function createMoodSelect() {
        const select = document.createElement('select');
        select.classList.add('moodSelect');
        select.name = 'mood';
        const moods = ['Rate Your Day','1 ', '2 ', '3 ', '4 ', '5','6','7','8','9','10']; 
        moods.forEach(mood => {
            const option = document.createElement('option');
            option.value = mood.split(' ')[0]; // Set value to emoji
            option.textContent = mood; // Set text content to mood description
            select.appendChild(option);
        });
        return select;
    }

    // Function to create select element for word of the day
    function createWordSelect() {
        const select = document.createElement('select');
        select.classList.add('wordSelect');
        select.name = 'word';
        const words = ['Word of the Day','Anxious', 'Happy', 'Excited', 'Sad', 'Tired', 'Angry']; // Add more words as needed
        words.forEach(word => {
            const option = document.createElement('option');
            option.value = word;
            option.textContent = word;
            select.appendChild(option);
        });
        return select;
    }

    // Function to create submit button for each day
    function createSubmitButton() {
        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Submit';
        return button;
    }

    // Function to create day container with mood, word select elements, and submit button
function createDayContainer(day) {
    const div = document.createElement('div');
    div.classList.add('day');
    const heading = document.createElement('h2');
    heading.textContent = day;
    div.appendChild(heading);
    const moodSelect = createMoodSelect();
    moodSelect.dataset.day = day.toLowerCase(); // Store day information in dataset
    div.appendChild(moodSelect);
    const wordSelect = createWordSelect();
    div.appendChild(wordSelect);
    const submitButton = createSubmitButton(); // Create submit button for each day
    submitButton.addEventListener('click', function() {
        const selectedWord = wordSelect.value;
        if (selectedWord === 'Anxious') {
            // Open a new frame if "Anxious" is selected
            window.open('anxious.html', '_blank');
        }

        // Reset all combo boxes to their default first setting
        moodSelect.selectedIndex = 0;
        wordSelect.selectedIndex = 0;

    });
    div.appendChild(submitButton); // Append submit button to day container
    return div;
}

// Show days of the week
const daysContainer = document.getElementById('daysContainer');
daysOfWeek.forEach(day => {
    const dayContainer = createDayContainer(day);
    daysContainer.appendChild(dayContainer);
});

   

    // Function to save journal entry to localStorage
    function saveJournalEntry() {
        const journalDate = document.getElementById('journalDate').value;
        const journalText = document.getElementById('journalText').value;
        
        if (journalDate && journalText) {
            // Get existing journal entries from localStorage or initialize an empty array
            let journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
            
            // Add the new journal entry
            journalEntries.push({ date: journalDate, entry: journalText });
            
            // Save updated journal entries back to localStorage
            localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
            
            // Clear input fields
            document.getElementById('journalDate').value = '';
            document.getElementById('journalText').value = '';
            
            // Alert user that entry has been saved
            alert('Journal entry saved successfully!');
        } else {
            alert('Please fill in both date and journal entry fields.');
        }
    }

    // Event listener for the "Save Journal Entry" button
    const saveJournalButton = document.getElementById('saveJournalButton');
    saveJournalButton.addEventListener('click', saveJournalEntry);

    // Function to create review button
    function createReviewButton() {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Review your week';
        button.id = 'reviewButton'; // Give the button an ID for consistency
        return button;
    }

    // Create review button if not already appended
    function appendReviewButton() {
        const reviewButtonAppended = document.getElementById('reviewButton');

        if (!reviewButtonAppended) {
            const reviewButton = createReviewButton();
            daysContainer.appendChild(reviewButton); // Append review button after all day containers
        }
    }

    // Event listener for the "Review your week" button
    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'reviewButton') {
            // Add your functionality for reviewing the week here
            console.log("Reviewing your week...");
        }
    });

    // Call appendReviewButton function to ensure the button is appended
    appendReviewButton();
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800, 
        offset: 100,   
        easing: 'ease',
        delay: 100,     
        once: true,   
    });
});





