import Screen from "./screen.js";

export default class Menu extends Screen {
  constructor(id) {
    super(id);

    this.selection = 1;

    this.add();
  }

  add() {
    super.add();

    this.screen.appendChild(menuItem("play"));
    this.screen.appendChild(menuItem("options"));
    this.screen.appendChild(menuItem("exit"));
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
        setSelected("play");
        removeSelected("options");
        removeSelected("exit");
        break;

      case 2:
        removeSelected("play");
        setSelected("options");
        removeSelected("exit");
        break;

      case 3:
        removeSelected("play");
        removeSelected("options");
        setSelected("exit");
        break;
    }

    if (input["Enter"]) {
      switch (this.selection) {
        case 1:
          return "game";
        case 2:
          return "options";
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
