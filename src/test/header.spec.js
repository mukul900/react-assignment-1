import Header from '../Components/header/Header';
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
it("render Header",()=>{
    act(()=>{
        render(<Header></Header>,container)
    })
    expect(container.textContent[0]).toBe("K");
}
)
export default Header;