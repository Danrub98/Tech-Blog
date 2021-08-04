const newPostTitle = document.getElementById('newPostTitle')
const newPostContent = document.getElementById('newPostContent')
const submit = document.getElementById('postBtn')
const deletebtn = document.getElementsByClassName('deletebtn')

console.log('hello')
console.log(newPostContent.value)


submit.addEventListener('click', (event) =>{
    console.log('hello')
        event.preventDefault();
    

    const postTitleInfo = newPostTitle.value
    const postContentInfo = newPostContent.value
    console.log(postTitleInfo)
    console.log(postContentInfo)
    



    fetch("/api/dashboard/add", {
        method: 'POST',
        body: JSON.stringify({
            post_title: postTitleInfo,
            post_information: postContentInfo
        }),
    headers: {
        "Content-Type": "application/json"
    }
    }).then(response => {
        return response.json()
    }).then(data =>{
        document.location.replace('/dashboard');
    console.log(data.ok)
     })
})

for (var i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function (event) {
        console.log(i)
        console.log(this)
        event.preventDefault();
        console.log(deletebtn.length)
        console.log(this.parentNode.childNodes[1].innerHTML);
     
        let idElement = this.parentNode.childNodes[3].innerHTML

        console.log(idElement)

      
      
        fetch("/api/dashboard/delete/" + idElement, {
            method: 'DELETE',
            
        headers: {
            "Content-Type": "application/json"
        }
        }).then(response => {
            return response.json()
        }).then(data =>{
            document.location.replace('/dashboard');
        console.log(data.ok)
        console.log (balances)
          })


    })
  }
