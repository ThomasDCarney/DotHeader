var wrapper = document.getElementById("dotHeaderWrapper");

// NOTE: To avoid gaps, wrapper dimensions should divide evenely with values
// passed in as aruguments.
var sideLength = getSideLength(60, 20);

createDots();

/**
 * Since the boxes should be squares for this (change if you like) we need to
 * use the smaller dimension so nothing gets cut off. This will also result in
 * extra rows or columns in the other direction and possible gap at an end.
 */
function getSideLength(numColumns, numRows) {

    var tempWidth = Math.floor(wrapper.offsetWidth / numColumns);
    var tempHeight = Math.floor(wrapper.offsetHeight / numRows);

    if(tempWidth < tempHeight) {

        return tempWidth;

    } else {

        return tempHeight;

    }

} // end getSideLength


/**
 * This will create each "dot" or element of the matrix. It's faster and more
 * bandwidth efficient than saving hundreds+ in the HTML.
 */
function createDots() {

    var i, j;
    var tempDot;

    // Figure out how many rows and columns are needed.
    var numRows = Math.floor(wrapper.offsetHeight / sideLength);
    var numColumns = Math.floor(wrapper.offsetWidth / sideLength);

    // Create the individual elements.
    for(i = 0; i < numRows; i++) {

        for(j = 0; j < numColumns; j++) {

            // Create the element.
            tempDot = document.createElement("DIV");
            tempDot.style.height = sideLength + "px";
            tempDot.style.width = sideLength + "px";
            tempDot.classList.add("dot");
            tempDot.classList.add("pinkDot");

            switch(Math.floor(Math.random() * 3)) {
                case 0:
                    tempDot.classList.add("tier0");
                    break;
                case 1:
                    tempDot.classList.add("tier1");
                    break;
                case 2:
                    tempDot.classList.add("tier2");
                    break;
            }

            // Add it to the line.
            wrapper.appendChild(tempDot);

        }

    }

} // end createDots
