// 右クリック禁止
$("body").bind
  ("contextmenu", function(e)
  {return false;}
  );
$("body").mousedown
  (function(e)
  {return false;}
  );

let bgm = new Audio("./audio/game_bgm.mp3");
let start_se = new Audio("./audio/start_btn.mp3");
let komugi_se = new Audio("./audio/komugi.mp3");
let egg_se = new Audio("./audio/egg.mp3");
let plus_minus_se = new Audio("./audio/plus_minus.mp3");
let reset_se = new Audio("./audio/reset.mp3");
let kakutei_se = new Audio("./audio/kakutei.mp3");
let cooking_se = new Audio("./audio/cooking.mp3");
let buy_se = new Audio("./audio/buy.mp3");
let game_clear = new Audio("./audio/game_clear.mp3");

// 小麦をクリックしてカウントを増やす
clear_cnt = 0;
komugi_cnt = 0;
click_cnt = 1;
function komugi_click(){
  komugi_se.currentTime = 0;
  komugi_se.play();
  let thisCount = $("#komugi_cnt").html();
      thisCount = Number(thisCount);
      thisCount = thisCount + click_cnt;
    $("#komugi_cnt").html(thisCount);
    komugi_cnt = komugi_cnt + click_cnt;
    if(komugi_cnt >= 10000) {
      if(clear_cnt == 0) {
        game_clear.currentTime = 0;
        game_clear.play();      
        document.getElementById("game_clear").style.display ="block";
        document.getElementById("clear_ryoukai").style.display ="block";
        clear_cnt = 1;
      }
    }
}

// たまごを出す
egg_cnt = 0;
document.getElementById("egg").style.display ="none";
function eat_click(){
  if (komugi_cnt >= 1) {
    egg_se.currentTime = 0;
    egg_se.play();  
      komugi_cnt = komugi_cnt - 1;
      $("#komugi_cnt").html(komugi_cnt);
      egg_cnt = egg_cnt + 1;
      $("#egg_cnt").html(egg_cnt);
      $("#egg_cnt_copy").html(egg_cnt);

  if (egg_cnt != 0) {
		// blockで表示
		egg.style.display ="block";

    egg.style.position= 'absolute';
    egg.style.top= '80px';
    egg.style.left= '460px';

    egg.style.zIndex= 1;
    }
  }
}

// たまごを10個出す
egg_cnt = 0;
document.getElementById("egg").style.display ="none";
function kakeru10_click(){
  if (komugi_cnt >= 10) {
    egg_se.currentTime = 0;
    egg_se.play();  
      komugi_cnt = komugi_cnt - 10;
      $("#komugi_cnt").html(komugi_cnt);
      egg_cnt = egg_cnt + 10;
      $("#egg_cnt").html(egg_cnt);
      $("#egg_cnt_copy").html(egg_cnt);

  if (egg_cnt != 0) {
		// blockで表示
		egg.style.display ="block";

    egg.style.position= 'absolute';
    egg.style.top= '80px';
    egg.style.left= '460px';

    egg.style.zIndex= 1;
    }
  }
}

// たまごを100個出す
egg_cnt = 0;
document.getElementById("egg").style.display ="none";
function kakeru100_click(){
  if (komugi_cnt >= 100) {
    egg_se.currentTime = 0;
    egg_se.play();  
      komugi_cnt = komugi_cnt - 100;
      $("#komugi_cnt").html(komugi_cnt);
      egg_cnt = egg_cnt + 100;
      $("#egg_cnt").html(egg_cnt);
      $("#egg_cnt_copy").html(egg_cnt);

  if (egg_cnt != 0) {
    // blockで表示
    egg.style.display ="block";
    
    egg.style.position= 'absolute';
    egg.style.top= '80px';
    egg.style.left= '460px';
    
    egg.style.zIndex= 1;
    }
  }
}

// たまごを1000個出す
egg_cnt = 0;
document.getElementById("egg").style.display ="none";
function kakeru1000_click(){
  if (komugi_cnt >= 1000) {
    egg_se.currentTime = 0;
    egg_se.play();  
      komugi_cnt = komugi_cnt - 1000;
      $("#komugi_cnt").html(komugi_cnt);
      egg_cnt = egg_cnt + 1000;
      $("#egg_cnt").html(egg_cnt);
      $("#egg_cnt_copy").html(egg_cnt);

  if (egg_cnt != 0) {
    // blockで表示
    egg.style.display ="block";
    
    egg.style.position= 'absolute';
    egg.style.top= '80px';
    egg.style.left= '460px';
    
    egg.style.zIndex= 1;
    }
  }
}


// モーダルウィンドウを開く
$('.js-modal-open01').on('click', function(){
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    scrollPosition = $(window).scrollTop();
  
    $('body').addClass('fixed').css({'top': -scrollPosition});
    $(modal).fadeIn();
    return false;
  });

  $('.js-modal-open02').on('click', function(){
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    scrollPosition = $(window).scrollTop();
  
    $('body').addClass('fixed').css({'top': -scrollPosition});
    $(modal).fadeIn();
    return false;
  });

  $('.js-modal-open03').on('click', function(){
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    scrollPosition = $(window).scrollTop();
  
    $('body').addClass('fixed').css({'top': -scrollPosition});
    $(modal).fadeIn();
    return false;
  });

  
  // モーダルウィンドウを閉じる
  $('.js-modal-close').on('click', function(){
    $('body').removeClass('fixed');
    window.scrollTo( 0 , scrollPosition );
    $('.js-modal').fadeOut();
    return false;
  });

  // 料理
  // 卵焼き料理
tamagoyaki_cnt = 0;
function tamagoyaki_click(){
  if (egg_cnt >= 10) {
  if (tamagoyaki_cnt < 99) {
    cooking_se.currentTime = 0;
    cooking_se.play();
    egg_cnt = egg_cnt - 10;
    $("#egg_cnt").html(egg_cnt);
    $("#egg_cnt_copy").html(egg_cnt);
    tamagoyaki_cnt = tamagoyaki_cnt + 1;
    $("#tamagoyaki_cnt").html(tamagoyaki_cnt);
    // たまごを消す
    if(egg_cnt == 0){
      egg.style.display ="none";
    }
}
}
}
// カステラ料理
kasutera_cnt = 0;
function kasutera_click(){
  if (egg_cnt >= 100) {
  if (kasutera_cnt < 99) {
    cooking_se.currentTime = 0;
    cooking_se.play();
    egg_cnt = egg_cnt - 100;
    $("#egg_cnt").html(egg_cnt);
    $("#egg_cnt_copy").html(egg_cnt);
    kasutera_cnt = kasutera_cnt + 1;
    $("#kasutera_cnt").html(kasutera_cnt);
    // たまごを消す
    if(egg_cnt == 0){
      egg.style.display ="none";
    }
}
}
}
// プリン料理
purin_cnt = 0;
function purin_click(){
  if (egg_cnt >= 1000) {
  if (purin_cnt < 99) {
    cooking_se.currentTime = 0;
    cooking_se.play();
    egg_cnt = egg_cnt - 1000;
    $("#egg_cnt").html(egg_cnt);
    $("#egg_cnt_copy").html(egg_cnt);
    purin_cnt = purin_cnt + 1;
    $("#purin_cnt").html(purin_cnt);
    // たまごを消す
    if(egg_cnt == 0){
      egg.style.display ="none";
    }
}
}
}

// 売却
// 卵焼きカウントアップダウン
goukei1 = 0; goukei2 = 0; goukei3 = 0; goukei_matome = 0;
tamagoyaki_sell_cnt = 0;
tamagoyaki_goukei = 0;
function tamagoyaki_up_button_click() {
  if (99 > tamagoyaki_sell_cnt) {
  if (tamagoyaki_cnt > tamagoyaki_sell_cnt) {
    plus_minus_se.currentTime = 0;
    plus_minus_se.play();
    tamagoyaki_sell_cnt = tamagoyaki_sell_cnt + 1;
    tamagoyaki_goukei = tamagoyaki_goukei + 1;
    $("#tamagoyaki_sell_cnt").html(tamagoyaki_sell_cnt);
// 合計金額を出す
    goukei1 = tamagoyaki_sell_cnt * 20;
    goukei_matome = goukei1 + goukei2 + goukei3;
    $("#goukei_money").html(goukei_matome);
}
}
}
function tamagoyaki_down_button_click() {
  if (0 < tamagoyaki_sell_cnt) {
    plus_minus_se.currentTime = 0;
    plus_minus_se.play();
    tamagoyaki_sell_cnt = tamagoyaki_sell_cnt - 1;
    tamagoyaki_goukei = tamagoyaki_goukei - 1;
    $("#tamagoyaki_sell_cnt").html(tamagoyaki_sell_cnt);
// 合計金額を出す
    goukei1 = tamagoyaki_sell_cnt * 20;
    goukei_matome = goukei1 + goukei2 + goukei3;
    $("#goukei_money").html(goukei_matome);
}
}
// カステラカウントアップダウン
kasutera_sell_cnt = 0;
kasutera_goukei = 0;
function kasutera_up_button_click() {
  if (99 > kasutera_sell_cnt) {
  if (kasutera_cnt > kasutera_sell_cnt) {
    plus_minus_se.currentTime = 0;
    plus_minus_se.play();
    kasutera_sell_cnt = kasutera_sell_cnt + 1;
    kasutera_goukei = kasutera_goukei + 1;
    $("#kasutera_sell_cnt").html(kasutera_sell_cnt);
// 合計金額を出す
    goukei2 = kasutera_sell_cnt * 250;
    goukei_matome = goukei1 + goukei2 + goukei3;
    $("#goukei_money").html(goukei_matome);
}
}
}
function kasutera_down_button_click() {
  if (0 < kasutera_sell_cnt) {
    plus_minus_se.currentTime = 0;
    plus_minus_se.play();
    kasutera_sell_cnt = kasutera_sell_cnt - 1;
    kasutera_goukei = kasutera_goukei - 1;
    $("#kasutera_sell_cnt").html(kasutera_sell_cnt);
// 合計金額を出す
    goukei2 = kasutera_sell_cnt * 250;
    goukei_matome = goukei1 + goukei2 + goukei3;
    $("#goukei_money").html(goukei_matome);
}
}
// プリンカウントアップダウン
purin_sell_cnt = 0;
purin_goukei = 0;
function purin_up_button_click() {
  if (99 > purin_sell_cnt) {
  if (purin_cnt > purin_sell_cnt) {
    plus_minus_se.currentTime = 0;
    plus_minus_se.play();
    purin_sell_cnt = purin_sell_cnt + 1;
    purin_goukei = purin_goukei + 1;
    $("#purin_sell_cnt").html(purin_sell_cnt);
// 合計金額を出す
    goukei3 = purin_sell_cnt * 3000;
    goukei_matome = goukei1 + goukei2 + goukei3;
    $("#goukei_money").html(goukei_matome);
}
}
}
function purin_down_button_click() {
  if (0 < purin_sell_cnt) {
    plus_minus_se.currentTime = 0;
    plus_minus_se.play();
    purin_sell_cnt = purin_sell_cnt - 1;
    purin_goukei = purin_goukei - 1;
    $("#purin_sell_cnt").html(purin_sell_cnt);
// 合計金額を出す
    goukei3 = purin_sell_cnt * 3000;
    goukei_matome = goukei1 + goukei2 + goukei3;
    $("#goukei_money").html(goukei_matome);
}
}
// カウントリセット
function reset_click() {
  reset_se.currentTime = 0;
  reset_se.play();  
  tamagoyaki_sell_cnt = 0;
  tamagoyaki_goukei = 0;
  $("#tamagoyaki_sell_cnt").html(tamagoyaki_sell_cnt);
  kasutera_sell_cnt = 0;
  kasutera_goukei = 0;
  $("#kasutera_sell_cnt").html(kasutera_sell_cnt);
  purin_sell_cnt = 0;
  purin_goukei = 0;
  $("#purin_sell_cnt").html(purin_sell_cnt);
// 合計金額リセット
  goukei1 = 0; goukei2 = 0; goukei3 = 0; goukei_matome = 0;
  $("#goukei_money").html(goukei_matome);
}
// 確定
money = 0;
function kakutei_click() {
  kakutei_se.currentTime = 0;
  kakutei_se.play();  
  money = money + (tamagoyaki_sell_cnt * 20 + kasutera_sell_cnt * 250 + purin_sell_cnt * 3000);
  money_box = money;
  $("#money").html(money);
  $("#money_copy").html(money);
  $("#money_copy2").html(money);
  tamagoyaki_cnt = tamagoyaki_cnt - tamagoyaki_sell_cnt;
  $("#tamagoyaki_cnt").html(tamagoyaki_cnt);
  kasutera_cnt = kasutera_cnt - kasutera_sell_cnt;
  $("#kasutera_cnt").html(kasutera_cnt);
  purin_cnt = purin_cnt - purin_sell_cnt;
  $("#purin_cnt").html(purin_cnt);

  tamagoyaki_sell_cnt = 0;
  tamagoyaki_goukei = 0;
  $("#tamagoyaki_sell_cnt").html(tamagoyaki_sell_cnt);
  kasutera_sell_cnt = 0;
  kasutera_goukei = 0;
  $("#kasutera_sell_cnt").html(kasutera_sell_cnt);
  purin_sell_cnt = 0;
  purin_goukei = 0;
  $("#purin_sell_cnt").html(purin_sell_cnt);
// 合計金額リセット
  goukei1 = 0; goukei2 = 0; goukei3 = 0; goukei_matome = 0;
  $("#goukei_money").html(goukei_matome);
}

// クリック購入
auto_click = 0;
auto_click2 = 0;
buy1_cnt = 0;
click1_item = 100;
function click_buy_btn1_click() {
  // 上記の金額以上なら買える
  if (money_box >= click1_item){
    if (buy1_cnt <= 99){
      buy_se.currentTime = 0;
      buy_se.play();
    // 今ある金額から差し引く
    money_box = money_box - click1_item;
    money = money_box;
    $("#money").html(money);
    $("#money_copy").html(money);
    $("#money_copy2").html(money);
    // カウント加算
    click_cnt = click_cnt + 1;
  buy1_cnt = buy1_cnt + 1;
  $("#buy1_cnt").html(buy1_cnt);
  click1_item = Math.floor(click1_item * 1.3);
  $("#click_btn1_yen").html(click1_item);
}
}
}
// 地域のおじさん購入
buy2_cnt = 0;
click2_item = 300;
function click_buy_btn2_click() {
  // 上記の金額以上なら買える
  if (money_box >= click2_item){
    if (buy2_cnt <= 99){
      buy_se.currentTime = 0;
      buy_se.play();
    auto_click = 0;
    // 今ある金額から差し引く
    money_box = money_box - click2_item;
    money = money_box;
    $("#money").html(money);
    $("#money_copy").html(money);
    $("#money_copy2").html(money);
    // カウント加算
    auto_click = auto_click + 2;
  buy2_cnt = buy2_cnt + 1;
  $("#buy2_cnt").html(buy2_cnt);
  click2_item = Math.floor(click2_item * 1.3);
  $("#click_btn2_yen").html(click2_item);

  $(function(){
    setInterval(function(){
      let thisCount = $("#komugi_cnt").html();
      thisCount = Number(thisCount);
      thisCount = thisCount + auto_click;
    $("#komugi_cnt").html(thisCount);
    komugi_cnt = komugi_cnt + auto_click;

    if(komugi_cnt >= 10000) {
      if(clear_cnt == 0) {
        game_clear.currentTime = 0;
        game_clear.play();      
        document.getElementById("game_clear").style.display ="block";
        document.getElementById("clear_ryoukai").style.display ="block";
        clear_cnt = 1;
      }
    }
    },1000);
  });  
}
}
}
// スーパークリック
buy3_cnt = 0;
click3_item = 1000;
function click_buy_btn3_click() {
  // 上記の金額以上なら買える
  if (money_box >= click3_item){
    if (buy3_cnt <= 99){
      buy_se.currentTime = 0;
      buy_se.play();
    // 今ある金額から差し引く
    money_box = money_box - click3_item;
    money = money_box;
    $("#money").html(money);
    $("#money_copy").html(money);
    $("#money_copy2").html(money);
    // カウント加算
    click_cnt = click_cnt + 3;
  buy3_cnt = buy3_cnt + 1;
  $("#buy3_cnt").html(buy3_cnt);
  click3_item = Math.floor(click3_item * 1.3);
  $("#click_btn3_yen").html(click3_item);
}
}
}
// 農家のおじさん
buy4_cnt = 0;
click4_item = 3000;
function click_buy_btn4_click() {
  auto_click2 = 0;
  // 上記の金額以上なら買える
  if (money_box >= click4_item){
    if (buy4_cnt <= 99){
      buy_se.currentTime = 0;
      buy_se.play();
    // 今ある金額から差し引く
    money_box = money_box - click4_item;
    money = money_box;
    $("#money").html(money);
    $("#money_copy").html(money);
    $("#money_copy2").html(money);
    // カウント加算
    auto_click2 = auto_click2 + 10;
  buy4_cnt = buy4_cnt + 1;
  $("#buy4_cnt").html(buy4_cnt);
  click4_item = Math.floor(click4_item * 1.3);
  $("#click_btn4_yen").html(click4_item);

  $(function(){
    setInterval(function(){
      let thisCount = $("#komugi_cnt").html();
      thisCount = Number(thisCount);
      thisCount = thisCount + auto_click2;
    $("#komugi_cnt").html(thisCount);
    komugi_cnt = komugi_cnt + auto_click2;

    if(komugi_cnt >= 10000) {
      if(clear_cnt == 0) {
        game_clear.currentTime = 0;
        game_clear.play();      
        document.getElementById("game_clear").style.display ="block";
        document.getElementById("clear_ryoukai").style.display ="block";
        clear_cnt = 1;
      }
    }
    },1000);
  });  
}
}
}

// 画面消す
function start_btn() {
  start_se.play();
document.querySelector(`#title`).animate(
	[
		{ opacity: 1 },
		{ opacity: 0 }
	],
	{
		duration: 1000,
		fill: 'forwards'
	}
);
document.querySelector(`#game`).animate(
  [
    { opacity: 0 },
    { opacity: 1 }
  ],
  {
		duration: 1500,
		fill: 'forwards'
	}
);
	bgm.play(); // 再生
  bgm.loop = true;  // ループ再生
}

function help_btn() {
  plus_minus_se.currentTime = 0;
  plus_minus_se.play();
  document.getElementById("help_1").style.display ="block";
  document.getElementById("next").style.display ="block";
}

function next() {
  plus_minus_se.currentTime = 0;
  plus_minus_se.play();
  document.getElementById("help_1").style.display ="none";
  document.getElementById("next").style.display ="none";
  document.getElementById("help_2").style.display ="block";
  document.getElementById("batu").style.display ="block";
  document.getElementById("back").style.display ="block";
}

function back() {
  plus_minus_se.currentTime = 0;
  plus_minus_se.play();
  document.getElementById("back").style.display ="none";
  document.getElementById("batu").style.display ="none";
  document.getElementById("help_2").style.display ="none";
  document.getElementById("help_1").style.display ="block";
  document.getElementById("next").style.display ="block";
}

function batu() {
  plus_minus_se.currentTime = 0;
  plus_minus_se.play();
  document.getElementById("help_2").style.display ="none";
  document.getElementById("back").style.display ="none";
  document.getElementById("batu").style.display ="none";
}

function ryoukai() {
  reset_se.currentTime = 0;
  reset_se.play();
  document.getElementById("window").style.display ="none";
}

function clear_ryoukai() {
  reset_se.currentTime = 0;
  reset_se.play();
  document.getElementById("clear_ryoukai").style.display ="none";
  document.getElementById("game_clear").style.display ="none";
}