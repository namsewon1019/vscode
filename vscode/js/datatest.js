let param1 = $("#param1").val(); // 서버로 보내야할 데이터 1
let param2 = $("#param2").val(); // 서버로 보내야할 데이터 2

// 첫 번째 방식 : URL에 쿼리스트링 붙이기
$.ajax({
    url: `${CONTEXT_PATH}/xxx/aaa/edit?param1=${param1}&param2=${param2}`,
    method: 'GET',
    async = true,
    dataType: 'html',
    success : function (res) {
        // 서번단에서 HTML을 반환해서 기존 페이지를 깜빡임없이 새로 고친다.
        document.querySelector("#appendHtml").innerHTML = res;
    },
    error: function (xhr) {
        alert("fail");
    }
});
