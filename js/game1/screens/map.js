import Screen from "./screen.js";
import { gameplayDuration } from "../config.js";

export default class Map extends Screen {
  constructor(id) {
    super(id);

    this.start_play_time;
    this.max_time;
  }

  setGameTime(elapsedTime) {
    this.max_time = (gameplayDuration + 1) * 1000 + elapsedTime;
  }
}
