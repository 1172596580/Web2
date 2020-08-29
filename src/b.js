// var a=10;
// function aa(){
//     console.log(11);
// }
    var b=10;
    var c=1;
    function bb(){
        console.log('来自b.js');
    }
	bb();
   module.exports= {
       b,
      bb
   }