
function solution(S, A) {
    let personLetter = [];
    A.map((number, index) => {
        let data = {
            value: S[index],
            nextPlayer: number
        }
        personLetter.push(data);
    })

    let message = "";
    let currentPlayer = 0;
    let currentLetter = S[0];

    for (let i = 0; i < A.length; i++) {

        message = message.concat(personLetter[currentPlayer].value);
        currentPlayer = personLetter[currentPlayer].nextPlayer;

        if (personLetter[currentPlayer].nextPlayer === personLetter[0].nextPlayer) {
            break;
        }
    }

    console.log(message);
    return message;
}

solution("cdeenetpi", [5,2,0,1,6,4,8,3,7]);
solution("bytdag", [4, 3, 0, 1, 2, 5]);