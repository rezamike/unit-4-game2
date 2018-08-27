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
    $(".goku").on("click", function () {
        $(".goku").detach().appendTo(".character");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");

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
        setTimeout;
    });

    $(".gohan").on("click", function () {
        $(".gohan").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");
        
        if ($(".gohan").on("click", function () {
            $(".gohan").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
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

    $(".trunks").on("click", function () {
        $(".trunks").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");

        if ($(".gohan").on("click", function () {
            $(".trunks").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $(".trunks").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
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

    $(".buu").on("click", function () {
        $(".buu").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".vegeta").detach().appendTo(".enemies");

        if ($(".gohan").on("click", function () {
            $(".buu").detach().appendTo(".character");
            $(".gohan").detach().appendTo(".defender");
        }));
        if ($(".trunks").on("click", function () {
            $(".buu").detach().appendTo(".character");
            $(".trunks").detach().appendTo(".defender");
        }));
        if ($(".buu").on("click", function () {
            $(".buu").detach().appendTo(".character");
            $(".buu").detach().appendTo(".defender");
        }));
        if ($(".vegeta").on("click", function () {
            $(".buu").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));
        setTimeout;
    });

    $(".vegeta").on("click", function () {
        $(".vegeta").detach().appendTo(".character");
        $(".goku").detach().appendTo(".enemies");
        $(".gohan").detach().appendTo(".enemies");
        $(".trunks").detach().appendTo(".enemies");
        $(".buu").detach().appendTo(".enemies");

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
        if ($(".vegeta").on("click", function () {
            $(".vegeta").detach().appendTo(".character");
            $(".vegeta").detach().appendTo(".defender");
        }));
        setTimeout;
    });


})