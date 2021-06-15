const main = document.querySelector("#main")
const telaPreta = document.querySelector(".tela-preta")

telaPreta.addEventListener("click",()=> telaPreta.style.display = "none")

async function requisicaoApi() {
    try {
        const consumindoApi = await fetch("https://reqres.in/api/users?page=2");
        const respostaApi = await consumindoApi.json()
        return respostaApi.data;
        
    } catch (error) {
        return error
    }
};

async function gerar() {
    const users = await requisicaoApi();
    
    const gerarCard = await users.map(( { avatar, first_name, last_name,email})=> {
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
        const paragrafo = document.createElement("p")

        image.src = avatar;
        paragrafo.innerText = first_name;

        card.appendChild(image)
        card.appendChild(paragrafo)
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

            const paragrafo = document.createElement("p")
            const textEmail = document.createElement("p")

            image.src = avatar;
            textEmail.innerText = email;
            paragrafo.innerText = `${first_name} ${last_name}`;
            telaPreta.style.position = "absolute";
            telaPreta.style.backgroundColor = "rgba(12, 12, 12, 0.61)";
            telaPreta.style.width = "100%";
            telaPreta.style.height = "100vh";
            telaPreta.style.display = "flex";
            telaPreta.style.justifyContent = "space-around";
            telaPreta.style.flexWrap = "wrap";

            card.appendChild(image)
            card.appendChild(paragrafo)
            card.appendChild(textEmail) 
            telaPreta.appendChild(card)
        });
    })
    
    gerarCard()
    
    
}

gerar()