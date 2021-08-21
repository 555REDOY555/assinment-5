const freeMemorey = document.getElementById('8GB');
const extraMemory = document.getElementById('16GB');


// storage 
const freeStorage = document.getElementById('Storage-1');
const extraStorage1 = document.getElementById('Storage-2');
const extraStorage2 = document.getElementById('Storage-3');

// /shiping cost 
const freeship = document.getElementById("free");
const cost = document.getElementById("cost");


// total 
const totalCost = document.getElementById('totalCost');

// totalUp
function updateTotal() {
     const extraMemoryCharge = Number(extraMemoryCost.innerText);
     const extraShipingCharge = Number(extraShipingCost.innerText);
     const extarStorageCharge = Number(extarStorageCost.innerText);
     const allTotal = extraMemoryCharge + extraShipingCharge + extarStorageCharge;
     totalCost.innerText = allTotal + 1299;

}

// memory 
const extraMemoryCost = document.getElementById('extra-memory');

// extra storage cost 
const extarStorageCost = document.getElementById('extra-storage');

// extra shiping cost 
const extraShipingCost = document.getElementById("shiping-costs");


// extar memory 
freeMemorey.addEventListener('click', function () {
     extraMemoryCost.innerText = '0';
     updateTotal()
})


extraMemory.addEventListener("click", function () {
     extraMemoryCost.innerText = '180';
     updateTotal()
})

// extra storage 
freeStorage.addEventListener('click', function () {
     extarStorageCost.innerText = '0';
     updateTotal()
})
extraStorage1.addEventListener('click', function () {
     extarStorageCost.innerText = '100';
     updateTotal()
})
extraStorage2.addEventListener('click', function () {
     extarStorageCost.innerText = '180';
     updateTotal()
})

// extra extraShipingCost

freeship.addEventListener('click', function () {
     extraShipingCost.innerText = "0";
     updateTotal()
})
cost.addEventListener('click', function () {
     extraShipingCost.innerText = "20";
     updateTotal()
})


// pomo code 

function validate(coupon) {
     var myRe = "stevekaku";
     var coupon = myRe.trim();
     var input = document.getElementById('in').value;
     if (input.toUpperCase() == coupon.toUpperCase()) {

          document.getElementById('message').innerText = parseFloat(totalCost.innerText * .8);
          document.getElementById('err').innerHTML = "";
          return true;
     } else {
          document.getElementById('err').innerHTML = "Invalid coupon";
          document.getElementById('message').innerHTML = "";
          return false;
     }
}


