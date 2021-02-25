class Carousel {
	constructor(parms) {
		this.images = parms.images,
		this.da = this.myCreateElement('div', {class: 'da'}),
		this.dda = this.myCreateElement('div', {class: 'dda'}, [this.da]),
		this.btn1 = this.myCreateElement('input',{type:'button',class:'btn1',value:'生成'})
		this.btn = this.myCreateElement('div',{class:'btn'},[this.btn1])
		this.right = this.myCreateElement('div',{class:'right'},['>']),
		this.left = this.myCreateElement('div',{class:'left'},['<']),
		this.dayuandian = this.myCreateElement('div',{class:'dayuandian'})
		this.father = this.myCreateElement('div',null,[
			this.dda,
			this.btn,
			this.right,
			this.left,
			this.dayuandian
		])
		document.body.appendChild(this.father)	
		this.da.style.transition = 'all 0.5s'
		this.creat()
		this.darg(this.da,this.dda)
		window.addEventListener('resize',e=>{
			this.dayuandian.innerHTML = ''
			this.da.innerHTML = ''
			this.creat()
		})
		return this.father
	}

	creat(){
		for (let i = 0; i < this.images.length; i++) {
			this.da.insertAdjacentHTML(
				"beforeend",
				'<div class="tupian" id="a' + i + '"></div>'
			);
			this.dayuandian.insertAdjacentHTML(
				"beforeend",
				' <div class="yuandian" id="b' + i + '"></div>'
			);
			var tupian = document.querySelectorAll(".tupian");
			var aa = parseInt((innerWidth - (this.images.length - 1) * 10) / 5);
			tupian[i].style.width = aa + "px";
			const AllDots = document.querySelectorAll(".yuandian");
			/* console.log(AllDots); */
			for (let i = 0; i < AllDots.length; i++) {
				AllDots[i].addEventListener("click", (e) => {
					for (let i = 0; i < AllDots.length; i++) {
						AllDots[i].style.backgroundColor = "";
					}
					AllDots[i].style.backgroundColor = "blue";
					const img = document.getElementById("a" + i);
					const dots = document.getElementById("b" + i);
					
					const father = document.querySelector(".da");
					/* console.log( tupian[i].offsetLeft); */
					father.style.left = father.clientWidth / 2 - tupian[i].offsetLeft + "px";
				});
			}
		}
		this.left.addEventListener("click", (e) => {
			/* console.log( da.style.left); */
			var zuo = parseInt(this.da.offsetLeft) + aa;
			this.da.style.left = zuo + "px";
		})
		this.right.addEventListener("click", (e) => {
			var zuo = parseInt(this.da.offsetLeft) - aa;
			this.da.style.left = zuo + "px";
		})
	}

	darg(obj,objs) {
		objs.onmousedown = function (e) {
			obj.style.transition = ''
			var dx = e.clientX - objs.children[0].offsetLeft;
			document.onmousemove = function (e) {           
				objs.children[0].style.left = e.clientX - objs.offsetLeft - dx + "px";           
			};          
			document.onmouseup = function () {
			
				obj.style.transition = 'all 0.5s'
				document.onmousemove = null;
				document.onmouseup = null;
			};
		};
		
	}
	
	aa(){
		console.log(11);
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
var n = new Carousel(
	{
		images: ["A", "B", "C", "D", "E"],
	}
)

document.body.appendChild(n)
