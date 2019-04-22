
      
      function barrier() {
        this.x = w;
        this.y = 50;
        this.gravity = 7; //force of gravity
        this.velocity = 0;//velocity of player
        
        this.show = function() {
          fill(color('gold'));
          rect(this.x,this.y,100,100);
        };
        
      
        this.update = function() {
          this.velocity += this.gravity;//gravity applied when not jumping
          this.x -= this.velocity;
          
          if (this.x < -100) {
            this.x = w;
            this.velocity = 0;
          }
      };
      
      
    }//object ends here
      

      