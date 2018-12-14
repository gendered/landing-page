var width = window.innerWidth;
var height = window.innerHeight;
var center = {x: width / 2, y: height / 2};
var mouse = {x: 0, y: 0};

var section = document.querySelector(".right-container");

var real_words = ["man-mercer", "iron man", "richesse", "galley", "honest woman", "fabricatress", "ball-buster", "aviatress", "stunt man", "high priest", "cousiness", "bags", "wheelman", "beaupere", "cove", "superstar", "niece", "old-timer", "exhibitionist", "soul sister", "apollo", "stateswoman", "initiatrix", "psyche", "lanner", "horses", "war widow", "life-guard", "creditress", "rifleman", "flattering", "swagman", "checkers", "errand boy", "squadron", "rani", "daughterly",  "bondman", "bags", "countrywoman", "paper nautilus", "throng", "countrymen", "philosophess", "whitebeard", "co-respondent", "carlos", "sophomore", "housewife", "cuckold", "howard", "lakh", "music-master", "church hat", "william of orange", "househusband", "ramayana", "handy-man", "prior", "assemblywoman", "pony-man", "don", "aunts", "huswife", "hit man", "rule", "centauress",  "homegirl", "sif", "surrogate", "hijab", "bellman", "boleyn", "antigone", "ship's husband", "adulter", "avenger", "chapman", "gold digger", "bishop", "father-figure", "pantryman", "dog", "geisha", "hostage", "airwoman", "coauthor", "monarchess", "moveress", "buck private", "crown princess", "anchorman", "comfortress",  "piece",  "femme", "regentess", "cuckold", "zeus", "prickteaser", "looker", "rugbeian", "gynaeceum", "avoidance", "nanny",  "sculptress", "vicar", "sheriffess", "bat boy", "hooker-on", "horse-boy", "fimble", "micky", "sister-in-law", "chainman", "shootress", "he-man", "actor", "demoness", "heroess",  "assertress", "umpress", "pitsaw", "interlocutress", "ballet-girl", "world", "crimp", "quatrayle", "handicraftswoman", "firefighter", "stepmom", "nobleman", "sires", "stateswoman", "blasphemeress", "outrider", "nun", "butterman", "mama", "jill", "homemaker", "pa", "wheelman", "copy boy", "babe", "slut", "womanly", "iphigenia", "daywoman", "immanuel", "lamaze method of childbirth", "marcus ulpius traianus", "god", "drab", "slut", "oldtimer", "harangue", "masseur", "great-grandmother", "christophany", "basso", "community", "barberess", "mistress",  "whore", "sissy", "authoress", "titania", "womanhood", "macho", "changerwife", "juggleress", "betty", "protandric", "knightess", "gentlewoman", "autocratrix", "golf widow", "impostress", "pajama", "ningle", "airwoman", "succubus", "Chaplain", "swain", "kinswoman", "signalwoman", "stepdad", "half-caste", "forbear", "galleys", "leprechaun", "immanuel", "concubines", "nix", "cloistress", "she-devil", "mavournin", "nymphomaniac", "chicana", "jib-netting", "anchorwoman", "man", "under-age", "broads", "herself", "cub", "weariness", "little woman", "uitlander", "hobbledehoy", "posseman", "waiter", "jnr", "pluto", "harem", "stepchild", "embrute", "satrapess", "daygirl", "paperboy", "putative father", "hooray henry", "deadbeat dad",  "antifeminist", "knavess", "dragon", "douzaine", "work-mistress", "daygirl", "judah", "poultrywoman", "buck private", "monmouth cock", "grub",  "championess", "major-domo", "businessman", "saint louis", "moll", "eldmother", "lady altar", "ball-breaker", "suppletory", "first-rate", "chiliarch", "errand boy", "cubs", "tsaritsa", "lure", "oberson", "ex-wife", "miladi", "vituperation", "hunk", "ladykin", "limit-man", "dadas", "archeress", "anne", "stablegirl", "signora", "relict", "Grandma", "dowager", "urania", "senora", "suitress", "monarch", "old bag", "governor", "fornicatress", "master", "good-daughter", "demimondaine", "autocratress", "bummer", "ballerina", "baronnette", "bondwoman", "cotton-thief", "knight", "warrior", "clansman", "abbess", "witches", "twat", "curatrix", "philosophess", "beauty queen", "gibson girl", "countryman", "cat", "cock-boy", "bargirl", "desperado", "flirt", "gentleman", "mademoiselle", "executrice", "busgirl", "procreator", "daygirl", "helmsman",  "bride", "tandy", "grannie", "jezebel", "partner", "joliot", "wasserman", "wireman", "inventress", "prickteaser", "warlock", "hotspur", "bags", "pierrette", "shopboy", "banker", "cadet", "queens", "obstetrix", "misogynist", "gunwoman", "tsaritsa", "attendress"];

real_words.forEach(function(word) {
  var sketch = document.querySelector(".sketch");
  var span = document.createElement("span");
  span.textContent = word;
  sketch.append(span);
});

var words = section.querySelectorAll("span");
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
