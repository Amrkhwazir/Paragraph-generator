let inputbar = document.querySelector('#inputbar')
let box = document.querySelector('.box')
let generateBtn = document.querySelector('.generateBtn')

const text = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quos fuga perspiciatis. Quas rerum iure omnis possimus ex reiciendis! Ducimus culpa rerum earum illum, facere incidunt asperiores nulla sequi aspernatur assumenda voluptate molestias obcaecati enim ab eos necessitatibus. Blanditiis sunt unde vel quis esse omnis nulla assumenda doloribus rem amet?',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim labore odit corporis eaque tempore, similique cupiditate omnis voluptatum asperiores quasi molestiae debitis nisi quod culpa beatae non doloremque quisquam!',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias enim est dolore odit minima maxime unde earum dolorem, ipsum deleniti voluptates soluta! Laborum, dolorum. Maxime voluptate iste reprehenderit in velit cum rem? Sapiente odio vel minus rem, nihil non quis!',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora maiores eaque delectus explicabo eligendi id tempore unde, dolores illo.',
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae saepe soluta autem cumque error eligendi ullam illum tenetur nihil, ipsum sequi consequuntur, sed blanditiis reprehenderit quae eaque, fugit vitae! Atque, similique earum. Non adipisci nemo illo, pariatur dignissimos laborum doloremque, nesciunt hic dolorum et nobis sapiente odit facere repellat blanditiis, sed mollitia iure nisi. Unde.',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque fugiat cumque nihil praesentium sequi, pariatur exercitationem eos ex eligendi quos hic doloremque eum recusandae harum reiciendis fuga animi! Doloribus commodi earum reiciendis quaerat voluptatum perspiciatis distinctio quibusdam nobis similique officiis. Ipsum magni facilis non asperiores explicabo quibusdam accusantium ipsa quas deleniti nemo? A corporis animi et, perferendis minima ut.',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque fugiat cumque nihil praesentium sequi, pariatur exercitationem eos ex eligendi quos hic doloremque eum recusandae harum reiciendis fuga animi! Doloribus commodi earum reiciendis quaerat voluptatum perspiciatis distinctio quibusdam nobis similique officiis. Ipsum magni facilis non asperiores explicabo quibusdam accusantium ipsa quas deleniti nemo? A corporis animi et, perferendis minima ut.'];

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let value = parseInt(inputbar.value);
    // console.log(value)
  let  random = Math.floor(Math.random()* text.length);

    // empty
    // -1
    // > 9
if(isNaN(value)|| value <= 0 || value > 9){

    box.innerHTML = `<p class="result">${text[random]}</p>`
}else{
    let countText = text.slice(0, value);
    console.log(countText)

  let  temptext = countText.map((item) => {

        return `<p class="result">${item}</p>`
    })
    .join('')
    // console.log(temptext)
    box.innerHTML = temptext
}
});