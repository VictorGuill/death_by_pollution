import Screen from "./screen.js";

export default class End extends Screen {
  constructor(id) {
    super(id);

    this.selection = 1;
  }

  add(score) {
    super.add();

    const gameTitle = document.createElement("p");
    gameTitle.setAttribute("id", "gameTitle");
    gameTitle.innerHTML = "THE END";
    this.dom.appendChild(gameTitle);

    const score_txt = document.createElement("p");
    score_txt.setAttribute("id", "playerScore");
    score_txt.innerHTML = "Your score: " + score;
    this.dom.appendChild(score_txt);

    this.dom.appendChild(menuItem("menu"));
    this.dom.appendChild(menuItem("credits"));
    this.dom.appendChild(menuItem("exit"));
  }

  actions(input) {
    if (input["ArrowUp"] && this.selection > 1) {
      this.selection--;
      input["ArrowUp"] = false;
    }

    if (input["ArrowDown"] && this.selection < 3) {
      this.selection++;
      input["ArrowDown"] = false;
    }

    switch (this.selection) {
      case 1:
        setSelected("menu");
        removeSelected("credits");
        removeSelected("exit");
        break;
      case 2:
        removeSelected("menu");
        setSelected("credits");
        removeSelected("exit");
        break;
      case 3:
        removeSelected("menu");
        removeSelected("credits");
        setSelected("exit");
        break;
    }

    if (input["Enter"]) {
      switch (this.selection) {
        case 1:
          return "menu";
        case 2:
          return "credits_end";
        case 3:
          return "exit";
      }
    }

    return -1;
  }
}

function menuItem(id) {
  const item = document.createElement("p");
  item.setAttribute("id", id);
  item.innerHTML = id;
  return item;
}

function setSelected(id) {
  const option = document.getElementById(id);
  const option_classes = document.getElementById(id).classList;

  if (!option_classes.contains("selected")) {
    option.setAttribute("class", "selected");
    let current_text = option.innerHTML;
    option.innerHTML = "> " + current_text + " <";
  }
}

function removeSelected(id) {
  const option = document.getElementById(id);
  const option_classes = document.getElementById(id).classList;

  if (option_classes.contains("selected")) {
    option_classes.remove("selected");
    option.innerHTML = id;
  }
}
