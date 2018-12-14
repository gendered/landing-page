var width = window.innerWidth;
var height = window.innerHeight;
var center = {x: width / 2, y: height / 2};
var mouse = {x: 0, y: 0};

var section = document.querySelector(".right-container");
var words = section.querySelectorAll("span");

var real_words = [
  "wards", "geraint", "ultraism", "bass", "mailman", "stepmom", "nobleman", "sires", "stateswoman", "dishes", "falsetto", "blasphemeress", "outrider", "song_thrush", "kin", "guider", "taker-off", "sexed", "demimondaine", "manliness", "monarch", "female", "mother country", "decathlon", "thomson", "poster boy", "hagseed", "flee", "vote", "bint", "female", "aristocracy", "women", "yellow bunting", "sex", "nun", "butterman", "mama", "vali", "jill", "younker", "curtesy", "homemaker", "pa", "judah", "wheelman", "haick", "gregory nazianzen", "deference", "copy boy", "babe", "amphitryon", "medea", "slut", "womanly", "iphigenia", "daywoman", "immanuel", "lamaze method of childbirth", "marcus ulpius traianus", "god", "drab", "slut", "inescate", "ana", "bakester", "monopoly", "infanta", "usherette", "mother's son", "phaethon", "papa", "shoeboy", "lilith", "gunman", "singer", "oldtimer", "harangue", "masseur", "great-grandmother", "christophany", "basso", "community", "ball-buster", "man-milliner", "barberess", "tenor", "heptathlon", "forefather", "bloody mary", "prince_charmings", "honoring", "checkers", "harefoot", "quatrayle", "incumbents", "leveler", "wappineer", "authoress", "titania", "womanhood", "macho", "changerwife", "juggleress", "betty", "protandric", "knightess", "gentlewoman", "child molester", "materiel", "autocratrix", "golf widow", "surmise", "impostress", "pajama", "ningle", "airwoman", "succubus", "Chaplain", "swain", "citizens", "kinswoman", "signalwoman", "stepdad", "half-caste", "forbear", "galleys", "leprechaun", "immanuel", "concubines", "nix", "cloistress", "chevalier", "aegisthus", "mother-rule", "anthropocentric", "esau", "she-devil", "shakti", "cabot", "cuckold", "mavournin", "nymphomaniac", "chicana", "jib-netting", "anchorwoman", "rhea", "man", "anthony", "female", "elizabeth", "under-age", "broads", "herself", "cub", "weariness", "little woman", "jabul", "arras", "danaus", "wheelwright", "demirep", "elaine", "uitlander", "hobbledehoy", "posseman", "waiter", "pluto", "harem", "stepchild", "mrs. gandhi", "embrute", "satrapess", "daygirl", "affiliation", "paperboy", "putative father", "hooray henry", "deadbeat dad", "cuckold", "diana", "smoor", "chaldean", "antifeminist", "knavess", "paederast", "knife-boy", "senhora", "eleven", "owenite", "dragon", "douzaine", "hilarymas", "cr\u00e8che", "spark", "mandom", "black prince", "work-mistress", "sexual discrimination", "suffrage", "daygirl", "judah", "poultrywoman", "buck private", "monmouth cock", "mohel", "grub", "allegiance", "effeminacy", "webster", "championess", "major-domo", "businessman", "saint louis", "moll", "eldmother", "lady altar", "ball-breaker", "suppletory", "first-rate", "chiliarch", "errand boy", "cubs", "tsaritsa", "lure", "oberson", "ex-wife", "miladi", "vituperation", "hunk", "ladykin", "limit-man", "dadas", "abscission", "archeress", "anne", "stablegirl", "brahmanee", "signora", "relict", "Grandma", "dowager", "urania", "senora", "shaytan", "suitress", "monarch", "carriers"
];

section.onmousemove = function(event) {
  move(event)
};
section.addEventListener('mouseleave', function() {
  for (var w of words) {
    w.style.transition = "all 0.7s ease";
    w.style.transform = "scale(1, 1)";
  }
}, false);

function move(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  for(var w of words) {
    w.style.transition = "";

    var b = w.getBoundingClientRect();
    var wc = {
      x: (b.left + b.right) / 2,
      y: (b.top + b.bottom) / 2
    };

    var dist = {
      x: Math.abs(mouse.x - wc.x),
      y: Math.abs(mouse.y - wc.y)
    };

    var norm = Math.sqrt(dist.x * dist.x + dist.y * dist.y);

    w.style.transform = "scale(" + map(norm, width/2, 2, -4) + ", 1)";
  }

}

function map(value, b, c, d) {
  // assuming the bottom of the value's initial range, a, is 0
  return (value - 0) * (d - c) / (b - 0) + c;
}
