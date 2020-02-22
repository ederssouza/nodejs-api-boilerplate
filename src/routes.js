'use strict'

import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'API is running...' })
})

export default routes