// changing button color while onClick
const btnClicked = document.getElementsByClassName('option-btn');
for (var i = 0; i < btnClicked.length; i++) {
    btnClicked[i].addEventListener('click', function (event) {
        // change background color
        event.target.style.backgroundColor = 'black';
        // change text color
        // event.target.style.color = 'white';
    });
    btnClicked[i].addEventListener('dblclick', function (event) {
        // change background color
        event.target.style.backgroundColor = 'rgb(108, 117, 125)';
        // change text color
        // event.target.style.color = 'white';
    });
}

//getting addons products and update price
function addons(product) {
    const productAddons = document.getElementById(product + '-addons');
    //memory addons condition
    if (productAddons.innerText == '16GB unifield memory') {
        // console.log('done memory 16')
        document.getElementById('extra-memory-cost-price').innerText = '180';
    }
    //storage addons condition
    else if (productAddons.innerText == '512GB SSD Storage') {
        // console.log('done storage-512')
        document.getElementById('extra-storage-cost-price').innerText = '100';
    }
    else if (productAddons.innerText == '1TB SSD Storage') {
        // console.log('done storage-1')
        document.getElementById('extra-storage-cost-price').innerText = '250';
    }
    //delivery addons condition
    else if (productAddons.innerText == 'Urgent Delivery (3 days)') {
        // console.log('done delivery')
        document.getElementById('extra-delivery-cost-price').innerText = '20';
    }
    // else{
    //     console.log('no addons');
    // }

    //count total price before promo code
    var extraMemoryPrice = parseInt(document.getElementById('extra-memory-cost-price').innerText);
    var extraStoragePrice = parseInt(document.getElementById('extra-storage-cost-price').innerText);
    var extraDeliveryPrice = parseInt(document.getElementById('extra-delivery-cost-price').innerText);
    const totalPrice = parseInt(document.getElementById('total-cost-price').innerText) + extraMemoryPrice + extraStoragePrice + extraDeliveryPrice;
    //update total price before promo code
    document.getElementById('total-cost-price').innerText = totalPrice;
    document.getElementById('final-price').innerText = totalPrice;
}

function verifyPromo() {
    const promo = 'mac';
    const typedPromo = document.getElementById('typed-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');
    //count final price after promo code
    if (promo == typedPromo) {
        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
        var temp = parseInt(document.getElementById('final-price').innerText);
        const discountedPrice = Math.floor(temp * 0.9);
        document.getElementById('final-price').innerText = discountedPrice;
    }
    else {
        failNotification.style.display = 'block';
        successNotification.style.display = 'none';
    }
    // document.getElementById('typed-numbers').value = '';
}
