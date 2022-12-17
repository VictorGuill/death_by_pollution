//SET THIS VARIABLE TO MAX LAYER HEIGHT TO MATCH MAP SIZE
const bgImgHeight = 1100;
export const airportWidth = 3000;

import { playState } from "../main/gamePanel.js";

export default class Map {
    constructor(gp) {
        this.gp = gp;
        this.id = "map";
        this.x = 0;
        this.y = 0;
        
        this.worldWidth = 30000;

        this.elementsAdded = false;
    }

    addElements() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.element.classList.add("crt_borders");
        this.gp.element.appendChild(this.element);
        this.addScreenZone()
        this.getSize();
        this.addLayers();
        this.elementsAdded = true;
    }

    addScreenZone() {
        this.screenPlaneZone = document.createElement("div");
        this.screenPlaneZone.setAttribute("id", "planeScreenZone");
        this.element.appendChild(this.screenPlaneZone);
    }


    addRocks_1() {
        this.rocks_1 = document.createElement("div");
        this.rocks_1.setAttribute("id", "rocks_1");
        this.rocks_1.classList.add("layer");
        this.rocks_1.classList.add("layer-bg");
        this.rocks_1.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/rocks_1.png')";
        this.rocks_1.style.zIndex = "94";
        this.layersGroup.appendChild(this.rocks_1);
    }

    addRocks_2() {
        this.rocks_2 = document.createElement("div");
        this.rocks_2.setAttribute("id", "rocks_2");
        this.rocks_2.classList.add("layer");
        this.rocks_2.classList.add("layer-bg");
        this.rocks_2.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/rocks_2.png')";
        this.rocks_2.style.zIndex = "88";
        this.layersGroup.appendChild(this.rocks_2);

    }

    addRocks_3() {
        this.rocks_3 = document.createElement("div");
        this.rocks_3.setAttribute("id", "rocks_3");
        this.rocks_3.classList.add("layer");
        this.rocks_3.classList.add("layer-bg");
        this.rocks_3.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/rocks_3.png')";;
        this.rocks_3.style.zIndex = "100";
        this.layersGroup.appendChild(this.rocks_3);

    }

    addRocks_4() {
        this.rocks_4 = document.createElement("div");
        this.rocks_4.setAttribute("id", "rocks_4");
        this.rocks_4.classList.add("layer");
        this.rocks_4.classList.add("layer-bg");
        this.rocks_4.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/rocks_4.png')";
        this.rocks_4.style.zIndex = "98";
        this.layersGroup.appendChild(this.rocks_4);

    }

    addRocks_5() { //layer1
        this.rocks_5 = document.createElement("div");
        this.rocks_5.setAttribute("id", "rocks_5");
        this.rocks_5.classList.add("layer");
        this.rocks_5.classList.add("layer-bg");
        this.rocks_5.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/rocks_5.png')";
        this.rocks_5.style.zIndex = "100";
        this.layersGroup.appendChild(this.rocks_5);

    }

    addClouds_1() {
        this.clouds_1 = document.createElement("div");
        this.clouds_1.setAttribute("id", "clouds_1");
        this.clouds_1.classList.add("layer");
        this.clouds_1.classList.add("layer-bg");
        this.clouds_1.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/clouds_1.png')";
        this.clouds_1.style.zIndex = "86";
        this.layersGroup.appendChild(this.clouds_1);

    }

    addClouds_2() {
        this.clouds_2 = document.createElement("div");
        this.clouds_2.setAttribute("id", "clouds_2");
        this.clouds_2.classList.add("layer");
        this.clouds_2.classList.add("layer-bg");
        this.clouds_2.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/clouds_2.png')";
        this.clouds_2.style.zIndex = "92";
        this.layersGroup.appendChild(this.clouds_2);

    }

    addClouds_3() {
        this.clouds_3 = document.createElement("div");
        this.clouds_3.setAttribute("id", "clouds_3");
        this.clouds_3.classList.add("layer");
        this.clouds_3.classList.add("layer-bg");
        this.clouds_3.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/clouds_3.png')";
        this.clouds_3.style.zIndex = "90";
        this.layersGroup.appendChild(this.clouds_3);

    }

    addClouds_4() {
        this.clouds_4 = document.createElement("div");
        this.clouds_4.setAttribute("id", "clouds_4");
        this.clouds_4.classList.add("layer");
        this.clouds_4.classList.add("layer-bg");
        this.clouds_4.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/clouds_4.png')";
        this.clouds_4.style.zIndex = "96";
        this.layersGroup.appendChild(this.clouds_4);

    }

    addLayer9() {
        this.layer9 = document.createElement("div");
        this.layer9.setAttribute("id", "");
        this.layer9.classList.add("layer");
        this.layer9.classList.add("layer-bg");
        this.layer9.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/****.png')";
        this.layer9.style.zIndex = "92";
        this.layersGroup.appendChild(this.layer9);
    }

    addLayer10() {
        this.layer10 = document.createElement("div");
        this.layer10.setAttribute("id", "");
        this.layer10.classList.add("layer");
        this.layer10.classList.add("layer-bg");
        this.layer10.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/****.png')";
        this.layer10.style.zIndex = "91";
        this.layersGroup.appendChild(this.layer10);
    }

    addSky() {
        this.sky = document.createElement("div");
        this.sky.setAttribute("id", "sky");
        this.sky.classList.add("layer");
        this.sky.classList.add("layer-bg");
        this.sky.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/sky.png')";
        this.sky.style.zIndex = "80";
        this.layersGroup.appendChild(this.sky);
    }

    addAirport(){
        this.airport = document.createElement("div");
        this.airport.setAttribute("id", "airport");
        this.airport.style.backgroundImage = "url('/death_by_pollution/media/game3/background_1/layers/airport.png')"
        this.airport.style.backgroundPositionY = "200px";
        this.layersGroup.appendChild(this.airport);
    }

    addObjectsLayer(){
        this.objects = document.createElement("div");
        this.objects.classList.add("objects-layer");
        this.element.appendChild(this.objects);
    }


    addLayers() {
        this.layersGroup = document.createElement("div");
        this.layersGroup.setAttribute("id", "layers");

        this.addRocks_5();
        this.addAirport();
        //this.addRocks_4();
        this.addClouds_4();
        this.addRocks_1();
        this.addClouds_2();
        this.addClouds_3();
        this.addRocks_2();
        this.addClouds_1();
        this.addSky();

        

        this.addObjectsLayer();

        this.element.appendChild(this.layersGroup);
        this.getBgHeight();
    }

    getBgHeight(){
        this.layers = document.querySelectorAll(".layer");
        this.initialWorldY = this.h-bgImgHeight;
    }


    getSize() {
        this.w = this.element.offsetWidth;
        this.h = this.element.offsetHeight;
        this.screenPlaneZoneHeight = this.screenPlaneZone.offsetHeight;
        this.screenPlaneZoneWidth = this.screenPlaneZone.offsetWidth;
        document.documentElement.style.setProperty('--deviceWidth', window.innerWidth);
        document.documentElement.style.setProperty('deviceHeight', window.innerHeight);
        console.log("W: "+window.innerWidth);
        console.log("H: "+window.innerHeight);
    }

    drawLayersX(){
        if (this.gp.plane.worldX >= airportWidth){
            this.airport.style.backgroundPositionX = -this.worldWidth +(this.gp.plane.worldX) + "px";
            this.airport.style.transform = "scaleX(-1)";
        } else {
            this.airport.style.backgroundPositionX = -(this.gp.plane.worldX) + "px";
        }
        
        this.rocks_5.style.backgroundPositionX = -(this.gp.plane.worldX / 2) + "px";
        //this.rocks_4.style.backgroundPositionX = -(this.gp.plane.worldX/4) +"px";
        this.clouds_4.style.backgroundPositionX = (this.gp.plane.worldX / 6) + "px";
        this.rocks_1.style.backgroundPositionX = -(this.gp.plane.worldX / 10) + "px";
        this.clouds_2.style.backgroundPositionX = -(this.gp.plane.worldX / 12) + "px";
        this.clouds_3.style.backgroundPositionX = -(this.gp.plane.worldX / 14) + "px";
        this.rocks_2.style.backgroundPositionX = -(this.gp.plane.worldX / 16) + "px";
        this.clouds_1.style.backgroundPositionX = -(this.gp.plane.worldX / 18) + "px";
    }

    drawLayersY(){
        this.layers.forEach(layer => {
            layer.style.backgroundPositionY = this.initialWorldY +(this.gp.plane.worldY) +"px";
            if (parseInt(layer.style.backgroundPositionY) >= 0){
                layer.style.backgroundPositionY = "0px";
            }
        })

        this.airport.style.backgroundPositionY = (this.gp.plane.worldY + 290) +"px";
    }

    draw() {
        if (this.gp.gameState == playState) {
            if (!this.elementsAdded){
                this.addElements();
            }
            this.drawLayersX();
            this.drawLayersY();
        }

    }
}