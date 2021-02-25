
class Tree{
	constructor(parms){
		this.data = parms.data
		this.divs = this.myCreateElement('div',{class:'divs'},['Tree'])
		this.div = this.myCreateElement('div',{class:'div'},[this.divs])
		this.div.appendChild(this.fn(this.data))
		document.body.appendChild(this.div)
		this.tr()
		
		return this.div
	}
	
	fn(data) {
		var ul = document.createElement('ul')
		data.forEach((item, index) =>{
			
			let li  = document.createElement('li')
			let divs = document.createElement('div')
			divs.setAttribute('class','divs')
			divs.innerText=item.text;
			ul.appendChild(divs)
			ul.appendChild(li)
			if (item.nodes != undefined) {
			 li.appendChild( this.fn(item.nodes));
			}
		});
	 return ul
	}

	tr(){
		var divv = document.querySelectorAll('.divs')
		divv.forEach(i=>{
      i.addEventListener('click',e=>{
        if (i.nextElementSibling.style.display == "block"||i.nextElementSibling.style.display == '') {
            i.nextElementSibling.style.display = 'none';
 
        } else {
            i.nextElementSibling.style.display = 'block';}
      })
    }) 
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

var trees = new Tree({
	data:[
		{
			text: "Parent 1",
			nodes: [
				{
					text: "Child 1",
					nodes: [
						{
							text: "Grandchild 1",
						},
						{
							text: "Grandchild 2",
						},
					],
				},
				{
					text: "Child 2",
				},
			],
		},
		{
			text: "Parent 2",
		},
		{
			text: "Parent 3",
		},
		{
			text: "Parent 4",
		},
		{
			text: "Parent 5",
		},
]
})
document.body.appendChild(trees)
