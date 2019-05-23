function addEventListeners() 
{
    //1. REGULAR EVENT HANDLERS
    //--------------------------------------------

    const btn_go = document.getElementById("go_btn");
    btn_go.addEventListeners("click", function (e) {
        e.preventDefault(); //Prevent default behaviour of page refresh.

        //get uName from uname-input
        let unameText = document.getElementById("uname_input").value;

        $.ajax({ //Instead we run AJAX using jquery
                type: "POST",
                url: "/",
                contentType: "application/json",
                data: JSON.stringify({ userName: unameText }),
                success: (data) => {
                    console.log(data)
                    if (data != "") {console.log(JSON.parse(data))}
                    updatePage(JSON.parse(data))
                }
            })
        })
        
}
function updatePage(data) {
    const uNameSpan = document.getElementById("uNameSpan")
    const fNameSpan = document.getElementById("fNameSpan")
    const lNameSpan = document.getElementById("lNameSpan")

    uNameSpan.innerHTML = data.userName
    fNameSpan.innerHTML = " " + data.fName
    lNameSpan.innerHTML = " " + data.lName
}
//end handler

