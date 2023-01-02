function monigote(escalaX,escalaY,colour,colour2){
    var monigote=document.createElement("svg")
    monigote.setAttribute("height",escalaX)
    monigote.setAttribute("width",escalaY)
    
    var c1=document.createElement("circle")
    c1.setAttribute("cx",(50*escalaX/65).toFixed())
    c1.setAttribute("cy",(50*escalaY/65).toFixed())
    c1.setAttribute("r",(40*escalaX/65).toFixed())
    c1.setAttribute("stroke",colour)
    c1.setAttribute("stroke-width","1")
    c1.setAttribute("fill",colour)
    c1.setAttribute("transform","scale(3,3)")
    

    var c2=document.createElement("circle")
    c2.setAttribute("cx",(35*escalaX/65).toFixed())
    c2.setAttribute("cy",(50*escalaY/65).toFixed())
    c2.setAttribute("r",(5*escalaX/65).toFixed())
    c2.setAttribute("stroke",colour2)
    c2.setAttribute("stroke-width","1")
    c2.setAttribute("fill",colour2)
    c2.setAttribute("transform","scale(3,3)")


    var c3=document.createElement("circle")
    c3.setAttribute("cx",(65*escalaX/65).toFixed())
    c3.setAttribute("cy",(50*escalaY/65).toFixed())
    c3.setAttribute("r",(5*escalaX/65).toFixed())
    c3.setAttribute("stroke",colour2)
    c3.setAttribute("stroke-width","1")
    c3.setAttribute("fill",colour2)
    c3.setAttribute("transform","scale(3,3)")
    

    monigote.appendChild(c1)
    monigote.appendChild(c2)
    monigote.appendChild(c3) 
    
    return monigote;
}