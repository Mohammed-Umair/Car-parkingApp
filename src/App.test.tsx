import { cleanup, render,screen } from "@testing-library/react";
import React from "react";
import App from "./App";


beforeEach(()=>{
    document.body.innerHTML=""
})

afterEach(()=>{
    cleanup()
})

describe("snapshot testing",()=>{
    test("snapshot testing for app conmonent",()=>{
        render(<App/>)
        expect(screen).toMatchSnapshot()
    })
})