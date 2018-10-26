



const canvas = document.getElementById("c1");
const context = canvas.getContext("2d");

const rand = function(num) {
  return Math.floor(Math.random() * (num)) + 1;
  return Math.floor(Math.random() * (num)) + 1;

};



canvas.width = 900;
canvas.height = 630;

let chec = 0;
let t = 0;




const enemySpeed = 3;
let heroSpeed = 5;


const background = new Image();
background.src = "https://i.ytimg.com/vi/Sv8HPkt-RaY/maxresdefault.jpg";


const diamond = new Image();
diamond.src = "https://scontent.fevn1-2.fna.fbcdn.net/v/t1.15752-9/43663935_201284217469822_199589569786544128_n.png?_nc_cat=103&_nc_ht=scontent.fevn1-2.fna&oh=bcb17443e958658de435a391eb8cc48e&oe=5C820E34";


const character = new Image();
character.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/44807346_287525405426110_7644278145989738496_n.png?_nc_cat=107&_nc_ht=scontent.fevn2-1.fna&oh=b5d98c65ea057c59153a5a890d3745c2&oe=5C5527AB";

const evile = new Image();
evile.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/44635843_241150883227797_3560597033062498304_n.png?_nc_cat=101&_nc_ht=scontent.fevn2-1.fna&oh=5302b9703c29c0954ae989fc12381305&oe=5C5547E4";

const stars = new Image();
stars.src = "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/44852208_2172916656087160_4672817761125138432_n.png?_nc_cat=110&_nc_ht=scontent.fevn2-1.fna&oh=bb731061c46bbc8e5502c2eda485d282&oe=5C46D6F7";




const hero = {
	x: 200,
	y: 437,
	width: 60,
	height: 80,
	xDelta: 0,
	yDelta: 0,
	image: character,
	draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
	},


	update: function(){


		




	
	this.x += this.xDelta;
	this.y += this.yDelta;
	
}



};



const monster = [{
	}


];



//+++++++++++++++++++++++++++++++++++++++++++++++++++++
const star = [{

					/*

	   				x: rand(canvas.width),
					y: rand(canvas.height),
					width: 40,
					height: 50,
					image: stars,
					draw: function(){
						context.drawImage(this.image, this.x, this.y, this.width, this.height);
					}, */


	}];


	const mspeed = [{

					


	}];

//+++++++++++++++++++++++++++++++++++++++++++++++++++++



const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey) {
        hero.xDelta = heroSpeed ;  	}
    if(event.keyCode === leftKey) {
        hero.xDelta = -heroSpeed ;  	}  
    if(event.keyCode === upKey) {
		hero.yDelta = -heroSpeed ;  	} 
	if(event.keyCode === downKey) {
		hero.yDelta = heroSpeed ;  	} 

}, false);





document.addEventListener('keyup', function(event) {
	hero.xDelta = 0; 
	hero.yDelta = 0;  
}, false);








function yourFunction(){

	let monNum = 0;

	



	    	monster.push(

				{
	          
	   				x: 0,
					y: rand(canvas.height),
					width: 40,
					height: 50,
					xDelta: 5,
					yDelta: 5,
					image: evile,
					draw: function(){
						context.drawImage(this.image, this.x, this.y, this.width, this.height);
					},


					update: function(){

							
							if(this.x+this.width >= canvas.width){
								this.xDelta = -enemySpeed;
							}
							if(this.x<=0){
								this.xDelta = enemySpeed;

							}




							if(this.y+this.height >= canvas.height){
									this.yDelta = -enemySpeed;
								}
							if(this.y<=0){
									this.yDelta = enemySpeed;
									
								}


							if (this.x+this.width < canvas.width || this.x>0 || this.y+this.height < canvas.height || this.y>0) {


									this.x += this.xDelta;
									this.y += this.yDelta;
								}


									//---------------------

								

								if(this.x < hero.x + hero.width-10 && this.x + this.width  > hero.x+10 && this.y < hero.y + hero.height-10 && this.y + this.height > hero.y+10){

									
								hero.x = 1000;
								this.xDelta = 0;
								this.yDelta = 0;
								
								



								//let score = 0;
								//let highscore = 0;
								//localStorage.setItem("highscore",0);
								//console.log(highscore);

								
								alert("GAME OVER "+" "+" Click OK to restart");
								if(!alert("GAME OVER "+" "+" Click OK to restart")){window.location.reload();}



								
										}

								
									//-------------------------------


						}
		}


	    );


	    	monNum++;



    setTimeout(yourFunction, 5000);
}

yourFunction();





//++++++++++++++++++++++++++++++++++++




function starAdd(){

	let starNum = 1;

	
				star.push(
				
				{
	          
	   				x: rand(canvas.width-40),
					y: rand(canvas.height-60),
					width: 40,
					height: 40,
					image: stars,
					draw: function(){
						context.drawImage(this.image, this.x, this.y, this.width, this.height);  },

					update: function(){

							
						

								

					if(this.x < hero.x + hero.width-10 && this.x + this.width  > hero.x+10 && this.y < hero.y + hero.height-10 && this.y + this.height > hero.y+10){

									

								
								
								
								t += 10;
					

									this.x=1000;

								
										}

								
									//-------------------------------


						}
		}


	    );
	    


	    	starNum++;



    setTimeout(starAdd, 5000);
}

starAdd();

//professor leonard calculus

//++++++++++++++++++++++++++++++++++++++++++

function sircleAdd(){

	let sircleNum = 1;

	
				mspeed.push(
				
				{
	          
	   				x: rand(canvas.width-40),
					y: rand(canvas.height-60),
					width: 30,
					height: 30,
					image: diamond,
					draw: function(){
						context.drawImage(this.image, this.x, this.y, this.width, this.height);  },

					update: function(){

							
						

								

					if(this.x < hero.x + hero.width-10 && this.x + this.width  > hero.x+10 && this.y < hero.y + hero.height-10 && this.y + this.height > hero.y+10){

									

								
								
								
								heroSpeed ++;
					

									this.x=1000;

								
										}

								
									//-------------------------------


						}
		}


	    );
	    


	    	sircleNum++;



    setTimeout(sircleAdd, 15000);
}

sircleAdd();


//+++++++++++++++++++++++++++++++++++





const update = function(){

	hero.update();
	

	for( let i = 1; i<monster.length; i++){
		
		monster[i].update();
		
	}


for( let b = 1; b<star.length; b++){
		
	star[b].update();

		
	}



for( let g = 1; g<mspeed.length; g++){
		
		mspeed[g].update();
		
	}



};


const draw = function(){

	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	hero.draw();
	

	for( let i = 1; i<monster.length; i++){
		monster[i].draw();
		
		
	}



for( let b = 1; b<star.length; b++){
		
		star[b].draw();
		
	}



for( let g = 1; g<mspeed.length; g++){
		
		mspeed[g].draw();
		
	}



    /*if(t/5-Math.floor(t/5)===0){
    context.fillText("Score: "+ t,10,50);
    context.font = "30px Sans-Serif";
    context.fillText("Level",10,80);
    context.font = "30px Sans-Serif";
}*/


  context.fillText("Score: "+ t,10,50);
    context.font = "30px Sans-Serif";
    
};



const loop = function() {
	

	draw();
	update();
	
	
	requestAnimationFrame(loop);
};

loop();













function point(){


	
    t++;

    setTimeout(point, 1000);
}

point(t);




