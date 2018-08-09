import Queue from 'p-queue';

export default class QueueManager {
  constructor(){
    this.queues = {};
  }

  add(key, options){
    if(this.queues[key]) {
      throw new Error(`Queue with key ${key} already exist`)
    }

    this.queues[key] = new Queue(options);
  }

  get(key) {
    return this.queues[key];
  }
}