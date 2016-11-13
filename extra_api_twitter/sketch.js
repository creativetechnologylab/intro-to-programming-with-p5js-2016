/*
 * Twitter
 * @description Authenticating with Twitter and getting results from search query.
 * @author Gareth Foote
 */

// Twitter library
var cb = new Codebird;
cb.setConsumerKey("CONSUMER_KEY", "CONSUMER_SECRET");
var bearerToken;

function setup() {
  createCanvas(500, 500);

  connectTwitter();
  searchTwitter("basketball", drawResults);
  noLoop();
}

function drawResults(result) {
  console.log(result);
}

function searchTwitter(q, callback) {
  if(bearerToken){
    cb.setBearerToken(bearerToken);
    cb.__call(
        "search_tweets",
        "q=" + q,
        function (reply) {
          callback(reply);
        },
        true // this parameter required
    );
  } else {
    setTimeout(function(){
      searchTwitter(q, callback);
    }, 1000);
  }
}

function connectTwitter() {
  cb.__call(
      "oauth2_token",
      {},
      function (reply, err) {
          if (err) {
              console.log("error response or timeout exceeded" + err.error);
          }
          if (reply) {
              bearerToken = reply.access_token;
          }
      }
  );
}
