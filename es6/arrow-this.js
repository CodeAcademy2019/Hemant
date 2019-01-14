// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(() => console.log(this.yelp));
//     }
// };
// foot.kick();

module.exports = function check() {
    //var res = {yelp : "poi"};
    var foot = {
        kick: function () {
            this.yelp = "Ouch!";
            setImmediate(() => {
                console.log(this.yelp);
            });
            return this.yelp;
        }
    };
    var res = foot.kick();
    return res;
}

//console.log(check());