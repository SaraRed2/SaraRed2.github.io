window.onload = function(){
    let arrNavLinks = ["Home","Crystals","Contact","Workshop","Author"];
    let navig = document.querySelector("#nav-menu");
    
    // Navigacija
    let navBar = `<ul class="nav flex justify-content-end">`
    for (let index = 0; index < arrNavLinks.length; index++) {
        navBar += `<li class="nav-item"><a class="nav-link" href="#${arrNavLinks[index]}">${arrNavLinks[index]}</a></li>`;
    }
    navBar+="</ul>";
    navig.innerHTML = navBar;

    // Responsive navigacija
    let navMini = document.querySelector("#mini-menu");
    let navBarMini = `<ul class="navbar-nav ml-auto">`
    for (let index = 0; index < arrNavLinks.length; index++) {
        navBarMini += `<li class="nav-item d-flex justify-content-center"><a class="nav-link" href="#${arrNavLinks[index]}">${arrNavLinks[index]}</a></li>`;
    }
    navBarMini+="</ul>";
    navMini.innerHTML = navBarMini;

    // Ispis kartica za kristale
    let parentDiv = document.querySelector("#crystal-cards");
    let CrystalsDiv = "";
    for (let i = 0; i < 3; i++) {
        CrystalsDiv += `<div class="row flex align-content-between p-2 m-2" id="wrapCrystalDiv${i}"></div>`;
    }
    parentDiv.innerHTML = CrystalsDiv;

    // Skrivanje elemenata
    var hiddenCards = document.querySelector("#wrapCrystalDiv2");
    hiddenCards.classList.add("hidden");
    var buttonForHiding = document.querySelector("#hide-crystal-cards");
    buttonForHiding.addEventListener("click", function() {
        if(buttonForHiding.value == "Explore more"){
            hiddenCards.classList.remove("hidden");
            buttonForHiding.value = "Show less";
        }
        else{
            hiddenCards.classList.add("hidden");
            buttonForHiding.value = "Explore more";
        }
    });
    // Pozivanje funkcija
    functionSlider();
    crystalCards(0);
    crystalCards(1);
    crystalCards(2);
    contactForm();
}

// Funkcija slajder
var timer;
function functionSlider(){
    let current = document.querySelector(".activeSlide");
    let next = (current.nextElementSibling) ? current.nextElementSibling : current.parentElement.firstElementChild;
    current.classList.remove("activeSlide");
    next.classList.add("activeSlide");
    timer = setTimeout(functionSlider, 3000);
}

var arrCrystalName = ["Amethyst","Citrine","Jade","Clear Quartz","Jasper","Malachite","Moonstone","Pyrite","Rose Quartz","Ruby","Sapphire","Moldavite"];
var arrCrystalImg = ["amethyst1.jpg","citrine1.jpg","jade1.jpg","clearquartz1.jpg","jasper1.jpg","malachite1.jpg","moonstone1.jpg","pyrite1.jpg","rosequartz1.jpg","ruby1.jpg","sapphire1.jpg","moldavite1.jpg"];

// Funkcija za ispis svih kartica
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
                                      <input type="button" class="btn btn-lilac align-self-end" data-bs-toggle="modal" data-bs-target="#exampleModal${j}" value="About"/>
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
                                        ${arrCrystal[j]}
                                    </div>
                                    <div class="modal-footer">
                                      <input type="button" class="btn btn-gray" data-bs-dismiss="modal" value="Close"/>
                                    </div>
                                  </div>
                                </div>
                            </div>`
        var ness = document.querySelector("#wrapCrystalDiv"+num);
        ness.innerHTML = cardDiv;
    }
}


// Funkcija za kreiranje forme
function contactForm(){
    let formDiv = document.getElementById("div-form");
  
    let form = document.createElement("form");
    form.setAttribute("id", "form-contact");
    form.setAttribute("class", "mx-auto w-50 m-5");
    form.setAttribute("method", "");
    form.setAttribute("action", "");
  
    const nodes1 = ["Full Name :", "Email :", "Message :"];
    const ids1 = ["name", "email", "message"];
    const placeholders1 = ["Type in your full name", "Type in your email address", "Type in your message"];
  
    for(let i=0;i<placeholders1.length;i++){
      var div = document.createElement("div");
      div.setAttribute("class", "mb-3");
      var label = document.createElement("label");
      var node = document.createTextNode(nodes1[i]);
      label.setAttribute("class", "form-label");
      label.setAttribute("for", ids1[i]);
      label.append(node);
      var input = document.createElement(i==2?"textarea":"input");
      input.setAttribute(i==2?"rows":"type", i==2?"5":"text");
      input.setAttribute("id", ids1[i]);
      input.setAttribute("class", "form-control form-border");
      input.setAttribute("placeholder", placeholders1[i]);
      var span = document.createElement("span");
      span.setAttribute("id", ids1[i]+"-err");
      span.setAttribute("class", "text-danger");
      div.append(label, input, span);
      form.append(div);
    }
  
    let divCh = document.createElement("div");
    divCh.setAttribute("class", "mb-3 form-check");
    let inputCh = document.createElement("input");
    inputCh.setAttribute("type", "checkbox");
    inputCh.setAttribute("id", "subscribe");
    inputCh.setAttribute("class", "form-check-input");
    let labelCh = document.createElement("label");
    let nodeCh = document.createTextNode("Subscribe to our newsletter");
    labelCh.setAttribute("class", "form-check-label");
    labelCh.setAttribute("for", "subscribe");
    labelCh.append(nodeCh);
    let spanCh = document.createElement("span");
    spanCh.setAttribute("id", "subscribe-err");
    spanCh.setAttribute("class", "text-danger");
    divCh.append(inputCh, labelCh, spanCh);
    form.append(divCh);
    
    let inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", "button");
    inputBtn.setAttribute("id", "send");
    inputBtn.setAttribute("class", "btn btn-lilac");
    inputBtn.setAttribute("value", "Send");
    inputBtn.setAttribute("onclick", "validateContactForm()");
  
    form.append(inputBtn);
    let success = document.createElement('span');
    success.setAttribute('class', 'text-success d-block');
    success.setAttribute('id', 'contact-success');
    form.append(success);
  
    formDiv.append(form);
}

// Funkcija za validiranje forme
function validateContactForm(){
    let errors = 0;
  
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let subscribe = document.getElementById("subscribe").checked;
  
    let fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let messageRegex = /^[A-Z][a-zšđžčć0-9\s.!?"';:,*%#+-/_`&$={}|@]{2,30}$/;
  
    if(fullName){
      if(!fullNameRegex.test(fullName)){
        document.getElementById("name-err").innerHTML="Full name must be  in format 'Xxx... Xxx...'.";
        errors++;
      }else{
        document.getElementById("name-err").innerHTML="";
      }
    }else{
      document.getElementById("name-err").innerHTML="Full name is required";
        errors++;
    }
  
    if(email){
      if(!emailRegex.test(email)){
        document.getElementById("email-err").innerHTML="Invalid email";
        errors++;
      }else{
        document.getElementById("email-err").innerHTML="";
      }
    }else{
      document.getElementById("email-err").innerHTML="E-mail is required.";
        errors++;
    }
  
    if(message){
      if(!messageRegex.test(message)){
        document.getElementById("message-err").innerHTML="Message must be capitalized and at least 3 characters.";
        errors++;
      }else{
        document.getElementById("message-err").innerHTML="";
      }
    }else{
      document.getElementById("message-err").innerHTML="Please type in your message.";
        errors++;
    }
  
    if(errors == 0){
        let messg = "You have successfully sent a message";
        if(subscribe){
          messg += " and subscribed!"
        }else{
          messg += "!"
        }
        document.getElementById("contact-success").innerHTML=messg;
        setTimeout(function(){
          location.reload();
        }, 2000);
    }
}

// Funkcija za kreiranje workshop forme
function workshopForm(){
    let body = document.querySelector("body");
    
    let formDiv = document.createElement("div");
    formDiv.setAttribute("id", "workshop-div");
  
    let x = document.createElement("p");
    x.setAttribute("id", "x");
    x.setAttribute("class","btn btn-gray p-1")
    x.setAttribute("onclick", "closeForm()");
    var nodeX = document.createTextNode("close");
    x.append(nodeX);
    formDiv.prepend(x);
  
    let form = document.createElement("form");
    form.setAttribute("id", "workshop-form");
    form.setAttribute("class", "w-75 p-5 mx-auto rounded");
    form.setAttribute("method", "");
    form.setAttribute("action", "");
  
  
    //Input text
    const nodes = ["First Name :", "Last Name :", "Email :", "Phone :"];
    const ids = ["first-name", "last-name", "email-w", "phone"];
    const placeholders = ["Type in your first name", "Type in your last name", "Type in your email address", "Type in your phone number"];
  
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for(let i=0;i<placeholders.length;i++){
      var div = document.createElement("div");
      div.setAttribute("class", "mb-3 col-12 col-md-6");
      var label = document.createElement("label");
      var node = document.createTextNode(nodes[i]);
      label.setAttribute("class", "form-label");
      label.setAttribute("for", ids[i]);
      label.append(node);
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("id", ids[i]);
      input.setAttribute("class", "form-control form-border");
      input.setAttribute("placeholder", placeholders[i]);
      var span = document.createElement("span");
      span.setAttribute("id", ids[i]+"-err");
      span.setAttribute("class", "text-danger");
      div.append(label, input, span);
      row.append(div);
    }
    form.append(row);
  
  
    //Select
    const packages = ["Select an option","Full workshop", "Just crystal mining", "Just the educational part"];
  
    let divS = document.createElement("div");
    divS.setAttribute("class", "mb-3");
    let select = document.createElement("select");
    select.setAttribute("id", "package");
    select.setAttribute("class", "form-control form-border");
      for(let i=0;i<packages.length;i++){
        var option = document.createElement("option");
        var optionNode = document.createTextNode(packages[i]);
        option.setAttribute("value", i);
        option.append(optionNode);
        select.append(option);
      }
    let labelS = document.createElement("label");
    let nodeS = document.createTextNode("Select a workshop option:");
    labelS.setAttribute("class", "form-label");
    labelS.setAttribute("for", "package");
    labelS.append(nodeS);
    let spanS = document.createElement("span");
    spanS.setAttribute("id", "package-err");
    spanS.setAttribute("class", "text-danger");
    divS.append(labelS, select, spanS);
    form.append(divS);
  
    //Input radio i checkbox
    const ids2 = ["alone", "with", "adult"];
    const nodes2 = ["I'm coming alone", "I'm coming with a friend/family member", "I am over 18 years old"];
      
    for(let i=0;i<ids2.length;i++){
      var divCh = document.createElement("div");
      divCh.setAttribute("class", "form-check");
      var inputCh = document.createElement("input");
      inputCh.setAttribute("type", i==2?"checkbox":"radio");
      inputCh.setAttribute("value", ids2[i]);
      if(i!=2){
        inputCh.setAttribute("name", "coming-with");
      }else{
        divCh.setAttribute("class", "form-check my-3");
      }
      inputCh.setAttribute("class", "form-check-input");
      var labelCh = document.createElement("label");
      var nodeCh = document.createTextNode(nodes2[i]);
      labelCh.setAttribute("class", "form-check-label");
      labelCh.setAttribute("for", ids2[i]);
      labelCh.append(nodeCh);
      if(i){
        var spanCh = document.createElement("span");
        spanCh.setAttribute("id", ids2[i]+"-err");
        spanCh.setAttribute("class", "text-danger d-block");
        divCh.append(inputCh, labelCh, spanCh);
      }
      else{
        divCh.append(inputCh, labelCh);
      }
      form.append(divCh);
    }
  
    //Send dugme
    let inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", "button");
    inputBtn.setAttribute("id", "workshop");
    inputBtn.setAttribute("class", "btn btn-lilac");
    inputBtn.setAttribute("value", "Send");
    inputBtn.setAttribute("onclick", "validateWorkshopForm()");
  
    form.append(inputBtn);

    let success = document.createElement('span');
    success.setAttribute('class', 'text-success d-block');
    success.setAttribute('id', 'workshop-success');
    form.append(success);

    formDiv.append(form);
    body.append(formDiv);
}

// Funkcija za validiranje workshop forme
  function validateWorkshopForm(){
    let errors = 0;
  
    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let email = $("#email-w").val();
    let phone = $("#phone").val();
    let package = $("#package").val();//select
    let coming = $("input[type='radio']:checked").val();
    let adult = $("input[type='checkbox']:checked").val();
  
    let nameRegex = /^([A-ZŠĐŽČĆ][a-zšđžčć]{2,30}[\s]?)+$/;
    let emailRegex = /^[a-z][\w.]+@[a-z0-9]{3,20}(.[a-z]{3,5})?(.[a-z]{2,3})$/;
    let phoneRegex = /^((\+(381))|[0])[6](\s)?[\d]{7,8}$/;
  
    if(firstName){
      if(!nameRegex.test(firstName)){
        $("#first-name-err").html("First name must be capitalized and have at least 3 characters.");
        errors++;
      }else{
        $("#first-name-err").html("");
      }
    }else{
      $("#first-name-err").html("First name is required.");
        errors++;
    }
  
    if(lastName){
      if(!nameRegex.test(lastName)){
        $("#last-name-err").html("Last name must be capitalized and have at least 3 characters");
        errors++;
      }else{
        $("#last-name-err").html("");
      }
    }else{
      $("#last-name-err").html("Last name is required.");
        errors++;
    }
  
    if(email){
      if(!emailRegex.test(email)){
        $("#email-w-err").html("Invalid email address.");
        errors++;
      }else{
        $("#email-w-err").html("");
      }
    }else{
      $("#email-w-err").html("E-mail is required.");
        errors++;
    }
  
    if(phone){
      if(!phoneRegex.test(phone)){
        $("#phone-err").html("Phone number must be in the correct format (9-12 numbers).");
        errors++;
      }else{
        $("#phone-err").html("");
      }
    }else{
      $("#phone-err").html("Phone number is required.");
        errors++;
    }
  
    if(package==0){
      $("#package-err").html("Please select a workshop option");
        errors++;
    }
    else{
      $("#package-err").html("");
    }
  
    if(!coming){
      $("#with-err").html("Please specify if you are comming alone or bringing a friend");
        errors++;
    }else{
      $("#with-err").html("");
    }
  
    if(!adult){
      $("#adult-err").html("Only people over 18 can sign up for the workshop");
        errors++;
    }else{
      $("#adult-err").html("");
    }
  
    if(errors == 0){
        $("#workshop-success").html("You have successfully sent a request.");
        setTimeout(function(){
          $("#workshop-div").remove();
        }, 2000);
    }
}

// Dugmence za zatvaranje workshop forme
  function closeForm(){
    $("#x").click(function(){
      $("#workshop-div").remove();
    });
}

// jQuery
$(document).ready(function(){
    // Navigacioni meni scroll
    $(window).scroll(function(){
        if($(this).scrollTop() > 80){
            $("header").addClass("header-bg");
            $("#nav-menu ul li a").addClass("header-text");
            $("#logo-textic p a").addClass("header-text");
            $("#menu-btn").addClass("header-text");
            $("#mini-menu ul li a").addClass("header-text");
        }
        else{
            $("header").removeClass("header-bg");
            $("#nav-menu ul li a").removeClass("header-text");
            $("#logo-textic p a").removeClass("header-text");
            $("#menu-btn").removeClass("header-text");
            $("#mini-menu ul li a").removeClass("header-text");
        }
    });
  // responsive nav pozadina kada je header providan
    $("#menu-btn").click(function(){
        $("#mini-menu").toggleClass("hidden");
        $(window).scroll(function(){
            if($(window).scrollTop() < 80){
                $("#mini-menu").addClass("header-bg");
            }
            else{
                $("#mini-menu").removeClass("header-bg");
            }
        });
    });
});