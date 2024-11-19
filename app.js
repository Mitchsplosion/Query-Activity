let team1 = {
  name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  scorers: ["Ronaldo", "Benzena", "Hazard"],
  fans: 798,
};

let team2 = {
  name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  scorers: ["Messi", "Suarez", "Puyol"],
  fans: 738,
};

let team3 = {
  name: "Manchester United",
  city: "Manchester",
  country: "England",
  scorers: ["Cantona", "Rooney", "Ronaldo"],
  fans: 755,
};

let team4 = {
  name: "Manchester City",
  city: "Manchester",
  country: "England",
  scorers: ["Sterling", "Aguero", "Haaland"],
  fans: 537,
};

let team5 = {
  name: "Brazil National Team",
  city: "N/A",
  country: "Brazil",
  scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  fans: 950,
};

let team6 = {
  name: "Argentina National Team",
  city: "N/A",
  country: "Argentina",
  scorers: ["Messi", "Batistuta", "Maradona"],
  fans: 888,
};

let team7 = {
  name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  scorers: ["Aragones", "Griezmann", "Torez"],
  fans: 400,
};

let teams = [team1, team2, team3, team4, team5, team6, team7];

// teams.forEach((team) => {
//   db.collection("teams").add(team);
// });

// document.querySelector("#main").innerHTML += "<p> test </p>";

// console.log(firebase);

let html = document.querySelector("#main").innerHTML;

function r_e(id) {
  return document.querySelector(`#${id}`);
}

db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML = "<p>Q1 No teams found </p>";
      return;
    }
    console.log(`${mydocs.length} teams found`);
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p> Q1: ${
        d.data().name
      } is in Spain.</p>`;
      console.log(d.data);
    });
  });

//all teams in Madrid, Spain
db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML += "<p>Q2 No teams found </p>";
      return;
    }
    console.log(`${mydocs.length} teams found`);
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p>Q2 ${
        d.data().name
      } is in Madrid, Spain </p>`;
    });
  });

db.collection("teams")
  .get()
  .then((data) => {
    const mydocs = data.docs.filter(
      (doc) => doc.data().name.toLowerCase().includes("national") // Filter teams whose names contain "National"
    );
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML += "<p>Q3 No teams found </p>";
      return;
    }
    console.log(`${mydocs.length} teams found`);
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p>Q3 ${
        d.data().name
      } is a national team </p>`;
    });
  });

db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML += "<p>Q3 No teams found </p>";
      return;
    }
    console.log(`${mydocs.length} teams found`);
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p>Q4 ${
        d.data().name
      } is not in Spain </p>`;
    });
  });

//all teams that aren't in spain or england
db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML += "<p>Q5 No teams found </p>";
      return;
    }
    console.log(`${mydocs.length} teams found`);
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p>Q5 ${
        d.data().name
      } is not in Spain or England </p>`;
    });
  });

//all teams in spain with more than 700m fans
db.collection("teams")
  .where("country", "==", "Spain")
  .where("fans", ">", 700)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML += "<p>Q6 No teams found </p>";
      return;
    }
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p> Q6 ${
        d.data().name
      } has more than 700m fans and is in Spain.</p>`;
    });
  });

//all teams with number of fans in range of 500m and 600m
db.collection("teams")
  .where("fans", "<=", 600)
  .where("fans", ">=", 500)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML += "<p>Q7 No teams found </p>";
      return;
    }
    console.log(`${mydocs.length} users found`);
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p> Q7 ${
        d.data().name
      } has between 500m and 600m fans.</p>`;
    });
  });

//all teams where ronaldo is a top guy
db.collection("teams")
  .where("scorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML += "<p>Q8 No teams found </p>";
      return;
    }
    console.log(`${mydocs.length} users found`);
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p> Q8 ${
        d.data().name
      } has Ronaldo as a top scorer.</p>`;
    });
  });

//all teams where ronaldo, maradona or messi is a top guy
db.collection("teams")
  .where("scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      document.querySelector("#main").innerHTML += "<p>Q9 No teams found </p>";
      return;
    }
    console.log(`${mydocs.length} users found`);
    mydocs.forEach((d) => {
      document.querySelector("#main").innerHTML += `<p> Q9 ${
        d.data().name
      } has Ronaldo, Maradano, or Messi as a top scorer.</p>`;
    });
  });

db.collection("teams").doc("7yBQwTuKydqbbwcal5AQ").update({
  fans: 811,
  name: "Real Madrid FC",
});

//Barcelona: 747 M worldwide fans. Also, change team name to FC Barcelona
db.collection("teams").doc("5S4U1lQclXGd073DTyZE").update({
  fans: 747,
  name: "FC Barcelona",
});

//Barcelona: Remove Puyol from the list and add Deco to the list
db.collection("teams")
  .doc("5S4U1lQclXGd073DTyZE")
  .update({
    scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
  });

db.collection("teams")
  .doc("5S4U1lQclXGd073DTyZE")
  .update({
    scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
  });
//Real Madrid: Remove Hazard from the list and add Crispo to the list
db.collection("teams")
  .doc("7yBQwTuKydqbbwcal5AQ")
  .update({
    scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
  });

db.collection("teams")
  .doc("7yBQwTuKydqbbwcal5AQ")
  .update({
    scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
  });

db.collection("teams")
  .doc("7yBQwTuKydqbbwcal5AQ")
  .update({
    color: {
      home: "white",
      away: "black",
    },
  });

db.collection("teams")
  .doc("5S4U1lQclXGd073DTyZE")
  .update({
    color: {
      home: "red",
      away: "gold",
    },
  });

db.collection("teams").doc("7yBQwTuKydqbbwcal5AQ").update({
  "color.away": "purple",
});

db.collection("teams").doc("5S4U1lQclXGd073DTyZE").update({
  "color.away": "pink",
});
