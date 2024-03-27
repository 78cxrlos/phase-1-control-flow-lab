function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    console.log('This one is on me!')
  } else if (distance > 400 && distance <= 2000) {
    console.log('That will be twenty bucks.')
  } else if (distance > 2000) {
    console.log('I will gladly take your thirty bucks.')
  } else if (distance > 2500) {
    console.log('No can do.')
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
 let message = destination === 'NYC' ? 'Ok, sounds good.' : 'No go.'
 console.log(message)
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous': 
      console.log('Thank you so much.')
    break;
    case 'not as generous':
      console.log('Thank you.')
    break;
    default:
      console.log('Bye.')
  }
}




