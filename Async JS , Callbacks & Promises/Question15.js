function registerUser(username, callback) {
    setTimeout(() => callback(!username ? "No username" : null, username), 1000);
}

function sendVerification(username, callback) {
    setTimeout(() => callback(username === "testfail" ? "Invalid user" : null, username), 1000);
}

function loginUser(username, callback) {
    setTimeout(() => callback(username.length < 3 ? "Username too short" : null, username), 1000);
}

function displayWelcomeMessage(username, callback) {
    setTimeout(() => callback(null, "Done"), 1000);
}

function startWorkflow(username) {
    registerUser(username, (err, u1) => {
        if (err) return console.log(err);
        sendVerification(u1, (err, u2) => {
            if (err) return console.log(err);
            loginUser(u2, (err, u3) => {
                if (err) return console.log(err);
                displayWelcomeMessage(u3, (err, res) => console.log(res));
            });
        });
    });
}

startWorkflow("Tushar");
startWorkflow("Tushar123");
startWorkflow("testfail");
startWorkflow("tushar");