function randomGenerator(min, max){
    return Math.floor(Math.random() * (max - min) + min + 1);
  }
  
  class Fighter {
    constructor(name)
    {
      this.name = name, 
        this.health = 10,
        this.strength;
        this.defense;
    }
    
    // metod takes in attacker and defender
    attack(defender){ 
        //console.log(defender);
        // assigning random values to attacker stength and defender defense properties
        this.strength = randomGenerator(5, 10);
        defender.defense = randomGenerator(5, 10);
        //console.log(`${defender.defense}`);
        //console.log(`${this.strength}`);
        console.log("********************************************************")
        console.log("NEW ROUND:")
        console.log(`${this.name}'s strength (${this.strength}) vs ${defender.name}'s defense (${defender.defense})`)
        console.log("********************************************************")
        // defender.health -= (this.strength - defender.defense); // calcualtion of new amount of health fter attack
        this.doDamage(defender);
        this.status(defender);

        // rewrote the below code
    //   if (defender.defense < this.strength){
    //     console.log(`${defender.name} is not strong enough for this attacker`)
    //   }
    //   else{
    //     let newStrength = defender.strength - this.strength;
    //     console.log(`${this.name} does ${this.strength} damage to ${defender.name} who is left with` + newStrength);
    //   }
    
    }
    doDamage(defender){
        let damage = this.strength - defender.defense;
        if (damage < 0){
            console.log(`${this.name} was not strong enough to do damage`)
        }
        else{
            defender.health -= damage;
            console.log(`${this.name} did ${damage} damage to ${defender.name}`)
        }
        
    }
    status(defender){ // status called before each attack to show current health 
        console.log("________________________________________________________")
        console.log(`CURRENT HEALTH: ${this.name} ${this.health} & ${defender.name} ${defender.health}`)
        console.log("________________________________________________________")
    }
    
}
// end of class

/************************ begining of game ***************************/

//give this line the names of the fighters then run a for loop until one health get to zero
function gameStart(name1, name2) {    // changed to name1 and name2 for random start
    // something like currentAttacker.attack(currentDefender) within the loop
    // create for loop to end when one health reaches or goes below zero

    // randomize first attacker
    const players = [name1, name2];
    let aa = randomGenerator (0,2)-1; // gives 0 or 1
    //console.log(aa);
    let dd = 0;
    if (aa === 0){ dd = 1}
    if (aa === 1){ dd = 0}
    //console.log(dd);
    

    while (players[0].health > 0 && players[1].health > 0){
        players[aa].attack(players[dd]);
        // if (playerOne.health > 0 && players[1].health > 0){
        //     players[1].attack(playerOne);
        // }
        if (aa === 0){ let dd = 1}
        if (aa === 1){ let dd = 0}
        if (players[dd].health > 0) {
            players[dd].attack(players[aa]);
          }
    }
    if (players[aa].health <= 0){
        console.log(`${players[aa].name} has been defeated ${players[dd].name} WINS!`)
        return
    }
    if (players[dd].health <= 0){
        console.log(`${players[dd].name} has been defeated ${players[aa].name} WINS!`)
        return
    }

}
  
   // stackoverflow heled to explain this to me
  
  //console.log(randomGenerator(5, 10));
  
  
  const Furyous = new Fighter("Furyous");
  //console.log(Furyous);
  const Christy = new Fighter("Christy");
  //console.log(Christy);
  gameStart(Christy, Furyous);

  //Christy.attack(Furyous);

  

  // in your gameStart() function, create an algo to assign who throws the first punch. This will happen before we even enter the while-loop.

  // within the function, given (name1, name2)

  // generate random number, 1 or 2
  let firstPunch = randomGenerator(0, 2);
  console.log(firstPunch);