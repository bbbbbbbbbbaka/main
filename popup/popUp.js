class PopUps{

	constructor(parms){
		this.son1 = this.myCreateElement('div',{class:'son1'},['弹出框'])
		this.son2 = this.myCreateElement('div',{class:'son2'},['X'])
		this.header = this.myCreateElement('div',{class:'header'},[
			this.son1,
			this.son2
		])
		this.popUp = this.myCreateElement('div',{class:'popUp',style:"display: none"},[this.header])
		this.btn = this.myCreateElement('input',{type:'button',value:'弹出框',class:'btn'})
		this.mask = this.myCreateElement('div',{class:'mask'},[
			this.popUp,
			this.btn
		])
		this.father = this.myCreateElement('div',{class:'father'},[this.mask])
		this.fn(this.son2)
		this.fn(this.btn)
		this.body()
		this.darg(this.popUp)
		return this.mask
	}

	body(){
		document.body.addEventListener('click',e=>{
			if(e.target == this.mask){
				this.popUp.style.display = "none";
				this.mask.style.width = "";
				this.mask.style.height = "";
			}
		})
	}

	fn(data) {
		data.addEventListener("click", (e) => {
			if (this.popUp.style.display == "block" ) {
				this.popUp.style.display = "none";
				this.mask.style.width = "";
				this.mask.style.height = "";	
			} else {
				this.popUp.style.display = "block";
				this.mask.style.width = "100%";
				this.mask.style.height = "100%";
			}
		});
	}

	darg(objs) {
		objs.onmousedown = function (e) {
			var dx = e.clientX - objs.offsetLeft;
			var xx = e.clientY - objs.offsetTop;
			document.onmousemove = function (e) {  	      
				objs.style.left = e.clientX  - dx  + "px";
				objs.style.top = e.clientY  - xx  + "px"            
			};          
			document.onmouseup = function () {
				document.onmousemove = null;
				document.onmouseup = null;
			};
		};
		
	}

	myCreateElement(dom, arr, son) {
		var div = document.createElement(dom)
		var on = /^on/

		if (arr !== null && arr !== undefined) {
			Object.keys(arr).forEach((k, index) => {
				console.log()
				if (on.test(k)) {
					div.addEventListener(k.substring(2, k.length + 1), (e) => {
					console.log(parseInt(arr[k] + '()'))
					})
				} else {
					div.setAttribute(k, arr[k])
				}
			})
		}
		if ((son !== null) & (son !== undefined)) {
			son.forEach((c, index) => {
				if (typeof c === 'string') {
					var text = document.createTextNode(c)
					text.data = c
					div.appendChild(text)
				} else {
					div.appendChild(c)
				}
			})
		}
		return div
	}
}

var p = new PopUps()
document.body.appendChild(p)