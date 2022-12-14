import { MAIN_MENU, PLAY_STATE, TITLE_STATE } from "../main/gamePanel.js";
import Menu from "./menu.js";

export default class TutorialMenu extends Menu {
  constructor(gp) {
    super(gp);
    this.bgAdded = false;
    this.selectorPos = 0;
    this.maxSelector = 0;

    this.playClick = false;

    this.action = false;
  }

  addElement() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "tutorialMenu");
    this.gp.element.appendChild(this.element);
    this.addContainer();
    this.bgAdded = true;
  }

  addContainer() {
    const container = document.createElement("div");
    container.style.position = "absoulte";
    container.style.display = "flex";
    container.style.alignContent = "center";
    container.style.justifyContent = "space-around";
    container.style.width = "90%";
    container.style.height = "90%";
    container.style.margin = "auto";

    //tutorial cards
    //CARD 1
    const card1 = document.createElement("div");
    card1.classList.add("tutorial-card");
    card1.classList.add("border-glow");
    const coin = document.createElement("div");
    coin.style.backgroundImage = "url('/death_by_pollution/media/game3/objects/coin.gif')";
    coin.style.backgroundRepeat = "no-repeat";
    coin.style.backgroundSize = "50%";
    coin.style.backgroundPosition = "center";
    coin.classList.add("tutorial_card_1");
    const coinPoints = document.createElement("span");
    coinPoints.style.position = "absolute";
    coinPoints.style.bottom = "0";
    coinPoints.style.left = "38%";
    coinPoints.style.textAlign = "center";
    coinPoints.innerHTML = "+100";
    coinPoints.classList.add("tutorial_card_1");
    coinPoints.classList.add("text-glow");
    card1.appendChild(coinPoints);
    card1.appendChild(coin);
    const note = document.createElement("div");
    note.style.backgroundImage = "url('/death_by_pollution/media/game3/objects/note.gif')";
    note.style.backgroundRepeat = "no-repeat";
    note.style.backgroundSize = "50%";
    note.style.backgroundPosition = "center";
    note.classList.add("tutorial_card_2");
    const notePoints = document.createElement("span");
    notePoints.style.position = "absolute";
    notePoints.style.bottom = "0";
    notePoints.style.left = "38%";
    notePoints.style.textAlign = "center";
    notePoints.innerHTML = "+200";
    notePoints.classList.add("tutorial_card_2");
    notePoints.classList.add("text-glow");
    card1.appendChild(notePoints);
    card1.appendChild(note);
    const diamond = document.createElement("div");
    diamond.style.backgroundImage = "url('/death_by_pollution/media/game3/objects/diamond.gif')";
    diamond.style.backgroundRepeat = "no-repeat";
    diamond.style.backgroundSize = "50%";
    diamond.style.backgroundPosition = "center";
    diamond.classList.add("tutorial_card_3");
    const diamondPoints = document.createElement("span");
    diamondPoints.style.position = "absolute";
    diamondPoints.style.bottom = "0";
    diamondPoints.style.left = "38%";
    diamondPoints.style.textAlign = "center";
    diamondPoints.innerHTML = "+500";
    diamondPoints.classList.add("tutorial_card_3");
    diamondPoints.classList.add("text-glow");
    card1.appendChild(diamondPoints);
    card1.appendChild(diamond);
    const gem = document.createElement("div");
    gem.style.backgroundImage = "url('/death_by_pollution/media/game3/objects/gem.gif')";
    gem.style.backgroundRepeat = "no-repeat";
    gem.style.backgroundSize = "50%";
    gem.style.backgroundPosition = "center";
    gem.classList.add("tutorial_card_4");
    const gemPoints = document.createElement("span");
    gemPoints.style.position = "absolute";
    gemPoints.style.bottom = "0";
    gemPoints.style.left = "36%";
    gemPoints.style.textAlign = "center";
    gemPoints.innerHTML = "+1000";
    gemPoints.classList.add("tutorial_card_4");
    gemPoints.classList.add("text-glow");
    card1.appendChild(gemPoints);
    card1.appendChild(gem);

    this.card1_text = document.createElement("p");
    this.card1_text.innerHTML = "COLLECT TO<br>GET SCORE";
    this.card1_text.style.textAlign = "center";
    this.card1_text.style.fontSize = "30px";
    this.card1_text.classList.add("text-glow");
    this.card1_text.classList.add("tutorial_card_text");
    card1.appendChild(this.card1_text);
    container.appendChild(card1);

    //CARD 2
    const card2 = document.createElement("div");
    card2.classList.add("tutorial-card");
    card2.classList.add("border-glow");

    const toxic1 = document.createElement("div");
    toxic1.style.backgroundImage = "url('/death_by_pollution/media/game3/objects/toxic1.gif')";
    toxic1.style.backgroundRepeat = "no-repeat";
    toxic1.style.backgroundSize = "50%";
    toxic1.style.backgroundPosition = "center";
    toxic1.classList.add("tutorial_card_1");
    card2.appendChild(toxic1);

    const toxic2 = document.createElement("div");
    toxic2.style.backgroundImage = "url('/death_by_pollution/media/game3/objects/toxic2.gif')";
    toxic2.style.backgroundRepeat = "no-repeat";
    toxic2.style.backgroundSize = "50%";
    toxic2.style.backgroundPosition = "center";
    toxic2.classList.add("tutorial_card_2");
    card2.appendChild(toxic2);

    const toxic3 = document.createElement("div");
    toxic3.style.backgroundImage = "url('/death_by_pollution/media/game3/objects/toxic3.gif')";
    toxic3.style.backgroundRepeat = "no-repeat";
    toxic3.style.backgroundSize = "50%";
    toxic3.style.backgroundPosition = "center";
    toxic3.classList.add("tutorial_card_3");
    card2.appendChild(toxic3);

    const toxic4 = document.createElement("div");
    toxic4.style.backgroundImage = "url('/death_by_pollution/media/game3/objects/toxic4.gif')";
    toxic4.style.backgroundRepeat = "no-repeat";
    toxic4.style.backgroundSize = "50%";
    toxic4.style.backgroundPosition = "center";
    toxic4.classList.add("tutorial_card_4");
    card2.appendChild(toxic4);

    this.card2_text = document.createElement("p");
    this.card2_text.innerHTML = "AVOID TO<br>KEEP YOUR LIFE";
    this.card2_text.style.textAlign = "center";
    this.card2_text.style.fontSize = "30px";
    this.card2_text.classList.add("text-glow");
    this.card2_text.classList.add("tutorial_card_text");
    card2.appendChild(this.card2_text);

    container.appendChild(card2);

    //CARD 3
    const card3 = document.createElement("div");
    card3.classList.add("tutorial-card");
    card3.classList.add("border-glow");
    const airport = document.createElement("div");
    airport.style.backgroundImage = "url('/death_by_pollution/media/game3/hud/airport.png')";
    airport.style.backgroundPosition = "center";
    airport.style.backgroundRepeat = "no-repeat";
    airport.style.position = "absolute";
    airport.style.top = "0";
    airport.style.width = "100%";
    airport.style.height = "70%";
    const landingPoints = document.createElement("span");
    landingPoints.style.position = "absolute";
    landingPoints.style.bottom = "38%";
    landingPoints.style.left = "42%";
    landingPoints.style.textAlign = "center";
    landingPoints.innerHTML = "+2500";
    landingPoints.classList.add("text-glow");
    card3.appendChild(landingPoints);
    card3.appendChild(airport);

    this.card3_text = document.createElement("p");
    this.card3_text.innerHTML = "LAND TO<br>FINISH";
    this.card3_text.style.textAlign = "center";
    this.card3_text.style.fontSize = "30px";
    this.card3_text.classList.add("text-glow");
    this.card3_text.classList.add("tutorial_card_text");
    card3.appendChild(this.card3_text);

    container.appendChild(card3);
    //play Button
    this.playBttn = document.createElement("div");
    this.playBttn.innerHTML = "PLAY";
    this.playBttn.style.position = "absolute";
    this.playBttn.style.top = "115%";
    this.playBttn.style.right = "0";
    this.playBttn.style.width = "100px";
    this.playBttn.style.height = "40px";
    this.playBttn.classList.add("border-glow");
    this.playBttn.classList.add("text-glow");
    this.playBttn.style.fontSize = "30px";
    this.playBttn.style.fontWeight = "bolder";
    this.playBttn.style.textAlign = "center";
    this.playBttn.style.paddingTop = "3px";
    this.playBttn.style.cursor = "pointer";
    this.playBttn.addEventListener("mouseover", ()=>{this.playBttn.style.transform = "scale(1.2)";});
    this.playBttn.addEventListener("mouseout", ()=>{this.playBttn.style.transform = "scale(1)";});
    this.playBttn.addEventListener("click", ()=>{this.playClick = true;})

    card3.appendChild(this.playBttn);
    this.element.appendChild(container);
  }
  /*  
        const playBtnInner = document.createElement("p");
        this.playBttn.appendChild(playBtnInner);       
        playBtnInner.style.fontSize = "30px";
        playBtnInner.innerHTML = "PLAY";
        playBtnInner.style.fontWeight = "bolder";
        playBtnInner.classList.add("text-glow"); */

  checkKey() {
    super.checkKey();
    switch (this.selectorPos) {
      case 0:
        if (this.keyEnterPressed || this.playClick) {
          if (!this.action) {
            this.playBttn.style.transform = "scale(1.2)";
            this.element.style.animation = "titleState-fadeOut 3s forwards";
            setTimeout(() => {
              this.gp.gameState = PLAY_STATE;
              this.element.remove();
            }, 2500);
            this.action = true;
          }

        }
        break;
      default:
    }
  }

  draw() {
    if (!this.bgAdded) {
      this.addElement();
      // this.fadeOut(this, this.gp.mH.mainMenu, 1.5);
    }
  }
}
