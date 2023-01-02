var idiots = {
    name: 'idiots',
    genre: 'punk',
    members: {
        roto: {
            memberName: 'roto',
            play: function(){
                console.log(`band ${this.name} ${this.memberName} play start`)
            }
        }
    }
}

idiots.members.roto.play() //band undefined roto play start

// * this는 가장 가까운 객체를 가리킴 따라서 roto안의 memberName은 출력, name은 미출력