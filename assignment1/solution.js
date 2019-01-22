let currScore = 0;
let currFrame = 1;
let currThrow = 1;
let totalScore = 0;
let spareIsTrue = false;
let strikeIsTrue = false;
let addExtraForStrike = 0;

const resetScoresForNextFrame = (currFrame) => {
    return [currFrame + 1, 1, 0];
}

const isSpare = (currScore, currThrow) => {
    return currThrow === 2 && currScore === 10;
}

const isStrike = (pins, currThrow) => {
    return currThrow === 1 && pins === 10;
}

const roll = (pins) => {
    totalScore += pins;
    if (isStrike(pins, currThrow) && !strikeIsTrue) {
        strikeIsTrue = true;
    }
    else if (strikeIsTrue && addExtraForStrike < 2) {
        //totalScore += pins;
        addExtraForStrike++;
    }
    else if (strikeIsTrue && addExtraForStrike == 2) {
        strikeIsTrue = false;
        currFrame++;
        addExtraForStrike = 0;
    }
    else if (isSpare(currScore, currThrow)) {
        spareIsTrue = true;
        currScore = 0;
    } else {
        currScore += pins;
        if (spareIsTrue) {
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
                [currFrame, currThrow, currScore] = resetScoresForNextFrame(currFrame);
            }
        }
    }
};

const score = () => {
    return totalScore;
}

let roll_test = (arrOfRolls) => {
    currScore = 0;
    currFrame = 1;
    currThrow = 1;
    totalScore = 0;
    spareIsTrue = false;
    strikeIsTrue = false;
    addExtraForStrike = 0;

    arrOfRolls.forEach(element => {
        roll(element);
    });
    let res = score();
    return res;
}

module.exports = { roll_test, resetScoresForNextFrame, isSpare, isStrike };
// const arrOfThrows = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// arrOfThrows.forEach(element => {
//     roll(element);
// });

// console.log(score());
