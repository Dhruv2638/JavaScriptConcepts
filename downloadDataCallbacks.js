// write a function download data from a URL
function download(url, cb) {
    console.log("Starting to download data from", url);
    setTimeout(function down() {
        console.log("Downloding completed");
        const content = "ABCDEF";
        cb(content);
    }, 5000);
}

function saveFile(content, cb) {
    console.log("Saving the Downloded File");
    setTimeout(function() {
        console.log("completed saving the Data", content);
        const filename = "dhruv";
        cb(filename);   
    }, 5000);
}

saveFile("ABCDEF", function() {
    console.log("Now you can consume the data");
})