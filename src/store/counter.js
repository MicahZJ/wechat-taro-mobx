import { configure } from 'mobx';

import indexStore from '../pages/index/store'

configure({ enforceActions: "always" })

class AppStore {
  constructor() {
    this.indexStore = new indexStore(this)
  }
}

export default new AppStore()