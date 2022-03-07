const app = require('./app');
const port = process.env.PORT || 3000;

const authRoute = require('./routes/auth.route'); 
const profileRoute = require('./routes/profile.route'); 
const userRoute = require('./routes/user.route');

app.use('/auth', authRoute);
app.use('/profile',profileRoute);
app.use('/user',userRoute);

app.listen(port, () => console.log(`Listening on localhost:${port}/`));