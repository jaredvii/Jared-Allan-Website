//Nickname Generator
function nicknameGenerator(name) {
    const vowels = "aeiouAEIOU";
  
    if (name.length < 4) {
      return "Error: Name too short";
    }
  
    if (vowels.includes(name[2])) {
      return name.slice(0, 4);
    } else {
      return name.slice(0, 3);
    }
  }
  
  // Prompt the user for input
  const userName = prompt("Enter your name:");
  
  const nickname = nicknameGenerator(userName);
  
  console.log("Your nickname is:", nickname);
  