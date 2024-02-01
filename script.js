function highlight(e) {
    //Write your code here
 // Here we have the question to highlight the all the bold events
//  Here we are already in the function
	let strongEle=document.getElementsByTagName("strong");
	console.log(strongEle);
	for(let i=0;i<strongEle.length;i++){
		// strongEle[i].classList.toggle("greenColor");
		strongEle[i].style.color="green";
	}

}


function return_normal() {
    //Write your code here
let strongEle=document.getElementsByTagName("strong");
	console.log(strongEle);
	for(let i=0;i<strongEle.length;i++){
		// strongEle[i].classList.toggle("greenColor");
		strongEle[i].style.color="black";
	}
    
}
