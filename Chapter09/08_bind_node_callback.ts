import * as fs from "fs"
import { bindNodeCallback } from "rxjs"

namespace observable_demo_6 {
  const observableFactory = bindNodeCallback(fs.readFile)
  const observable = observableFactory("./roadNames.txt")

  const subscription = observable.subscribe(value =>
    console.log(value.toString()),
  )

  subscription.unsubscribe()
}
