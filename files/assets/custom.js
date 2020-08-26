let myVideo = document.getElementById("playeritv");
let balDue = document.getElementById("balanceDue");
let v = document.querySelector("video");
let t = document.querySelector("track");
let b = document.querySelector("#bar");
let isPaused = v.paused;

let n;


$(v).hover(function(){
  $(".paymentDue").show(); 
});

$(v).mouseleave(function(){
  // $(".paymentDue").hide(); 
});

$("#play").click(function() {
    $("#axate").show();
    if (myVideo.paused) {
        myVideo.play();
    }

    $( "#play").hide();
    $( "#playeritv" ).show();
});

  function walletCharge() {
        $("#balancePrice").html("£2.25");
        $("#fee").css({"display": "block", "animation": "spin 0.5s linear"});
        $("#success").css({"display": "block", "animation": "spin 0.5s linear"});
        $("#axate-wallet").hide();
        v.currentTime = 272;
        $("#balanceDue").hide();
        setTimeout(() => { 
          $("#fee").hide(100);
          $("#axate-wallet").css({"display": "block", "animation": "spin 0.5s linear"});
          $("#success").hide();
        }, 5000);
  } 


  function walletApprove() {

    $("#wallet").animate({
      width: "300px"
    });
    $("#walletOpen").animate({
      left: "300px"
    });
    $(v).mouseleave(function(){
      $(".paymentDue").show(); 
    });

    $("#checkbox").change(function(){
      $("#balancePrice").html("£2.25");
      $("#fee").css({"display": "block", "animation": "spin 0.5s linear"});
      $("#success").css({"display": "block", "animation": "spin 0.5s linear"});
      $("#axate-wallet").hide();

      v.currentTime = 272;
      console.log("HSIT");
      // $("#balanceDue").remove();
      v.play();

      setTimeout(() => { 
        $("#fee").hide(100);
        $("#axate").css({"display": "block", "animation": "spin 0.5s linear"});
        $("#axate-wallet").css({"display": "block", "animation": "spin 0.5s linear"});
        $("#success").hide();
      }, 5000);
    });

    $("#decline").click(function() {
      if(isPaused) {
        v.removeEventListener('timeupdate', update);
        v.removeEventListener('onseeked', update);
        v.removeEventListener('onseeking', update);
        v.play();
        $("#balanceDue").remove();
        $("#wallet").animate({
          width: "0px"
        });
        $("#walletOpen").animate({
          left: "0px"
        });
      }
    });

  }

  function updateWallet() {
    n = v.currentTime;
    console.log(n);
    if (n >= 110 && n <= 269) {

      $("#approve").click(function(){
        v.removeEventListener('timeupdate', update);
        v.removeEventListener('onseeked', update);
        v.removeEventListener('onseeking', update);
        walletCharge();
        v.play();
        // $("#balanceDue").remove();
        $("#wallet").animate({
          width: "0px"
        });
        $("#walletOpen").animate({
          left: "0px"
        });
      });

      if($('#checkbox').is(':checked')) {
        walletCharge();
      } else {
        v.pause();
        if(isPaused) {
          walletApprove();
        }
      }
    }
  }


  v.addEventListener('timeupdate', update);
  v.addEventListener('onseeked', update);
  v.addEventListener('onseeking', update);

  function update() {
    updateWallet();
  }

  $(document).ready(function()
  {
      update();

      let count = 0;
      $("#walletOpen").on("click", function(event)
      {
          event.preventDefault();
          count++;

          if (count == 1) {
              $("#wallet").animate({
                  width: "300px"
              });
              $("#walletOpen").animate({
                left: "300px"
              });
          } else {
              $("#wallet").animate({
                  width: "0px"
              });
              $("#walletOpen").animate({
                left: "0px"
              });
            count = 0;
          }

      });
  });

