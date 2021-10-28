function Bear() {    
this.dBear = 100;
this.htmlElement = document.getElementById("bear");
this.id = this.htmlElement.id;
this.x = this.htmlElement.offsetLeft;
this.y = this.htmlElement.offsetTop;

this.move = function(xDir, yDir) {
    this.fitBounds();// This is to make sure the bear is within the board.
    this.x += this.dBear * xDir;
    this.y += this.dBear * yDir;
    this.display();
  };

this.display = function() {
    this.htmlElement.style.left = this.x + "px";
    this.htmlElement.style.top = this.y + "px";
    this.htmlElement.style.display = "absolute";
  };

  this.fitBounds = function() {
      let parent = this.htmlElement.parentElement;
      let iw = this.htmlElement.offsetWidth;
      let ih = this.htmlElement.offsetHeight;
      let l = parent.offsetLeft;
      let t = parent.offsetTop;
      let w = parent.offsetWidth;
      let h = parent.offsetHeight;
      if(this.x < 0) this.x = 0;
      if(this.x > w-iw) this.x = w-iw;
      if(this.y < 0) this.y = 0;
      if(this.y > h-ih) this.y = h-ih;
    };

    this.setSpeed() = function() {
        var input = document.createElement("input");
        input.setAttribute('type','text');
        document.getElementById("title").appendChild(input)
        this.input = this.dBear;
    }
}

function start() {
    //create bear
    bear = new Bear();

    document.addEventListener("keydown",moveBear,false); //Add an event listener to the keypress event.
    document.onchange(input,setSpeed);
}

//Handle keyboard events
// to move the bear
function moveBear(e) {
    //codes of the four keys
    constKEYUP = 38;
    constKEYDOWN = 40;
    constKEYLEFT = 37;
    constKEYRIGHT = 39;
    if(e.keyCode == KEYRIGHT) {
        bear.move(1, 0)
    } // right key

    if(e.keyCode == KEYLEFT) {
        bear.move(-1, 0)
    } // left key

    if(e.keyCode == KEYUP) {
        bear.move(0, -1)
    } // up key
    if(e.keyCode == KEYDOWN) {
        bear.move(0, 1)
    } // down key
}