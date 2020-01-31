document.getElementById("theSidebar");
document.getElementById("main");


openSidebar = () => {
	theSidebar.style.width = "250px";
	main.style.marginLeft = "250px";
}

closeSidebar = () => {
	theSidebar.style.width = "0";
	main.style.marginLeft = "0";
}
