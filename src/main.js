import './styles/global.css'
import './styles/register.css'
import './styles/login.css'

import { Router }             from './router/Router.js'
import { RegisterView }       from './views/RegisterView.js'
import { RegisterController } from './controllers/RegisterController.js'
import { LoginView }          from './views/LoginView.js'
import { LoginController }    from './controllers/LoginController.js'

const app = document.getElementById('app')

const router = new Router(app, {
  '/register': () => {
    const view = new RegisterView(app)
    return new RegisterController(view, router)
  },
  '/login': () => {
    const view = new LoginView(app)
    return new LoginController(view, router)
  },
})

router.start()
