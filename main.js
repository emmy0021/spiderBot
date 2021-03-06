var percent, slider, output, clear, collapse;
var max = 100;

window.onload = function () {
    var inc1 = document.getElementById("inc1");
    percent = document.getElementById("percentage");
    slider = document.getElementById("myRange");
    output = document.getElementById("outputtext");
    clear = document.getElementById("clear");
    collapse = document.getElementById('collapse');
    percent.value = slider.value;
    var hint = this.document.getElementById("hint");
    var addInterval = document.getElementById("addInterval");
    var upArrow = document.getElementById('u');
    var downArrow = document.getElementById('d');
    var leftArrow = document.getElementById('l');
    var rightArrow = document.getElementById('r');
    var stop = document.getElementById('stop');
    var driveBtn = document.getElementById('drive');

    slider.oninput = function () {
        percent.value = slider.value;
    }

    document.getElementById('upc').addEventListener('click', function () {
        output.innerHTML += "Forward " + slider.value + "%<br>";
    });

    document.getElementById('dpc').addEventListener('click', function () {
        output.innerHTML += "Backward " + slider.value + "%<br>";
    });

    document.getElementById('lpc').addEventListener('click', function () {
        output.innerHTML += "Turning Left " + slider.value + "%<br>";
    });

    document.getElementById('rpc').addEventListener('click', function () {
        output.innerHTML += "Turning Right " + slider.value + "%<br>";
    });

    document.getElementById("setSpeed").addEventListener("click", function () {
        slider.value = percent.value;
        output.innerHTML += "Speed Set: " + slider.value + "%<br>";
        output.scrollTop = output.scrollHeight;
    });

    document.getElementById("kill").addEventListener("click", function () {
        slider.value = 0;
        percent.value = slider.value;
        output.innerHTML += "Speed Set: " + slider.value + "%<br>";
        output.scrollTop = output.scrollHeight;
    });

    clear.addEventListener("click", function () {
        output.innerHTML = "Cleaning...<br>"
        output.innerHTML += "Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\" target=\"_blank\">Freepik</a> from <a href=\"https://www.flaticon.com\" title=\"Flaticon\" target=\"_blank\"> www.flaticon.com</a><br>";
    });

    percent.addEventListener('input', function () {

        if (percent.value > max || percent.value < 0 || !isNumeric(percent.value)) {
            percent.style.color = "red";
        } else {
            percent.style.color = "black";
            slider.value = percent.value;
        }
    });

    this.percent.addEventListener('focusout', function () {
        if (!percent.value || percent.value > max || percent.value < 0 || !isNumeric(percent.value)) {
            percent.value = 0;
            percent.style.color = "black";
            slider.value = percent.value;
        }
    });

    var outOpen = true;

    let style = window.getComputedStyle(clear),
        top = style.getPropertyValue('top');
    if (top != "17px") {
        outOpen = !outOpen;
    }

    let pc = true;
    if (top != "17px") {
        pc = false;
    }
    collapse.addEventListener('click', function () {
        let collapse = document.getElementById('collapse');



        let win = document.getElementById("output");
        if (outOpen) {
            win.style.height = "7vh";

            if (top != "17px") {
                collapse.style.bottom = "1.2vh"
                clear.style.bottom = "1.5vh";
                hint.innerHTML = "";
                collapse.style.transform = "rotate(180deg)";
            } else {
                collapse.style.transform = "rotate(0deg)";
                hint.innerHTML = "Open Prompt";
            }

            outOpen = !outOpen;
        } else {
            win.style.height = "35vh";
            if (top != "17px") {
                collapse.style.bottom = "29.2vh"
                clear.style.bottom = "29.5vh";
                hint.innerHTML = "";
                collapse.style.transform = "rotate(0deg)";
            } else {
                hint.innerHTML = "Close Prompt";
                collapse.style.transform = "rotate(180deg)";
            }
            outOpen = !outOpen;
        }

        win.scrollTop = win.scrollHeight;

    });



    inc1.addEventListener('click', function () {
        if (percent.value < 100) {
            percent.value++;
            slider.value = percent.value;
        }
    });

    document.getElementById("dec1").addEventListener('click', function () {
        if (percent.value > 0) {
            percent.value--;
            slider.value = percent.value;
        }
    });

    document.getElementById("inc5").addEventListener('click', function () {
        slider.value = parseInt(slider.value) + 5;
        percent.value = slider.value;
    });

    document.getElementById("dec5").addEventListener('click', function () {
        slider.value = parseInt(slider.value) - 5;
        percent.value = slider.value;
    });

    addInterval.addEventListener('click', function () {
        let btns = document.getElementsByClassName('speed');

        for (let i = 2; i >= 1; i--) {
            btns[i].innerHTML = btns[i - 1].innerHTML;
        }
        btns[0].style.fontSize = "18px";
        btns[0].style.fontWeight = "800";
        btns[0].innerText = percent.value + '%';
    });

    for (var i = 1; i <= 3; i++) {
        let intervalBtn = document.getElementById('intervalBtn' + i);

        intervalBtn.addEventListener('click', function (event) {
            slider.value = parseInt(intervalBtn.innerText);
            percent.value = slider.value;
        });
    }
    upArrow.addEventListener('click', function () {
        output.innerHTML += "Forward " + slider.value + "%<br>";
        // goPython("r",slider.value);
    });

    downArrow.addEventListener('click', function () {
        output.innerHTML += "Backward " + slider.value + "%<br>";
        //goPython("b",slider.value);

    });

    leftArrow.addEventListener('click', function () {
        output.innerHTML += "Left " + slider.value + "%<br>";
        //goPython("l",slider.value);
    });

    rightArrow.addEventListener('click', function () {
        output.innerHTML += "Right " + slider.value + "%<br>";
        //goPython("r",slider.value);
    });

    stop.addEventListener('click', function () {
        output.innerHTML += "stopping... <br>";
        //goPython("e","0");
    });

    let btn = document.getElementById('button');
    let open = false;


    document.getElementById("open").addEventListener('click', function () {

        if (open) {
            btn.style.width = "73px";
            btn.style.height = "58px";
            d.style.top = "-251px";
        } else {
            btn.style.width = "290px";
            btn.style.height = "360px";
            d.style.top = "2px";
        }

        open = !open;
    });

    let driveopen = false;
    let d = document.getElementById('driveBtn');

    d.addEventListener('mouseover', function () {

        if (driveopen) {
            d.style.width = "73px";
            d.style.height = "58px";
        } else {
            d.style.width = "290px";
            d.style.height = "360px";
        }

    });

    d.addEventListener('mouseover', function () {

        if (driveopen) {
            d.style.width = "290px";
            d.style.height = "360px";
        }
    });

    d.addEventListener('mouseleave', function () {

        if (!driveopen) {
            d.style.width = "73px";
            d.style.height = "58px";
        }

    });


    driveBtn.addEventListener('click', function () {
        if (driveopen) {
            d.style.width = "73px";
            d.style.height = "58px";
        } else {
            d.style.width = "290px";
            d.style.height = "360px";
        }
        driveopen = !driveopen;

    });



    btn.addEventListener('mouseover', function () {

        d.style.top = "2px";

        if (!open) {
            btn.style.width = "290px";
            btn.style.height = "360px";
        }
    });



    document.getElementById('open').addEventListener('mouseover', function () {
        d.style.top = "2px";

        if (!open) {
            btn.style.width = "290px";
            btn.style.height = "360px";
        }

    });


    btn.addEventListener('mouseleave', function () {

        if (!open) {
            d.style.top = "-251px";
            btn.style.width = "73px";
            btn.style.height = "58px";
        }




    });

    document.getElementById('open').addEventListener('mouseleave', function () {

        if (!open)
            d.style.top = "-251px";
        else
            d.style.top = "2px";


    });

    console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");

    var joystick = new VirtualJoystick({
        container: document.getElementById('container'),
        mouseSupport: true,
    });
    joystick.addEventListener('touchStart', function () {
        //console.log('down')
    });
    joystick.addEventListener('touchEnd', function () {
        //console.log('up')
    });
    if (!pc) {
        setInterval(function () {

            output.innerHTML += "Forward " + slider.value + "%<br>";
            output.innerHTML =
                (joystick.right() && !joystick.up() && !joystick.down() ? "Turing Right " + slider.value + "%<br>" : '') +
                (joystick.up() ? "Forward " + slider.value + "%<br>" : '') +
                (joystick.left() && !joystick.up() && !joystick.down() ? "Turning Left " + slider.value + "%<br>" : '') +
                (joystick.down() ? "Backward " + slider.value + "%<br>" : '') +
                (!joystick.left()&& !joystick.right() && !joystick.up() && !joystick.down()? "Stopping... <br>" : '')


        }, 1 / 30 * 1000);
    }


}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function goPython(mode, speed) {
    let u = "motorControl.py";
    $.ajax({
        url: u,
        context: document.body
    }).done(function () {
        alert('finished python script');;
    });
}