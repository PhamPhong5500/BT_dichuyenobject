/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 13;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += 13;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function () {
        this.left -= 13;
        console.log("ok:" + this.left);
    }
    this.movetop = function () {
        this.top -= 13;
        console.log('ok:' + this.top);
    }
}

let hero = new Hero('songoku.png', -1, 30, 300);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top < 0) {
        hero.moveRight();
    } else if (hero.left > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    } else if (hero.top > window.innerHeight - hero.size && hero.left > 0) {
        hero.moveLeft();
    } else {
        hero.movetop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();