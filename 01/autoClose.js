var willClose = true;  //宣告一個"是否關閉視窗"的變數，預設為關閉

function clickBody(){
    willClose = false;   //當有點擊視窗，則改為"不關閉(false)"
}

setInterval(function(){
    if(willClose){
        window.close();
    }else{
        willClose = true;
    }
},5000);   //每5秒檢查一次，如果willClose = true則關閉視窗，否則將willClose更改為true重新計算