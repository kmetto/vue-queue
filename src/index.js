import QueueManager from './queue-manager';

export default class VueQueue {
  static install(Vue, options) {
    Vue.prototype.$queue = new QueueManager;
  }
}