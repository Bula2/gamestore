import cyberpunkImg from "./../assets/img/cyberpunk.jpg"
import mortalCombatImg from "./../assets/img/Mortal_Kombat_11.jpg"
import ufc4Img from "./../assets/img/ufc4.png"
import fifa22Img from "./../assets/img/fifa20.jpeg"
import readDeadRedemptionImg from "./../assets/img/Red_Dead_Redemption_2_coverart.jpg"
import deathStrandingImg from "./../assets/img/Death_Stranding_Poster.jpg"

let initialState = {
    games: [
        {id: 1, title: "Cyberpunk 2077", platform: "PS4/PS5", price: 2499, photo: cyberpunkImg},
        {id: 2, title: "Mortal Kombat 11: Ultimate", platform: "PS4/PS5", price: 2999, photo: mortalCombatImg},
        {id: 3, title: "EA UFC 4", platform: "PS4/PS5", price: 3599, photo: ufc4Img},
        {id: 4, title: "EA FIFA 22", platform: "PS4/PS5", price: 4199, photo: fifa22Img},
        {id: 5, title: "Red Dead Redemption 2", platform: "PS4/PS5", price: 3199, photo: readDeadRedemptionImg},
        {id: 6, title: "Death Stranding", platform: "PS4/PS5", price: 2899, photo: deathStrandingImg},
        {id: 7, title: "Cyberpunk 2077", platform: "PS4/PS5", price: 2499, photo: cyberpunkImg},
        {id: 8, title: "Mortal Kombat 11: Ultimate", platform: "PS4/PS5", price: 2999, photo: mortalCombatImg},
        {id: 9, title: "EA UFC 4", platform: "PS4/PS5", price: 3599, photo: ufc4Img},
        {id: 10, title: "EA FIFA 22", platform: "PS4/PS5", price: 4199, photo: fifa22Img},
        {id: 11, title: "Red Dead Redemption 2", platform: "PS4/PS5", price: 3199, photo: readDeadRedemptionImg},
        {id: 12, title: "Death Stranding", platform: "PS4/PS5", price: 2899, photo: deathStrandingImg}
    ]
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return (state);
    }
}

export default shopReducer;