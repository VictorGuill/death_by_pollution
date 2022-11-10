export default class Map {
    constructor(gp) {
        this.gp = gp;
        this.id = "map";
        this.x = 0;
        this.y = 0;
        this.addElement();
        this.setBg();
        this.getSize();
        this.addScreenZone();
    }

    addElement() {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.gp.element.appendChild(this.element);
    }

    addScreenZone() {
        const screenPlaneZone = document.createElement("div");
        screenPlaneZone.setAttribute("id", "planeScreenZone");
        this.element.appendChild(screenPlaneZone);
    }

    addRocks_1() {
        this.rocks_1 = document.createElement("div");
        this.rocks_1.setAttribute("id", "rocks_1");
        this.rocks_1.classList.add("layer");
        this.rocks_1.style.backgroundImage = "url('/media/game3/background_1/layers/rocks_1.png')";
        this.rocks_1.style.zIndex = "94";
        this.element.appendChild(this.rocks_1);
    }

    addRocks_2(){
        this.rocks_2 = document.createElement("div");
        this.rocks_2.setAttribute("id", "rocks_2");
        this.rocks_2.classList.add("layer");
        this.rocks_2.style.backgroundImage = "url('/media/game3/background_1/layers/rocks_2.png')";
        this.rocks_2.style.zIndex = "88";
        this.element.appendChild(this.rocks_2);
    }

    addRocks_3(){
        this.rocks_3 = document.createElement("div");
        this.rocks_3.setAttribute("id", "rocks_3");
        this.rocks_3.classList.add("layer");
        this.rocks_3.style.backgroundImage = "url('/media/game3/background_1/layers/rocks_3.png')";;
        this.rocks_3.style.zIndex = "100";
        this.element.appendChild(this.rocks_3);
    }

    addRocks_4(){ //layer2
        this.rocks_4 = document.createElement("div");
        this.rocks_4.setAttribute("id", "rocks_4");
        this.rocks_4.classList.add("layer");
        this.rocks_4.style.backgroundImage = "url('/media/game3/background_1/layers/rocks_4.png')";
        this.rocks_4.style.zIndex = "98";
        this.element.appendChild(this.rocks_4);
    }

    addRocks_5(){ //layer1
        this.rocks_5 = document.createElement("div");
        this.rocks_5.setAttribute("id", "rocks_5");
        this.rocks_5.classList.add("layer");
        this.rocks_5.style.backgroundImage = "url('/media/game3/background_1/layers/rocks_5.png')";
        this.rocks_5.style.zIndex = "100";
        this.element.appendChild(this.rocks_5);
    }

    addClouds_1(){
        this.clouds_1 = document.createElement("div");
        this.clouds_1.setAttribute("id", "clouds_1");
        this.clouds_1.classList.add("layer");
        this.clouds_1.style.backgroundImage = "url('/media/game3/background_1/layers/clouds_1.png')";
        this.clouds_1.style.zIndex = "86";
        this.element.appendChild(this.clouds_1);
    }

    addClouds_2(){
        this.clouds_2 = document.createElement("div");
        this.clouds_2.setAttribute("id", "clouds_2");
        this.clouds_2.classList.add("layer");
        this.clouds_2.style.backgroundImage = "url('/media/game3/background_1/layers/clouds_2.png')";
        this.clouds_2.style.zIndex = "92";
        this.element.appendChild(this.clouds_2);
    }

    addClouds_3(){
        this.clouds_3 = document.createElement("div");
        this.clouds_3.setAttribute("id", "clouds_3");
        this.clouds_3.classList.add("layer");
        this.clouds_3.style.backgroundImage = "url('/media/game3/background_1/layers/clouds_3.png')";
        this.clouds_3.style.zIndex = "90";
        this.element.appendChild(this.clouds_3);
    }

    addClouds_4(){
        this.clouds_4 = document.createElement("div");
        this.clouds_4.setAttribute("id", "clouds_4");
        this.clouds_4.classList.add("layer");
        this.clouds_4.style.backgroundImage = "url('/media/game3/background_1/layers/clouds_4.png')";
        this.clouds_4.style.zIndex = "96";
        this.element.appendChild(this.clouds_4);
    }

    addLayer9(){
        this.layer9 = document.createElement("div");
        this.layer9.setAttribute("id", "");
        this.layer9.classList.add("layer");
        this.layer9.style.backgroundImage = "url('/media/game3/background_1/layers/****.png')";
        this.layer9.style.zIndex = "92";
        this.element.appendChild(this.layer9);
    }

    addLayer10(){
        this.layer10 = document.createElement("div");
        this.layer10.setAttribute("id", "");
        this.layer10.classList.add("layer");
        this.layer10.style.backgroundImage = "url('/media/game3/background_1/layers/****.png')";
        this.layer10.style.zIndex = "91";
        this.element.appendChild(this.layer10);
    }

    addSky(){
        this.sky = document.createElement("div");
        this.sky.setAttribute("id", "sky");
        this.sky.classList.add("layer");
        this.sky.style.backgroundImage = "url('/media/game3/background_1/layers/sky.png')";
        this.sky.style.zIndex = "80";
        this.element.appendChild(this.sky);
    }
    

    setBg() {
        this.addRocks_5();
        //this.addRocks_4();
        this.addClouds_4();
        this.addRocks_1();
        this.addClouds_2();
        this.addClouds_3();
        this.addRocks_2();
        this.addClouds_1();        
        this.addSky();
    }




    getSize() {
        this.w = parseInt(getComputedStyle(this.element).width);
        this.h = parseInt(getComputedStyle(this.element).height);
    }


    draw(){
        this.rocks_5.style.backgroundPositionX = -(this.gp.plane.worldX/2) +"px";
        //this.rocks_4.style.backgroundPositionX = -(this.gp.plane.worldX/4) +"px";
        this.clouds_4.style.backgroundPositionX = -(this.gp.plane.worldX/6) +"px";
        this.rocks_1.style.backgroundPositionX = -(this.gp.plane.worldX/10) +"px";
        this.clouds_2.style.backgroundPositionX = -(this.gp.plane.worldX/12) +"px";
        this.clouds_3.style.backgroundPositionX = -(this.gp.plane.worldX/14) +"px";
        this.rocks_2.style.backgroundPositionX = -(this.gp.plane.worldX/16) +"px";
        this.clouds_1.style.backgroundPositionX = -(this.gp.plane.worldX/18) +"px";

        this.rocks_5.style.backgroundPositionY = +(this.gp.plane.worldY) +"px";
        /* //this.rocks_4.style.backgroundPositionX = -(this.gp.plane.worldX/4) +"px";
        this.clouds_4.style.backgroundPositionY = +(this.gp.plane.worldY) +"px";
        this.rocks_1.style.backgroundPositionY = +(this.gp.plane.worldY) +"px";
        this.clouds_2.style.backgroundPositionY = +(this.gp.plane.worldY) +"px";
        this.clouds_3.style.backgroundPositionY = +(this.gp.plane.worldY) +"px";
        this.rocks_2.style.backgroundPositionY = +(this.gp.plane.worldY) +"px";
        this.clouds_1.style.backgroundPositionY = +(this.gp.plane.worldY) +"px"; */
    }
}