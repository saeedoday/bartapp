// Declare abbreviation variable
var stationAbbr;

// Get station code json data
function getStationCode(callback) {
  $.getJSON('/stations.json', function (data) {
    callback(data);
  });
}

// Just testing station code data
getStationCode(function (data) {
  console.log(data.stationCodes[1]);
});

// Setup : get train estimate data
function getEstimate(callback) {
  $.getJSON('https://api.bart.gov/api/etd.aspx?cmd=etd&orig=' + stationAbbr + '&key=MW9S-E7SL-26DU-VV8V&json=y', function (data) {
    callback(data);
  });
}

// Use abbr variable to get estimate data for specified station
function testFunction(id) {
  stationAbbr = id; // This is the value I want to change
  console.log(stationAbbr);

  getEstimate(function (estimate, stationAbbr) {
    console.log(estimate.root.station[0].etd);
    alert("Thing has happened");
  });
}
