function getInputValue(inputID) {
	const inputField = document.getElementById(inputID);
	const inputAmountText = inputField.value;
	const amountValue = parseFloat(inputAmountText);

	//clear input field
	inputField.value = "";
	return amountValue;
}

function updateTotalField(totalFieldId, amount) {
	const totalElement = document.getElementById(totalFieldId);
	const totalElementText = totalElement.innerText;
	const previousTotalElement = parseFloat(totalElementText);
	totalElement.innerText = previousTotalElement + amount;
}

function getCurrentBalance() {
	const balanceTotal = document.getElementById("balance-total");
	const balanceTotalText = balanceTotal.innerText;
	const previousBalanceTotal = parseFloat(balanceTotalText);
	return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
	const balanceTotal = document.getElementById("balance-total");
	const previousBalanceTotal = getCurrentBalance();

	if (isAdd == true) {
		balanceTotal.innerText = previousBalanceTotal + amount;
	} else {
		balanceTotal.innerText = previousBalanceTotal - amount;
	}
}

//Handle deposit button

document
	.getElementById("deposit-button")
	.addEventListener("click", function () {
		const depositAmount = getInputValue("deposit-input");
		if (depositAmount > 0) {
			updateTotalField("deposit-total", depositAmount);
			updateBalance(depositAmount, true);
		}
	});

//Handle withdraw button

document
	.getElementById("withdraw-button")
	.addEventListener("click", function () {
		const withdrawAmount = getInputValue("withdraw-input");
		const currentBalance = getCurrentBalance();
		if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
			updateTotalField("withdraw-total", withdrawAmount);
			updateBalance(withdrawAmount, false);
		}
	});
