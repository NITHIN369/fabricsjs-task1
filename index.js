
const canvas=new fabric.Canvas("canvas1",{
    width:2100,
    height:930,
    backgroundColor:"red",
})
document.getElementById("img").addEventListener("change",(e)=>{
    const imag=document.getElementById("img").files[0]
    const filereader=new FileReader();
    filereader.readAsDataURL(imag)
    filereader.addEventListener("load",(e)=>{ 
        fabric.Image.fromURL(filereader.result,(img)=>{
            canvas.add(img)
            canvas.requestRenderAll()   
        })
    })
})

canvas.requestRenderAll()