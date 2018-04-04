function addTag() {
    var tags = document.getElementById("tags");
    var tag_list = document.getElementById("tag_list");
    if (tags.value == "") {
	    tags.value = tag_list.options[tag_list.selectedIndex].value;
    } else if (tag_list.options[tag_list.selectedIndex].value == "--") {
    } else {
	tags.value = tags.value + ", " + tag_list.options[tag_list.selectedIndex].value;
    }
}
