const express = require('express');
const router = express.Router();

module.exports = router;

//Getting All
router.get('/',(req,res)=>{
    res.send('Hello World');
})
//Getting One
router.get('/:id',(req,res)=>{
        
})
//Creating One
router.post('/',(req,res)=>{
    
})
//Updating One
router.patch('/',(req,res)=>{
    
})
//Deleting one
router.delete('/:id',(req,res)=>{
    
})

