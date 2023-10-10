document.addEventListener("DOMContentLoaded", function () {
    const diagnoseBtn = document.getElementById("diagnoseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popupContainer = document.getElementById("popupContainer");
    const popupClose = document.getElementById("popupClose");
    const diagnosisResult = document.getElementById("diagnosisResult");
    const symptomsInput = document.getElementById("symptoms");
    const ageInput = document.getElementById("age");
    const genderInputs = document.querySelectorAll('input[name="gender"]');

    function canDiagnose() {
        // Check if all required fields are filled
        const isSymptomsFilled = symptomsInput.value.trim() !== "";

        return isSymptomsFilled;
    }

async function finalDiagnose(){
    const url = 'https://healthgraphic-healthgraphic-   v1.p.rapidapi.com//api.healthgraphic.com/v1/conditions/headache';
    const options = {
	   method: 'GET',
	   headers: {
		  'X-RapidAPI-Key': '417dba6b86msh6264924f8f401f3p1b0bc8jsn5e6dd7c74585',
		  'X-RapidAPI-Host': 'healthgraphic-healthgraphic-v1.p.rapidapi.com'
	   }
    };

    try {
	   const response = await fetch(url, options);
        const result = await response.text();
        return result ;
	
    } catch (error) {
	   console.error(error);
        throw(error);
    }
}

    function updateDiagnoseButton() {
        diagnoseBtn.disabled = !canDiagnose();
    }

    // Update the button state initially
    updateDiagnoseButton();

    // Add event listeners to update the button state when inputs change
    symptomsInput.addEventListener("input", updateDiagnoseButton);

    diagnoseBtn.addEventListener("click", function () {
        // Check again if the button can be clicked (for safety)
        if (!canDiagnose()) {
            return;
        }

        // Simulate diagnosis and recommendation (you can replace this with your actual logic)
        const fakeDiagnosis = finalDiagnose();
        console.log(fakeDiagnosis);
        
        const fakeRecommendation = "Consult with a general practitioner for further evaluation.";

        // Update the popup content with the diagnosis and recommendation
        diagnosisResult.textContent = "Diagnosis: " + fakeDiagnosis;

        // Show the popup
        popupContainer.style.display = "block";
    });

    resetBtn.addEventListener("click", function () {
        // Clear all input values and reset the button state
        symptomsInput.value = "";
        updateDiagnoseButton();

        // Clear the popup content and hide the popup
        diagnosisResult.textContent = "Your diagnosis result will appear here.";
        popupContainer.style.display = "none";
    });

    popupClose.addEventListener("click", function () {
        // Hide the popup when the close button is clicked
        popupContainer.style.display = "none";
    });
});