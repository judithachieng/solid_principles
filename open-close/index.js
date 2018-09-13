// **Open/Closed Principle**

// BAD
var iceCreamFlavors = ["chocolate","vanilla"];
var iceCreamMaker =  {
makeIceCream (flavor) {
  if(iceCreamFlavors.indexOf(flavor)>-1){
   console.log("Great success. You now have ice cream.");
  }else{
   console.log("Epic fail. No ice cream for you.");
  };
 }
};
export default iceCreamMaker;

// GOOD

var iceCreamFlavors = ["chocolate", "vanilla"];
var iceCreamMaker = {
    makeIceCream(flavor) {
        if (iceCreamFlavors.indexOf(flavor)>-1) {
            console.log("Great success. You now have icecream");
        } else {
            console.log("Epic fail. No ice cream for you.");
        }
    };

    addFlavor (flavor){
        iceCreamFlavors.push(flavor);
    }
};
export default iceCreamMaker;
