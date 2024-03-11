document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("myAudio");
    audio.volume = 0.5; // 設定音量（0.5 表示 50% 音量）

    // 當點擊textInput時，阻止默認行為，避免頁面焦點改變，從而不觸發音樂暫停
    document.getElementById("textInput").addEventListener('click', function (event) {
        event.preventDefault();
    });

    // 點擊事件觸發音樂播放
    document.addEventListener('click', function () {
        audio.play();
    });

    // 觸摸事件觸發音樂播放
    document.addEventListener('touchstart', function () {
        audio.play();
    });
});
