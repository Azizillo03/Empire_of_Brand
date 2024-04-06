$(function() {

    $('.nam').attr('data-nam', 'a');
    $('.logo').attr('data-nam', 'a');
    $('.sale').html('заказать');
    /* Filter
    =====================*/
        let filter = $("[data-filter]");

        filter.on("click", function(event) {
            event.preventDefault();
            jQuery('html,body').animate({scrollTop:0},0);

            let cat = $(this).data('filter');

            if(cat == 'all') {
                $("[data-cat]").removeClass("hide");
            } else if(cat == 'salee'){
                $("[data-cat]").addClass("hide");
                $("[data-salee]").removeClass("hide");
            } else {
                $("[data-cat]").each(function() {
                    let workCat = $(this).data('cat');

                    if(workCat != cat) {
                        $(this).addClass('hide');
                    } else {
                        $(this).removeClass('hide');
                    }
                });
            }
        });

        let filt = $("[data-filt]");

        filt.on("click", function(event) {
            event.preventDefault();
            document.querySelector('.ass').style.display = "block";

            let cas = $(this).data('filt');

                $("[data-cas]").each(function() {
                    let workCas = $(this).data('cas');

                    if(workCas == cas) {
                        $(this).addClass('dop');
                        $(this).removeClass('foto_img');
                    } else {
                        $(this).removeClass('dop');
                        $(this).addClass('foto_img');
                    }
                });
                $("[data-slider]").each(function() {
                    let workSlid = $(this).data('slider');

                    if(workSlid == cas) {
                        $(this).addClass('lev');
                    } else {
                        $(this).removeClass('lev');
                    }
                });
            });

        let next = $("[data-next]");

        next.on("click", function(event) {
            event.preventDefault();

            let nex = $(this).data('next');

                $("[data-cas]").each(function() {
                    let workCas = $(this).data('cas');

                    if(workCas == nex) {
                        $(this).addClass('dop');
                        $(this).removeClass('foto_img');
                    } else {
                        $(this).removeClass('dop');
                        $(this).addClass('foto_img');
                    }
                });
               
        });

        let step = $("[data-st]");

        step.on("click", function(event) {
            event.preventDefault();

            let ster = $(this).data('st');

                $("[data-ol]").each(function() {
                    let workOl = $(this).data('ol');

                    if(workOl == ster) {
                        $(this).addClass('lev');
                    } else {
                        $(this).removeClass('lev');
                    }
                });
               
        });

        let nam = $("[data-nam]");

        nam.on("click", function(event) {
            event.preventDefault();

            jQuery('html,body').animate({scrollTop:0},0);

            $("[data-cat]").each(function() {
            $(this).removeClass('hide');
            });

            document.querySelector('.nazad').style.display = "none";
            document.querySelector('.fir').style.display = "flex";
            document.querySelector('.main').style.display = "block";
            document.querySelector('.nav-toggle').style.display = "block";
            $("[data-card]").each(function() {
            $(this).removeClass('card_2');
            $(this).addClass('card_1');
            });
        });
        
        let tovar = $("[data-tovar]");

        tovar.on("click", function(event) {
            event.preventDefault();
            jQuery('html,body').animate({scrollTop:0},0);
            document.querySelector('.fir').style.display = "none";
            document.querySelector('.main').style.display = "none";
            document.querySelector('.nazad').style.display = "block";
            document.querySelector('.nav-toggle').style.display = "none";

            let cart = $(this).data('tovar');

                $("[data-card]").each(function() {
                    let workCart = $(this).data('card');

                    if(workCart == cart) {
                        $(this).addClass('card_2');
                        $(this).removeClass('card_1');
                    } else {
                        $(this).removeClass('card_2');
                        $(this).addClass('card_1');
                    }
                });
            });

        let buy = $("[data-buy]");

        buy.on("click", function(event) {
            event.preventDefault();
            document.querySelector('.zakaz').style.display = "flex";

            let avito = $(this).data('buy');

                $("[data-avito]").each(function() {
                    let workAvito = $(this).data('avito');

                    if(workAvito != avito) {
                        $(this).addClass('silka');
                    } else {
                        $(this).removeClass('silka');
                    }
                });
            });
        });


document.querySelector('.nav-toggle').addEventListener('click',function(){
    document.querySelector('.filtr').style.display = "flex";
    document.querySelector('.nav-toggle').style.display = "none";
    document.querySelector('.navi').style.display = "block";
});
document.querySelector('.navi').addEventListener('click',function(){
    document.querySelector('.filtr').style.display = "none";
    document.querySelector('.nav-toggle').style.display = "block";
    document.querySelector('.navi').style.display = "none";
}); 
document.querySelector('.esc').addEventListener('click',function(){
    document.querySelector('.zakaz').style.display = "none";
});
document.querySelector('.nazad').addEventListener('click',function(){
    document.querySelector('.nazad').style.display = "none";
    document.querySelector('.fir').style.display = "flex";
    document.querySelector('.main').style.display = "block";
    document.querySelector('.nav-toggle').style.display = "block";
    $("[data-card]").each(function() {
    $(this).removeClass('card_2');
    $(this).addClass('card_1');
});
});
document.querySelector('.pravo3').addEventListener('click',function(){
    document.querySelector('.ass').style.display = "none";
});
