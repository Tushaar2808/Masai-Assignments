function setTimeoutGreeting(obj) {
    let greet = function() {
        console.log(`Hello, ${this.name}`);
    }.bind(obj);

    setTimeout(greet, 1000);
}

let person = { name: "Alice" };
setTimeoutGreeting(person); 