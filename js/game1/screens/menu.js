import Screen from "./screen.js";

export default class Menu extends Screen {
  constructor(id) {
    super(id);

    this.selection = 1;
  }

  add() {
    super.add();

    const gameTitle = document.createElement("p");
    gameTitle.setAttribute("id", "gameTitle");
    gameTitle.innerHTML = "SUPER<br><span>SCUBA</span>";
    this.dom.appendChild(gameTitle);

    this.dom.appendChild(menuItem("play"));
    this.dom.appendChild(menuItem("tutorial"));
    this.dom.appendChild(menuItem("credits"));
    this.dom.appendChild(menuItem("exit"));
  }

  actions(input) {
    if (input["ArrowUp"] && this.selection > 1) {
      this.selection--;
      input["ArrowUp"] = false;
    }

    if (input["ArrowDown"] && this.selection < 4) {
      this.selection++;
      input["ArrowDown"] = false;
    }

    switch (this.selection) {
      case 1:
        setSelected("play");
        removeSelected("tutorial");
        removeSelected("credits");
        removeSelected("exit");
        break;

      case 2:
        removeSelected("play");
        setSelected("tutorial");
        removeSelected("credits");
        removeSelected("exit");
        break;

      case 3:
        removeSelected("play");
        removeSelected("tutorial");
        setSelected("credits");
        removeSelected("exit");
        break;
      case 4:
        removeSelected("play");
        removeSelected("tutorial");
        removeSelected("credits");
        setSelected("exit");
        break;
    }

    if (input["Enter"]) {
      switch (this.selection) {
        case 1:
          return "game";
        case 2:
          return "tutorial";
        case 3:
          return "credits";
        case 4:
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
