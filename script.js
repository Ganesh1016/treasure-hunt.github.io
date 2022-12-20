const locations = ["CST", "Colaba", "GateWay", "Mondegar", "Churchgate", "HSNC", "Grant Road", "Charni Road", "Virar", "Nalasopara", "Ganesh ka ghar", "Aryan ka ghar", "Diksha ka ghar", "Apurav ka stall", "Dhruv ka ghar", "Heta ka compiler",];

let newLocations = [];
// let randNum = Math.floor(Math.random() * locations.length);

for(let i = 0; i < locations.length; i++) {
    let randNum = Math.floor(Math.random() * locations.length);
    let randomLocation = locations[randNum];
    if(newLocations.includes(randomLocation)) {
        i--;
        continue;
    } else {
        newLocations.push(randomLocation);
    }
}

// console.log(newLocations);

document.getElementById("submit").addEventListener("click", inputValue);

function inputValue(){
    const input = document.getElementById("cc-input").value;
    let outputText = document.getElementById("output");
    
    switch (input) {
        case "C1":
            var team1Locations = ['Churchgate', 'Heta ka compiler', 'Colaba', 'Virar', 'Mondegar', 'Diksha ka ghar', 'Dhruv ka ghar', 'GateWay', 'Nalasopara', 'Charni Road', 'Ganesh ka ghar', 'Grant Road', 'CST', 'Apurav ka stall', 'HSNC', 'Aryan ka ghar'];
            outputText.innerHtml =  team1Locations[0];
            console.log(team1Locations[0]);
            team1Locations.shift();
            console.log(team1Locations);
            break;

        case "C2":
            outputText.innerHTML = newLocations;
            break;
    
        default:
            outputText.innerHTML = "Wrong CC";
            break;
    }

};