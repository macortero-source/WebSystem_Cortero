const express= require('express');
const app= express();

app.set('view engine', 'ejs');
app.get('/', (req,res) => {
res.render('index', {
	username:'Vince',
	users: ['John', 'Jane', 'Mark'],
	isLoggedIn: true
});
});
app.listen(3000, ()=> console.log('Server running'));