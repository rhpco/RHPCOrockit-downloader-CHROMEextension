chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		console.log("RHPCO-rockit.it-FREE-listener  - injection start!");

		//jQuery('.playlist .items').css({'background-color':'#32c6a6'});


		jQuery(".playlist").find("[itemprop='track']").each(function( index ) {
			console.log( index + ": " + $( this ).attr('id') );
			var dirtyID = $( this ).attr('id');
			var clearID = dirtyID.split("_")
			jQuery(this).find(".play a").attr('rel',clearID[1]);
			jQuery(this).find(".play").attr('class','play on');
			var str = location.href;
			var n = str.search("album");	
			if( n != -1 )
			{
				var cleanhash = "http://ww2.rockit.it/7mp3/"+clearID[2]+"/"+clearID[1]+".mp3";
				console.log(cleanhash);
				var hash = CryptoJS.MD5(cleanhash+"-bastapippe");
				jQuery(this).find("ul").append('<li style="height:40px;margin-top:3px;"><form action="'+cleanhash+'" method="post"><input type="hidden" name="rockitID" id="rockitID" value="'+hash+'"/><button name="RHPCOsubmit" type="submit" value="submit">d0wnl04d 4nd sm1l3</button></form></li>' );
			}

		});
		// ----------------------------------------------------------

	}
	}, 10);
});