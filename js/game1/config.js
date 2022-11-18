//#region SCREENS
setCssVar("--contrast", "1.1");
setCssVar("--saturation", "1.25");
setCssVar("--brightness", "1.15");

export const screen_size = 0.95;

setCssVar("--scanLinesSpeed", "0.5s");
setCssVar("--scanLinesOpacity", "0.25");
setCssVar("--scanLinesSize", "4px");
//#endregion

//#region PLAYER SETTINGS
export const player_scale = 1;
export const player_min_y = 0.14;
export const player_max_y = 1;
export const player_margin_x = 0.01;

// movement
export const accel = 9;
export const top_speed = 45;
export const friction = 6;
export const diagonal_speed_limit = 0.8;
//#endregion

//#region MAP ITEMS
// general
export const rotation_min = -50;
export const rotation_max = 50;
export const item_margin_x = 0.02;

// trash
export const trash_quantity = 15;
export const trash_scale = 1.5;

// perks
export const perks_quantity = 3;
export const perk_scale = 1;

export const perk_spawn_time = 500;
export const perk_probability = 100;
//#endregion

//#region SPEED BOOST PERK SETTINGS
export const speed_boost_duration = 5000;
export const speed_boost_max = 10000;

export const accel_boost = 35;
export const top_speed_boost = 70;
export const friction_boost = 30;
//#endregion

//#region FUNCTIONS
function setCssVar(name, value) {
  document.documentElement.style.setProperty(name, value);
}
//#endregion
