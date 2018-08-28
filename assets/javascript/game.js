$(function () {

    // build players, health, and power level
    let players = [
        {
            name: "Goku", 
            health: 94, 
            level: 4
        },
        {
            name: "Gohan", 
            health: 64, 
            level: 2
        },
        {
            name: "Trunks", 
            health: 73, 
            level: 3
        },
        {
            name: "Majin-Buu", 
            health: 90, 
            level: 4
        },
        {
            name: "Vegeta", 
            health: 81, 
            level: 4
        }
    ]

    // variable for attacks
    let kame = $("#kame").on("click", function () {
        if (players[index].level = 4) {
            Math.floor(Math.random() * (20)) + 40;
        }
    });

    let flare = $("#flare").on("click", function () {
        if (players[index].level = 2) {
            Math.floor(Math.random() * (20)) + 20;
        }
        else {
            $("#kame").remove();
            $("#beam").remove();
        }
    });

    let beam = $("#beam").on("click", function (){
        if (players[index].level = 3) {
            Math.floor(Math.random() * (15)) + 30;
        }
        else {
            $("#kame").remove();
        }
    });

    // maybe a restart function?
    // let restart = reload();


    // ------------------------- event listeners


    // for Goku to move down
    $(".goku").on("click", function () {
        $("img").off();
        $(".goku").detach().appendTo(".character");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");
         
        // for others to move down from character section
        if ($(".gohan").on("click", function () {
            $("img").off();
            $(".goku").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $("img").off();
            $(".goku").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $("img").off();
            $(".goku").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $("img").off();
            $(".goku").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));
    });

    // for Gohan to move down
    $(".gohan").on("click", function () {
        $("img").off();
        $(".gohan").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");
        
        // for others to move down from character section
        if ($(".goku").on("click", function () {
            $("img").off();
            $(".gohan").detach().appendTo(".character");
            $(".goku").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $("img").off();
            $(".gohan").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $("img").off();
            $(".gohan").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $("img").off();
            $(".gohan").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));
    });

    // for Trunks to move down
    $(".trunks").on("click", function () {
        $("img").off();
        $(".trunks").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");

        // for others to move down from character section
        if ($(".gohan").on("click", function () {
            $("img").off();
            $(".trunks").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".goku").on("click", function () {
            $("img").off();
            $(".trunks").detach().appendTo(".character");
            $(".goku").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $("img").off();
            $(".trunks").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $("img").off();
            $(".trunks").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));
    });

    // for Buu to move down
    $(".buu").on("click", function () {
        $("img").off();
        $(".buu").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");

        // for others to move down from character section
        if ($(".gohan").on("click", function () {
            $("img").off();
            $(".buu").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $("img").off();
            $(".buu").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".goku").on("click", function () {
            $("img").off();
            $(".buu").detach().appendTo(".character");
            $(".goku").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $("img").off();
            $(".buu").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));
    });

    // for Vegeta to move down
    $(".vegeta").on("click", function () {
        $("img").off();
        $(".vegeta").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");

        // for others to move down from character section
        if ($(".gohan").on("click", function () {
            $("img").off();
            $(".vegeta").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $("img").off();
            $(".vegeta").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $("img").off();
            $(".vegeta").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".goku").on("click", function () {
            $("img").off();
            $(".vegeta").detach().appendTo(".character");
            $(".goku").detach().appendTo(".defender");
        }));
    });

    // reading player stats on document
    

})