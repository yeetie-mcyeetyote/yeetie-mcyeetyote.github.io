
      function jumper() {
        this.x = 50;
        this.y = 0;
        this.gravity = 1.5; //force of gravity
        this.lift = -20;//opposing force of gravity
        this.velocity = 0;//velocity of player
        
        this.show = function() {
          fill(color('red'));
          ellipse(this.x,this.y,50,50);
        };
        
        this.up = function() {
          this.velocity += this.lift;//jumping function
        };
        this.update = function() {
          this.velocity += this.gravity;//gravity applied when not jumping
          this.y += this.velocity;
          this.velocity *= 0.9;
          if (this.y > h) { //jumper hits floor
            this.y = h;
            this.velovity = 0;
          }
          if (this.y < 0) { //jumper hits ceiling
            this.y = 0;
            this.velocity = 0;
          }
          
        };
        
      }//object ends here
      
      function keyPressed(){
        if (keyCode === 32) {
          jumper.up();
        }
      }
      