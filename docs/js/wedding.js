
//event
// 내비게이션 (0:네이버/1:카카오)
$("ul.navi>li>a , p.navi2>a").click(function () {
    var ix = $(this).parent().index();
    var lat = $("#locMapLat").val();
    var lng = $("#locMapLng").val();
    var loc = $("#locName").val();
    var navurl = "";


    if ($(this).parent().attr("class") == "navi2") { //WD008
        ix = 0;
    }

    if (ix == 0) {
        // naver navi
        navurl = "http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=" + lat + "&elng=" + lng + "&etitle=" + encodeURIComponent(loc);
    }
    else if (ix == 1) {
        // kakao navi
        navurl = "http://kakaonavi-wguide.kakao.com/drive.html?ak=8c7ac8fdd6138eab66a85f46aec3a618&ctype=1&lt=" + lat + "&ln=" + lng + "&dt=" + encodeURIComponent(loc);
    }
    var f = window.open(navurl);

    return false;
});



// 교통정보 (0:네이버자동차길찾기/1:네이버대중교통길찾기/2:네이버대중교통길찾기)
//$("ul.traffic_info>li>a").click(function () {
$("ul.traffic_info>li>a, ul.traffic_info>li>ul>li>a").click(function () {
    var ix = $(this).parent().index();
    var lat = $("#locMapLat").val();
    var lng = $("#locMapLng").val();
    var loc = $("#locName").val();
    var navurl = "";



    //if ($("ul.traffic_info").children('li').length == 2) {
    //    if ($(this).attr("id") == "car") {
    //        ix = 0;
    //    } else if ($(this).attr("id") == "bus") {
    //        ix = 1;
    //    } else {
    //        ix = ix;
    //    }
    //} else {
    //    ix = $(this).index() - 1;
    //}


    if ($("ul.traffic_info").children('li').length == 2) {
        ix = ix;
    } else if ($("ul.traffic_info li ul").children('li').length == 2) {
        if ($(this).attr("id") == "car") {
            ix = 0;
        } else if ($(this).attr("id") == "bus") {
                ix = 1;
        }
    }else {
        ix = $(this).index() - 1;
    }


    if (ix == 0) {
        // car
        navurl = "https://m.map.naver.com/route.nhn?menu=route&ename=" + encodeURIComponent(loc) + "&ex=" + lng + "&ey=" + lat + "&pathType=0&showMap=true";
    }
    else if (ix == 1) {
        // bus
        navurl = "https://m.map.naver.com/route.nhn?menu=route&ename=" + encodeURIComponent(loc) + "&ex=" + lng + "&ey=" + lat + "&pathType=1&showMap=true";
    }
    else if (ix == 2) {
        // subway
        navurl = "https://m.map.naver.com/route.nhn?menu=route&ename=" + encodeURIComponent(loc) + "&ex=" + lng + "&ey=" + lat + "&pathType=1&showMap=true";
    }
    var f = window.open(navurl);

    return false;
});

// SNS
// 카카오
Kakao.init('8c7ac8fdd6138eab66a85f46aec3a618');
// 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
Kakao.Link.createTalkLinkButton({
    container: '#kakao-link-btn',
    label: $("#invTitle").val(),
    image: {
        src: 'http://mcard.barunnfamily.com/' + $("#invMainImage").val(),
        width: '726',
        height: '662'
    },
    webButton: {
        text: '모바일 초대장 연결',
        url: 'http://mcard.barunnfamily.com/' + $("#invCode").val()
    }
});


// 나머지
$("ul.sns_a>li>a").click(function () {
    var ix = $(this).parent().index();
    var txt = $("#invTitle").val();
    var url = 'http://mcard.barunnfamily.com/' + $("#invCode").val();

    if (ix == 0) {
        // facebook
        sendSns("facebook", url, txt);
        return false;
    }
    else if (ix == 1) {
        // twitter
        sendSns("twitter", url, txt);
        return false;
    }
});

$(".galMore").on("click", function(){
    $("li.overCount").removeClass("overCount");
    if($('#skin_frame', window.parent.document).length>0){
        setTimeout(function () {
            var frameHeight = $(".skin_wrap").height();
            $('#skin_frame', window.parent.document).css({ height: frameHeight });
        }, 210);
    }
    $(this).hide();
    return false;
});

if ("N" == "Y") {
    //송금주소를 제대로 받아왔을때만 보이도록 함
    if ("" != "" && "" != "") {
        $("#MoneyGift").show();
    } else {
        $("#MoneyGift").hide();
    }
} else if ("N" == "R") {
    $("#MoneyGift").show();
}else{
    $("#MoneyGift").hide();
}
});

function shareStory() {
Kakao.Story.open({
    url: 'http://mcard.barunnfamily.com/' + $("#invCode").val(),
    text: '모바일 초대장 연결~! #바른손카드 #모바일초대장 :)'
});
}
