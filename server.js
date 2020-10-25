const express = require("express")
const app = express()
const port = 5000
const dciCourseModules = require("./data")

app.listen(port), () => {
    console.log(`Server started on port ${port}`)
}

app.get("/", (req,res) => {
    res.send("<h1>Ex 01</h1>")
})

app.get("/json", (req,res) => {
    res.send(dciCourseModules)
})

app.get("/text", (req,res) => {
    const toText = dciCourseModules.join(", ")
    res.send(`<h2> ${toText} </h2>`)
})

app.get("/html", (req,res) => {
    const toList = dciCourseModules.map(item => {
        return item === "Data Server" ? `<b><li>${item}</li></b>` : `<li>${item}</li>`
    })
    res.send(toList.join(""))
})