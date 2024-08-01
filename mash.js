function randNumGenerator(num){
    return Math.floor(Math.random() * (num));
}
function getHome(){
    let home = ["Mansion", "Castle", "Shack", "House"];
    let input = process.argv[2];
    let split = randNumGenerator(101);
    if(input === undefined){
        let randNum = randNumGenerator(4);
        if(randNum === 4){
            console.log("You got really unlucky :(");
        }
        return home[randNum];
    }else{
        if(split >= 50){
            return input;
        }else{
            let randNum = randNumGenerator(4);
            if(randNum === 4){
                console.log("You got really unlucky :(");
            }
            return home[randNum];
        }
    }
}
function getCollege(){
    let college = ["UC Berkeley", "Stanford", "Harvard", "Foothill"];
    let split = randNumGenerator(101);
    let input = process.argv[4];
    if(input === undefined){
        let randNum = randNumGenerator(4);
        if(randNum === 4){
            console.log("You got really unlucky :(");
        }
        return college[randNum];
    }else{
        if(split >= 50){
            return input;
        }else{
            let randNum = randNumGenerator(4);
            if(randNum === 4){
                console.log("You got really unlucky :(");
            }
            return college[randNum];
        }
    }
}
