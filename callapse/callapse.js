
class callapse{
  constructor(){

    this.p1 = this.myCreateElement('p',null,['AAAAAAAAAAAAAA']);
    this.text1 =  this.myCreateElement('div',{class:'son2'},[this.p1]);
    this.header1Son =  this.myCreateElement('a',{class:'header1'},['Collapsible Group Item #1'])
    this.header1 =  this.myCreateElement('div',{class:'son1'},[this.header1Son])
    this.p2 = this.myCreateElement('p',null,['AAAAAAAAAAAAAA']);
    this.text2 =  this.myCreateElement('div',{class:'son2'},[this.p2]);
    this.header2Son =  this.myCreateElement('a',{class:'header1'},['Collapsible Group Item #2'])
    this.header2 =  this.myCreateElement('div',{class:'son1'},[this.header2Son])
    this.p3 = this.myCreateElement('p',null,['AAAAAAAAAAAAAA']);
    this.text3 =  this.myCreateElement('div',{class:'son2'},[this.p3]);
    this.header3Son =  this.myCreateElement('a',{class:'header1'},['Collapsible Group Item #3'])
    this.header3 =  this.myCreateElement('div',{class:'son1'},[this.header3Son])
    this.father =  this.myCreateElement('div',{class:'father'},[
      this.header1,
      this.text1,
      this.header2,
      this.text2,
      this.header3,
      this.text3,
    ])
    // document.body.appendChild(this.father)
    // var son1 = document.querySelectorAll('.son1')
    // var son2 = document.querySelectorAll('.son2')
    // var header1 = document.querySelectorAll(".header1");
    // var k = 0;  
    // console.log(son2);
    // for (let i = 0; i < son1.length; i++) {
    //   son2[i].setAttribute('boll', 'false')
    //   son2[i].style.height = "0";
    // }

    // for (let i = 0; i < son1.length; i++) {
    //   header1[i].addEventListener("click", () => {
    //     var get = son2[i].getAttribute('boll')
    //     for (let i = 0; i < son1.length; i++) {
    //       son2[i].style.height = "0";
    //       son2[i].style.transition = " all .5s";
    //       son2[i].setAttribute('boll', 'false')
    //     }
    //     if (get == 'false') {
    //       son2[i].style.height = "200px";
    //       son2[i].style.transition = "all .5s ";
    //       son2[i].setAttribute('boll', 'true')
    
    //     }
    //   });
    // }
    this.fn()
    return this.father
  }

  fn(){
     document.body.appendChild(this.father)
    var son1 = document.querySelectorAll('.son1')
    var son2 = document.querySelectorAll('.son2')
    var header1 = document.querySelectorAll(".header1");
    var k = 0;  
    console.log(son2);
    for (let i = 0; i < son1.length; i++) {
      son2[i].setAttribute('boll', 'false')
      son2[i].style.height = "0";
    }

    for (let i = 0; i < son1.length; i++) {
      header1[i].addEventListener("click", () => {
        var get = son2[i].getAttribute('boll')
        for (let i = 0; i < son1.length; i++) {
          son2[i].style.height = "0";
          son2[i].style.transition = " all .5s";
          son2[i].setAttribute('boll', 'false')
        }
        if (get == 'false') {
          son2[i].style.height = "200px";
          son2[i].style.transition = "all .5s ";
          son2[i].setAttribute('boll', 'true')
    
        }
      });
    }
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

 var graid1 = new callapse;
 var aa = document.querySelector('.aa')
 aa.appendChild(graid1)