            function hitung(){
                var a = parseInt(document.getElementById("a").value); 
                var b = parseInt(document.getElementById("b").value);
                var mpy = parseInt(document.getElementById("mpy").value);
                var i,x;
                hasil="";

                if(a<b){
                    for(i=a;i<=b;i++){
                    x = i*mpy;
                    hasil= hasil + i + " x " + mpy + " = " + x + "\n";
                    }
                }else{
                    for(i=a;i>=b;i--){
                    x = i*mpy;
                    hasil= hasil + i + " x " + mpy + " = " + x + "\n";
                    }
                }
                
                document.getElementById("txt").value=hasil;
            } 
