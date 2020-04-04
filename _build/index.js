var fMain = function () {
    test1();
};
//---------------------------------------
var test1 = function () {
    console.log("DEBUT - Avant Promise(...)");
    new Promise(function (resolve, reject) { // kkk555666
        console.log("  Dans  Promise(...) !");
        resolve(888);
    })
        .then(function (pDataParam) {
        console.log("\nOn arrive de façon asynchrone dans le  then(...) !");
        console.log("pDataParam=" + pDataParam); //88
    });
    console.log("FIN (exécutée avant le then).");
};
