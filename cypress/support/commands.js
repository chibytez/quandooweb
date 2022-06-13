import Login from "../../Pages/LoginPage"

const login = new Login()
class Helper {

    logger(username, password, container) {
        login.username(username)
        login.password(password)
        login.loginButton()
        login.container(container)
    }

}

export default Helper
