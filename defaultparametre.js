function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greet("ash");
  greet();

  function user(language = "English"){
    console.log(`Known Language : ${language}`);
  }

  user("kannada");
  user();

  function transport(mode = "Walk"){
    console.log(`Mode of transport : ${mode}`);
  }

  transport("Car");
  transport()