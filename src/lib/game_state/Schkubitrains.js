import {getTraindata} from "$lib/server/db_api/db_api.js";
export const trainsPerRoundCount = 5;

export class Schkubitrains {
    constructor(serialized = undefined) {
        if (serialized) {
            let jsonData = JSON.parse(serialized);
            this.trains = jsonData.trains;
        } else {
            this.trains = [];
        }
    }

    hasTenMinutesPassed() {
        let currentTime = new Date();
        let timeDifference = currentTime - this.gameRoundStartTime; // This will be in milliseconds
        let tenMinutesInMilliseconds = 10 * 60 * 1000;
        return (timeDifference >= tenMinutesInMilliseconds);
    }

    async updateTrainArray() {
        if (this.trains.length === 0) {
            let fetchedTrains = await getTraindata();
            // TODO: IMPORTANT -> console.log("Fetched trains before transformation: ", fetchedTrains);
            this.trains = fetchedTrains.map(this.transformTrainData);
            this.gameRoundStartTime = new Date();
        }
        if(this.hasTenMinutesPassed()){
            this.trains = await getTraindata();
            this.gameRoundStartTime = new Date();
            //TODO um Trains kümmern, die nicht verarbeitet werden können
        }else {
            this.trains.splice(0, trainsPerRoundCount);
        }
        return this.trains;
    }

    transformTrainData(train){
        let name = typeof train.departure.abStationNachIrgendwo === 'string'
            ? "Stuttgart-HBF ->" + train.departure.abStationNachIrgendwo.split('|').pop()
            : 'Unknown Station';

        return{
            id: train.trainID,
            trainType: train.tripLabel.zugArt,
            name: name
        };
    }

    async getTrainArray() {
    await this.updateTrainArray();
        let firstFiveTrains = this.trains.slice(0, trainsPerRoundCount);
        //console.log("SchkubiTrains Ausgabe in Schkubitrains.js:" + firstFiveTrains);
        console.log("SchkubiTrains getTrainArray:" + JSON.stringify(this.trains[1]));
        return firstFiveTrains;
}


    toJson() {
        return JSON.stringify({
            playerCount: this.playerCount,
            step: this.step
        });
    }
}