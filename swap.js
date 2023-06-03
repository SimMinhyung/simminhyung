// var bDisplay = true;

function doDisplay1(){
	var con1 = document.getElementById("menu-home");
	var con2 = document.getElementById("menu-aboutMe");
    var con3 = document.getElementById("menu-activity");
    //if(con1.style.display=='none'){
		con1.style.display = '';
        con2.style.display = 'none'
        con3.style.display = 'none'
	//} 
}

function doDisplay2(){
	var con1 = document.getElementById("menu-home");
	var con2 = document.getElementById("menu-aboutMe");
    var con3 = document.getElementById("menu-activity");
	if(con2.style.display=='none'){
		con1.style.display = 'none';
        con2.style.display = ''
        con3.style.display = 'none'
	}      
}

function doDisplay3(){
	var con1 = document.getElementById("menu-home");
	var con2 = document.getElementById("menu-aboutMe");
    var con3 = document.getElementById("menu-activity");
	if(con3.style.display=='none'){
        con1.style.display = 'none';
        con2.style.display = 'none';
		con3.style.display = '';
	}
}



const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');


toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    icons.classList.toggle('active')
});
