let inp = document.querySelector('.inp')
let btn = document.querySelector('.buton')
let ibm = document.querySelector('.images')
let spn = document.querySelector('span')

btn.addEventListener('click', ()=>{
    spn.classList.add('none')
    if (inp.value == 1) {
        ibm.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        `
    } else if (inp.value == 2) {
        ibm.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        `

    } else if (inp.value == 3) {
        ibm.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        <img src="https://web.lebazar.uz/resources/product/2018/4/31/medium_1527762723743RIN_0119(2).jpg" alt="" class="img">         
        `

    } else if (inp.value == 4) {
        ibm.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        <img src="https://web.lebazar.uz/resources/product/2018/4/31/medium_1527762723743RIN_0119(2).jpg" alt="" class="img">
        <img src="https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__469649744f.jpg" alt="" class="img">
        `
    } else if (inp.value == 5) {
        ibm.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        <img src="https://web.lebazar.uz/resources/product/2018/4/31/medium_1527762723743RIN_0119(2).jpg" alt="" class="img">
        <img src="https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__469649744f.jpg" alt="" class="img">
        <img src="https://assets.nst.com.my/images/articles/pbaru3_1536810447.jpg" alt="" class="img">
        `

    } else if (inp.value == 6) {
        ibm.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        <img src="https://web.lebazar.uz/resources/product/2018/4/31/medium_1527762723743RIN_0119(2).jpg" alt="" class="img">
        <img src="https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__469649744f.jpg" alt="" class="img">
        <img src="https://assets.nst.com.my/images/articles/pbaru3_1536810447.jpg" alt="" class="img">
        <img src="https://i.ytimg.com/vi/zdhCB3LpP9g/maxresdefault.jpg" alt="" class="img">
        `
    } else if (inp.value == 7) {
        ibm.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        <img src="https://web.lebazar.uz/resources/product/2018/4/31/medium_1527762723743RIN_0119(2).jpg" alt="" class="img">
        <img src="https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__469649744f.jpg" alt="" class="img">
        <img src="https://assets.nst.com.my/images/articles/pbaru3_1536810447.jpg" alt="" class="img">
        <img src="https://i.ytimg.com/vi/zdhCB3LpP9g/maxresdefault.jpg" alt="" class="img">
        <img src="https://www.pinkvilla.com/pics/480x480/821644923_simp_1280*720_202301.jpg" alt="" class="img">
        `
    } else if (inp.value == 8) {
        images.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        <img src="https://web.lebazar.uz/resources/product/2018/4/31/medium_1527762723743RIN_0119(2).jpg" alt="" class="img">
        <img src="https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__469649744f.jpg" alt="" class="img">
        <img src="https://assets.nst.com.my/images/articles/pbaru3_1536810447.jpg" alt="" class="img">
        <img src="https://i.ytimg.com/vi/zdhCB3LpP9g/maxresdefault.jpg" alt="" class="img">
        <img src="https://www.pinkvilla.com/pics/480x480/821644923_simp_1280*720_202301.jpg" alt="" class="img">
        <img src="https://i.redd.it/t6mafi8irnk61.jpg" alt="" class="img">
        `
    } else if (inp.value == 9) {
        ibm.innerHTML = ` 
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        <img src="https://web.lebazar.uz/resources/product/2018/4/31/medium_1527762723743RIN_0119(2).jpg" alt="" class="img">
        <img src="https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__469649744f.jpg" alt="" class="img">
        <img src="https://assets.nst.com.my/images/articles/pbaru3_1536810447.jpg" alt="" class="img">
        <img src="https://i.ytimg.com/vi/zdhCB3LpP9g/maxresdefault.jpg" alt="" class="img">
        <img src="https://www.pinkvilla.com/pics/480x480/821644923_simp_1280*720_202301.jpg" alt="" class="img">
        <img src="https://i.redd.it/t6mafi8irnk61.jpg" alt="" class="img">
        <img src="https://beebom.com/wp-content/uploads/2019/03/hp-spectre-top-could-be-featured.jpg" alt="" class="img">
        `
    } else if (inp.value == 10) {
        ibm.innerHTML = `
        <img src="https://www.thedrive.com/content/2018/10/p90236608_highres_the-bmw-m3-csl-e46-0-e1539169175183.jpg?quality=85" alt="" class="img">
        <img src="https://yt3.googleusercontent.com/bRWQb0C9JldkX2pfPaZvVT0KeKZ1xIxaV6s5FUxGtK6HKNp3q6C4izqFe6WIhfWwSDR5UTjK3g=s900-c-k-c0x00ffffff-no-rj" alt="" class="img">
        <img src="https://web.lebazar.uz/resources/product/2018/4/31/medium_1527762723743RIN_0119(2).jpg" alt="" class="img">
        <img src="https://cdn4.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__469649744f.jpg" alt="" class="img">
        <img src="https://assets.nst.com.my/images/articles/pbaru3_1536810447.jpg" alt="" class="img">
        <img src="https://i.ytimg.com/vi/zdhCB3LpP9g/maxresdefault.jpg" alt="" class="img">
        <img src="https://www.pinkvilla.com/pics/480x480/821644923_simp_1280*720_202301.jpg" alt="" class="img">
        <img src="https://i.redd.it/t6mafi8irnk61.jpg" alt="" class="img">
        <img src="https://beebom.com/wp-content/uploads/2019/03/hp-spectre-top-could-be-featured.jpg" alt="" class="img">
        <img src="https://russianteleweek.ru/wp-content/uploads/2022/10/RegistanSamarkand-696x392.jpg" alt="" class="img">
        `

    } else if (inp.value > 10) {
        spn.innerHTML = 'we haven\'t got enough picture'
        spn.classList.remove('none')
        ibm.innerHTML = ''
    } else if (inp.value <= -0) {
        spn.innerHTML = 'A number less than 0 is not possible'
        spn.classList.remove('none')
    }

}
)
