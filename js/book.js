// Most popular book 파트
const cards = document.querySelectorAll(".sec1");

        cards.forEach(card => {
            card.addEventListener("click", () => {
            // 모든 카드에서 active 제거
            cards.forEach(c => c.classList.remove("active"));

            // 클릭한 카드만 active 추가
            card.classList.add("active");
            });
        });

     
        const tabMenu = document.querySelectorAll('.tab-menu button');
        const tabContent = document.querySelectorAll('#tab-content > div');
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







async function fetchBooks(query) {
    const REST_API_KEY = '1253f204f41b8b59c6bb69854384fc046'
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 50
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

async function bookData() {
            try {
                const querys = ["자바스크립트", "강아지"];

                for (const q of querys) {
                    const data = await fetchBooks(q);
                    console.log(data);
                }
                // .box 요소 전체 선택
                const boxElements = document.querySelectorAll(".box");
                console.log(boxElements.length)

                // documents 데이터를 각 box에 대응하여 렌더링
                for(let i=0; i<boxElements.length; i++){
                    const doc = data.documents[i];
                    const box = boxElements[i];

                    // <img>
                    const img = document.createElement("img");
                    img.src = doc.thumbnail;
                    box.appendChild(img);

                    // <h3> 제목
                    const h3 = document.createElement("h3");
                    h3.textContent = doc.title;
                    box.appendChild(h3);

            // 별 넣기
                    const p = document.createElement("p");
                    p.textContent = doc.contents.substring(0, 60);
                    box.appendChild(p);
                };

            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData();
