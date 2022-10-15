var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// we could accomplish this using Classes instead

// create object that holds all lines position and sizes
class Lines {
    constructor(numLines = 5) {
        this.numLines = numLines;
        this.positions = () => Array(this.numLines).fill().map((_,i) => i+1),
        this.sizes = () => Array(this.numLines).fill().map(_ => Math.random() * numLines)
    }
        
    // create function that draws all lines based on how the object looks 
    drawLines() {
        const positions = this.positions();
        const sizes = this.sizes();
        var spacer = 0

        for (let i = 0; i < positions.length; i++) {
            ctx.moveTo(positions[i] + spacer, 600);
            ctx.lineTo(positions[i] + spacer, 600 - (sizes[i] * 5));
            ctx.stroke();
            spacer += 2;
        }
    }

    selectionSort() {
        const positions = this.positions();
        const sizes = this.sizes();

        var min = sizes[0];
   

        // loop thru whole set
        for (let j = 0; j < positions.length; j++) {
            // loop thru all lines to find minimum length 
            for (let i = 0; i < positions.length; i++) {
                if (sizes[i] <= min) {
                    // note which position this is
                    min = sizes[i];
                    
                } 
               
            }
            
            // swap new min length line with first line 
            var tempSize = sizes[j]
            
            console.log(sizes)
            sizes[j] = min;
           
                          
        }
        

        

    }

}


var newLines = new Lines(100);
newLines.positions()
newLines.sizes()
newLines.drawLines()
newLines.selectionSort()
newLines.drawLines()


function drawLine (position, size) {


    ctx.moveTo(0, 600);
    ctx.lineTo(0, 0);
    ctx.stroke();
}

// drawLine(0,0)