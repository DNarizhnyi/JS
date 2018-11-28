const obj = {
    name: 'Ivan',
    info: function (){
        console.log(this.name);
    }
}

obj.info();