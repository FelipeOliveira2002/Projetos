

    const navToggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links")


    navToggle.addEventListener('click',function(){

        console.log(links.classList);
        console.log(links.classList.contains("random"));
        if(links.classList.contains("show-links")){
            links.classList.remove("show.list")
        }
        else{
            links.classList.add("show-links")
        }

        links.classList.toggle("show-links")


    })