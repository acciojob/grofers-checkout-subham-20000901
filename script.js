const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here

  let prices = document.querySelectorAll(".price");
	for(let i=0; i<prices.length; i++){
		total += Number(price[i].textContent);	
	}
	let newRow = document.createElement("tr");
	let newCell = document.createElement("td");
	newCell.colspan = 2;
	newCell.textContent = "Total price : " + total;
	newRow.appendChild(newCell);
	document.querySelector("table").appendChild(newRow);
	
};

getSumBtn.addEventListener("click", getSum);

