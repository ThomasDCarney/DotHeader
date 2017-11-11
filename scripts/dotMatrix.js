/**
 * This version of the Pixel Overlay is not setup like an object. It simply
 * takes a container element and sets it up with the specific children and
 * functionality.
 */

function createPixelOverlay(container, desiredNumColumns, desiredNumRows) {

    // To reference the optional interval timer (blip effect).
    var randomBlipInterval;

    /**
    * This will create each "pixel" and place it in the specified container.
    */
    function createPixels() {

        var i, j;
        var tempDot;

        // Figure out how many rows and columns are actually needed.
        var sideLength = calcSideLength();
        var numElements = Math.floor(container.offsetHeight / sideLength) *
                            Math.floor(container.offsetWidth / sideLength);

        for(i = 0; i < numElements; i++) {

            tempDot = document.createElement("DIV");
            tempDot.style.height = sideLength + "px";
            tempDot.style.width = sideLength + "px";
            tempDot.classList.add("pixel");

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
            container.appendChild(tempDot);

        }

    } // end createPixels

    /**
    * Each element "should" be square. As such, the argument resulting in the
    * smaller calculated dimension is chosen. This may result in extra
    * rows/columns in the other direction but "at least" the requested number of
    * rows and columns will be present.
    */
    function calcSideLength() {

        var tempWidth = Math.floor(container.offsetWidth / desiredNumColumns);
        var tempHeight = Math.floor(container.offsetHeight / desiredNumRows);

        if(tempWidth < tempHeight) {

            return tempWidth;

        } else {

            return tempHeight;

        }

    } // end calcSideLength

    /**
    * This method will start the "blip" effect which triggers a random pixel
    * element, making it less transparent. This simulates a subtle "glitch"
    * effect in the overlay.
    */
    function randomBlip() {

        var childToBlip =
            container.children[Math.floor(Math.random() *
                                container.children.length)];

        // Trigger the blip.
        childToBlip.classList.toggle("blip");

        // Set the timer to remove the blip.
        setTimeout(function() {childToBlip.classList.toggle("blip");}, 1500);

    } // end randomBlip

    // get everything going.
    createPixels();
    randomBlipInterval = setInterval(randomBlip, 2000);

} // end createPixelOverlay

var wrapper1 = document.getElementById("dotHeaderWrapper");

createPixelOverlay(wrapper1, 60, 10);

var wrapper2 = document.getElementById("testWrapper2");

createPixelOverlay(wrapper2, 10, 5);
