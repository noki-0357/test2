document.addEventListener("DOMContentLoaded", function(){
    document.addEventListener('click',function(){
		document.getElementById('myAudio').play()
	})
	document.addEventListener('touchstart',function(){
		document.getElementById('myAudio').play()
	})
	var audio = document.getElementById("myAudio");
  	audio.volume = 0.5;	// 設定音量（0.3 表示 30% 音量）
})