const url = "https://sscweb.gsfc.nasa.gov/WebServices/REST/idl/api/spdfsscwsexample2.pro";

async function fetchDataAsync() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.text();
            console.log(data);
        } else {
            console.log("Request failed with status:", response.status);
        }
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Request completed.");
    }
}

fetchDataAsync();
//end of program 1

const url = "https://sscweb.gsfc.nasa.gov/WebServices/REST/idl/api/spdfsscwsexample2.pro";

let f = fetch(url);

f
    .then((response) => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error("Request failed with status: " + response.status);
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Request completed.");
    });
//end of program 2
