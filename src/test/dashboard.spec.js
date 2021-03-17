

import Dashboard from '../Components/dashboard/Dashboard';
// please add your test cases hereimport React from 'react'
// please add your test cases here
import React from 'react'
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
        render(<Dashboard></Dashboard>,container)
    })
    expect(container.textContent[0]).toBe("L");
}
)

export default Dashboard;