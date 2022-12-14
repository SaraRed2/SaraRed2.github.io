window.onload = function(){
    let arrNavLinks = ["Home","Crystals","Contact","Author","Porudzbina"];
    let navig = document.querySelector("#navigMenu");
    let navBar = `<ul class="nav flex justify-content-end">`
    for (let index = 0; index < arrNavLinks.length; index++) {
        navBar += `<li class="nav-item"><a class="nav-link" href="#${arrNavLinks[index]}">${arrNavLinks[index]}</a></li>`;
    }
    navBar+="</ul>";
    navig.innerHTML = navBar;

    functionSlider();

    // ispis kartica za kristale
    let parentDiv = document.querySelector("#crystal-cards");
    let CrystalsDiv = "";
    for (let i = 0; i < 3; i++) {
        CrystalsDiv += `<div class="row flex align-content-between" id="wrapCrystalDiv${i}"></div>`;
    }
    parentDiv.innerHTML = CrystalsDiv;
    crystalCards(0);
    crystalCards(1);
    crystalCards(2);
    
}
// funkcija slajder
var timer;
function functionSlider(){
    let current = document.querySelector(".activeSlide");
    let next = (current.nextElementSibling) ? current.nextElementSibling : current.parentElement.firstElementChild;
    current.classList.remove("activeSlide");
    next.classList.add("activeSlide");
    timer = setTimeout(functionSlider, 3000);
}

// funkcija za ispis svih kartica
var arrCrystalName = ["Amethyst","Citrine","Jade","Clear Quartz","Jasper","Malachite","Moonstone","Pyrite","Rose Quartz","Ruby","Sapphire","Moldavite"];
var arrCrystalImg = ["amethyst1.jpg","citrine1.jpg","jade1.jpg","clearquartz1.jpg","jasper1.jpg","malachite1.jpg","moonstone1.jpg","pyrite1.jpg","rosequartz1.jpg","ruby1.jpg","sapphire1.jpg","moldavite1.jpg"];
var arrCrystalDescription = ["Amethyst has healing powers to help with physical ailments, emotional issues, and in Energy Healing and Chakra balancing. Amethyst crystal therapies are primarily associated with physical ailments of the nervous system, the curing of nightmares and insomnia, and balancing the crown chakra...","Citrine promotes motivation, activates creativity and encourages self-expression. Enhances concentration and revitalises the mind. It releases negative traits, depression, fears and phobias. Emotionally balancing...","A protective stone, Jade keeps the wearer from harm and brings harmony. Jade attracts good luck and friendship. It stabilises the personality and promotes self-sufficiency. Soothes the mind, releasing negative thoughts...","Clear Quartz is possibly the most versatile, multipurpose and powerful healing stone available, due to is unique helical spiral crystalline form. It is a master healer that can be used for any and all conditions. It stimulates the immune system, reinstates bodily balance and restores and amplifies energy systems...","Jasper is known as the “supreme nurturer”. It sustains and supports through times of stress, and brings tranquility and wholeness. Jasper provides protection and absorbs negative energy. It balances yin and yang...","Malachite absorbs negative energies and pollutants, picking them up from the atmosphere and from the body. Guards against radiation and clears electromagnetic pollution. Malachite clears and activates the chakras and attunes to spiritual guidance. It opens the heart to unconditional love...","A stone for “new beginnings”, Moonstone is a stone of inner growth and strength. It soothes emotional instability and stress, and stabilises the emotions, providing calmness. Moonstone enhances intuition, promotes inspiration, success and good fortune in love and business matters...","Pyrite is a powerful protection stone which shields and protects against all forms of negative vibrations and/or energy, working on the physical, etheric, and emotional levels. It stimulates the intellect and enhances memory, helping to recall relevant information when needed...","Rose Quartz is the stone of universal love. It restores trust and harmony in relationships, encouraging unconditional love. Rose Quartz purifies and opens the heart at all levels to promote love, self-love, friendship, deep inner healing and feelings of peace...","Ruby stone has a vibration that radiates with an intensity that projects energy and enthusiasm for life. It encourages leadership and increased concentration, with sharpness of intellect. This beautiful red gemstone allows you to see your own strength, and your creative potential from a heart based perspective...","Known as the 'wisdom stone', each colour of Sapphire brings its own particular wisdom. It releases mental tension, depression, unwanted thoughts and spiritual confusion. Sapphire restores balance within the body, aligning the physical, mental and spiritual planes, bringing serenity and peace of mind...","Along with transformation, Moldavite carries properties assisting in protection, self-healing, and even cleansing. Some stones are known to assist with Moldavites energies in a number of ways. Using a Herkimer Diamond while working with Moldavite will assist and enhance third eye visionary experience..."];
function crystalCards(num){
    var j,limit,cardDiv = "";
    if (num == 0) {
        j = 0;
        limit = 4
    }
    else if (num == 1) {
        j = 4;
        limit = 8
    }
    else{
        j = 8;
        limit = 12;
    }
    for (j; j < limit; j++) {
        cardDiv += `<div class="col-sm-12 col-md-6 col-lg-3 pb-2">
                                <div class="card card-responsive shadow border-lilac h-100">
                                    <img src="assets/img/${arrCrystalImg[j]}" class="card-img-top" alt="${arrCrystalName[j]}">
                                    <div class="card-body">
                                      <h5 class="card-title">${arrCrystalName[j]}</h5>
                                      <p class="card-text">${arrCrystalDescription[j]}</p>
                                    </div>
                                    <div class="card-body d-flex">
                                      <input type="button" class="btn btn-lilac align-self-end" data-bs-toggle="modal" data-bs-target="#exampleModal${j}" value="Read more"/>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModal${j}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h1 class="modal-title fs-5" id="exampleModalLabel${j}">${arrCrystalName[j]}</h1>
                                      <input type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    </div>
                                    <div class="modal-body">
                                      
                                    </div>
                                    <div class="modal-footer">
                                      <input type="button" class="btn btn-gray" data-bs-dismiss="modal" value="Close"/>
                                      <input type="button" class="btn btn-lilac" value="Order"/>
                                    </div>
                                  </div>
                                </div>
                            </div>`  
        var ness = document.querySelector("#wrapCrystalDiv"+num);
        ness.innerHTML = cardDiv;                                 
    }
}
// kraj funkcije za ispis kartica sa kristalima
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 80){
            // $('#to-top').fadeIn();
            $("header").addClass("header-bg");
            $("#navigMenu ul li a").addClass("header-text");
            $("#logo-textic p a").addClass("header-text");
        }
        else{
            // $('#to-top').fadeOut();
            $("header").removeClass("header-bg");
            $("#navigMenu ul li a").removeClass("header-text");
            $("#logo-textic p a").removeClass("header-text");
        }
    });
});


// var brojac = 1;
// function slider(){
//     if (brojac < 6) {
//         document.querySelector("#imgSlider").style.setProperty("background-image","url(../../assets/img/slider"+brojac+".jpg)");
//         brojac++;      
//     }
//     else{
//         brojac = 1;
//     }
//     tajmer = setTimeout(slider, 3000);
// }


