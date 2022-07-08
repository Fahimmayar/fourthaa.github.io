
rectengle = (w , h) => {
    var result = "";
    for (let i = 1; i <= h; i++){
        for(j = 1; j <= w; j++){

            if( j == 1 || j == w){
                result += "*";
            }

            if( i == 1 || i == h ){
                result += "*";
            }else{
                result += "<span>&nbsp; </span>";
            }

            
        }
        result += "<br>";
    }
    document.querySelector("#rect").innerHTML = result;
}


rectengle(50, 8);