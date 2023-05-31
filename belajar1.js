class Player {
    constructor(name, health = 100, power = 10){
        this.name = name;
        this.health = health;
        this.power = power;
    }
    hit(power){
        this.health -= power;
        console.log (`${this.name} menerima damage ${power} points`)
        console.log (`${this.name} sekarang memiliki health ${this.health} health`)
    }
    useItem(item){
        if(item.health){
            this.health += item.health
            console.log (`${this.name} get ${item.health} health`)
        }
        if(item.power){
            this.power += item.power;
            console.log (`${this.name} get ${item.power} power`)
        }
    }
    showStatus(){
        console.log (`${this.name} => Health : ${this.health} Power : ${this.power}`);
    }
}
class ShootingGames{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    getRandomItem(){
        let healthPlus = 0;
        let powerPlus = 0;
        const randomItem = Math.round(Math.random()*3)
        if(randomItem == 1){
            healthPlus = 10;
        } else if (randomItem == 2){
            powerPlus = 10;
        }
        return {
            health : healthPlus,
            power : powerPlus
        }
    }
    
    start(){
        while(this.player1.health > 0 && this.player2.health > 0){
        console.log("Player 1 Turn ")
        this.player1.showStatus();
        let player1Item = this.getRandomItem();
        console.log (player1Item);
        this.player1.useItem(player1Item);
        this.player1.showStatus();
        console.log ("Shooting")
        this.player2.hit(this.player1.power)
        this.player2.showStatus();
        if (this.player2.health < 0){
            break;
        }
        console.log("Player 2 Turn ")
        this.player2.showStatus();
        let player2Item = this.getRandomItem();
        console.log (player2Item);
        this.player2.useItem(player2Item);
        this.player2.showStatus();
        console.log ("Shooting")
        this.player1.hit(this.player2.power);
        this.player1.showStatus();
        if(this.player1.health < 0){
            break;
        }
        }
        if (this.player1.health > this.player2.health) {
        // while loop akan berhenti pada kondisi berikut
        console.log(`Player ${this.player1.name} is the winner`);
      } else {
        console.log(`Player ${this.player2.name} is the winner`);
      }
    }
}

const player1 = new Player("Afdal");
const player2 = new Player("Jarwo");
const game = new ShootingGames(player1, player2);
game.start();
