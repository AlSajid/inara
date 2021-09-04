//set percentages of share
const share = [22, 26, 26, 26]; //sajid, shefa, hafsa, nishi

//console.log(sajid+shefa+hafsa+nishi);

//get value from input field
document.addEventListener('keyup', amount => {
    amountInput = document.getElementById('amount')
    if (amountInput.value.length > 8)
        amountInput.value = amountInput.value.slice(0, 8);

    const totalAmount = document.getElementById('amount').value;
    updateShare(totalAmount);
});



const updateShare = amount => {
    let sajid = ((share[0] / 100) * amount) - ((share[0] / 100) * amount) % 100;
    let shefa = ((share[1] / 100) * amount) - ((share[1] / 100) * amount) % 100;
    let hafsa = ((share[2] / 100) * amount) - ((share[2] / 100) * amount) % 100;
    let nishi = ((share[3] / 100) * amount) - ((share[3] / 100) * amount) % 100;

    document.getElementById("sajid").innerText = sajid;
    document.getElementById("shefa").innerText = shefa;
    document.getElementById("hafsa").innerText = hafsa;
    document.getElementById("nishi").innerText = nishi;
    document.getElementById("left").innerText = (amount - (sajid + shefa + hafsa + nishi)).toFixed(2);
}