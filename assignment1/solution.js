let currScore = 0;
let currFrame = 1;
let currThrow = 1;
let totalScore = 0;
let maxThrows = 2;
let spareIsTrue = false;
let strikeIsTrue = false;
let addExtraForStrike = 0;

const resetScoresForNextFrame = (maxThrows, currFrame, currThrow, currScore) => {
    return [2, currFrame+1, 1, 0];
}

const firstThrowRoll = (currThrow, maxThrows) => {
    return [currThrow+1, maxThrows+1];
}

const isSpare = (currScore, currThrow) => {
    return currThrow === 2 && currScore === 10;
}

const isStrike = (pins, currThrow) => {
    return currThrow === 1 && pins === 10;
}

const roll = (pins) => {
    totalScore += pins;
    if(isStrike(pins, currThrow) && !strikeIsTrue) {
        strikeIsTrue = true;
    }
    else if(strikeIsTrue && addExtraForStrike < 2) {
        //totalScore += pins;
        addExtraForStrike++;
    }
    else if(strikeIsTrue && addExtraForStrike == 2){
        strikeIsTrue = false;
        currFrame++;
        addExtraForStrike = 0;
    }
    else if (isSpare(currScore, currThrow)) {
        spareIsTrue = true;
        currScore = 0;
    } else {
        currScore += pins;
        if(spareIsTrue) {
            totalScore += pins;
            spareIsTrue = false;
        }
        
        if (currThrow == 1) {
            currThrow++;
        }
        else {
            if (isSpare(currScore, currThrow)) {
                spareIsTrue = true;
                currScore = 0;
            } else {
                [maxThrows, currFrame, currThrow, currScore] = resetScoresForNextFrame(maxThrows, currFrame, currThrow, currScore);
            }
        }
    }
};

const score = () => {
    return totalScore;
}

const arrOfThrows = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];

arrOfThrows.forEach(element => {
    roll(element);
});

console.log(score());
