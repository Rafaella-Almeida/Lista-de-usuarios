const main = document.querySelector("#main")
const show = document.querySelector(".show")

show.addEventListener("click",()=> show.style.display = "none")

async function requestApi() {
    try {
        const require = await fetch("https://reqres.in/api/users?page=2");
        const response = await require.json()
        return response.data;
        
    } catch (error) {
        return error
    }
}

async function generateImage() {
    const urlImage = await requestApi();
    
    const generate = await urlImage.map(( { avatar, first_name, last_name,email})=> {
        const card = document.createElement("div")

        card.style.display = "flex";
        card.style.alignItems = "center";
        card.style.backgroundColor = "rgb(248, 245, 241)";
        card.style.width = "200px";
        card.style.height = "200px";
        card.style.flexDirection = "column";
        card.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";   
        card.style.borderRadius = "0px 0px 10px 10px";
        card.style.margin = "10px";   
        card.style.cursor = "pointer";

        
        
        const image = document.createElement("img")

        image.style.width = "80%";
        image.style.height= "150px";
        image.style.objectFit = "cover";
        image.style.marginTop = "10px";
        const paragraph = document.createElement("p")

        image.src = `${avatar}`
        paragraph.innerText = `${first_name} `

        card.appendChild(image)
        card.appendChild(paragraph)
        main.appendChild(card)
        
        card.addEventListener('click', function(){
           const card = document.createElement("div")
            card.style.display = "flex";
            card.style.alignItems = "center";
            card.style.backgroundColor = "rgb(248, 245, 241)";
            card.style.width = "200px";
            card.style.height = "300px";
            card.style.flexDirection = "column";
            card.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";   
            card.style.borderRadius = "0px 0px 10px 10px";
            card.style.margin = "10px";
    
            const image = document.createElement("img")

            image.style.width = "80%";
            image.style.height= "150px";
            image.style.objectFit = "cover";
            image.style.marginTop = "10px";

            const paragraph = document.createElement("p")
            const textEmail = document.createElement("p")

            image.src = `${avatar}`
            textEmail.innerText = `${email}`
            paragraph.innerText = `${first_name} ${last_name}`
            show.style.position = "absolute";
            show.style.backgroundColor = "rgba(12, 12, 12, 0.61)";
            show.style.width = "100%";
            show.style.height = "100vh";
            show.style.display = "flex";
            show.style.justifyContent = "space-around";
            show.style.flexWrap = "wrap";

            card.appendChild(image)
            card.appendChild(paragraph)
            card.appendChild(textEmail) 
            show.appendChild(card)
        });
    })
    generate()
    
    
}

generateImage()