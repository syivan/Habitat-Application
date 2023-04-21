const rps_moves = ["ROCK", "PAPER", "SCISSORS"];


let i = 0, j = 0;
while (i < 5 && j < 5) {
    let player_move = Math.floor(Math.random()*3);
    let pc_move = Math.floor(Math.random()*3);
    let message = `User played ${rps_moves[player_move]}, CPU played ${rps_moves[pc_move]}`;

    console.log(message);
    if (player_move === pc_move) {
        alert("TIE");
    } else {
        switch(player_move) {
            case 0:
                if (pc_move === 2) i++;
                else j++;
                break;
            case 1:
                if (pc_move === 0) i++;
                else j++;
                break;
            case 2:
                if (pc_move === 1) i++;
                else j++;
                break;
        }
    }
}
if (i > j) alert("User Wins");
else alert("CPU wins");

function incrementPlayer(i) {
    i++;
}