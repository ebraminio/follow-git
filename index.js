const Twitter = require('twitter-lite');
const client = new Twitter(require('./config.json'));
  
const parameters = {
  track: "github,gitlab"
};
  
const stream = client.stream("statuses/filter", parameters)
  .on("start", response => console.log("start"))
  .on("data", tweet => {
    if (tweet.text.startsWith('RT ')) return;
    console.log("data", tweet.text);
  })
  .on("ping", () => console.log("ping"))
  .on("error", error => console.log("error", error))
  .on("end", response => console.log("end"));

// process.nextTick(() => stream.destroy());
