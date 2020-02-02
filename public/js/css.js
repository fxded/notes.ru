// JavaScript for label effects only
	window.onload = () => {
		//console.log(document.querySelectorAll(".col-3 input"));//.val("");
        console.log(document.querySelectorAll(".input-effect input"));
		document.querySelectorAll(".input-effect input").focusout = () => {
			console.log(this.value);
            if(this.value != ""){
				this.addClass("has-content");
			}else{
				this.removeClass("has-content");
			}
		}
	};