
// main

const config = {
    initialPage: document.getElementById("initial-page"),
    mainPage: document.getElementById("main-page"),
    popupPage: document.getElementById("popup-page"),
}

class User {
    constructor(name,password,age,days,money,items){
        this.name = name;
        this.password = password;
        this.age = age;
        this.days = days;
        this.money = money;
        this.clickCount = 0;
        this.incomePerClick = 25;
        this.incomePerSec = 0;
        this.stock = 0;
        this.items = items;
    }
}

class Items{
    constructor(name, type,describe, currentAmount, maxAmount, perMoney, perRate, price ,url){
        this.name = name;
        this.type = type;
        this.describe = describe
        this.currentAmount = currentAmount;
        this.maxAmount = maxAmount;
        this.perMoney = perMoney;
        this.perRate = perRate;
        this.price = price;
        this.url = url;
    }
}

class View{
    static createInitialPage(){
        let container = `
            // Title
            <div class="col-12 d-flex justify-content-center p-2">
                <p class="h3 text-center text-white lang">Welcome to Click Empire Game</p>
            
            </div>
            // input user name
            <div class="col-12 col-sm-8 d-flex justify-content-center input-group p-1">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                <input id="input-user-name" type="text" class="form-control lang" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">

            </div>
            // input password
            <div class="col-12 col-sm-8 d-flex justify-content-center input-group p-1">
                <span class="input-group-text" id="password-eye" eye="1"><i id="icon-eye" class="fas fa-eye-slash"></i></span>
                <input type="password" id="password" class="form-control lang" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
    
            </div>
           
            <div class="col-12 d-flex justify-content-around mt-4 p-3">
                <button id="new-game-button" class="btn btn-danger p-2 col-5 rounded-pill fw-bold lang">REGISTER</button>
                <button id="login-button" class="btn btn-success p-2 col-5 rounded-pill fw-bold lang">LOG IN</button>
            
            </div>
        `
        return config.initialPage.innerHTML = container
    }

    static createMainPage(user){

        let container = document.createElement("div")
        container.classList.add("bg-dark", "radius-10", "col-11", "col-md-12", "shadow", "d-flex", "justify-content-center", "align-items-center", "flex-wrap", "p-3")
        
        let container1 = document.createElement("div")
        container1.classList.add("p-2", "col-4","d-flex","justify-content-center","align-items-center");
        container1.innerHTML = 
        `
        <div id="burgerStatus" class="bg-gray radius-10 d-flex flex-column p-2">
        </div>
        `

        let container2 = document.createElement("div");
        container2.classList.add("p-2", "col-8");
        
        let menuContainer = document.createElement("div");
        menuContainer.classList.add("bg-gray", "radius-10","d-flex","flex-column","p-2", "justify-content-center","align-items-center");
        menuContainer.innerHTML =
        `
        <div id="userInfo" class="full-width d-flex justify-content-center align-items-center">
        </div>
        <div id="itemsList" class="col-12 d-flex justify-content-center align-items-center">
        </div>
        `
        
        container2.append(menuContainer)

        let container3 = document.createElement("div");
        container3.classList.add("col-12","d-flex","justify-content-center","p-3");
        container3.innerHTML = 
        `
        <div class="p-2 col-4">
            <button id="reset-button" class="btn btn-danger p-2 col-12 rounded-pill fw-bold lang">RESET</button>
        </div>
        <div class="p-2 col-4">
            <button id="save-button" class="btn btn-success p-2 col-12 rounded-pill fw-bold lang">SAVE</button>
        </div>
        `

        // let container = container1
        // container += container2
        // container += container3

        container.append(container1)
        container.append(container2)
        container.append(container3)

        container1.querySelectorAll("#burgerStatus")[0].append(View.createBurgerStatus(user));
        menuContainer.querySelectorAll("#userInfo")[0].append(View.createUserInfo(user));
        menuContainer.querySelectorAll("#itemsList")[0].append(View.createItemPage(user));
        

        let resetBtn = container3.querySelectorAll("#reset-button")[0];
        resetBtn.addEventListener("click",function(){
            Controller.resetAllData(user);
        })

        let saveBtn = container3.querySelectorAll("#save-button")[0];
        saveBtn.addEventListener("click",function(){
            Controller.saveUserData(user);
            
            Controller.stopTimer(user);
            Controller.initializePage()
        })

        return container

    }

    static createBurgerStatus(user){

        let container1 = document.createElement("div");
        container1.classList.add("p-2","col-12","d-flex","justify-content-center","align-items-center")
        container1.innerHTML = 
        `
        <div class="col-12 bg-white shadow radius-10 p-1">
            <p class="text-center h2 p-1"><span id="click-humberger-num" class="text-success">${user.clickCount}</span> Burgers</p>
            <p class="text-center text-primary h6 p-1">
                ￥
                <span id="click-cost-view">${user.incomePerClick}</span>
                /click</p>
        </div>
        `

        let container2 = document.createElement("div");
        container2.classList.add("p-2");
        container2.innerHTML = 
        `
        <div class="col-12 bg-white height-50 shadow radius-10 p-1 d-flex justify-content-center align-items-center flex-column">
            <div class="col-5 p-2">
                <img id="click-humberger" src="./img/hamburger.png" class="full-img">
            </div>
            <div class="col-12">
                <p class="text-center h5 p-1">Click Humberger!</p>
            </div>
        </div>
        `
        let container = document.createElement("div")
        container.classList.add("d-flex","justify-content-center","align-items-center","flex-column")
        container.append(container1);
        container.append(container2)

        let burgerClick = container2.querySelectorAll("#click-humberger")[0];
        burgerClick.addEventListener("click", function(){
            Controller.updateByClickBurger(user);
        })

        return container

    }

    static createUserInfo(user){
        let container = document.createElement("div")
        container.classList.add("d-flex","flex-wrap")
        container.innerHTML=`
        <div class="p-2 col-6">
            <div class="bg-white p-1 radius-10">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="h5 text-center"><span><i class="fas fa-user"></i> </span>
                        <span id="user-name">${user.name}</span></p>
                </div>
            </div>
        </div>
        <div class="p-2 col-6">
            <div class="bg-white p-1 radius-10">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="h5 text-center">
                        <span><i class="fas fa-user"></i> </span>
                        <span id="year-view">${user.age}</span>
                            years old</p>
                </div>

            </div>
        </div>
        <div class="p-2 col-6">
            <div class="bg-white p-1 radius-10">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="h5 text-center">
                        <span><i class="fas fa-clock"></i></span>
                        <span id="days-view">${user.days}</span>
                            days</p>
                </div>

            </div>
        </div>
        <div class="p-2 col-6">
            <div class="bg-white p-1 radius-10">
                <div class="d-flex justify-content-center align-items-center">
                    <p class="h5 text-center"><span><i class="fas fa-hand-holding-usd"></i></span>
                        $
                        <span id="cost-view">${user.money}</span>
                    </p>
                </div>

            </div>
        </div>
        `

        return container

    }

    static createItemPage(user){
        let container = document.createElement("div")
        container.classList.add("p-2", "col-12","mt-2")

        let cover = document.createElement("div");
        cover.classList.add("bg-white","p-1","radius-10","height-50","overflow-auto")

        let itemsList = document.createElement("div");
        itemsList.classList.add("p-2", "col-12","d-flex","justify-content-center","align-items-center","flex-column")

       
        for(let i = 0; i < user.items.length; i++){
            let selectItem = document.createElement("div");
            selectItem.classList.add("select-item","menuBar-btn","bg-white","col-12","blockquote","p-1","radius-10","d-flex","justify-content-between")
            selectItem.innerHTML =
            `
            
                <div class="col-3 p-2 d-flex justify-content-center align-items-center">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="${user.items[i].url}" class="full-img col-5">
                    </div>
                
                </div>
                <div class="col-4 d-flex justify-content-between flex-wrap">
                    <div class="col-12 d-flex align-items-center">
                        <p class="h4 text-start">${user.items[i].name}</p>
                    </div>
                    <div class="col-4 d-flex align-items-center">
                        <p class="h5 text-start">￥<span>${user.items[i].price}</span></p>
                    </div>
    
                </div>
                <div class="col-5 px-2 d-flex justify-content-end align-items-center flex-column">
                    <div class="bg-transparent col- radius-right d-flex justify-content-end align-items-center">
                        <p class="h2 mt-2 text-success text-end">${user.items[i].currentAmount}</p>
                    </div>
                    <div class="col-6 d-flex jutify-content-end align-items-center">
                        <p class="h6 text-end text-primary">￥${View.displayItemIncome(user.items[i], user.items[i].type)}</p>
                    </div>
                    
                </div>
            
            `
            itemsList.append(selectItem)
        }

        cover.append(itemsList);
        container.append(cover);


        let select = container.querySelectorAll(".select-item");
        for(let i=0; i < select.length; i++){
            select[i].addEventListener("click",function(){
                config.popupPage.classList.remove("d-none")
                console.log("popup test")
                config.popupPage.append(View.createPurchasePage(user,i))
                
            })
        }

        return container
    }

    static createPurchasePage(user, index){
        let container = document.createElement("div")
        container.classList.add("col-12","d-flex","justify-content-center","align-items-center")
        container.innerHTML=`
        <div id="bg-black-popup" class="bg-black-popup d-flex justify-content-center align-items-center">
            <div id="popup-inner" class="p-2 justify-content-center align-items-center">
                <div id="item-page" class="item-page">
                    <div class="p-1 bg-white blockquote radius-10">
                        <div class="p-1 d-flex justify-content-center">
                            <div class="col-2">
                                <div class="p-3 rounded-circle bg-white">
                                    <img src="${user.items[index].url}" class="full-img">
                                </div>
                            </div>
                            <div class="col-5 d-flex justify-content-center align-items-center">
                                <div class="d-flex justify-content-center align-items-center">
                                    <p class="h3 text-center">${user.items[index].name}</p> 
                                </div>
                            </div>
                        
                        </div>
                        <div class="d-flex flex-wrap p-2">
                            <div class="col-12">
                                <div class="d-flex justify-content-center align-items-center flex-column">
                                    <div class="col-10 d-flex justify-content-center align-items-center">
                                        <div class="p-1 col-12 d-flex justify-content-center">
                                            <p class="h6 text-center">${user.items[index].describe}</p>
                                        </div>
                                    </div>

                                    <div class="col-10 d-flex border-bottom justify-content-around align-items-center">
                                        <div class="p-1 col-4 d-flex justify-content-center">
                                            <p class="h5 text-center text-danger">Max</p>
                                        </div>
                                        <div class="p-1 col-8 d-flex justify-content-start">
                                            <p class="h5 text-center"><span id="max-view">${View.displayMaxPurchase(user.items[index].maxAmount)}</span><span class="text-success h6"> /times</span></p>
                                        </div>
                                    </div>

                                    <div class="mt-1 col-10 d-flex border-bottom justify-content-around align-items-center">
                                        <div class="p-1 col-4 d-flex justify-content-center">
                                            <p class="h5 text-center text-danger">Price</p>
                                        </div>
                                        <div class="p-1 col-8 d-flex justify-content-start">
                                            <p class="h5 text-center">${user.items[index].price}<span class="text-success h6"> /¥</span></p>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-1 col-10 d-flex border-bottom justify-content-around align-items-center">
                                        <div class="p-1 col-4 d-flex justify-content-center">
                                            <p class="h5 text-center text-danger">Get</p>
                                        </div>
                                        <div class="p-1 col-8 d-flex justify-content-start">
                                            <p class="h5 text-center">¥${View.displayItemIncome(user.items[index],user.items[index].type)}</p>
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
                                    <p class="h5 text-center">Total: ¥ <span id="total-price" class="h3 text-success">0</span></p>
                                </div>
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                                <div class="p-2 d-flex col justify-content-around align-items-center">
                                    <div class="p-1 col-5 d-flex justify-content-center">
                                        <button id="back-button" class="btn btn-danger col-10">Go Back</button>
                                    </div>
                                    <div class="p-1 col-5 d-flex justify-content-center">
                                        <button id="purchase-button" class="btn btn-success col-10" >Purchase</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        `

        let inputCount = container.querySelectorAll("input")[0];
        inputCount.addEventListener("click",function(){
            container.querySelectorAll("#total-price")[0].innerHTML = Controller.getTotalPrice(user.items[index],inputCount.value)
        })

        let backBtn = container.querySelectorAll("#back-button")[0];
        backBtn.addEventListener("click",function(){
            config.popupPage.innerHTML = '';
            config.popupPage.classList.add("d-none");
            config.mainPage.innerHTML = '';
            View.updateMainPage(user)
        })

        let purchaseBtn = container.querySelectorAll("#purchase-button")[0];
        purchaseBtn.addEventListener("click",function(){
            Controller.purchaseItems(user,index,inputCount.value)
            config.popupPage.innerHTML = '';
            config.popupPage.classList.add("d-none");
            config.mainPage.innerHTML = '';
            View.updateMainPage(user)
        })

        return container

    }

    static displayMaxPurchase(maxAmount){
        if(maxAmount === -1) return "∞";
        else return maxAmount
    }

    static displayItemIncome(item, type){
        if(type === "ability") return item.perMoney + " /click";
        else if(type === "investment") return item.perRate + " /sec";
        else return item.perMoney + " /sec";
    }

    static updateMainPage(user){
        config.popupPage.innerHTML = "";
        config.mainPage.append(View.createMainPage(user));
    }

    static updateBurgerPage(user){
        let burgerStatus = config.mainPage.querySelectorAll("#burgerStatus")[0];
        burgerStatus.innerHTML = "";
        burgerStatus.append(View.createBurgerStatus(user));
    }

    static updateUserInfo(user){
        let userInfo = config.mainPage.querySelectorAll("#userInfo")[0];
        userInfo.innerHTML = "";
        userInfo.append(View.createUserInfo(user));
    }

}

class Controller{
    timer;

    static startGame(){
        View.createInitialPage();
        let newGameBtn = config.initialPage.querySelectorAll("#new-game-button")[0];
        newGameBtn.addEventListener("click",function(){
            let userName = config.initialPage.querySelectorAll("input")[0].value;
            let password = config.initialPage.querySelectorAll("input")[1].value;
            if(userName === ""){
                alert("Please input your name.");
            }else if(userName != "" && password === ""){
                alert("Please input your password");
            }else{
                let user = Controller.createInitialUserAccount(userName,password);
                Controller.moveInitialToMain(user);
            }
        })

        let loginBtn = config.initialPage.querySelectorAll("#login-button")[0];
        loginBtn.addEventListener("click", function(){
            let userName = config.initialPage.querySelectorAll("input")[0].value;
            let password = config.initialPage.querySelectorAll("input")[1].value;
            if(userName == ""){
                alert("Please put your name");
            } else if(userName != "" && password === ""){
                alert("Please input your password");
            }else{
                let userData = Controller.getUserData(userName);
                if(userData == null){
                    alert("You was wrong user name or password.");
                }else{
                    let passwordData = userData.password;
                    if (password != passwordData) alert("You was wrong user name or password.")
                    else Controller.moveInitialToMain(userData);
                }
                
            }            
        })
    }

    static moveInitialToMain(user){
        config.initialPage.classList.add("d-none");
        config.mainPage.classList.remove("d-none")
        config.mainPage.append(View.createMainPage(user));
        Controller.startTimer(user);
    }

    static createInitialUserAccount(userName,password){
        let itemList = [
        new Items("Flip machine", "ability","グリルをクリックごとに 25 円を取得します。", 0, 500, 25, 0, 15000, "./img/flip machine.png"),
        new Items("ETF Stock", "investment","ETF 銘柄の購入分をまとめて加算し、毎秒 0.1% を取得します。", 0, -1, 0, 0.1, 300000, "./img/etf.png"),
        new Items("ETF Bonds", "investment","債券 ETF の購入分をまとめて加算し、毎秒 0.07% を取得します。", 0, -1, 0, 0.07, 300000, "./img/etf.png"),
        new Items("Lemonade Stand", "realState","毎秒 30 円を取得します。", 0, 1000, 30, 0, 30000, "./img/lemonade stand.png"),
        new Items("Ice Cream Truck", "realState","毎秒 120 円を取得します。", 0, 500, 120, 0, 100000, "./img/ice cream truck.png"),
        new Items("House", "realState","毎秒 32,000 円を取得します。", 0, 100, 32000, 0, 20000000, "./img/house.png"),
        new Items("TownHouse", "realState","毎秒 64,000 円を取得します。", 0, 100, 64000, 0, 40000000, "./img/town house.png"),
        new Items("Mansion", "realState","毎秒 500,000 円を取得します。", 0, 20, 500000, 0, 250000000, "./img/mansion.png"),
        new Items("Industrial Space", "realState","毎秒 2,200,000 円を取得します。", 0, 10, 2200000, 0, 1000000000, "./img/industrial space.png"),
        new Items("Hotel Skyscraper", "realState","毎秒 25,000,000 円を取得します。", 0, 5, 25000000, 0, 10000000000, "./img/hotel skyscraper.png"),
        new Items("Bullet-Speed Sky Railway", "realState","毎秒 30,000,000,000 円を取得します。", 0, 1, 30000000000, 0, 10000000000000, "./img/bullet-speed sky railway.png"),
        ]
        if(userName === "cheater") return new User(userName,password, 20, 0, Math.pow(10,9),itemList);
        else return new User(userName,password, 20, 0 , 5000000, itemList);
    }

    static startTimer(user){
        Controller.timer = setInterval(function(){
            user.days++;
            user.money += parseInt(user.incomePerSec);
            if(user.days % 360 === 0){
                user.age++;
                View.updateUserInfo(user);
            }else{
                View.updateUserInfo(user);
            }
        },1000);
    }

    static stopTimer(){
        clearInterval(Controller.timer);
    }

    static purchaseItems(user,index,count){
        if(count <= 0 || count % 1 != 0){
            alert("Invalid Number");
        }else if(Controller.getTotalPrice(user.items[index], count) > user.money){
            alert("You don't have enough money.")
        }else if(user.items[index].currentAmount + count > user.items[index].maxAmount && user.items[index].type != "investment"){
            alert("You can't buy anymore")
        }else{
            user.money = user.money - parseInt(Controller.getTotalPrice(user.items[index],count));
            user.items[index].currentAmount += Number(count);
            if(user.items[index].name === "ETF Stock"){
                user.stock += Controller.getTotalPrice(user.items[index],count);
                user.items[index].price = Controller.caluculateEtfStockPrice(user.items[index],count);
                Controller.updateUserIncome(user, user.items[index],count);
            }else if(user.items[index].name === "ETF Bonds"){
                user.stock += Controller.getTotalPrice(user.items[index],count);
                Controller.updateUserIncome(user, user.items[index], count);
            }else{
                Controller.updateUserIncome(user, user.items[index],count);
            }
        }
    }

    static updateByClickBurger(user){
        user.clickCount++;
        user.money += user.incomePerClick;
        View.updateBurgerPage(user);
        View.updateUserInfo(user);
    }

    static getTotalPrice(item, count){
        let total = 0;
        count = Number(count);
        if(item.name === "ETF Stock"){
            for(let i = 0; i < count; i++){
                total += parseInt(item.price * Math.pow(1 + item.perRate, i))
            }
            return total
        }else if(count > 0 && count % 1 == 0) return total += parseInt(item.price * count)
        else return parseInt(total);
    }
    
    static caluculateEtfStockPrice(item, count){
        return parseInt(item.price * Math.pow(1 + item.perRate, count));
    }

    static updateUserIncome(user, items, count){
        count = Number(count);
        if(items.type === "ability"){
            user.incomePerClick += items.perMoney * count;
        }else if(items.type === "investment"){
            user.incomePerSec += user.stock * items.perRate;
        }else{
            user.incomePerSec += items.perMoney * count;
        }
    }

    static resetAllData(user){
        if(window.confirm("Reset All Data?")){
            let userName = user.name;
            let userPassword = user.password;
            user = Controller.createInitialUserAccount(userName,userPassword);
            Controller.stopTimer();
            config.mainPage.innerHTML = ""
            View.updateMainPage(user);
            Controller.startTimer(user);
        }
    }

    static saveUserData(user){
        localStorage.setItem(user.name, JSON.stringify(user));
        alert("Saved your data. Please put the same name when you login.");
    }

    static getUserData(userName){
        let data = JSON.parse(localStorage.getItem(userName))

        return data
    }

    static initializePage(){
        config.initialPage.classList.remove("d-none");
        config.initialPage.innerHTML = '';
        config.mainPage.innerHTML = ''
        Controller.startGame();
    }

}

Controller.startGame()
