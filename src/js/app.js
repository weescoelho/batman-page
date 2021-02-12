document.addEventListener('DOMContentLoaded', () =>{

  let tl = new TimelineMax();
  tl
    .fromTo('.bg-loader', 1,{width:'100%'},{width:'0%',delay:5, ease:Expo.easeInOut})
    .fromTo('.logo', 0.7,{y:-50, opacity:0},{y:0,opacity:1,  ease:Expo.easeInOut},'-=0.5')
    .fromTo('.nav-menu', 0.7,{y:-50, opacity:0},{y:0,opacity:1,  ease:Expo.easeInOut},'-=0.5')
    .fromTo('.title', 0.7,{y:-50, opacity:0},{y:0,opacity:1,  ease:Expo.easeInOut},'-=0.5')
    .fromTo('.description', 0.7,{y:-50, opacity:0},{y:0,opacity:1,  ease:Expo.easeInOut},'-=0.5')
    .fromTo('.btn', 0.7,{y:-50, opacity:0},{y:0,opacity:1,  ease:Expo.easeInOut},'-=0.5')
    .fromTo('.dc-logo', 0.7,{opacity:0},{opacity:1,  ease:Expo.easeInOut},'-=0.5')

})

new fullpage('#fullPage', {
  autoScrolling:true,
  navigation:true,
  navigationPosition: 'left',
})