
$('en-copy').css('color','red')


S(function(){
    var $win = S(window),
        $ft = S('.fv'),
        $header = S('.header'),
        fvHeight = Sfv.outerHeight();
        fixedClass = 'fixed';
    
    $win.on('load scroll',function(){
        var value = $(this).scrollTop();
        if($win.width() > 768){
            if( value > fvHeight){
                $header.addClass(fixedClass);
            }else{
                $header.removeClass(fixedClass);
            }
        }
    }};
});