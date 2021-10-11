import { Console } from '@principia/base/IO/Console'
import * as Ex from '@principia/express'
import { runMain } from '@principia/node/Runtime'
import next from 'next'
import * as url from 'url'

const dev = process.env.NODE_ENV !== 'production'

const nextApp     = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const nextMiddleware = Ex.all('*', (req, res) =>
  IO.succeedLazy(() => {
    const parsedUrl = url.parse(req.url, true)
    nextHandler(req, res, parsedUrl)
  }),
)

const Express = Ex.LiveExpressApp['<+<'](
  Ex.LiveExpressAppConfig('localhost', 8080, Ex.defaultExitHandler),
)

const program = IO.gen(function* (_) {
  yield* _(IO.fromPromiseHalt(() => nextApp.prepare()))
  yield* _(nextMiddleware)
  const { server } = yield* _(Ex.ExpressApp)
  yield* _(Console.put('🚀 Express started on', server.address()))
  yield* _(IO.never)
})

runMain(program.give(Express))
