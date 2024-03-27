// lexical environment :- 9s the local memory + along with the lexical environment of the parent

function a(){//lexical parent
    let b=10;
    c();
    function c(){
        console.log(b);
    }
}

a();


// Scope chain:- Chain of lexical environment and of the parent references