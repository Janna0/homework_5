const canvas = document.getElementById("c1");
const context = canvas.getContext("2d");

const rand = function(num) {
  return Math.floor(Math.random() * (num)) + 1;
  return Math.floor(Math.random() * (num)) + 1;

};



//canvas.width = 900;
//canvas.height = 630;


//const a1 = prompt("Enter a value");
//const a2 = prompt("Enter a value");
//const a3 = prompt("Enter a value");




const background = new Image();
background.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0OFQ8PFSsdFRktKy0rKy0rKysrKy0rLSsrLSs3Ky0rLSstNysrNystKystKy0rLS0rLSstLS0rLSsrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIxABAAICAgIDAAMBAAAAAAAAAAERkfAxYSGhAnGBElGxQf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABETH/2gAMAwEAAhEDEQA/AOIxJDMNIqgI0kwkyTIqMhSKy1fhAkCGmYaSrGAFQAAABbQAAAAAAAAAAAAAAAAAWG2G/ilWKFszKNLQRKiMIqNMo1DICqyAAtAgtIAAAAAAAAAAAAALBMAgAAoLiCgmDXxZa+KVYTIQsDUQChEQFZDAAt/RfaGBVvsvuS/ovtAvuT99Lffovv0DM/Yv7BhRAoyIIq/gJSLlb7BkavuDAMjX5CSCKigAC4AIoAoNfFlr4lSJwsEogNMqHGQFQABBUBS0UFifpcMrhFMGD8grqMgV0i10mQML+IKhlcIuEUwV0V0kgfiAqAAC2gDVFAjSCgiNfFlYlUWYKS1tFKWUssVkBWQRQRUUAAFjYk/DfJXSKV17K69ldFdewK69mSuvZkEA3wopgvZRArpFRUAAAAAAWFZWBYtKliLsKRZlKVKFlFCFllACKgAKCKigKgC75Pz2b5MIpXXsrr2bygLXUZDBjICb4XKAqYXKYARUVAAAAAAAAAAFWARQkAQWkVACQEFBFRQAAXfJgRFMGF3g3gEXBnBvmAMhviTfIG+DeBAEVFQBQCVSRag0gYgAgADS0QqNIiyAIqCJKkoqAqABIAAC74MhvKKZN5N5MAbyZMJvILgz/qAAbyKEoAgCgiwgChEqjSIoqYgqCNQJMlopJCLCopCiKkoCoqCgkhIAAC7/AGmDf6XKKbwZwbybyBlN4XBvIIKigCCAAKIooiiGIsAooCNAAMi0KwixKALMoAClAAAEkEkAKiggogi7wbybyKbwbwbybyAhYqCAAKgApQoqCKCoAACiANMzK8rQjCwvyhIVGkiCSUUmUhqmQBRRCCQQBUEFQU3/AIAqFgAAAgKCLAgKAjQAoAIAAACo2zPyBIVLa/kCpqfyUEWJMlKAIAEogoqgIICKqAqFgAgAKUAEoACwAqoCKAKgAigAP//Z";









const square = [{
	}


];





function yourFunction(count, canvasWidth, canvasHeight){

	let monNum = 0;

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	while(monNum<count){

	    	square.push(

				{
	          
	   				x: rand(canvas.width-Math.sqrt((canvasWidth*canvasHeight)/count)/2),
					y: rand(canvas.height-Math.sqrt((canvasWidth*canvasHeight)/count)/2),
					width: Math.sqrt((canvasWidth*canvasHeight)/count)/2,
					height: Math.sqrt((canvasWidth*canvasHeight)/count)/2,
					
					
					r: Math.floor(Math.random() * 255) + 1,
            		g: Math.floor(Math.random() * 255) + 1,
            		b: Math.floor(Math.random() * 255) + 1,

					draw: function(){
						context.fillStyle = "rgb(" + this.r + "," + this.g + ","+ this.b +")";
						context.fillRect(this.x, this.y, this.height, this.width);
					},


					
		}


	    );


	    	monNum++;


	    }

    
}

//yourFunction(a1, a2, a3);

yourFunction(1000, 700, 500);








const draw = function(){

	context.drawImage(background, 0, 0, canvas.width, canvas.height);
	
	

	for( let i = 1; i<square.length; i++){
		square[i].draw();
		
		
	}





    


    
};



const loop = function() {
	

	draw();
	
	
	
	requestAnimationFrame(loop);
};

loop();
















