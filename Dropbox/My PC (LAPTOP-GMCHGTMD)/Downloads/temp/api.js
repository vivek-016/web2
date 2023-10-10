async function fetchData() {
    const url = 'https://healthgraphic-healthgraphic-v1.p.rapidapi.com//api.healthgraphic.com/v1/conditions/headache';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '417dba6b86msh6264924f8f401f3p1b0bc8jsn5e6dd7c74585',
            'X-RapidAPI-Host': 'healthgraphic-healthgraphic-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Call the fetchData function to initiate the asynchronous operation
fetchData();
