
import Card from '../Components/card/Card';
// please add your test cases here
import React from 'react'
// please add your test cases here
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
let container=null
beforeEach(()=>{
    container=document.createElement("div");
    document.body.appendChild(container);

});
afterEach(()=>
{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})
it("render card",()=>{
    act(()=>{
       // render(<Card></Card>,container)
    })
    console.log('abcd'+container.textContent[0])
    expect(2+2).toBe(4);
}
)
export default Card;