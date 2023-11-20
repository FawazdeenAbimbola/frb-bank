let balance =  846780;
const getHome = (req, res) => {
    res.render('login');
};
const getLogin = (req, res) => {
    res.render('login');
};
const getRegister = (req, res) => {
    res.render('register');
};
const getDashboard = (req, res) => {
    res.render('dashboard', {balance: balance});
}
const getKorean = (req, res) => {
    res.render('korean', {balance: balance});
}
const logout = (req, res) => {
    res.render('login');
}
const login = (req, res) => {
    const systemAccountNumber = '909188126';
    const systemPassword = "Leeseo1234!";
    const accountNumber = req.body.accountNumber;
    const password = req.body.password;
    if(systemAccountNumber === accountNumber){
        if(systemPassword === password) {
            res.redirect('dashboard');
        }
        else{
            res.send('password Incorrect!')
        }
    }
    else{
        res.send("Account Number does not exist");
        res.redirect('/login');
    }
} 
const send = (req, res) => {

    const amount = req.body.amount;
    if(amount){
        if(amount < balance){
            balance = balance - amount;
            res.render('success', {balance: balance, amountsent: amount});
        }
        else if(amount > balance){
            res.redirect('send/#sendsession');
        }
        else{
             balance = balance - amount;
            res.render('success', {balance: balance});
        }
    }
}

module.exports = {
    getHome,
    getLogin,
    getRegister,
    login,
    logout,
    getDashboard,
    getKorean,
    send
};
