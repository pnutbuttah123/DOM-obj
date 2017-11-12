


var hotels = {
    name: 'Biltmore',
    rooms: 500,
    roomsBooked: 150,
    roomService: true,
    pool: false,
    
    roomsAvail: function() {
        return this.rooms - this.roomsBooked;
        
    }
};

document.getElementById('mybutton').onclick = function() {
document.getElementById('hotelName').innerHTML = hotels.name;
document.getElementById('availableRooms').innerHTML = hotels.roomsAvail();
document.getElementById('totalRooms').innerHTML = hotels.rooms;

}





