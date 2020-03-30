//適用於：直接點開html檔或使用window.open開啟一個頁面(通過 JavaScript 程式碼開啟的視窗)
//否則無效並顯示警告訊息Scripts may close only the windows that were opened by it.

function closeWin() {
    window.close();
    //window.open("about:blank","_self").close();  //點選按鈕後清空網頁內文(視窗還在)
}