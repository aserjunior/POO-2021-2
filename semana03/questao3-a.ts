
enum Estados {PI, CE, MA};

let a : Estados;

a = Estados.PI;

a = Estados.CE;

a = Estados.MA;

for (let i = 0; i < 3; i++) {
    if (i == 0){
        console.log("PI")
    } else if(i == 1){
        console.log("CE")
    } else{
        console.log("MA")
    }

}

