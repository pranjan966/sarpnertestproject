const formItem = document.getElementById('todoform')
const Itemlist = document.getElementById("todoitem")

formItem.addEventListener("submit", submit);

function submit(e) {
    e.preventDefault();
    formItem.style.background = "#f4f4f4";
    const title = document.getElementById("title").value;
    console.log(title)
    const desc = document.getElementById("desc").value;
    console.log(desc)


    fetch(
        "https://crudcrud.com/api/8c17bfcb7a1a4dd6aae9813fb0decd8c/appointmentData",
        {
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            title,
            desc,
            
          }),
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((response) => {
    let liElement = null;

    liElement = createLiElement(
        response._id,
        response.title,
        response.desc,
       
      );

      if (liElement !== null) {
        listItems.appendChild(liElement);
      }
      console.log("response saved successfully : ", response);
    })
    .catch((err) => {
      console.log("Error while saving the data : ", err);
    });
}


    