function testLigne(tab, j){
var erreur = false; 
var k=0;
	for (i=0;i<9;i++){
		a = tab[i][j];
		k=i;
		for(i=0;i<9;i++){
			b = tab[i,j];
			if ((a == b) && (i != k));
				erreur = true;
		}
	}
return erreur;
}

function testColone(tab,i,j, a){
var erreur = false;
	
//	for (j=0;j<9;j++){
//		a = tab[i][j];
		for(k=0; k<i; k++){

			if (a == tab[i][k]) /*&& (j != k))*/
				erreur = true;
		}
//	}
return erreur;
}

function testCarreau(tab, posI, posJ){
var erreur = false;
	for (i=posI;i<posI+3;i++){
		for (j=posJ;j<posJ+3;j++){
			a = tab[i,j];
			for (k=posI;k<posI+3;k++){
				for(l=posJ;l<posJ+3;l++){
					if ((a == tab[k,l]) && (i != k) && (j != l))
						erreur = true;
				}
			}
		}
	}

return erreur;
}

// Returns a random number between 1 and 9
function getRandom() {
 	return Math.floor((Math.random()*9)+1);
}


function draw(){
  var canvas = document.getElementById("papier");
  if (canvas.getContext){
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(1000,0,0)"; // fond de couleur rouge
   
var i = 0, j = 0,index = 0;
var tab = [];
for(i = 0; i <9; i++){
	tab.push([])
	for(j=0;j<9;j++){
		erreur = false;k=0;
		while (erreur == false || k<j){
			tab[i].push(getRandom());
			console.log('=>>>'+tab[i][j] +' and '+tab[i][j]+' k='+k+' i='+i+' j='+j);
			b = tab[i][k];
			a = tab[i][j];
			if (a==b)
				{erreur = true;
				console.log('boucle if accepted');}
			k++;
	//	a = tab[i][j];
	//	while (/*!testCarreau(tab,(i/3)*3,(j/3)*3) && !testLigne(tab,j) &&*/ !testColone(tab,i,j,a))
	//	console.log('i='+i+'j='+j+' '+tab[i][j]);
	//	{tab[i].push(getRandom());
	//	a = tab[i][j];
		}
	}
} 

j = 0;
i = 0;
f=0; 
for (y=5; y<=515; y+=255){
   for (x=5; x<=515; x+=255){
   	ctx.fillRect(x,y,250,250);
	for (y1=y+3; y1<=y+167; y1+=82){
		m=1;	
		for (x1=x+3; x1<=x+167; x1+=82,m++){
			ctx.clearRect(x1,y1,80,80);
			var centreX = x1+(80/2)-15;
			var centreY = y1+(80/2)+19;
			ctx.font = 'normal 50px Metal';
		//	console.log('i=' +i+ ' j='+j+' '+tab[i][j]);
			valeur = getRandom();
			ctx.fillText(tab[i][j],centreX,centreY);
			if (m%3 == 0)
				{i++; j-=2;}	
			else j++;
		}
   	}
	i-=3;j+=3;	
   }
   i+=3;j-=9;
}


 }
}
document.getElementById("papier").width=770; // astuce
// Exécution de la fonction
draw()
