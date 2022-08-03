const readline = require('readline');
let paragraph =''
let activity;
let meal;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)  ', (answer) => {
  //console.log(`Nice to meet you ${answer}!`);
  paragraph += `My name is ${answer}. `
  rl.question('What\'s an activity you like doing?  ', (answer) =>{
    paragraph += `I like ${answer}. `
    activity = answer;
    rl.question('What do you listen to while doing that?   ', (answer) => {
      paragraph += `I like to listen to ${answer} while ${activity}. `
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)  ', (answer) =>{
        paragraph += `My favorite meal is ${answer}. `
        meal = answer
        rl.question('What\'s your favourite thing to eat for that meal?  ', (answer) => {
          paragraph += `I like to eat ${answer} for ${meal}. `
          rl.question('Which sport is your absolute favourite?  ', (answer) =>{
            paragraph += `My favorite sport is ${answer}. `
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ', (answer) =>{
              paragraph += `My superpower is ${answer}`;
              console.log(`Here is a profile we generated for you!; \n${paragraph}`)
              rl.close();
            })
          })
        })
      })
    })
  });

  
});
