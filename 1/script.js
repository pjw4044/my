console.clear();

var restTime = 600;

var countInterval = null;

function startCounting() {
    restTime = 600;
    
    if ( countInterval == null ) {
        $('.box-1 > .rest-time').text(restTime);
        restTime--;
        
        countInterval = setInterval(function() {
            $('.box-1 > .rest-time').text(restTime);
            restTime--;
            
            if  (restTime == -1 ) {
                stopCounting();
            }
        }, 1000);
    }
}

function stopCounting() {
    clearInterval(countInterval);
    countInterval = null;
}

$('.btn-start').click(startCounting);
$('.btn-stop').click(stopCounting);