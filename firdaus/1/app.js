$(function() {

    let catalog = $("[data-catalog]");

        catalog.on("click", function(event) {
            event.preventDefault();
            jQuery('html,body').animate({scrollTop:0},0);

            $("[data-tovar]").each(function() {
                $(this).removeClass('cart2');
                $(this).addClass('cart1');
                });
                $("[data-sale]").each(function() {
                    $(this).removeClass('cart2');
                    $(this).addClass('cart1');
                    });    

            let cat = $(this).data('catalog');

                $("[data-seccat]").each(function() {
                    let worCat = $(this).data('seccat');

                    if(worCat != cat) {
                        $(this).addClass('cart1');
                        $(this).removeClass('cart2');
                    } else {
                        $(this).removeClass('cart1');
                        $(this).addClass('cart2');
                    }
                });
            });
            
        let vibor = $("[data-vibor]");

        vibor.on("click", function(event) {
            event.preventDefault();
            jQuery('html,body').animate({scrollTop:0},0);

            $("[data-seccat]").each(function() {
                $(this).removeClass('cart2');
                $(this).addClass('cart1');
                });
            $("[data-sale]").each(function() {
                $(this).removeClass('cart2');
                $(this).addClass('cart1');
                });

            let tovar = $(this).data('vibor');

                $("[data-tovar]").each(function() {
                    let wortovar = $(this).data('tovar');

                    if(wortovar != tovar) {
                        $(this).addClass('cart1');
                        $(this).removeClass('cart2');
                    } else {
                        $(this).removeClass('cart1');
                        $(this).addClass('cart2');
                    }
                });
            });
            
        let clsale = $("[data-clicksale]");

        clsale.on("click", function(event) {
            event.preventDefault();
            jQuery('html,body').animate({scrollTop:0},0);

            $("[data-seccat]").each(function() {
                $(this).removeClass('cart2');
                $(this).addClass('cart1');
                });
            
            $("[data-tovar]").each(function() {
                $(this).removeClass('cart2');
                $(this).addClass('cart1');
                });

            let saleclick = $(this).data('clicksale');

                $("[data-sale]").each(function() {
                    let sale = $(this).data('sale');

                    if(sale != saleclick) {
                        $(this).addClass('cart1');
                        $(this).removeClass('cart2');
                    } else {
                        $(this).removeClass('cart1');
                        $(this).addClass('cart2');
                    }
                });
            });

  var square = document.querySelector('.night');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entrySquare = entry.target.querySelector('.square');
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }
      if (entry.isIntersecting) {
        entrySquare.classList.add('square-animation');
        return;
      }
      entrySquare.classList.remove('square-animation');
    });
  });
  observer.observe(square);
});
 document.querySelector('.menuburger').addEventListener('click',function(){
    document.querySelector('.fonburger').style.display = "block";
    document.querySelector('.menuburgerx').style.display = "block";
    document.querySelector('.menuburger').style.display = "none";
    document.querySelector('.burger').style.padding = "20px 30px";
});
document.querySelector('.menuburgerx').addEventListener('click',function(){
    document.querySelector('.fonburger').style.display = "none";
    document.querySelector('.menuburgerx').style.display = "none";
    document.querySelector('.menuburger').style.display = "block";
    document.querySelector('.burger').style.padding = "35px 25px";
});