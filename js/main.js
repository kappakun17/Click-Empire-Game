// main

function displayON(ele){
    ele.classList.remove("d-none")
    ele.classList.add("d-block")
}

function displayOFF(ele){
    ele.classList.remove("d-block")
    ele.classList.add("d-none")
}


const config = {
    loginPage: document.querySelectorAll("#login-page")[0],
    mainPage: document.querySelectorAll("#main-page")[0],
    menuContainer: document.querySelectorAll("#menu-container")[0],
}

const button = {
    loginButton: document.getElementById("login-button"),
}


button.loginButton.addEventListener("click",function(){
    displayOFF(config.loginPage);
    displayON(config.mainPage);
    menuList(menuData);
})

const menuData = [
    flipMachine = {
        name: "Flip Machine",
        cost: "15000",
        max: "500",
        oneclickCost: "25",
        oneclickHow: "click",
        describe: "グリルをクリックごとに25円を取得します。",
        img: "./img/hamburger.png",

    },
    etfStock = {
        name: "ETF Stock",
        cost: "300000",
        max: "∞",
        oneclickCost: "0.1",
        oneclickHow: "sec",
        describe: "ETF 銘柄の購入分をまとめて加算し、毎秒 0.1% を取得します。",
        img: "./img/etf.png",
    },
    etfBonds = {
        name: "ETF Bonds",
        cost: "300000",
        max: "∞",
        oneclickCost: "0.07",
        oneclickHow: "sec",
        describe: "債券 ETF の購入分をまとめて加算し、毎秒 0.07% を取得します。",
        img: "./img/etf.png",
    },
    lemonadeStand = {
        name: "Lemonade Stand",
        cost: "30000",
        max: "1000",
        oneclickCost: "30",
        oneclickHow: "sec",
        describe: "毎秒 30 円を取得します。",
        img: "./img/lemonade stand.png",
    },
    iceCreamTruck = {
        name: "Ice Cream Truck",
        cost: "100000",
        max: "500",
        oneclickCost: "120",
        oneclickHow: "sec",
        describe: "毎秒 120 円を取得します。",
        img: "./img/ice cream truck.png",
    },
    house = {
        name: "House",
        cost: "20000000",
        max: "100",
        oneclickCost: "32000",
        oneclickHow: "sec",
        describe: "毎秒 32,000 円を取得します。",
        img: "./img/house.png",
    },
    townHouse = {
        name: "Town House",
        cost: "40000000",
        max: "100",
        oneclickCost: "64000",
        oneclickHow: "sec",
        describe: "毎秒 64,000 円を取得します。",
        img: "./img/town house.png",
    },
    mansion = {
        name: "Mansion",
        cost: "250000000",
        max: "20",
        oneclickCost: "500000",
        oneclickHow: "sec",
        describe: "毎秒 500,000 円を取得します。",
        img: "./img/mansion.png",
    },
    industrialSpace = {
        name: "Industrial Space",
        cost: "1000000000",
        max: "10",
        oneclickCost: "2200000",
        oneclickHow: "sec",
        describe: "毎秒 2,200,000 円を取得します。",
        img: "./img/industrial space.png",
    },
    hotelSkyscraper = {
        name: "Hotel Skyscraper",
        cost: "10000000000",
        max: "5",
        oneclickCost: "25000000",
        oneclickHow: "sec",
        describe: "毎秒 25,000,000 円を取得します。",
        img: "./img/hotel skyscraper.png",
    },
    bulletSpeedSkyRailway = {
        name: "Bullet-Speed Sky Railway",
        cost: "10000000000000",
        max: "1",
        oneclickCost: "30000000000",
        oneclickHow: "sec",
        describe: "毎秒 30,000,000,000 円を取得します。",
        img: "./img/bullet-speed sky railway.png",
    },
]

console.log(menuData[1].cost)



function menuList(menu){
    const menuContainer = document.getElementById("menu-container");
    console.log(menu[1].cost)

    let menuBarStr = "";
    for(let i = 0 ; i < menu; i++){
        console.log(1)
        let menuBar = 
        `
        <div class="col-4 p-2 d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center">
            <img src="${menu[i].img}" class="full-img col-6">
        </div>
        
        </div>
        <div class="col-4 d-flex justify-content-between flex-wrap">
            <div class="col-12 d-flex align-items-center">
                <p class="h3 text-start">${menu[i].name}</p>
            </div>
            <div class="col-4 d-flex align-items-center">
                <p class="h5 text-start">￥${menu[i].cost}</p>
            </div>
    
        </div>
        <div class="col-4 px-2 d-flex justify-content-end align-items-center flex-column">
            <div class="bg-transparent col-6 radius-right d-flex justify-content-end align-items-center">
                <p class="h2 text-center mt-2 text-success">0</p>
            </div>
            <div class="col-4 d-flex jutify-content-end align-items-center">
                <p class="h6 text-start text-primary">￥${menu[i].oneclickCost}/${menu[i].oneclickHow}</p>
            </div>
            
        </div>
        `
    
        menuBarStr += menuBar;
    
    }
    menuContainer.innerHTML += menuBarStr
}
