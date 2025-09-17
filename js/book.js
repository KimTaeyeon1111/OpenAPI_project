// Most popular book 파트
const buttons = document.querySelectorAll('.sec1');

buttons.forEach(button => {
    button.addEventListener("click", () => {
    // 모든 카드에서 active 제거
    buttons.forEach(btn => btn.classList.remove("active"));

    // 클릭한 카드만 active 추가
    button.classList.add("active");
    });
});


const tabMenu = document.querySelectorAll('.tab-menu button');
const tabContent = document.querySelectorAll('.tab-content > div');
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
    tabContent[num].style.display = 'block';
};



//--------------------------------------------------------------------------
// API
//--------------------------------------------------------------------------

src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"

async function bookData() {
    const params = new URLSearchParams({
        query: "thrones"
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

        const boxElements = document.querySelectorAll(".mySwiper10 .box");

        // documents 데이터를 각 box에 대응하여 렌더링
        for(let i=0; i<boxElements.length; i++){
            const doc = data[i];
            const box = boxElements[i];



            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h3");
            h3.textContent = doc.title.substring(0, 7)+"...";
            box.appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.authors;
            box.appendChild(h6);

            // <p> 내용 일부
            const p = document.createElement("p");
            p.textContent = doc.contents.substring(0, 41)+"...";
            box.appendChild(p);

            const star = document.createElement("p");
            const rating = Math.floor(Math.random() * 5) + 1;
            const filledStars = "★".repeat(rating);
            const emptyStars = "☆".repeat(5 - rating);
            star.textContent = filledStars + emptyStars;
            star.style.color = "gold";
            star.style.fontSize = "1.2em";
            box.appendChild(star);

        };

    } catch (error) {
        console.log('에러발생', error);
    }
}






//Limited
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
        const boxElements = document.querySelectorAll(".mySwiper11 .box");

        // documents 데이터를 각 box에 대응하여 렌더링
        for(let i=0; i<boxElements.length; i++){
            const doc = data[i];
            const box = boxElements[i];

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h3")
            h3.textContent = doc.title.substring(0, 10);
            box.appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.authors;
            box.appendChild(h6);

            // <p> 내용 일부
            const p = document.createElement("p");
            p.textContent = doc.contents.substring(0, 45)+"";
            box.appendChild(p);

            const star = document.createElement("p");
            const rating = Math.floor(Math.random() * 5) + 1;
            const filledStars = "★".repeat(rating);
            const emptyStars = "☆".repeat(5 - rating);
            star.textContent = filledStars + emptyStars;
            star.style.color = "gold";
            star.style.fontSize = "1.2em";
            box.appendChild(star);

        };

    } catch (error) {
        console.log('에러발생', error);
    }
}








// most
async function bookData3() {
    const params = new URLSearchParams({
        query: "Charles Dickens"
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

        const boxElements = document.querySelectorAll(".tab-box");

        // documents 데이터를 각 box에 대응하여 렌더링
        for(let i=0; i<boxElements.length; i++){
            const doc = data[i];
            const box = boxElements[i];



            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h3");
            h3.textContent = doc.title.substring(0, 7)+"...";
            box.appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.authors;
            box.appendChild(h6);

            // <p> 내용 일부
            const p = document.createElement("p");
            p.textContent = doc.contents.substring(0, 41)+"...";
            box.appendChild(p);

            const star = document.createElement("p");
            const rating = Math.floor(Math.random() * 5) + 1;
            const filledStars = "★".repeat(rating);
            const emptyStars = "☆".repeat(5 - rating);
            star.textContent = filledStars + emptyStars;
            star.style.color = "gold";
            star.style.fontSize = "1.2em";
            box.appendChild(star);

        };

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();
bookData2();
bookData3();



    