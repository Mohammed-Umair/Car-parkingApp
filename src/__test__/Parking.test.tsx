import { cleanup, fireEvent, render,screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Parking from "../components/Parking";


beforeEach(()=>{
    document.body.innerHTML=""
})

afterEach(()=>{
    cleanup()
})

describe("Snapshot test",()=>{
    test("snapshot testing to parking component",()=>{
        render(
            <BrowserRouter>
            <Parking/>
            </BrowserRouter>
        )
        expect(screen).toMatchSnapshot()
    })
})

describe("TextField Test",()=>{
    test("testfield test of parking component",()=>{
        render(
            <BrowserRouter>
            <Parking/>
            </BrowserRouter>
        )
        const enterSlotNumber:any=screen.getByTestId("enterSlotNumber").querySelector("input")
        fireEvent.change(enterSlotNumber,{target:{value:"4"}})
        expect(enterSlotNumber.value).toBe("4")
    })
})

// describe("button test of parking component",()=>{
//     test("generate button test",()=>{
//         render(
//             <BrowserRouter>
//             <Parking/>
//             </BrowserRouter>
//         )
//         const GenerateButton=screen.getAllByTestId("GenerateBtn")
//         expect(GenerateButton).to
//     })
// })