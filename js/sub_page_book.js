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
    });

    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,

      thumbs: {
        swiper: swiper,
      },

      allowTouchMove: false,
    });

    
//첫 번째 슬라이드 API
src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"

async function bookData() {
    const params = new URLSearchParams({
        query: "안녕"
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
    /*
    const origin = Maindata.documents;
    function isMostlyEnglish(text, threshold = 0.7) {
        const englishChars = text.match(/[a-zA-Z]/g) || [];
        const totalChars = text.replace(/\s/g, '');
        return totalChars.length > 0 && (englishChars.length / totalChars.length) >= threshold;

    } 
    const data = origin.filter((val)=>{
                    return val.contents && isMostlyEnglish(val.contents);
    })*/
        const data = await response.json();
        // .box 요소 전체 선택
        
        const boxElements = document.querySelectorAll(".swiper-slide > div");
        const boxtext = document.querySelectorAll(".sub-book-2 > div");
        console.log(boxtext)
        // documents 데이터를 각 box에 대응하여 렌더링
        for(let i=0; i<boxElements.length; i++){
            const doc = data.documents[i];
            const box = boxElements[i];
            const text = boxtext[i];


            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            // // <h3> 제목
            //  const h3 = document.createElement("h3");
            //  h3.textContent = doc.title
            //  text.appendChild(h3);

            const star = document.createElement("p");
            const rating = Math.floor(Math.random() * 5) + 1;
            const filledStars = "★".repeat(rating);
            const emptyStars = "☆".repeat(5 - rating);
            star.textContent = filledStars + emptyStars;
            star.style.color = "gold";
            star.style.fontSize = "1.2em";
            text.appendChild(star);

            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.authors;
            text.appendChild(h6);

            // <p> 내용 일부
            const p = document.createElement("p");
            p.textContent = doc.contents
            text.appendChild(p);

            

        };

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();