


var rentals ={
    name: 'Enterprise Rental',
    econCars: 500,
    ebooked: 0,
    econType: "Economy",
    midCars: 500,
    mbooked: 0,
    midType: "Midsize",
    
    ebook: function() {
        this.ebooked++;
        rentals.carsAvail();
    },
    mbook: function() {
        this.mbooked++;
        rentals.carsAvail();
    },
    carsAvail: function() {
     document.getElementById("ecarAvail").innerHTML = rentals.econCars - rentals.ebooked;
     document.getElementById('mcarAvail').innerHTML = rentals.midCars -  rentals.mbooked;
    }
};

document.getElementById('upbutton').onclick = function() {
    document.getElementById('businessname').innerHTML = rentals.name;
    document.getElementById('economycar').innerHTML = rentals.econType
    document.getElementById('midcar').innerHTML = rentals.midType;
    rentals.carsAvail();
    
};

document.getElementById('econbutton').onclick = function() {
    rentals.ebook();
}

document.getElementById('midbutton').onclick = function() {
    rentals.mbook();
}









