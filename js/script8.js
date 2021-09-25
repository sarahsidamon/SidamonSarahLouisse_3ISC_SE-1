let c1 = {name: "Cinema 1", Location: "North Edsa", capacity: 400 };
 
let show = function(movie){
    this.movie = "End Game";
    return(this.name + " " + "is showing " + this.movie + ".");
}
 
console.log(show.call(c1))