import express from express;
import bodyParser from 'body-parser';


const userScheme = {
    status: integer,
 
    firstName: {
     type: String,
     required: true
 },

 
 lastName: {
    type: String,
    required: true
},


email: {
    type: String,
    required: true
},

password: {
    type: String,
    required: true
},

}
 ​
 module.export = userScheme;
