let count = 0;
let loadingInterval = setInterval(() => {
    console.log("Loading...");
    count++;

    if (count === 5) {
        clearInterval(loadingInterval);
        console.log("Loaded successfully!");
    }
}, 1000);