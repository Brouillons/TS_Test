var fMain = function () {
    test1();
};
//---------------------------------------
var test1 = function () {
    console.log("DEBUT - Avant Promise(...)");  // pp
    new Promise(function (resolve, reject) { // kkk666444  777
        console.log("  Dans  Promise(...) !");
        resolve(88); // 44
    })
        .then(function (pDataParam) {
        console.log("\nOn arrive de façon asynchrone dans le  then(...) !");
        console.log("pDataParam=" + pDataParam); //88
    });
    console.log("FIN (exécutée avant le then).");
};
