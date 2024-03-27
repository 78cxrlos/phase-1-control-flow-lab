function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return 'This one is on me!'
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.'
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } 
  else {
    return 'No can do.'
  }
}

console.log(distance(250))

function ternaryCheckCity(city){
  // Write your code here!
 let message = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
 return message
}

console.log(city('NYC'))

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous': 
      return 'Thank you so much.'
    break;
    case 'not as generous':
      return 'Thank you.'
    break;
    default:
      return 'Bye.'
  }
}

console.log(tip('generous'))




