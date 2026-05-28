function checkAnswer(svar, fragorId) {
  const resultat = document.getElementById(fragorId);
  if (svar === "rätt") {
  resultat.innerHTML = "Rätt svar!";
  } else {
    resultat.innerHTML = "Fel svar, försök igen.";
  }
}


// koden ovan tar emot två värden. Den kollar om det är lika med rätt eller fel. och sckikar ett resultat