function loadGame(game) {
    let gameScreen = document.getElementById("gameScreen");
    let iframeContent = "";
    let backgroundImage = "";

    switch (game) {
        case "VampireSavior2":
            iframeContent = '<iframe src="https://www.retrogames.cc/embed/10590-vampire-savior-the-lord-of-vampire-970519-usa.html" width="1200" height="900" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
            backgroundImage = "url('./media/img/vampiresavior2.jpg')";
            break;

        case "StreetFighterAlpha2":
            iframeContent = '<iframe src="https://www.retrogames.cc/embed/9967-street-fighter-alpha-2-960430-usa.html" width="1200" height="900" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
            backgroundImage = "url('./media/img/sfa2.jpg')";
            break;

        case "FinalFight":
            iframeContent = '<iframe src="https://www.retrogames.cc/embed/8497-final-fight-900112-usa.html" width="1200" height="900" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
            backgroundImage = "url('./media/img/finalFight.jpg')";
            break;

        case "TurtlesInTime":
            iframeContent = '<iframe src="https://www.retrogames.cc/embed/10271-teenage-mutant-ninja-turtles-turtles-in-time-4-players-ver-uaa.html" width="1200" height="900" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
            backgroundImage = "url('./media/img/tmnt.jpg')";
            break;

        case "MarvelVsCapcom":
            iframeContent = '<iframe src="https://www.retrogames.cc/embed/9123-marvel-vs-capcom-clash-of-super-heroes-980123-usa.html" width="1200" height="900" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
            backgroundImage = "url('./media/img/marvelVsCapcom.jpg')";
            break;

        case "MobileSuitGundamExRevue":
            iframeContent = '<iframe src="https://www.retrogames.cc/embed/9201-mobile-suit-gundam-ex-revue.html" width="1200" height="900" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
            backgroundImage = "url('./media/img/mobilesuitgundamexrevue')";
            break;

        default:
            iframeContent = "";
            backgroundImage = "";
    }

    gameScreen.innerHTML = iframeContent;
    document.body.style.backgroundImage = backgroundImage;
}
