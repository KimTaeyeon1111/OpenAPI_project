src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"

// 첫 번째 슬라이드, 버튼
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
      },
      allowTouchMove: false,
    });

    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,

      thumbs: {
        swiper: swiper,
      },

      allowTouchMove: false,
    });

//-------------------------------------------------------------------------
//첫 번째 슬라이드 API
//-------------------------------------------------------------------------
src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"

async function bookData() {
    const params = new URLSearchParams({
        query: "The lord"
    });

    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 253f204f41b8b59c6bb69854384fc046"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

    // 영어가 많이 있는 자료만 뽑아서 출력하기
    const Maindata = await response.json();
    const origin = Maindata.documents;
    function isMostlyEnglish(text, threshold = 0.7) {
        const englishChars = text.match(/[a-zA-Z]/g) || [];
        const totalChars = text.replace(/\s/g, '');
        return totalChars.length > 0 && (englishChars.length / totalChars.length) >= threshold;

    }
    const data = origin.filter((val)=>{
                    return val.contents && isMostlyEnglish(val.contents);
    })  

        // .box 요소 전체 선택
        
        const boxElements = document.querySelectorAll(".mySwiper .swiper-slide > button");
        const boxElements2 = document.querySelectorAll(".mySwiper2 .swiper-slide>div");
        const boxtext = document.querySelectorAll(".tab-content > div");
        console.log(boxtext)
        // documents 데이터를 각 box에 대응하여 렌더링
        for(let i=0; i<boxElements.length; i++){
            const doc = data[i];
            const box = boxElements[i];
            const box2 = boxElements2[i];
            const text = boxtext[i];


            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            const img2= document.createElement("img");
            img2.src = doc.thumbnail;
            box2.appendChild(img2);

            // <h3> 제목
            const h3 = document.createElement("h3");
            h3.textContent = doc.title
            text.appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.price;
            h6.style.color = '#25a925'
            text.appendChild(h6);

            const star = document.createElement("p");
            const rating = Math.floor(Math.random() * 5) + 1;
            const filledStars = "★".repeat(rating);
            const emptyStars = "☆".repeat(5 - rating);
            star.textContent = filledStars + emptyStars;
            star.style.color = "gold";
            star.style.fontSize = "1.2em";
            star.style.padding = "0 0 15px 0";
            text.appendChild(star);

            // <p> 내용 일부
            const p = document.createElement("p");
            p.textContent = doc.contents
            text.appendChild(p);
            p.style.padding = "0 0 20px 0";
            

        };

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();


//-------------------------------------------------------------------------
// 표 API //
//-------------------------------------------------------------------------

async function bookData2() {
    const params = new URLSearchParams({
        query: "The lord the rings"
    });

    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 253f204f41b8b59c6bb69854384fc046"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

    // 영어가 많이 있는 자료만 뽑아서 출력하기
    const Maindata = await response.json();
    const origin = Maindata.documents;
    function isMostlyEnglish(text, threshold = 0.7) {
        const englishChars = text.match(/[a-zA-Z]/g) || [];
        const totalChars = text.replace(/\s/g, '');
        return totalChars.length > 0 && (englishChars.length / totalChars.length) >= threshold;

    }
    const data = origin.filter((val)=>{
                    return val.contents && isMostlyEnglish(val.contents);
    })

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll(".sub-book-2 .td1");
        const boxElements2 = document.querySelectorAll(".sub-book-2 .td2");
        const boxElements3 = document.querySelectorAll(".sub-book-2 .td3");
        const boxElements4 = document.querySelectorAll(".sub-book-2 .td4");

        // documents 데이터를 각 box에 대응하여 렌더링
        for(let i=0; i<boxElements.length; i++){
            const doc = data[i];
            const box = boxElements[i];
            const box2 = boxElements2[i];
            const box3 = boxElements3[i];
            const box4 = boxElements4[i];

            // <h3> 제목
            const h3 = document.createElement("p")
            h3.textContent = doc.title;
            box.appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("p");
            h6.textContent = doc.authors;
            box2.appendChild(h6);

            // <p> 내용 일부
            const p = document.createElement("p");
            p.textContent = doc.contents.substring(0, 45)+"";
            box3.appendChild(p);

            const datetime = document.createElement("p");
            datetime.textContent = doc.datetime.substring(0,10);
            box4.appendChild(datetime);

        };

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData2();

// 탭 전환
const tabMenu1 = document.querySelectorAll('.swiper-slide button');
const tabContent3 = document.querySelectorAll('.table-all > table ');
tabMenu1.forEach(function(item, idx){
    item.addEventListener('click', function(e){
        e.preventDefault();
        showContent(idx);
    });
});
function showContent(num){
    tabContent1.forEach(function(item){
        item.style.display = 'none';
    });
    tabContent1[num].style.display = 'block';
};







//-------------------------------------------------------------------------
// 탭 메뉴 //
//-------------------------------------------------------------------------

const buttons = document.querySelectorAll('.mySwiper .swiper-wrapper > div');

buttons.forEach(button => {
    button.addEventListener("click", () => {
    // 모든 카드에서 active 제거
    buttons.forEach(btn => btn.classList.remove("active"));

    // 클릭한 카드만 active 추가
    button.classList.add("active");
    });
});


const tabMenu = document.querySelectorAll('.swiper-slide button');
const tabContent = document.querySelectorAll('.tab-content > div');
const tabContent1 = document.querySelectorAll('.table-all > table ');
tabMenu.forEach(function(item, idx){
    item.addEventListener('click', function(e){
        e.preventDefault();
        showContent(idx);
    });
});

function showContent(num){
    tabContent.forEach(function(item){
        item.style.display = 'none';
    });
    tabContent1.forEach(function(item){
        item.style.display = 'none';
    });
    tabContent[num].style.display = 'block';
    tabContent1[num].style.display = 'block';
};


