let fMain=function() {
    test1();
};

//---------------------------------------

// j  jj !!
let test1 = function() { // mmm
  console.log("DEBUT - Avant Promise(...)");

  new Promise((resolve, reject)=> {
    console.log("  Dans  Promise(...) !");
    resolve(88);
  })
  .then((pDataParam)=> {
    console.log("\nOn arrive de façon asynchrone dans le  then(...) !");
    console.log("pDataParam="+pDataParam);  //88
  });

  console.log("FIN (exécutée avant le then).");
};