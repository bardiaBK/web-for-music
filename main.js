$(document).ready(function(){
    var datas = [];

    $("#search").keyup(function(e){
        var value = document.getElementById("search").value
        var res = [];
        var count = 0;

        for (var i = 0;i < datas.length; i++){
            if (datas[i][0].tolowercase().search(value.tolowercase()) != -1){
                var new_element = "<div class='play-buybeats'>" + datas[i][0] + "</div>";

                res.push(new_element);

                count ++;
                if(count >= 5) break;
            }
        }
    });

    $.getJSON("data.json", function(data){
        $.each(data, function(key, val){
            datas.push([val.gener]);
        });
    });

    console.log(datas)
});