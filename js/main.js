// main

function displayON(ele){
    ele.classList.remove("d-none")
    ele.classList.add("d-block")
}

function displayOFF(ele){
    ele.classList.remove("d-block")
    ele.classList.add("d-none")
}

function changeClassListData(ele, add, remove){
    ele.classList.remove(remove)
        ele.classList.add(add)
}


const configPage = {
    loginPage: document.querySelectorAll("#login-page")[0],
    mainPage: document.querySelectorAll("#main-page")[0],
    menuContainer: document.querySelectorAll("#menu-container")[0],
    menuBarContainer: document.querySelectorAll("#menuBar-container")[0],
    itemPage: document.querySelectorAll("#item-page")[0],
    popupPage: document.querySelectorAll("#popup")[0],
}

const button = {
    loginButton: document.getElementById("login-button"),
    menuBarButton: document.querySelectorAll(".menuBar-btn"),
    // goBackButton: document.querySelectorAll("#go-back-btn")[0],
}


button.loginButton.addEventListener("click",function(){
    displayOFF(configPage.loginPage);
    displayON(configPage.mainPage);
    menuListPage(menuData);
    startTimer()
    
})


   


class HumbergerGame {
    constructor(name, year,days,money){
        this.name = name;
        this.year = year;
        this.days = days;
        this.money = money;
    }
}

const menuData = [
    flipMachine = {
        id: 0,
        name: "Flip Machine",
        cost: 15000,
        max: 500,
        count: 0,
        total: 0,
        setClickCost: 25,
        oneclickCost: 25,
        oneclickHow: "click",
        describe: "グリルをクリックごとに25円を取得します。",
        img: "./img/flip machine.png",

    },
    etfStock = {
        id: 1,
        name: "ETF Stock",
        cost: 300000,
        max: "∞",
        count: 0,
        total: 0,
        oneclickCost: 0.1,
        oneclickHow: "sec",
        describe: "ETF 銘柄の購入分をまとめて加算し、毎秒 0.1% を取得します。",
        img: "./img/etf.png",
    },
    etfBonds = {
        id: 2,
        name: "ETF Bonds",
        cost: 300000,
        max: "∞",
        count: 0,
        total: 0,
        oneclickCost: 0.07,
        oneclickHow: "sec",
        describe: "債券 ETF の購入分をまとめて加算し、毎秒 0.07% を取得します。",
        img: "./img/etf.png",
    },
    lemonadeStand = {
        id: 3,
        name: "Lemonade Stand",
        cost: 30000,
        max: 1000,
        count: 0,
        total: 0,
        oneclickCost: 30,
        oneclickHow: "sec",
        describe: "毎秒 30 円を取得します。",
        img: "./img/lemonade stand.png",
    },
    iceCreamTruck = {
        id: 4,
        name: "Ice Cream Truck",
        cost: 100000,
        max: 500,
        count: 0,
        total: 0,
        oneclickCost: 120,
        oneclickHow: "sec",
        describe: "毎秒 120 円を取得します。",
        img: "./img/ice cream truck.png",
    },
    house = {
        id: 5,
        name: "House",
        cost: 20000000,
        max: 100,
        count: 0,
        total: 0,
        oneclickCost: 32000,
        oneclickHow: "sec",
        describe: "毎秒 32,000 円を取得します。",
        img: "./img/house.png",
    },
    townHouse = {
        id: 6,
        name: "Town House",
        cost: 40000000,
        max: 100,
        count: 0,
        total: 0,
        oneclickCost: 64000,
        oneclickHow: "sec",
        describe: "毎秒 64,000 円を取得します。",
        img: "./img/town house.png",
    },
    mansion = {
        id: 7,
        name: "Mansion",
        cost: 250000000,
        max: 20,
        count: 0,
        total: 0,
        oneclickCost: 500000,
        oneclickHow: "sec",
        describe: "毎秒 500,000 円を取得します。",
        img: "./img/mansion.png",
    },
    industrialSpace = {
        id: 8,
        name: "Industrial Space",
        cost: 1000000000,
        max: 10,
        count: 0,
        total: 0,
        oneclickCost: 2200000,
        oneclickHow: "sec",
        describe: "毎秒 2,200,000 円を取得します。",
        img: "./img/industrial space.png",
    },
    hotelSkyscraper = {
        id: 9,
        name: "Hotel Skyscraper",
        cost: 10000000000,
        max: 5,
        count: 0,
        total: 0,
        oneclickCost: 25000000,
        oneclickHow: "sec",
        describe: "毎秒 25,000,000 円を取得します。",
        img: "./img/hotel skyscraper.png",
    },
    bulletSpeedSkyRailway = {
        id: 10,
        name: "Bullet-Speed Sky Railway",
        cost: 10000000000000,
        max: 1,
        count: 0,
        total: 0,
        oneclickCost: 30000000000,
        oneclickHow: "sec",
        describe: "毎秒 30,000,000,000 円を取得します。",
        img: "./img/bullet-speed sky railway.png",
    },
]

// メニューリストの追加
function menuListPage(menuData){
    const menuContainer = document.getElementById("menu-container")

    let div = `<div id="menuBar-container" class="d-block menu-view">`

    for(let i = 0; i < menuData.length;i++){
        div += 
        `
        <div onclick="clickPopupPage(${i})"  class="menuBar-btn alert${menuData[i].id} bg-white col-12 blockquote p-1 radius-10 d-flex justify-content-between">
            <div class="col-3 p-2 d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-center align-items-center">
                    <img src="${menuData[i].img}" class="full-img col-5">
                </div>
            
            </div>
            <div class="col-4 d-flex justify-content-between flex-wrap">
                <div class="col-12 d-flex align-items-center">
                    <p class="h4 text-start">${menuData[i].name}</p>
                </div>
                <div class="col-4 d-flex align-items-center">
                    <p class="h5 text-start">￥<span id="item-cost-view${i}">${menuData[i].cost}</span></p>
                </div>

            </div>
            <div class="col-5 px-2 d-flex justify-content-end align-items-center flex-column">
                <div class="bg-transparent col- radius-right d-flex justify-content-end align-items-center">
                    <p id="count-view${i}" class="h2 mt-2 text-success text-end">${menuData[i].count}</p>
                </div>
                <div class="col-6 d-flex jutify-content-end align-items-center">
                    <p class="h6 text-end text-primary">￥${menuData[i].oneclickCost}/${menuData[i].oneclickHow}</p>
                </div>
                
            </div>
        </div>
        `
    }

    div += `</div>`
    menuContainer.innerHTML = div;

    // makeButtonListener(menuData);
}



// define valiable
const dayView = document.getElementById("days-view");
const yearView = document.getElementById("year-view");
const costView = document.getElementById("cost-view");

// define function
// int:num個上がる
function numUp(ele, num){
    ele.innerHTML = num + parseInt(ele.innerHTML);
}

// １秒間赤文字に変わる
function yearChangeRed(){
    yearView.classList.add("text-danger")
    setInterval(() => {
    yearView.classList.remove("text-danger");
    },1000)
};

function costUpHumberger(){
    intCostView =  parseInt(costView);
    intCostView += menuData.flipMachine.setClickCost
}

function startTimer(){
    // 1day 処理
setInterval(() => {
    numUp(dayView,1);
    if (parseInt(dayView.innerHTML) % 365 === 0){
        yearChangeRed()
        numUp(yearView,1);

    }
    addSecondCost(menuData);

},1000);


}

function yearChangeRed(){
    yearView.classList.add("text-danger")
    setInterval(()=> {
    yearView.classList.remove("text-danger");
    },1000)
};

function addSecondCost(menuData){
    for(let i = 1; i < menuData.length; i++){
        let countItem = "count-view" + i.toString()
        let countView = document.getElementById(countItem);
        let intCountView = parseInt(countView.innerHTML)
        let costView = document.getElementById("cost-view");
        let intCostView = parseInt(costView.innerHTML)
        
        if(0 < intCountView){
            if (i === 1){
                console.log(menuData[i].cost)
                intCostView += parseInt(menuData[i].cost * 0.001)
                costView.innerHTML = intCostView
            
        

            }else if(i === 2){
                
                intCostView += parseInt((menuData[i].cost * intCountView) * 0.0007)
                costView.innerHTML = intCostView

            }else{
                costView.innerHTML = intCostView + (menuData[i].oneclickCost * intCountView);
    
            }

        }

        
    }
}



// ハンバーガークリック処理（1 / click）
const clickHum = document.getElementById("click-humberger");
const clickHumNum = document.getElementById("click-humberger-num");
clickHum.addEventListener("click", function(){
    numUp(clickHumNum,1)
    numUp(costView, parseInt(menuData[0].setClickCost,10))
})



function clickPopupPage(num){
    
    let itemData = menuData[num];
    let itemPage = getItemsPage(itemData);
    popupPage(itemPage,itemData,num)

}



// moveItemsPage(Obj,Number)アイテムページへ移動 / move to the Item Page
function getItemsPage(itemData){
    let itemPage = 
    `
        <div id="item-page" class="item-page">
            <div class="p-1 bg-white blockquote radius-10">
                <div class="p-1 d-flex justify-content-center">
                    <div class="col-2">
                        <div class="p-3 rounded-circle bg-white">
                            <img src="${itemData.img}" class="full-img">
                        </div>
                    </div>
                    <div class="col-5 d-flex justify-content-center align-items-center">
                        <div class="d-flex justify-content-center align-items-center">
                            <p class="h3 text-center">${itemData.name}</p> 
                        </div>
                    </div>
                
                </div>
                <div class="d-flex flex-wrap p-2">
                    <div class="col-12">
                        <div class="d-flex justify-content-center align-items-center flex-column">
                            <div class="col-10 d-flex justify-content-center align-items-center">
                                <div class="p-1 col-12 d-flex justify-content-center">
                                    <p class="h6 text-center">${itemData.describe}</p>
                                </div>
                            </div>

                            <div class="col-10 d-flex border-bottom justify-content-around align-items-center">
                                <div class="p-1 col-4 d-flex justify-content-center">
                                    <p class="h5 text-center text-danger">Max</p>
                                </div>
                                <div class="p-1 col-8 d-flex justify-content-start">
                                    <p class="h5 text-center"><span id="max-view">${itemData.max}</span><span class="text-success h6"> /times</span></p>
                                </div>
                            </div>

                            <div class="mt-1 col-10 d-flex border-bottom justify-content-around align-items-center">
                                <div class="p-1 col-4 d-flex justify-content-center">
                                    <p class="h5 text-center text-danger">Price</p>
                                </div>
                                <div class="p-1 col-8 d-flex justify-content-start">
                                    <p class="h5 text-center">${itemData.cost}<span class="text-success h6"> /¥</span></p>
                                </div>
                            </div>
                            
                            <div class="mt-1 col-10 d-flex border-bottom justify-content-around align-items-center">
                                <div class="p-1 col-4 d-flex justify-content-center">
                                    <p class="h5 text-center text-danger">Get</p>
                                </div>
                                <div class="p-1 col-8 d-flex justify-content-start">
                                    <p class="h5 text-center">${itemData.oneclickCost}<span class="text-success h6"> /${itemData.oneclickHow}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-1">
                    <div class="d-flex flex-column justify-content-center bg-white radius-10">
                        <div class="p-2">
                            <p class="h6 text-center">How many would you like to buy?</p>
                        </div>
                        <div class="col-12 input-group-sm p-2 d-flex justify-content-center">
                            <input type="number" min="0" max="500" placeholder="0" class="input-int-btn col-8 with-full radius-10 text-end">
                        </div>
                        <div class="p-2">
                            <p class="h5 text-center">Total: ¥ <span class="total-view h3 text-success">0</span></p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                        <div class="p-2 d-flex col justify-content-around align-items-center">
                            <div class="p-1 col-5 d-flex justify-content-center">
                                <button class="go-back-btn btn btn-danger col-10">Go Back</button>
                            </div>
                            <div class="p-1 col-5 d-flex justify-content-center">
                                <button class="go-next-btn btn btn-success col-10" >Purchase</button>
                            </div>

                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    `
    return itemPage
}

// movePage(String)/ ページの切り替え / exchange the Page 
function movePage(nextPage){
    configPage.menuContainer.innerHTML = ""
    configPage.menuContainer.innerHTML = nextPage;
}


function popupPage(itemPage,itemData,i){
    // ポップアップページを表示 / popup display on 
    const popupPage = document.getElementById("popup")
    const popupInner = document.getElementById("popup-inner")
    displayON(popupPage)
    popupInner.innerHTML = itemPage

    // 
    const inputIntBtn = popupInner.querySelectorAll(".input-int-btn")[0];
    const totalView = document.querySelectorAll(".total-view")[0];

    inputIntBtn.addEventListener("change",function(){
        
        const maxView = popupInner.querySelectorAll("#max-view")[0];
        let intMaxView = parseInt(maxView.innerHTML) 
        if(maxView.innerHTML == "∞"){
            value = inputIntBtn.value
        }else{
            if(intMaxView < inputIntBtn.value){
                inputIntBtn.value = intMaxView
                value = intMaxView
                alert("購入制限超えてます。")
            }else{
                value = inputIntBtn.value
            }
        }
        

        inputDataTotalCheck(itemData,value,totalView);

    })

    const backBtn = popupInner.querySelectorAll(".go-back-btn")[0];
    backBtn.addEventListener("click",function(){
        popdownPage()
    })

    const nextBtn = popupInner.querySelectorAll(".go-next-btn")[0];
    nextBtn.addEventListener("click",function(){
        
        let value = inputIntBtn.value
        let intTotal = parseInt(totalView.innerHTML)
        let intCost = parseInt(costView.innerHTML)
        
        if (intTotal > intCost){
            alert("購入できません。購入コストを下げてください。")

        }else{
            if(0 >= value){
                alert("購入量を入力ください。")
            }else{
                let countViewId = "count-view" + i.toString()
                if(i===0){
                    if(itemData.max > 0){
                        if(itemData.max <= value){
                            value = itemData.max
                            const countView = document.getElementById(countViewId)
                            changeRedText(countView)
                            
    
                            let alertNum = ".alert" + itemData.id.toString()
                            const menuBarButton = document.querySelectorAll(alertNum)[0];
                            addAlert(menuBarButton)
                            
                        }
                        itemData.setClickCost += value * itemData.oneclickCost;
                        const clickCostView = document.getElementById("click-cost-view");
                        overwriteCost(clickCostView,itemData.setClickCost);
    
                        let sumCost = parseInt(costView.innerHTML) - itemData.cost * value;
                        overwriteCost(costView,sumCost);
    
                        const countView = document.getElementById(countViewId)
                        itemData.count += parseInt(value);
                        overwriteCost(countView,itemData.count)
    
                        itemData.max -= parseInt(value);
                        console.log(itemData.count)
    
                    }else{
    
                        
                        alert("購入制限超えてます。他の商品を購入ください。")
    
                    }
                    popdownPage()
                }  

                else if(i === 1 || i === 2){
                    const item1CostView = document.getElementById("item-cost-view1");
                    let total = 0
                    if(i === 1){
                        for(let i = 0 ; i < value; i++){
                            total += parseInt(itemData.cost * Math.pow(1+itemData.oneclickCost,i))
                        }
            
                        item1CostView.innerHTML = total
                        itemData.cost = total
                    }else if(i === 2){
                        itemData.total += value * itemData.oneclickCost;
                        total = itemData.total

                    }
                

                    let sumCost = parseInt(costView.innerHTML) - total;
                        overwriteCost(costView,sumCost);

                    const countView = document.getElementById(countViewId)
                    itemData.count += parseInt(value);
                    overwriteCost(countView,itemData.count)

                    popdownPage()

                    
                    
                    

                }else if(2 < i){
                    if(itemData.max > 0 || itemData.max == "∞"){
                        if(itemData.max <= value){
                            value = itemData.max
                            const countView = document.getElementById(countViewId)
                            changeRedText(countView)
                            
    
                            let alertNum = ".alert" + itemData.id.toString()
                            const menuBarButton = document.querySelectorAll(alertNum)[0];
                            addAlert(menuBarButton)
                            
                        }
                        itemData.total += value * itemData.oneclickCost;

                        let sumCost = parseInt(costView.innerHTML) - itemData.cost * value;
                        overwriteCost(costView,sumCost);
    
                        const countView = document.getElementById(countViewId)
                        itemData.count += parseInt(value);
                        overwriteCost(countView,itemData.count)
    
                        itemData.max -= parseInt(value);
                        console.log(itemData.count)

                    }else{
                        alert("購入制限超えてます。他の商品を購入ください。")
                    }
                    popdownPage()
                }else{
                    console.log("system error : メニューデータにない番号をクリックしている可能性があります")
                    console.log(i)
                }
            }
        }

    })

}

function stockSystem(itemData,value){}

function overwriteCost(ele,cost){
    ele.innerHTML = cost;
}

function addAlert(menuBarButton){
    menuBarButton.onclick = ""
    
    menuBarButton.addEventListener("click",function(){
        alert("購入制限を超えてます。他の商品を購入ください。")
    })
}


// ポップアップページを非表示 / popup display off
function popdownPage(){
    
    let popdownPage = document.getElementById("popup")
    displayOFF(popdownPage)
    
}

function changeRedText(ele){
    changeClassListData(ele, "text-danger","text-success")
}

// inputDataTotalCheck(Obj, int) / 
function inputDataTotalCheck(itemData,value,totalView){
    let total = 0

    if(itemData.id == 1){
        for(let i = 0 ; i < value; i++){
            total += parseInt(itemData.cost * Math.pow(1+itemData.oneclickCost,i))
            totalView.innerHTML = total
        }
        
    }else{
         // もし数値が変わったら、トータルコストを表示 / view total cost if number of value change 
        total = value * parseInt(itemData.cost)
        totalView.innerHTML = total
    }
   

    // もしトータルコストが所持コストより高かったら、文字を赤色 / change red text if total cost is more expencive than possesion cost
    let intCostView = parseInt(costView.innerHTML);
    if (intCostView > total){
        changeClassListData(totalView, "text-success", "text-danger");
    }else if(intCostView <= total){
        changeClassListData(totalView,"text-danger","text-success")
    }
}

