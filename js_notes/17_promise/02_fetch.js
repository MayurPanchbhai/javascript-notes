// fetch is used to makea an call to the server

const github_api="https://api.github.com/users/mayurpanchbhai"

const user = fetch(github_api);
console.log(user);

user.then(function (data){//callback function handle with async operation and promises
    console.log(data);
})



//**************************************** */
// promise:-  it is placeholder which will be to filled with value.
// promise:- It is placeholder for a certain period of time until we recieve value from async function 
//**************************************** */