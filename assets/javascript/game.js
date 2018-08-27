$(function () {

    // build players, health, and power level
    // let players = [
    //     {
    //         name: "Goku", health: 94, level: 4
    //     },
    //     {
    //         name: "Gohan", health: 64, level: 2
    //     },
    //     {
    //         name: "Trunks", health: 73, level: 3
    //     },
    //     {
    //         name: "Majin-Buu", health: 90, level: 4
    //     },
    //     {
    //         name: "Vegeta", health: 81, level: 4
    //     }
    // ]

    let goku = {
        name: "Goku",
        health: 94,
        level: 4
    };


    // event listeners

    // for Goku to move down
    $(".goku").on("click", function () {
        $(".goku").detach().appendTo(".character");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");

        // for others to move down from character section
        if ($(".gohan").on("click", function () {
            $(".goku").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $(".goku").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $(".goku").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $(".goku").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));
        // does this work? how do i make the functions stop at this point?
        setTimeout;
    });

    // for Gohan to move down
    $(".gohan").on("click", function () {
        $(".gohan").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");
        
        // for others to move down from character section
        if ($(".goku").on("click", function () {
            $(".gohan").detach().appendTo(".character");
            $(".goku").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $(".gohan").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $(".gohan").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $(".gohan").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));
        
        setTimeout;
    });

    // for Trunks to move down
    $(".trunks").on("click", function () {
        $(".trunks").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");

        // for others to move down from character section
        if ($(".gohan").on("click", function () {
            $(".trunks").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".goku").on("click", function () {
            $(".trunks").detach().appendTo(".character");
            $(".goku").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $(".trunks").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $(".trunks").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));

        setTimeout;
    });

    // for Buu to move down
    $(".buu").on("click", function () {
        $(".buu").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");

        // for others to move down from character section
        if ($(".gohan").on("click", function () {
            $(".buu").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $(".buu").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".goku").on("click", function () {
            $(".buu").detach().appendTo(".character");
            $(".goku").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $(".buu").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));

        setTimeout;
    });

    // for Vegeta to move down
    $(".vegeta").on("click", function () {
        $(".vegeta").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");

        // for others to move down from character section
        if ($(".gohan").on("click", function () {
            $(".vegeta").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $(".vegeta").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $(".vegeta").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".goku").on("click", function () {
            $(".vegeta").detach().appendTo(".character");
            $(".goku").detach().appendTo(".defender");
        }));

        setTimeout;
    });


})