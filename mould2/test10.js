"use strict";

function findWinner(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);
    return candidates[0];
}

function conductVoting() {
    const numberOfCandidates = parseInt(prompt("Enter the number of candidates:"));

    let candidates = [];

    for (let i = 1; i <= numberOfCandidates; i++) {
        let name = prompt(`Name for candidate ${i}:`);
        candidates.push({ name: name, votes: 0 });
    }

    const numberOfVoters = parseInt(prompt("Enter the number of voters:"));

    for (let i = 0; i < numberOfVoters; i++) {
        let vote = prompt(`Voter ${i + 1}, please enter your vote:`);


        if (vote === "") {
            console.log("Voter has not voted.");
        } else {

            let candidate = candidates.find(candidate => candidate.name.toLowerCase() === vote.toLowerCase());
            if (candidate) {
                candidate.votes++;
            } else {
                console.log("Invalid vote, please enter a valid candidate name.");
            }
        }
    }

    let winner = findWinner(candidates);

    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

conductVoting();
