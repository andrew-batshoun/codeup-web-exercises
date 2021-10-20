(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

var brPlanets = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
document.write(brPlanets);
console.log(brPlanets);

//class answer** var brPlanets = planetsArray.join("<br>");

// In the console it only shows <br> but this might be useful to print inside the webpage instead of the console log.

var listPlanets =  "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>";
console.log(listPlanets);
document.write(listPlanets);

//class answer** var listPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</ul>";
})();
