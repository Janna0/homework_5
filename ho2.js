const canvas = document.getElementById("c1");
const context = canvas.getContext("2d");

const rand = function(num) {
  return Math.floor(Math.random() * (num)) + 1;
  return Math.floor(Math.random() * (num)) + 1;

};



canvas.width = 900;
canvas.height = 630;




const squareSpeed = 3;


const background = new Image();
background.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0OFQ8PFSsdFRktKy0rKy0rKysrKy0rLSsrLSs3Ky0rLSstNysrNystKystKy0rLS0rLSstLS0rLSsrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIxABAAICAgIDAAMBAAAAAAAAAAERkfAxYSGhAnGBElGxQf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABETH/2gAMAwEAAhEDEQA/AOIxJDMNIqgI0kwkyTIqMhSKy1fhAkCGmYaSrGAFQAAABbQAAAAAAAAAAAAAAAAAWG2G/ilWKFszKNLQRKiMIqNMo1DICqyAAtAgtIAAAAAAAAAAAAALBMAgAAoLiCgmDXxZa+KVYTIQsDUQChEQFZDAAt/RfaGBVvsvuS/ovtAvuT99Lffovv0DM/Yv7BhRAoyIIq/gJSLlb7BkavuDAMjX5CSCKigAC4AIoAoNfFlr4lSJwsEogNMqHGQFQABBUBS0UFifpcMrhFMGD8grqMgV0i10mQML+IKhlcIuEUwV0V0kgfiAqAAC2gDVFAjSCgiNfFlYlUWYKS1tFKWUssVkBWQRQRUUAAFjYk/DfJXSKV17K69ldFdewK69mSuvZkEA3wopgvZRArpFRUAAAAAAWFZWBYtKliLsKRZlKVKFlFCFllACKgAKCKigKgC75Pz2b5MIpXXsrr2bygLXUZDBjICb4XKAqYXKYARUVAAAAAAAAAAFWARQkAQWkVACQEFBFRQAAXfJgRFMGF3g3gEXBnBvmAMhviTfIG+DeBAEVFQBQCVSRag0gYgAgADS0QqNIiyAIqCJKkoqAqABIAAC74MhvKKZN5N5MAbyZMJvILgz/qAAbyKEoAgCgiwgChEqjSIoqYgqCNQJMlopJCLCopCiKkoCoqCgkhIAAC7/AGmDf6XKKbwZwbybyBlN4XBvIIKigCCAAKIooiiGIsAooCNAAMi0KwixKALMoAClAAAEkEkAKiggogi7wbybyKbwbwbybyAhYqCAAKgApQoqCKCoAACiANMzK8rQjCwvyhIVGkiCSUUmUhqmQBRRCCQQBUEFQU3/AIAqFgAAAgKCLAgKAjQAoAIAAACo2zPyBIVLa/kCpqfyUEWJMlKAIAEogoqgIICKqAqFgAgAKUAEoACwAqoCKAKgAigAP//Z";









const square = [{
	}


];





function yourFunction(){

	let monNum = 0;

	



	    	square.push(

				{
	          
	   				x: rand(canvas.height),
					y: rand(canvas.height),
					width: 50,
					height: 50,
					xDelta: 5,
					yDelta: 5,
					
					r: Math.floor(Math.random() * 255) + 1,
            		g: Math.floor(Math.random() * 255) + 1,
            		b: Math.floor(Math.random() * 255) + 1,

					draw: function(){
						context.fillStyle = "rgb(" + this.r + "," + this.g+ ","+ this.b +")";
						context.fillRect(this.x, this.y, this.height, this.width);
					},


					update: function(){

							
							if(this.x+this.width >= canvas.width){
								this.xDelta = -squareSpeed;
								
							
								this.r =Math.floor(Math.random() * 255) + 1;
								this.g =Math.floor(Math.random() * 255) + 1;
								this.b =Math.floor(Math.random() * 255) + 1;

								this.width =Math.floor(Math.random() * 100) + 1;
								this.height =Math.floor(Math.random() * 100) + 1;

							}
							if(this.x<=0){
								this.xDelta = squareSpeed;
								
								this.r =Math.floor(Math.random() * 255) + 1;
								this.g =Math.floor(Math.random() * 255) + 1;
								this.b =Math.floor(Math.random() * 255) + 1;

								this.width =Math.floor(Math.random() * 100) + 1;
								this.height =Math.floor(Math.random() * 100) + 1;
							}




							if(this.y+this.height >= canvas.height){
									this.yDelta = -squareSpeed;
									
								

									this.r =Math.floor(Math.random() * 255) + 1;
								this.g =Math.floor(Math.random() * 255) + 1;
								this.b =Math.floor(Math.random() * 255) + 1;

								this.width =Math.floor(Math.random() * 100) + 1;
								this.height =Math.floor(Math.random() * 100) + 1;
								}
							if(this.y<=0){
									this.yDelta = squareSpeed;
									
								
									this.r =Math.floor(Math.random() * 255) + 1;
								this.g =Math.floor(Math.random() * 255) + 1;
								this.b =Math.floor(Math.random() * 255) + 1;
								}

								if (this.x+this.width < canvas.width || this.x>0 || this.y+this.height < canvas.height || this.y>0) {


									this.x += this.xDelta;
									this.y += this.yDelta;
          							
								//this.width =Math.floor(Math.random() * 100) + 1;
								//this.height =Math.floor(Math.random() * 100) + 1;
									

								//this.r =Math.floor(Math.random() * 255) + 1;
								//this.g =Math.floor(Math.random() * 255) + 1;
								//this.b =Math.floor(Math.random() * 255) + 1;
								}

							

								
									//-------------------------------


						}
		}


	    );


	    	monNum++;



    setTimeout(yourFunction, 500);
}

yourFunction();






const update = function(){

	
	

	for( let i = 1; i<square.length; i++){
		
		square[i].update();
		
	}





};


const draw = function(){

	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	
	

	for( let i = 1; i<square.length; i++){
		square[i].draw();
		
		
	}





    


    
};



const loop = function() {
	

	draw();
	update();
	
	
	requestAnimationFrame(loop);
};

loop();
















