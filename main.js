item_names = []

function submit(){
    item_display = []
    for(var i = 1; i <= 5; i++){
        var current_item = document.getElementById("item_" + i).value;
        console.log(current_item);
        item_names.push(current_item);
    }
    console.log(item_names);
    var length_array = item_names.length;
    console.log(length_array)
    for(var o = 0; o<length_array; o++){
        item_display.push("<h4> Item - " + item_names[o] + "</h4>");
        console.log(item_display);
    }
    document.getElementById("display_name_with_commas").innerHTML = item_display;
    var remove_comma_thingys = item_display.join(" ");
    console.log(remove_comma_thingys);
    document.getElementById("display_name_without_commas").innerHTML = remove_comma_thingys;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}
function sorting(){
    item_names.sort();
    console.log(item_names);
    var item_display_sort = []
    var length_array = item_names.length;
    console.log(length_array)
    for(var o = 0; o<length_array; o++){
        item_display_sort.push("<h4> Item - " + item_names[o] + "</h4>");
        console.log(item_display_sort);
    }
    var remove_comma_thingys = item_display_sort.join(" ");
    console.log(remove_comma_thingys);
    document.getElementById("display_name_without_commas").innerHTML = remove_comma_thingys;

}