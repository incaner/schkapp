import {
    chooseBetStep,
    choosePlayerCountStep,
    chooseTrainStep,
    maxPlayerCount,
    minPlayerCount,
    resultsStep
} from "$lib/constants.js";
import {bets} from "$lib/game_state/bets.js";

export class GameRound {
    constructor(serialized = undefined) {
        if (serialized) {
            let jsonData = JSON.parse(serialized);

            this.playerCount = jsonData.pC;
            this.step = jsonData.s;
            this.trains = jsonData.t;
            this.currentPlayer = jsonData.cP;
            this.selectedBets = jsonData.sB;
        }
    }

    async createRound(trains) {
        this.setStep(choosePlayerCountStep);
        this.currentPlayer = 0;
        this.trains = trains;
        this.selectedBets = [];

        console.log(this.currentPlayer);
    }

    setStep(step) {
        if (step < 0 || step > 3) {
            throw new Error("Invalid step");
        }
        this.step = step;
    }

    setPlayerCount(playerCount) {
        if (playerCount < minPlayerCount && playerCount > maxPlayerCount) {
            throw new Error("Invalid player count");
        }
        this.playerCount = playerCount;
        this.setStep(chooseTrainStep);
    }

    setSelectedTrainForCurrentPlayer(trainId) {
        this.selectedBets[this.currentPlayer] = {trainId: trainId, bets: []};
        this.setStep(chooseBetStep);
    }

    setSelectedBetsForCurrentPlayer(bets) {
        this.selectedBets[this.currentPlayer].bets = bets;

        if (this.currentPlayer === this.playerCount - 1) {
            this.setStep(resultsStep);
        } else {
            this.setStep(chooseTrainStep);
            this.currentPlayer += 1;
        }


    }

    doEndScreenShit() {
        let results = [];

        for (let i = 0; i < this.playerCount; i++) {
            let result = this.evaluateSips(i);
            results.push(result);
        }
        return results;
    }

    evaluateSips(currentPlayer) {
        let totalSips = 0;
        let betsResult = [];
        let selectedTrain = this.trains.find(train => train.i === Number(this.selectedBets[currentPlayer].trainId));
        console.log("evaluateSips selectedTrain: "+ JSON.stringify(selectedTrain));

        for (let betCode of this.selectedBets[currentPlayer].bets) {
            console.log("evaluateSips betCode: "+ betCode);

            if(selectedTrain.m && selectedTrain.m.length === 0){
                betCode = -1;
            }

            // Find the corresponding bet in the bets array
            let bet = bets.find(bet => bet.code === betCode);

            // Check if the bet exists in the messageCodes of the selected train
            if (betCode !== -1 && selectedTrain.m.includes(betCode.toString())) {
                // If it does, the bet is correct
                betsResult.push({id: betCode, isCorrect: true});

                // Add the sips value of the bet to the total sips counter
                if (bet) {
                    totalSips += bet.sips;
                }
            } else {
                // If it doesn't, the bet is not correct
                betsResult.push(({id: betCode, isCorrect: false}))
                if(bet){
                 totalSips -= bet.sips;
                }
            }
        }

        return { totalSips, betsResult };
    }

    toJson() {
        return JSON.stringify({
            pC: this.playerCount,
            s: this.step,
            t: this.trains,
            cP: this.currentPlayer,
            sB: this.selectedBets
        });
    }
}