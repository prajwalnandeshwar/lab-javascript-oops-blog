/* Fill your code*/
class Blog{
    constructor(title,detail){
    this.title=title;
    this.detail=detail;
    this.addImage()
    this.addTitle()
    this.addDescription()
    }
    addImage() {
        var image = document.createElement('img')
        image.src = './assets/javascript.png'
        document.getElementById('flashcard').appendChild(image)
        var pic=document.getElementById("card-text");
        pic.insertBefore(image,pic[0]);
      }
addTitle = () =>{
    console.log(this.title);
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
}
addDescription = () =>{
    console.log(this.detail);
    var des = document.createElement('p');
    des.setAttribute("id","blog-description");
    console.log(des);
    document.getElementById('card-text').appendChild(des);
    des.innerHTML += this.detail;

}
}
document.getElementById("addBlog").
 addEventListener("click",function(){
    document.getElementById("popupContact").style.display="block";
 });
 document.getElementById("close").
 addEventListener("click",function(){
    document.getElementById("popupContact").style.display="none";
 });
 var post = document.getElementById('post')
post.addEventListener('click', function () {
  document.getElementById('popupContact').style.display = 'none'
  let title = document.getElementById('title').value
  let detail = document.getElementById('detail').value
  let blog1 = new Blog(title, detail)
})