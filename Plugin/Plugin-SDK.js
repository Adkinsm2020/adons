let pName = "HelloWorld";
		let StringContent = `
            <div class="popUp" id="pop${pName}">
                <span class="btnClose" onclick="closePop(pop${pName})"></span>
                <div class="pTitle">${pName}</div>
                <div class="pContent">
                hi
                </div>
            </div>`;
        document.querySelector('#cover1.cover1').append(StringContent);
let con = document.createElement("div");
con.innerHTML = StringContent;
        document.querySelector('#cover1.cover1').append(con);

		let image = document.createElement("img");
		document.querySelector("#laupad .icons .icon_top").append(image);

		image.src = "https://img.icons8.com/material-two-tone/48/000000/screensharing.png";
		image.alt = pName;
		image.addEventListener("click", () => {
      showPop("pop" + pName);
    });
