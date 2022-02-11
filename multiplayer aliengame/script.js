const gamearea1 = document.querySelector('.gamearea1');
const gamearea2 = document.querySelector('.gamearea2');
const clickdiv = document.querySelector('.clickdiv');
const result = document.querySelector('.result')
const winnertext = document.querySelector('#winnertext')
clickdiv.addEventListener('click', gamestart);

function gamestart() {
    clickdiv.style.display = 'none';
    result.style.display='none';

    // Creating Alien 
    var alien = document.createElement('div');
    var alien2 = document.createElement('div');
    var alienimg = document.createElement('img');
    var alienimg2 = document.createElement('img');
    alien.classList.add('alien');
    alien2.classList.add('alien');
    alienimg.classList.add('alienimg');
    alienimg2.classList.add('alienimg');
    alienimg.src = "alien.png";
    alienimg2.src = "alien.png";
    gamearea1.appendChild(alien);
    gamearea2.appendChild(alien2);
    alien.appendChild(alienimg);
    alien2.appendChild(alienimg2);

    // Moving Alien 
    function movealien() {
        alien.style.display = 'block';
        alien2.style.display = 'block';
        var random = (Math.floor(Math.random() * 5)) * 100;
        var random2 = (Math.floor(Math.random() * 5)) * 100;
        alien.style.left = random + 'px';
        alien2.style.left = random2 + 'px';
    }
    setInterval(movealien, 2000);


    // Creating rocket 
    var rocket = document.createElement('div');
    var rocket2 = document.createElement('div');
    var rocketimg = document.createElement('img');
    var rocketimg2 = document.createElement('img');
    rocketimg.src = "fighterjet.png";
    rocketimg2.src = "fighterjet.png";
    rocket.classList.add('rocket');
    rocket2.classList.add('rocket');
    rocketimg.classList.add('rocketimg');
    rocketimg2.classList.add('rocketimg');
    gamearea1.appendChild(rocket);
    gamearea2.appendChild(rocket2);
    rocket.appendChild(rocketimg);
    rocket2.appendChild(rocketimg2);

    // Moving rocket and firing of player1   
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == 65) {
            rocketleft = parseInt(window.getComputedStyle(rocket).getPropertyValue('left'));
            if (rocketleft >= 100) {
                rocket.style.left = (rocketleft - 100) + 'px';
            }
        }
        if (e.keyCode == 68) {
            rocketleft = parseInt(window.getComputedStyle(rocket).getPropertyValue('left'));
            if (rocketleft < 400) {
                rocket.style.left = (rocketleft + 100) + 'px';
            }
        }
        if (e.keyCode == 87) {
            var bullet = document.createElement('div');
            var bulletimg = document.createElement('img');
            bullet.classList.add('bullet');
            bulletimg.classList.add('bulletimg');
            bulletimg.src = 'bullet.png';
            bullet.appendChild(bulletimg);
            gamearea1.appendChild(bullet);
            bullet.style.left = rocket.style.left;

            setTimeout(() => {
                bullet.remove();
            }, 500);

            // when bullet hit alien
            setInterval(function () {
                bulletleft = parseInt(window.getComputedStyle(bullet).getPropertyValue('left'));
                bullettop = parseInt(window.getComputedStyle(bullet).getPropertyValue('top'));
                alienleft = parseInt(window.getComputedStyle(alien).getPropertyValue('left'));
                alientop = parseInt(window.getComputedStyle(alien).getPropertyValue('top'));
                if ((bulletleft == alienleft) && (bullettop < alientop + 50) && (bullettop + 100 > alientop)) {
                    bullet.style.display = 'none';
                    alien.style.display = 'none';
                }
            }, 10);

        }
    })

    // Moving rocket and firing of player2
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == 37) {
            rocket2left = parseInt(window.getComputedStyle(rocket2).getPropertyValue('left'));
            if (rocket2left >= 100) {
                rocket2.style.left = (rocket2left - 100) + 'px';
            }
        }
        if (e.keyCode == 39) {
            rocket2left = parseInt(window.getComputedStyle(rocket2).getPropertyValue('left'));
            if (rocket2left < 400) {
                rocket2.style.left = (rocket2left + 100) + 'px';
            }
        }
        if (e.keyCode == 38) {
            var bullet2 = document.createElement('div');
            var bullet2img = document.createElement('img');
            bullet2.classList.add('bullet');
            bullet2img.classList.add('bulletimg');
            bullet2img.src = 'bullet.png';
            bullet2.appendChild(bullet2img);
            gamearea2.appendChild(bullet2);
            bullet2.style.left = rocket2.style.left;

            setTimeout(() => {
                bullet2.remove();
            }, 500);

            // when bullet hit alien 
            setInterval(function () {
                bullet2left = parseInt(window.getComputedStyle(bullet2).getPropertyValue('left'));
                bullet2top = parseInt(window.getComputedStyle(bullet2).getPropertyValue('top'));
                alien2left = parseInt(window.getComputedStyle(alien2).getPropertyValue('left'));
                alien2top = parseInt(window.getComputedStyle(alien2).getPropertyValue('top'));
                if ((bullet2left == alien2left) && (bullet2top < alien2top + 50) && (bullet2top + 100 > alien2top)) {
                    bullet2.style.display = 'none';
                    alien2.style.display = 'none';
                }
            }, 10);
        }
    })

    // Game over 
    function gameover(){
        var alientop = parseInt(window.getComputedStyle(alien).getPropertyValue('top'));
        var alien2top = parseInt(window.getComputedStyle(alien2).getPropertyValue('top'));
        if(alientop > 480){
            winnertext.innerText ='Player2 win'
            rocket.remove();
            rocket2.remove();
            alien.remove();
            alien2.remove();
            result.style.display='flex';
        }
        if(alien2top > 480){
            winnertext.innerText ='Player1 win'
            rocket.remove();
            rocket2.remove();
            alien.remove();
            alien2.remove();
            result.style.display='flex';
        }
    }
    
    setInterval(gameover, 10);





}