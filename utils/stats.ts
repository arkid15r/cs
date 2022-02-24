/* eslint-disable require-jsdoc */

import { performance } from 'universal-perf-hooks';

export class Stats {
  counters = {};
  description;
  endTime;
  startTime;

  constructor(description) {
    this.counters['iteration'] = 0;
    this.counters['access'] = 0;
    this.description = description;
    this.startTime = performance.now();
  }

  addAccess(num) {
    this.counters['access'] += num;
  }

  addIterations(num) {
    this.counters['iteration'] += num;
  }

  getTime() {
    return this.endTime - this.startTime;
  }

  incIterations() {
    this.counters['iteration']++;
  }

  incAccess() {
    this.counters['access']++;
  }

  print() {
    if (!this.getTime()) {
      console.log('No stats available.');
      return;
    }

    console.log(this.description);
    console.log(`Access: ${this.counters['access'].toLocaleString('en-US')}`);
    console.log(
      `Iterations: ${this.counters['iteration'].toLocaleString('en-US')}`
    );
    console.log(`Time: ${Math.floor(this.getTime() / 1000)}s.`);
    console.log('\n');
  }

  setStartTime() {
    this.startTime = performance.now();
  }

  setEndTime() {
    this.endTime = performance.now();
  }
}
