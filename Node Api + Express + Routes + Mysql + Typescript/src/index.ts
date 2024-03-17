import { App } from "./app";
import  express  from "express";

async function main(){
    const app = new App(1711)
    app.app.use(express.json());
    await app.listen()
}

main()