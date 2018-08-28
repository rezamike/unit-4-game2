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

    let beam = $("#beam").on("click", function () {
        if (players[index].level = 3) {
            Math.floor(Math.random() * (15)) + 30;
        }
        else {
            $("#kame").remove();
        }
    });



    // ------------------------- event listeners

    // show name and health?
    $(".goku").hover(function () {
        $(".stats").html("<br>" + "Name: " + players[0].name + "<br>");
        $(".stats").append("Health: " + players[0].health + "<br>");
        $(".stats").append("Level: " + players[0].level + "<br>");
    })

    $(".gohan").hover(function () {
        $(".stats").html("<br>" + "Name: " + players[1].name + "<br>");
        $(".stats").append("Health: " + players[1].health + "<br>");
        $(".stats").append("Level: " + players[1].level + "<br>");
    })

    $(".buu").hover(function () {
        $(".stats").html("<br>" + "Name: " + players[2].name + "<br>");
        $(".stats").append("Health: " + players[2].health + "<br>");
        $(".stats").append("Level: " + players[2].level + "<br>");
    })

    $(".vegeta").hover(function () {
        $(".stats").html("<br>" + "Name: " + players[3].name + "<br>");
        $(".stats").append("Health: " + players[3].health + "<br>");
        $(".stats").append("Level: " + players[3].level + "<br>");
    })


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

    // turn off hover

    // reading player stats on document
    if ($(".character").find(players)) {
        $(".stats").html("");
        $(".stats").html("<br>" + "Name: " + players.name + "<br>");
        $(".stats").append("Health: " + players.health + "<br>");
    }

    else if ($(".defender").find(players)) {
        $(".stats").html("");
        $(".stats").append("<br>" + "Name: " + players.name + "<br>");
        $(".stats").append("Health: " + players.health + "<br>");
    }

    // a reset function
    // let restart = reload();
})