// To be used for #19

let onDOMLoaded = () => {
    initialize();
};
document.addEventListener("DOMContentLoaded", onDOMLoaded);

let initialize = () => {
    const changeSpan = document.getElementById('changer');
    let x = 0;
    window.setInterval(() => {
        switch (x){
            case 0: changeSpan.innerHTML = "Isnt it lovely?";
                break;
            case 1: changeSpan.innerHTML = "This code is so easy to do....";
                break;
            case 2: changeSpan.innerHTML = "....and its such great fun!!";
                break;
            case 3: 
                //get filename (index or contact)
                let url = window.location.href;
                let filename = url.substring(url.lastIndexOf('/')+1);
                
                if (filename=='index.html' || filename==''){
                    changeSpan.innerHTML = "Hello World! Welcome to my Node App!!";
                }else if(filename=='contact.html'){
                    changeSpan.innerHTML = "Hello world! Welcome to my Contact Page!!";
                }
                break;
        }  
        x++;
        if (x == 4){
            //reset x to 0
            x=0;
        }
       
    },2000);
};
