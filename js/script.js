// AI Health Assistant

const analyzeBtn = document.getElementById("analyzeBtn");

if (analyzeBtn) {

    analyzeBtn.addEventListener("click", function () {

        const symptoms = document
            .getElementById("symptoms")
            .value
            .toLowerCase();

        const response = document.getElementById("aiResponse");

        if (symptoms.trim() === "") {

            response.innerHTML =
                "⚠️ Please enter your symptoms first.";

            return;
        }

        if (symptoms.includes("fever")) {

            response.innerHTML = `
            <b>Possible Condition:</b> Viral Fever<br><br>

            💧 Drink plenty of water.<br>
            🛌 Take proper rest.<br>
            🌡 Monitor your temperature.<br>
            👨‍⚕️ Consult a doctor if fever continues for more than 2 days.
            `;

        }

        else if (symptoms.includes("cough")) {

            response.innerHTML = `
            <b>Possible Condition:</b> Common Cold / Respiratory Infection<br><br>

            ☕ Drink warm fluids.<br>
            😷 Wear a mask if coughing frequently.<br>
            💊 Visit a doctor if cough lasts more than one week.
            `;

        }

        else if (symptoms.includes("headache")) {

            response.innerHTML = `
            <b>Possible Condition:</b> Stress / Migraine / Lack of Sleep<br><br>

            💧 Stay hydrated.<br>
            😴 Get enough sleep.<br>
            🚫 Avoid excessive screen time.<br>
            👨‍⚕️ Consult a doctor if pain is severe.
            `;

        }

        else if (symptoms.includes("stomach")) {

            response.innerHTML = `
            <b>Possible Condition:</b> Gastric Problem / Indigestion<br><br>

            🍚 Eat light food.<br>
            💧 Drink plenty of water.<br>
            🚫 Avoid spicy food.<br>
            👨‍⚕️ Visit a doctor if pain becomes severe.
            `;

        }

        else {

            response.innerHTML = `
            🤖 Sorry, I couldn't identify the condition from the entered symptoms.

            <br><br>

            Please consult a qualified healthcare professional for proper diagnosis.
            `;

        }

    });

}
/* ================= Disease Information ================= */

const diseaseSelect = document.querySelector(".disease-select");
const diseaseButton = document.querySelector(".disease-select + .ai-btn");
const diseaseResponse = document.querySelector(".response-text");

if (diseaseButton) {

    diseaseButton.addEventListener("click", function () {

        const disease = diseaseSelect.value;

        if (disease === "Fever") {

            diseaseResponse.innerHTML = `
            <b>Description:</b> Fever is a temporary increase in body temperature, usually caused by an infection.<br><br>

            <b>Common Symptoms:</b>
            High temperature, chills, sweating, weakness.<br><br>

            <b>Prevention:</b>
            Drink plenty of water, take rest, and maintain hygiene.
            `;
        }

        else if (disease === "Common Cold") {

            diseaseResponse.innerHTML = `
            <b>Description:</b> Common Cold is a viral infection affecting the nose and throat.<br><br>

            <b>Common Symptoms:</b>
            Sneezing, runny nose, sore throat, mild cough.<br><br>

            <b>Prevention:</b>
            Wash hands regularly, drink warm fluids and take sufficient rest.
            `;
        }

        else if (disease === "Diabetes") {

            diseaseResponse.innerHTML = `
            <b>Description:</b> Diabetes is a condition where blood sugar levels remain higher than normal.<br><br>

            <b>Common Symptoms:</b>
            Frequent urination, increased thirst, tiredness.<br><br>

            <b>Prevention:</b>
            Maintain a healthy diet, exercise regularly and monitor blood sugar.
            `;
        }

        else if (disease === "Hypertension") {

            diseaseResponse.innerHTML = `
            <b>Description:</b> Hypertension means high blood pressure that can affect the heart and blood vessels.<br><br>

            <b>Common Symptoms:</b>
            Headache, dizziness, blurred vision (sometimes no symptoms).<br><br>

            <b>Prevention:</b>
            Reduce salt intake, exercise regularly and manage stress.
            `;
        }

        else if (disease === "Asthma") {

            diseaseResponse.innerHTML = `
            <b>Description:</b> Asthma is a chronic condition that affects the airways of the lungs.<br><br>

            <b>Common Symptoms:</b>
            Wheezing, coughing, chest tightness and shortness of breath.<br><br>

            <b>Prevention:</b>
            Avoid dust, smoke and other allergy triggers. Use prescribed inhalers.
            `;
        }

        else {

            diseaseResponse.innerHTML =
            "⚠️ Please select a disease to view its information.";

        }

    });

}
/* ================= VACCINATION TRACKER ================= */

const vaccineBtn = document.getElementById("vaccineBtn");

if (vaccineBtn) {

    vaccineBtn.addEventListener("click", function () {

        const age = document.getElementById("ageGroup").value;
        const result = document.getElementById("vaccineResult");

        switch (age) {

            case "0 - 5 Years":

                result.innerHTML = `
                <span class="vaccine-complete">💉 Recommended Vaccines</span><br><br>

                ✔ BCG Vaccine<br>
                ✔ OPV (Polio)<br>
                ✔ Hepatitis B<br>
                ✔ DPT Vaccine<br>
                ✔ MMR Vaccine
                `;
                break;

            case "6 - 18 Years":

                result.innerHTML = `
                <span class="vaccine-complete">💉 Recommended Vaccines</span><br><br>

                ✔ HPV Vaccine<br>
                ✔ Tetanus Booster<br>
                ✔ Influenza Vaccine
                `;
                break;

            case "19 - 40 Years":

                result.innerHTML = `
                <span class="vaccine-complete">💉 Recommended Vaccines</span><br><br>

                ✔ COVID Booster<br>
                ✔ Hepatitis B<br>
                ✔ Annual Flu Vaccine
                `;
                break;

            case "Above 40 Years":

                result.innerHTML = `
                <span class="vaccine-complete">💉 Recommended Vaccines</span><br><br>

                ✔ Shingles Vaccine<br>
                ✔ Pneumococcal Vaccine<br>
                ✔ Annual Flu Vaccine<br>
                ✔ COVID Booster
                `;
                break;

            default:

                result.innerHTML =
                "⚠ Please select an age group.";

        }

    });

}
/* ================= HEALTH CAMPS ================= */

const registerButtons = document.querySelectorAll(".register-btn");

registerButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("✅ Registration request submitted successfully!\n\nOur team will contact you with further details.");

    });

});
/* ================= HEALTH AWARENESS ================= */

const awarenessCards = document.querySelectorAll(".awareness-card");

awarenessCards.forEach(card => {

    card.addEventListener("click", function(){

        alert("💙 Thank you for reading this health awareness tip.\n\nHealthy habits today lead to a healthier tomorrow!");

    });

});
/* ================= GOVERNMENT SCHEMES ================= */

const schemeButtons = document.querySelectorAll(".scheme-btn");

schemeButtons.forEach(button => {

    button.addEventListener("click", function(){

        alert("More information about this government scheme will be available in the next version of Healthcare Connect.");

    });

});
/* ================= CONTACT SUPPORT ================= */

const supportBtn = document.getElementById("supportBtn");

if (supportBtn) {

    supportBtn.addEventListener("click", function(){

        const name = document.getElementById("userName").value.trim();
        const email = document.getElementById("userEmail").value.trim();
        const message = document.getElementById("userMessage").value.trim();

        if(name === "" || email === "" || message === ""){

            alert("⚠ Please fill all the fields.");

            return;
        }

        alert("✅ Thank you, " + name + "!\n\nYour support request has been submitted successfully.");

        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("userMessage").value = "";

    });

}
/* ================= SYMPTOM CHECKER ================= */

const symptomBtn = document.getElementById("symptomBtn");

if (symptomBtn) {

    symptomBtn.addEventListener("click", function () {

        const checkboxes = document.querySelectorAll(".symptom-list input[type='checkbox']:checked");
        const result = document.getElementById("symptomResult");

        let symptoms = [];

        checkboxes.forEach(function (box) {
            symptoms.push(box.value);
        });

        if (symptoms.length === 0) {

            result.innerHTML = "⚠️ Please select at least one symptom.";

            return;
        }

        if (symptoms.includes("Fever") && symptoms.includes("Cough")) {

            result.innerHTML = `
            <b>Possible Condition:</b> Viral Fever or Flu<br><br>

            💧 Drink plenty of fluids.<br>
            🛌 Take adequate rest.<br>
            🌡 Monitor your temperature.<br>
            👨‍⚕️ Consult a doctor if symptoms persist.
            `;

        }

        else if (symptoms.includes("Headache")) {

            result.innerHTML = `
            <b>Possible Condition:</b> Stress or Migraine<br><br>

            😴 Take proper rest.<br>
            💧 Drink enough water.<br>
            🚫 Reduce screen time.<br>
            👨‍⚕️ Seek medical advice if severe.
            `;

        }

        else if (symptoms.includes("Stomach Pain")) {

            result.innerHTML = `
            <b>Possible Condition:</b> Gastric Problem<br><br>

            🍚 Eat light food.<br>
            💧 Stay hydrated.<br>
            🚫 Avoid spicy food.<br>
            👨‍⚕️ Visit a doctor if pain continues.
            `;

        }

        else if (symptoms.includes("Dizziness")) {

            result.innerHTML = `
            <b>Possible Condition:</b> Low Blood Pressure or Dehydration<br><br>

            💧 Drink water.<br>
            🪑 Sit and rest for some time.<br>
            👨‍⚕️ Consult a doctor if dizziness occurs frequently.
            `;

        }

        else {

            result.innerHTML = `
            <b>General Advice</b><br><br>

            😷 Monitor your symptoms.<br>
            🍎 Eat healthy food.<br>
            💧 Drink enough water.<br>
            👨‍⚕️ Visit a healthcare professional if symptoms worsen.
            `;

        }

    });

}
/* ================= BLOOD BANK ================= */

const bloodSearchBtn = document.getElementById("bloodSearchBtn");

if (bloodSearchBtn) {

    bloodSearchBtn.addEventListener("click", function () {

        const bloodGroup = document.getElementById("bloodGroup").value;
        const result = document.getElementById("bloodResult");

        switch (bloodGroup) {

            case "A+":
                result.innerHTML = `
                <span class="blood-available">🟢 Blood Available</span><br><br>
                🏥 Apollo Blood Bank<br>
                📍 Chennai<br>
                📞 +91 9876543210
                `;
                break;

            case "A-":
                result.innerHTML = `
                <span class="blood-available">🟢 Blood Available</span><br><br>
                🏥 Government Blood Bank<br>
                📍 Chennai<br>
                📞 +91 9123456780
                `;
                break;

            case "B+":
                result.innerHTML = `
                <span class="blood-available">🟢 Blood Available</span><br><br>
                🏥 Red Cross Blood Centre<br>
                📍 Chennai<br>
                📞 +91 9988776655
                `;
                break;

            case "B-":
                result.innerHTML = `
                <span class="blood-notavailable">🟠 Limited Stock</span><br><br>
                Please contact the nearest blood bank immediately.
                `;
                break;

            case "AB+":
                result.innerHTML = `
                <span class="blood-available">🟢 Blood Available</span><br><br>
                🏥 Lifeline Blood Centre<br>
                📍 Chennai<br>
                📞 +91 9090909090
                `;
                break;

            case "AB-":
                result.innerHTML = `
                <span class="blood-notavailable">🔴 Very Rare Blood Group</span><br><br>
                Please contact the emergency blood bank.
                `;
                break;

            case "O+":
                result.innerHTML = `
                <span class="blood-available">🟢 Blood Available</span><br><br>
                🏥 City Blood Bank<br>
                📍 Chennai<br>
                📞 +91 9876501234
                `;
                break;

            case "O-":
                result.innerHTML = `
                <span class="blood-notavailable">🔴 Emergency Required</span><br><br>
                O- blood is currently unavailable.<br>
                Please contact nearby hospitals immediately.
                `;
                break;

            default:
                result.innerHTML = "⚠️ Please select a blood group first.";

        }

    });

}
/* ================= SETTINGS ================= */

const registrationCard = document.getElementById("registrationCard");
const languageCard = document.getElementById("languageCard");
const helpCard = document.getElementById("helpCard");
const supportCard = document.getElementById("supportCard");
const aboutCard = document.getElementById("aboutCard");

if (registrationCard) {
    registrationCard.addEventListener("click", function () {
        alert("👤 User Registration feature will be available in the next version.");
    });
}

if (languageCard) {
    languageCard.addEventListener("click", function () {
        alert("🌐 Multiple language support will be available soon.");
    });
}

if (helpCard) {
    helpCard.addEventListener("click", function () {
        alert("❓ For assistance, please use the Contact Support option.");
    });
}

if (supportCard) {
    supportCard.addEventListener("click", function () {
        window.location.href = "contact-support.html";
    });
}

if (aboutCard) {
    aboutCard.addEventListener("click", function () {
        alert(
            "🏥 Healthcare Connect\n\nVersion: 1.0\nDeveloped as a Student Healthcare Assistance Project."
        );
    });
}