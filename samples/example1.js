// Create a Rock, Paper, Scissors Game

export const selectWinner = (user1, user2) => {
    let result = null;

    if (user1.choice === user2.choice) {
        result = null;
    }

    if (user1.choice === 'rock' && user2.choice === 'scissors') {
        result = user1;
    }

    if (user1.choice === 'rock' && user2.choice === 'paper') {
        result = user2;
    }

    if (user1.choice === 'paper' && user2.choice === 'scissors') {
        result = user2;
    }

    if (user1.choice === 'paper' && user2.choice === 'rock') {
        result = user1;
    }

    if (user1.choice === 'scissors' && user2.choice === 'rock') {
        result = user2;
    }

    if (user1.choice === 'scissors' && user2.choice === 'paper') {
        result = user1;
    }
    
    return result;
}
