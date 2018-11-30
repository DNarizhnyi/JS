const car = {
    brand: 'Lada',
    color: 'green',
    speed: 200,
    move: function() {
        console.log("Я сейчас еду");
    },
    stop: function(){
        console.log('Я остановился');
    }

}

car.move();