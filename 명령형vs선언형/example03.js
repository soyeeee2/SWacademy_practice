// 명령형
const $button1 = document.createElement('button');
$button1.textContent = 'button01'

const $button2 = document.createElement('button');
$button2.textContent = 'button02'

const $button3 = document.createElement('button');
$button3.textContent = 'button03'

const $main = document.querySelector('#app')

$main.appendChild($button1)
$main.appendChild($button2)
$main.appendChild($button3)

document.querySelectorAll('button').forEach( $button => {
        $button.addEventListener('click', (e) => {
                const {target} = e //?
                if(target.style.textDecoration === 'line-through'){
                        target.style.textDecoration = 'none'
                    } else {
                            target.style.textDecoration = 'line-through'
                        }
                    })
                })
                

// 2 선언형, 추상화
function TimerBtn({$target, text, timer = 3000}) {
    const button = new ToggleBtn({$target, text, onClick: () => { //?변수 왜 또 가져옴? 
            setTimeout(() => {
                button.setState({
                    ...button.state,
                    toggled: !button.state.toggled
                })
            }, timer);
        }})
}


function ToggleBtn({$target, text, onClick}) {
    const $button = document.createElement("button")
    $target.appendChild($button)
    let clickCount = 0;

    this.state = {
        clickCount: 0,
        toggled: false
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => { //? 함수여부 const안쓰는지지
        $button.textContent = text

        $button.style.textDecoration = 
            this.state.toggled ? 'none' : 'line-through'
    }

    $button.addEventListener('click', () => {
        this.setState({
            clickCount: this.state.clickCount + 1,
            toggled: !this.state.toggled
        })

        if(onClick) { //? real Onclick?
            onClick(this.state.clickCount)
        }
    })

    
    this.render()
}

const $app = document.querySelector('#app')

function BtnGroup({$app, buttons}){
    const $group = document.createElement('div')
    let isInit = false
    this.render = () => {
      if(!isInit){
        buttons.forEach((type, ...props) => {
            if(button.typ)
        })
      }  
    }
}

new ToggleBtn({
    $target: $app,
    text: 'Button🔥',
    onClick: (clickCount) => {
        if(clickCount % 3 === 0) {
            alert('3번째 클릭')
        }
    }
}) 
new ToggleBtn({
    $target: $app,
    text: 'Button✨',
}) 

new TimerBtn({
    $target: $app,
    text: 'Btn2',
    timer: 1000 * 10
})

