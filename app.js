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

//all teams in spain
db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("No teams found");
      return;
    }
    console.log(`${mydocs.length} teams found`);
    mydocs.forEach((d) => {
      console.log(d.data());
    });
  });

//all teams in Madrid, Spain
db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "madrid")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("No teams found");
      return;
    }
    console.log(`${mydocs.length} teams found`);
    mydocs.forEach((d) => {
      console.log(d.data());
    });
  });

//all national teams

//all teams that aren't in spain
db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    if (mydocs.length == 0) {
      console.log("No teams found");
      return;
    }
    console.log(`${mydocs.length} teams found`);
    mydocs.forEach((d) => {
      console.log(d.data());
    });
  });

//all teams that aren't in spain or england

//all teams in spain with more than 700m fans

//all teams with number of fans in range of 500m and 600m
