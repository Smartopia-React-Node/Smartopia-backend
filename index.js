const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const toolRoute = require("./routes/tools");
const submissionRoute = require("./routes/submission");
const categoryRoute = require("./routes/category");
const check = require("./routes/check");
const tutorialRoute = require("./routes/tutorial")
const glossaryRoute = require("./routes/Glossary")
const userAuthRoute = require("./routes/auth")
const userRoute = require("./routes/user");
const bannerRoute = require("./routes/banner")
const adminRoute = require("./routes/admin")
const app = express();

dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongo connected"))
.catch((err)=>{ console.log("ERROR", err);});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",check)
app.use("/api/tool", toolRoute);
app.use("/api/submission", submissionRoute);
app.use("/api/category", categoryRoute);
app.use("/api/tutorial", tutorialRoute);
app.use("/api/glossary", glossaryRoute);
app.use("/api/auth", userAuthRoute);
app.use("/api/user", userRoute);
app.use("/api/banner", bannerRoute);
app.use("/api/admin", adminRoute);

app.post("/test",(req, res)=>{
    try{
        const body = req.body
        console.log(body);
        res.status(200).json(body);
    }catch(err){
        console.log(err);
    }
});

app.listen( process.env.PORT||8800, ()=>{
    console.log("Backend server is running");
})