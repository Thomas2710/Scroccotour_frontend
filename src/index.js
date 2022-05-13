const app = express();
const cors = require('cors');
const loginPage = require('./public/login.hmtl')
app.use(cors);
app.listen(process.env.PORT || 8081, '0.0.0.0', () => {
    console.log(`Scroccotour UI server started`)
    app.use("/login", res.send(loginPage));
  });
