buyClay = () => {
const Clay = []
return Clay
}
let Pottery = buyClay()
makePottery =  (objPottery) => {
    objPottery.shape = "Bowl"
    return objPottery
}
makePottery(Pottery)
bisqueFire = (objPottery) => {
    if (objPottery.readyForGlazing === true) {
    return objPottery}
}
bisqueFire(Pottery)
glazePottery = (objPottery) => {
    if (objPottery.readyForGlazing = true) {
    return objPottery.glazing = "Midnight Blue"
    }
    else {console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}
glazePottery(Pottery)
finalFiring = (objPottery, temperature) => {
    if (temperature > 1200 ) {
        objPottery.cracked = true}
    else objPottery.cracked = false
    }
finalFiring(Pottery, 1200)
console.log(Pottery)