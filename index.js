const express = require("express");

const app = express();

app.get("/",(res)=>{
    res.json(
        {
            message:"Hello Worda",
        }
    );
}
);
app.listen(5050, ()=> console.log("Listening on http://localhost:5050"));