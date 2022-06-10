var grid = {
    bindheading:(fields)=>{
        var $tr = $("<tr/>");
        fields.forEach(field=>{
            var $th = $("<th/>");
            $th.html(field);
            $tr.append($th);
        });
        $('.table-head').html($tr);
    },
    binddata:(fields,data, buttons = [])=>{
        data.forEach(_data=>{
            var $tr = $("<tr/>");
            fields.forEach(field=>{
                var $td = $("<td/>");
                var value = _data[field];
                
                $td.html(value);
                
                $tr.append($td);
                
            });


             buttons.forEach(button=>{
                var $button = $("<button/>");
                $button.html(button.label);
                $tr.append($button);
                $button.click(function(){
                    button.action();
                })

                


             })
            // var $tb = $("<button/>");
            // $tb.html("Save");
            // $tr.append($tb);
            $(".table-body").append($tr);
            // var $tb_del = $("<button/>");
            // $tb_del.html("Delete");
            // $tr.append($tb_del);
            // $(".table-body").append($tr);
        });
        // $("table").on('click','button',function(){
        //    var mail= $(this).closest("tr").children().eq(2).text()
        //    alert(mail);
        // })
       
    }
}