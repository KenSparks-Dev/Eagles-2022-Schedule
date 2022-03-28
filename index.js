function gameResult() {
  //week 1
  var eaglesWK1W = document.querySelector("#wk1-w");
  var eaglesWK1L = document.querySelector("#wk1-l");
  // var eaglesWK1T = document.querySelector('.tie');
  var eaglesWK1Score = document.querySelector("#wk1-home");
  var nyg1WK1Score = document.querySelector("#wk1-away");
  var tieWK1Score = document.querySelector("#wk1-t");
  if (eaglesWK1Score.innerHTML > nyg1WK1Score.innerHTML) {
    eaglesWK1W.innerHTML = 1;
    eaglesWK1L.innerHTML = 0;
  } else if (eaglesWK1Score.innerHTML < nyg1WK1Score.innerHTML) {
    eaglesWK1W.innerHTML = 0;
    eaglesWK1L.innerHTML = 1;
  } else if (eaglesWK1Score.innerHTML === nyg1WK1Score.innerHTML) {
    eaglesWK1T.style.display = "flex";
    tieWK1Score.innerHTML = 1;
  }

  //week 2
  var eaglesWK2W = document.querySelector("#wk2-w");
  var eaglesWK2L = document.querySelector("#wk2-l");
  var eaglesWK2T = document.querySelector(".tie");
  var eaglesWK2Score = document.querySelector("#wk2-home");
  var was1Wk2Score = document.querySelector("#wk2-away");
  var tieWK2Score = document.querySelector("#wk2-t");
  if (eaglesWK2Score.innerHTML > was1Wk2Score.innerHTML) {
    eaglesWK2W.innerHTML = 1;
    eaglesWK1L.innerHTML;
    eaglesWK2W.innerHTML =
      parseInt(eaglesWK2W.innerHTML) + parseInt(eaglesWK1W.innerHTML);
  } else if (eaglesWK2Score.innerHTML < was1Wk2Score.innerHTML) {
    eaglesWK2W.innerHTML =
      parseInt(eaglesWK2W.innerHTML) + parseInt(eaglesWK1W.innerHTML);
    eaglesWK2L.innerHTML = 1;
    eaglesWK2L.innerHTML =
      parseInt(eaglesWK2L.innerHTML) + parseInt(eaglesWK1L.innerHTML);
  } else if (eaglesWK2Score.innerHTML === was1Wk2Score.innerHTML) {
    eaglesWK2T.style.display = "flex";
    tieWK2Score.innerHTML = 1;
  }

  //week 3
  var eaglesWK3W = document.querySelector("#wk3-w");
  var eaglesWK3L = document.querySelector("#wk3-l");
  var eaglesWK3T = document.querySelector(".tie");
  var eaglesWK3Score = document.querySelector("#wk3-home");
  var ramsWk3Score = document.querySelector("#wk3-away");
  var tieWK3Score = document.querySelector("#wk3-t");
  if (eaglesWK3Score.innerHTML > ramsWk3Score.innerHTML) {
    eaglesWK3W.innerHTML = 1;
    eaglesWK2L.innerHTML;
    eaglesWK3W.innerHTML =
      parseInt(eaglesWK3W.innerHTML) + parseInt(eaglesWK2W.innerHTML);
  } else if (eaglesWK3Score.innerHTML < ramsWk3Score.innerHTML) {
    eaglesWK3W.innerHTML =
      parseInt(eaglesWK3W.innerHTML) + parseInt(eaglesWK2W.innerHTML);
    eaglesWK3L.innerHTML = 1;
    eaglesWK3L.innerHTML =
      parseInt(eaglesWK3L.innerHTML) + parseInt(eaglesWK2L.innerHTML);
  } else if (eaglesWK3Score.innerHTML === ramsWk3Score.innerHTML) {
    eaglesWK3T.style.display = "flex";
    tieWK3Score.innerHTML = 1;
  }

  //week 4
  var eaglesWK4W = document.querySelector("#wk4-w");
  var eaglesWK4L = document.querySelector("#wk4-l");
  var eaglesWK4T = document.querySelector(".tie");
  var eaglesWK4Score = document.querySelector("#wk4-home");
  var patsWk4Score = document.querySelector("#wk4-away");
  var tieWK4Score = document.querySelector("#wk4-t");
  if (eaglesWK4Score.innerHTML > patsWk4Score.innerHTML) {
    eaglesWK4W.innerHTML = 1;
    eaglesWK4L.innerHTML =
      parseInt(eaglesWK4L.innerHTML) + parseInt(eaglesWK3L.innerHTML);
    eaglesWK4W.innerHTML =
      parseInt(eaglesWK4W.innerHTML) + parseInt(eaglesWK3W.innerHTML);
  } else if (eaglesWK4Score.innerHTML < patsWk4Score.innerHTML) {
    eaglesWK4W.innerHTML =
      parseInt(eaglesWK4W.innerHTML) + parseInt(eaglesWK3W.innerHTML);
    eaglesWK4L.innerHTML = 1;
    eaglesWK4L.innerHTML =
      parseInt(eaglesWK4L.innerHTML) + parseInt(eaglesWK3L.innerHTML);
  } else if (eaglesWK4Score.innerHTML === patsWk4Score.innerHTML) {
    eaglesWK4T.style.display = "flex";
    tieWK4Score.innerHTML = 1;
  }
}

gameResult();
