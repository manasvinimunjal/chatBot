function _(id) {
    return document.getElementById(id);
}
var droppedIn = false;
function dragStart(event) {

    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id'));
}
function dragDrop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    var elementId = event.dataTransfer.getData("text");
    event.target.appendChild(_(elementId));

    _(elementId).removeAttribute("draggable");
    _(elementId).style.cursor = "default";
    droppedIn = true;
     _(elementId).setAttribute("style","margin:0px");

}

droppedIn = false;




/////////////////////////////////////////////

var x = document.getElementById("object1");
setTimeout(function () {
    var node = document.createElement("span");
    var textnode1 = document.createTextNode("Hey,I can help you with your flight bookings.");
    node.appendChild(textnode1);
    document.getElementById("object1").appendChild(node);
    var CONTAINER_TAG = document.getElementById("object1");
    CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;clear:both;");
}, 1000);

var x1 = document.getElementById("object2");
setTimeout(function () {
    var node = document.createElement("span");
    var textnode2 = document.createTextNode("May I know your name");
    node.appendChild(textnode2);
    document.getElementById("object2").appendChild(node);
    var CONTAINER_TAG = document.getElementById("object2");
    CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;clear:both;margin-top:10px;");
}, 2000);

var list = document.getElementById('object3');
var list1 = document.getElementById('object4');
var list2 = document.getElementById('object5');
var list3 = document.getElementById('object6');
var list4 = document.getElementById('object7');
var list5 = document.getElementById('object8');

var counter = 0;


$(document).ready(function () {
    $('button[type="submit"]').attr('disabled', true);
    $('input[type="text"]').on('keyup', function () {
        var text_value = $('input[name="textField"]').val();
        if (text_value != '') {
            $('button[type="submit"]').attr('disabled', false);

        }
        else {
            $('button[type="submit"]').attr('disabled', true);
        }
    });
});

function changeText2() {
    if (counter == 0) {

        var userInput = document.getElementById('userInput').value;
        var entry = document.createElement('span');
        entry.appendChild(document.createTextNode(userInput));
        list.appendChild(entry);

        var CONTAINER_TAG = document.getElementById("object3");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #FAEBD7;border-radius:25px;background-color:#FAEBD7;padding:2px;float:right;margin-top:40px;");
        setTimeout(function () {
            var img = document.createElement("img");
            img.src = "https://img.clipartfest.com/e70880539beb5127f11d05818ab14b0d_tick-clip-art-free-clip-art-tick_285-297.png";
            img.setAttribute("style", "width:14px;height:12px;margin-left:3px;");
            var src = document.getElementById("object3");
            src.appendChild(img);
        }, 1000);

        document.getElementById('userInput').value = '';
        document.getElementById('userInput').type = 'email';
        counter = 1;
        $(document).ready(function () {
            $('button[type="submit"]').attr('disabled', true);
            $('input[type="email"]').on('keyup', function () {
                var text_value = $('input[name="textField"]').val();
                if (text_value != '') {
                    $('button[type="submit"]').attr('disabled', false);
                }
                else {
                    $('button[type="submit"]').attr('disabled', true);
                }
            });
        });
        var myVar = setTimeout(addElement, 2000);
    }
    else if (counter == 1) {

        var userInput1 = document.getElementById('userInput').value;
        var entry1 = document.createElement('span');
        entry1.appendChild(document.createTextNode(userInput1));
        list1.appendChild(entry1);
        var CONTAINER_TAG = document.getElementById("object4");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #FAEBD7;border-radius:25px;background-color:#FAEBD7;padding:2px;float:right;margin-top:35px;px;margin-left:20px;");

        setTimeout(function () {
            var img = document.createElement("img");
            img.src = "https://img.clipartfest.com/e70880539beb5127f11d05818ab14b0d_tick-clip-art-free-clip-art-tick_285-297.png";
            img.setAttribute("style", "width:14px;height:12px;margin-left:3px;");
            var src = document.getElementById("object4");
            src.appendChild(img);
        }, 1000);

        document.getElementById('userInput').value = '';
        document.getElementById('userInput').type = 'date';
        counter = 2;
        var myVar = setTimeout(addElement1, 2000);
    }
    else if (counter == 2) {


        var userInput2 = document.getElementById('userInput').value;
        var entry2 = document.createElement('span');
        entry2.appendChild(document.createTextNode(userInput2));
        list2.appendChild(entry2);
        var CONTAINER_TAG = document.getElementById("object5");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #FAEBD7;border-radius:25px;background-color:#FAEBD7;padding:2px;float:right;margin-top:15px;");
        setTimeout(function () {
            var img = document.createElement("img");
            img.src = "https://img.clipartfest.com/e70880539beb5127f11d05818ab14b0d_tick-clip-art-free-clip-art-tick_285-297.png";
            img.setAttribute("style", "width:14px;height:12px;margin-left:3px;");
            var src = document.getElementById("object5");
            src.appendChild(img);
        }, 1000);

        document.getElementById('userInput').value = '';
        document.getElementById('userInput').type = 'text';
        counter = 3;
        $(document).ready(function () {
            $('button[type="submit"]').attr('disabled', true);
            $('input[type="text"]').on('keyup', function () {
                var text_value = $('input[name="textField"]').val();
                if (text_value != '') {
                    $('button[type="submit"]').attr('disabled', false);
                }
                else {
                    $('button[type="submit"]').attr('disabled', true);
                }
            });
        });
        var myVar = setTimeout(addElement2, 2000);

    }
    else if (counter == 3) {

        var userInput3 = document.getElementById('userInput').value;
        var entry3 = document.createElement('span');
        entry3.appendChild(document.createTextNode(userInput3));
        list3.appendChild(entry3);
        var CONTAINER_TAG = document.getElementById("object6");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #FAEBD7;border-radius:25px;background-color:#FAEBD7;padding:2px;float:right;margin-top:35px;");
        setTimeout(function () {
            var img = document.createElement("img");
            img.src = "https://img.clipartfest.com/e70880539beb5127f11d05818ab14b0d_tick-clip-art-free-clip-art-tick_285-297.png";
            img.setAttribute("style", "width:14px;height:12px;margin-left:3px;");
            var src = document.getElementById("object6");
            src.appendChild(img);
        }, 1000);

        document.getElementById('userInput').value = '';
        counter = 4;
        $(document).ready(function () {
            $('button[type="submit"]').attr('disabled', true);
            $('input[type="text"]').on('keyup', function () {
                var text_value = $('input[name="textField"]').val();
                if (text_value != '') {
                    $('button[type="submit"]').attr('disabled', false);
                }
                else {
                    $('button[type="submit"]').attr('disabled', true);
                }
            });
        });
        var myVar = setTimeout(addElement3, 2000);

    }
    else if (counter == 4) {

        var userInput4 = document.getElementById('userInput').value;
        var entry4 = document.createElement('span');
        entry4.appendChild(document.createTextNode(userInput4));
        list4.appendChild(entry4);
        var CONTAINER_TAG = document.getElementById("object7");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #FAEBD7;border-radius:25px;background-color:#FAEBD7;padding:2px;float:right;margin-top:20px;");
        setTimeout(function () {
            var img = document.createElement("img");
            img.src = "https://img.clipartfest.com/e70880539beb5127f11d05818ab14b0d_tick-clip-art-free-clip-art-tick_285-297.png";
            img.setAttribute("style", "width:14px;height:12px;margin-left:3px;");
            var src = document.getElementById("object7");
            src.appendChild(img);
        }, 1000);

        document.getElementById('userInput').value = '';
        document.getElementById('userInput').type = 'number';
        counter = 5;

        var myVar = setTimeout(addElement4, 2000);
        var myVar1 = setTimeout(addElement5, 3000);


    }
    else if (counter == 5) {

        var userInput5 = document.getElementById('userInput').value;
        var entry5 = document.createElement('span');
        entry5.appendChild(document.createTextNode(userInput5));
        list5.appendChild(entry5);
        var CONTAINER_TAG = document.getElementById("object8");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #FAEBD7;border-radius:25px;background-color:#FAEBD7;padding:2px;float:right;margin-top:20px;");
        setTimeout(function () {
            var img = document.createElement("img");
            img.src = "https://img.clipartfest.com/e70880539beb5127f11d05818ab14b0d_tick-clip-art-free-clip-art-tick_285-297.png";
            img.setAttribute("style", "width:14px;height:12px;margin-left:3px;");
            var src = document.getElementById("object8");
            src.appendChild(img);
        }, 1000);

        document.getElementById('userInput').value = '';
        var elem = document.getElementById('dummy');
        elem.parentNode.removeChild(elem);
        var myVar = setTimeout(addElement6, 2000);
    }

    function addElement() {
        var node = document.createElement("span");
        var textnode = document.createTextNode("And what's your email ID?");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        var CONTAINER_TAG = document.getElementById("myList");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;margin-top:40px;margin-right:400px;");
    }
    function addElement1() {
        var node = document.createElement("span");
        var textnode = document.createTextNode("When are a you planning to leave?");
        node.appendChild(textnode);
        document.getElementById("myList1").appendChild(node);
        var CONTAINER_TAG = document.getElementById("myList1");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;margin-top:20px;margin-right:400px;");
    }
    function addElement2() {
        var node = document.createElement("span");
        var textnode = document.createTextNode("What is the origin of the flight?");
        node.appendChild(textnode);
        document.getElementById("myList2").appendChild(node);
        var CONTAINER_TAG = document.getElementById("myList2");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;margin-top:20px;margin-right:400px;");
    }
    function addElement3() {
        var node = document.createElement("span");
        var textnode = document.createTextNode("And what's the destination of the flight?");
        node.appendChild(textnode);
        document.getElementById("myList3").appendChild(node);
        var CONTAINER_TAG = document.getElementById("myList3");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;margin-top:20px;margin-right:400px;");
    }
    function addElement4() {
        var node = document.createElement("span");
        var textnode = document.createTextNode("Thank you for submitting the details.");
        node.appendChild(textnode);
        document.getElementById("myList4").appendChild(node);
        var CONTAINER_TAG = document.getElementById("myList4");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;margin-top:42px;margin-right:400px;");
    }
    function addElement5() {
        var node = document.createElement("span");
        var textnode = document.createTextNode("How would you rate your experience with us?");
        node.appendChild(textnode);
        document.getElementById("myList5").appendChild(node);
        var CONTAINER_TAG = document.getElementById("myList5");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;margin-top:24px;margin-right:400px;");
    }
    function addElement6() {
        var node = document.createElement("span");
        var textnode = document.createTextNode("see you later...");
        node.appendChild(textnode);
        document.getElementById("myList6").appendChild(node);
        var CONTAINER_TAG = document.getElementById("myList6");
        CONTAINER_TAG.setAttribute("style", "border: 1px solid #A9F5D0;border-radius:25px;background-color:#A9F5D0;padding:2px;float:left;margin-top:28px;margin-right:400px;");
    }
}























