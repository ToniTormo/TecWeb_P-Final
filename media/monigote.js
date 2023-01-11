function monigote(escalaX,escalaY,colour,colour2){
    var monigote=document.createElementNS("http://www.w3.org/2000/svg","svg")
    monigote.setAttributeNS(null,"height",escalaX)
    monigote.setAttributeNS(null,"width",escalaY)
    monigote.setAttribute("xlink","http://www.w3.org/2000/svg")
    monigote.setAttributeNS(null,"viewBox","0"+" "+ "0"+ " "+"100"+" "+ "100")
    monigote.setAttributeNS(null,"preserveAspectRatio","xMidYMid meet")
    monigote.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink" )
    
    var c1=document.createElementNS("http://www.w3.org/2000/svg","circle")
    c1.setAttribute("cx",(50/3).toFixed())
    c1.setAttribute("cy",(50/3).toFixed())
    c1.setAttribute("r",(40/3).toFixed())
    c1.setAttribute("stroke",colour)
    c1.setAttribute("stroke-width","1")
    c1.setAttribute("fill",colour)
    c1.setAttribute("transform","scale(3,3)")
    
    
    var c2=document.createElementNS("http://www.w3.org/2000/svg","circle")
    c2.setAttribute("cx",(35/3).toFixed())
    c2.setAttribute("cy",(50/3).toFixed())
    c2.setAttribute("r",(5/3).toFixed())
    c2.setAttribute("stroke",colour2)
    c2.setAttribute("stroke-width","1")
    c2.setAttribute("fill",colour2)
    c2.setAttribute("transform","scale(3,3)")

    
    var c3=document.createElementNS("http://www.w3.org/2000/svg","circle")
    c3.setAttribute("cx",(65/3).toFixed())
    c3.setAttribute("cy",(50/3).toFixed())
    c3.setAttribute("r",(5/3).toFixed())
    c3.setAttribute("stroke",colour2)
    c3.setAttribute("stroke-width","1")
    c3.setAttribute("fill",colour2)
    c3.setAttribute("transform","scale(3,3)")
    
    
    monigote.appendChild(c1)
    monigote.appendChild(c2)
    monigote.appendChild(c3) 
    console.log(monigote)
    return monigote;
}