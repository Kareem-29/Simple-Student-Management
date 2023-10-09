const { render } = require('ejs')
const Task = require('../models/student')

module.exports={
    index: (req,res)=>{
        Task.find({}).then((tasks,error)=>{
            if(error) console.log(`"error was found", ${error}`)
            else{
                res.render('stdManagement.ejs', {stdRecord: tasks})
            }
        })
    },
    create: (req,res)=>{
        const std=new Task({
            name: req.body.stdName, 
            age: req.body.stdAge
        })
            std.save().then(res.redirect('/'))
    },
    edit: (req,res)=>{
        const id=req.params.id
        Task.find({}).then((record,error)=>{
            res.render('stdManagementEdit.ejs', {stdRecord:record , idRecord:id})
        })

    },
    update: (req,res)=>{
        const id = req.params.id
        Task.findByIdAndUpdate(id,{name:req.body.stdName, age:req.body.stdAge}).then((tasks,error)=>{
            if(error) return res.send(500,err) 
            else{
                res.redirect('/')
            }
        })
    },
    delete: (req,res)=>{
        Task.deleteOne({_id:req.params.id}).then((tasks,error)=>{
            if(error) console.log(`"error was found", ${error}`)
            else{
                res.redirect('/');
            }})
    }
}