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
function getJob(){
    let job = ["Doctor", "Lawyer", "Engineer", "Teacher"];
    let split = randNumGenerator(101);
    let input = process.argv[5];
    if(input === undefined){
        let randNum = randNumGenerator(4);
        if(randNum === 4){
            console.log("You got really unlucky :(");
        }
        return job[randNum];
    }else{
        if(split >= 50){
            return input;
        }else{
            let randNum = randNumGenerator(4);
            if(randNum === 4){
                console.log("You got really unlucky :(");
            }
            return job[randNum];
        }
    }
}
function getTravelCount(){
    let randNum = randNumGenerator(100);
    return randNum;
}
function getPet(){
    let randomPets = ["Dog", "Cat", "Fish", "Lizard"];
    let split = randNumGenerator(101);
    let input = process.argv[3];
    if(input === undefined){
        let randNum = randNumGenerator(4);
        if(randNum === 4){
            console.log("You got really unlucky :(");
        }
        return randomPets[randNum];
    }else{
        if(split >= 50){
            return input;
        }else{
            let randNum = randNumGenerator(4);
            if(randNum === 4){
                console.log("You got really unlucky :(");
            }
            return randomPets[randNum];
        }
    }
}
