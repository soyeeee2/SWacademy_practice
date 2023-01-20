// 명령형
// const $button1 = document.createElement('button');
// $button1.textContent = 'button01'

// const $button2 = document.createElement('button');
// $button2.textContent = 'button02'

// const $button3 = document.createElement('button');
// $button3.textContent = 'button03'

// const $main = document.querySelector('#app')

// $main.appendChild($button1)
// $main.appendChild($button2)
// $main.appendChild($button3)

// document.querySelectorAll('button').forEach( $button => {
//         $button.addEventListener('click', (e) => {
//                 const {target} = e
//                 if(target.style.textDecoration === 'line-through'){
//                         target.style.textDecoration = 'none'
//                     } else {
//                             target.style.textDecoration = 'line-through'
//                         }
//                     })
//                 })
   
                

// 2 선언형, 추상화
function TimerBtn({$target, text, timer = 3000}) {
    const button = new ToggleBtn({$target, text, onClick: () => {
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
  
    this.state = {
        clickCount: 0,
        toggled: false
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $button.textContent = text

        $button.style.textDecoration = 
            this.state.toggled ? 'line-through' : 'none'
    }

    $button.addEventListener('click', () => {
        this.setState({
            clickCount: this.state.clickCount + 1,
            toggled: !this.state.toggled
        })

        if(onClick) {
            onClick(this.state.clickCount)
        }
    })

    
    this.render()
}

const $app = document.querySelector('#app')

function BtnGroup({
    $target, 
    buttons
}){
    const $group = document.createElement('div')
    let isInit = false

    this.render = () => {
      if(!isInit){
        buttons.forEach(({type, ...props}) => {
            if(type === 'toggle'){
                new ToggleBtn({$target: $group, ...props})
            } else if(type === 'timer'){
                new TimerBtn({$target: $group, ...props})
            }
        })
        $target.appendChild($group);
        isInit = true
      }  
    }

    this.render()
}

new BtnGroup({
    $target: $app,
    buttons: [
        {
            type: 'toggle',
            text: '토글 버튼',
        },
        {
            type: 'toggle',
            text: '토글 버튼',
        },
        {
            type: 'timer',
            text: '타이머 버튼',
            timer: 2000
        }
    ]
})