const gamearea1 = document.querySelector('.gamearea1');
const clickdiv = document.querySelector('.clickdiv');
const result = document.querySelector('.result')
const score = document.querySelector('#score')
const displayscore = document.querySelector('.score')
var counter = 0;

clickdiv.addEventListener('click', gamestart);

function gamestart() {
    clickdiv.style.display = 'none';
    result.style.display='none';

    // Creating Alien 
    var alien = document.createElement('div');
    var alienimg = document.createElement('img');
    alien.classList.add('alien');
    alienimg.classList.add('alienimg');
    alienimg.src = "alien.png";
    gamearea1.appendChild(alien);
    alien.appendChild(alienimg);

    // Moving Alien 
    function movealien() {
        alien.style.display = 'block';
        var random = (Math.floor(Math.random() * 5)) * 100;
        alien.style.left = random + 'px';
        counter++;
    }
    setInterval(movealien, 2000);


    // Creating rocket 
    var rocket = document.createElement('div');
    var rocketimg = document.createElement('img');
    rocketimg.src = "fighterjet.png";
    rocket.classList.add('rocket');
    rocketimg.classList.add('rocketimg');
    gamearea1.appendChild(rocket);
    rocket.appendChild(rocketimg);

    // Moving rocket and firing of player1   
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == 37) {
            rocketleft = parseInt(window.getComputedStyle(rocket).getPropertyValue('left'));
            if (rocketleft >= 100) {
                rocket.style.left = (rocketleft - 100) + 'px';
            }
        }
        if (e.keyCode == 39) {
            rocketleft = parseInt(window.getComputedStyle(rocket).getPropertyValue('left'));
            if (rocketleft < 400) {
                rocket.style.left = (rocketleft + 100) + 'px';
            }
        }
        if (e.keyCode == 32) {
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
    

    // Game over 

    function gameover(){
        var alientop = parseInt(window.getComputedStyle(alien).getPropertyValue('top'));
        if(alientop > 480){
            rocket.remove();
            alien.remove();
            result.style.display='flex';
            score.innerHTML=`Score:${counter}`;
        }
    }
    setInterval(gameover, 10);
}