const mongoose =   require("mongoose");

const DBconnection = async()=>{ 
    try {
        mongoose.connect(process.env.DB).then(()=>{
            console.log('Mongo ulandi')
        }).catch(err => {
            console.log(err)
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = DBconnection;