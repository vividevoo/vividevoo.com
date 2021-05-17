'use strict';


{
const images=[
	'img/reika_main.JPG',
	'img/reika_A.JPG',
	'img/reika_B.JPG',
	'img/reika_main02.JPG',
	'img/reika_C.JPG',
	'img/reika_D.JPG',	
];

let currentIndex=0;

const mainImage=document.getElementById('mainframe');
mainImage.src=images[currentIndex];

images.forEach((image, index)=>{
	const img=document.createElement('img'); 
	//定数imgにhtml上のimgを代入
	img.src=image; 
	//imgのソースは「image（配列「images」の各要素）」
	
	const li=document.createElement('li');
	if(index===currentIndex){
		li.classList.add('current'); 
		//リストが現在のインデックス番号ならcurrentクラスをつける（opacityが1になる）
	}

	li.addEventListener('click',()=>{
		mainImage.src=image;
		const thumnails=document.querySelectorAll('.thumnails>li');
		thumnails[currentIndex].classList.remove('current');
		currentIndex=index;
		thumnails[currentIndex].classList.add('current');
	});

	li.appendChild(img);
	document.querySelector('.thumnails').appendChild(li); 
	//「.thumnails」クラスに子要素として「li」を追加
});

const next=document.getElementById('next');
next.addEventListener('click',()=>{
	let target=currentIndex+1;
	if(target===images.length){
		target=0;
	}
	document.querySelectorAll('.thumnails>li')[target].click();
});


const prev=document.getElementById('prev');
prev.addEventListener('click',()=>{
	let target=currentIndex-1;
	if(target<0){
		target=images.length-1;
	}
	document.querySelectorAll('.thumnails>li')[target].click();
});


let timeoutId;

function playSlideshow(){
	
	timeoutId=setTimeout(()=>{
		next.click();
		playSlideshow();
	},300);
}  //1秒後に切り替わるスライドショー

let isPlaying=false;


const play=document.getElementById('play');
play.addEventListener('click',()=>{
	if(isPlaying===false){
		playSlideshow();
		play.textContent='Pause';
	}else{
		clearTimeout(timeoutId);
		play.textContent='Play';
	}
	isPlaying=!isPlaying;
});

}