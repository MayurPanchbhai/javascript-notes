let bio=document.getElementById("bio");


// const APIUrl="https://api.github.com/users/mayurpanchbhai";
const APIUrl="https://api.github.com/use";//wrong url for catch



async function handlePromise(){
    try{//try will run if the url is correct else it does not proceed and catch will run 


        const data = await fetch(APIUrl);//it only moves forward after the promise is resoved completly and it gives response


        // fetch()=>  fetch function is an promise and it give the response object(it is a readble stream and to read it we have to convert to the json which give the result/value(json value)) onces it is resolved 

        const jsonValue = await data.json() ;//data.json it is promise and for that we write await
        bio.innerHTML=jsonValue.bio;//this line written the github bio on the html
        console.log(jsonValue);
    }
    catch(err){
        console.log(err);
    }
    
} 


handlePromise()