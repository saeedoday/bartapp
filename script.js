var stationAbbr;

// Get station code json data
function getStationCode(callback) {
    $.getJSON('/stations.json', function (data) {
        callback(data);
    });
}

function getEstimate(callback) {
    $.getJSON('https://api.bart.gov/api/etd.aspx?cmd=etd&orig=' + stationAbbr + '&key=MW9S-E7SL-26DU-VV8V&json=y', function (data) {
        callback(data);
    });
}

function testFunction(id) {
    stationAbbr = id;
    console.log(stationAbbr);

    getEstimate(function (estimate, stationAbbr) {
        console.log(estimate.root.station[0].etd);

        // sort destination by platform #
        var arrayLength = estimate.root.station[0].etd.length;
        console.log(arrayLength);

            var platformOne = [];
            var countOne = 0;
            var platformTwo = [];
            var countTwo = 0;
            var platformThree = [];
            var countThree = 0;

        for (var i = 0; i < arrayLength; i++) {
            console.log(estimate.root.station[0].etd[i].estimate[0].platform);
            if (estimate.root.station[0].etd[i].estimate[0].platform == "1") {
                console.log("Platform 1");
                platformOne.push(estimate.root.station[0].etd[i]);
                countOne++;
                console.log(countOne);
            } else if (estimate.root.station[0].etd[i].estimate[0].platform == "2"){
                console.log("Platform 2");
                platformTwo.push(estimate.root.station[0].etd[i]);
                countTwo++;
                console.log(countTwo);
            } else { 
                console.log("Platform 3");
                platformThree.push(estimate.root.station[0].etd[i]);
                countThree++;
                console.log(countThree);
            }

        };

        console.log(platformOne);
        console.log(countOne);

        console.log(platformTwo);
        console.log(countTwo);

        console.log(platformThree);
        console.log(countThree);

        // use for loop to see if [platform(x)] variables have values
        // create html elements for each platform 
        // populate those elements with train data stuff
        // loop through platform data to place data stuff into each platform html element
        // place those elements dependent on which platform they belong to. 

        // loop through each object and create html elements for the data
            // create divs for platform 1 and 2, and add ULs to each. 
            // loop through each object and place values as LI elements in respective UL

    });
}
