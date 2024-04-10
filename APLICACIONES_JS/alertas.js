document.querySelector("#btn1").onclick=()=>{
    Swal.fire("HOLISS:)");
}
    document.querySelector("#btn2").onclick=()=>{
    Swal.fire({
        title: "HOLA COMO ESTAS??",
        text: "Q ONDA",
        icon: "question"
      });
    }
    document.querySelector("#btn3").onclick=()=>{
Swal.fire({
  icon: "error",
  title: ":(",
  text: "INTENTALO MAS TARDE",
  footer: '<a href="#">ENTRA AQUI PARA MAS</a>'
});
    }
    document.querySelector("#btn4").onclick=()=>{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "MUY BIEN",
        showConfirmButton: false,
        timer: 1500
      });
    }
    document.querySelector("#btn5").onclick=()=>{
        Swal.fire({
            title: "ELIGUE UNA OPCION",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "GUARDAR",
            denyButtonText: `NO GUARDAR`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "COMPLETADO");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
}
    document.querySelector("#btn6").onclick=()=>{
        Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }

    document.querySelector("#btn7").onclick=()=>{
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });

    }