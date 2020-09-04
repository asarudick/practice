import Emitter from '../src/emitter';
import { it, expect, describe, jest } from '@jest/globals';

describe('Emitter', () => {
  it('should call fn with 0 when emitting subscribed event', () => {
    const emitter = new Emitter();
    const mock = jest.fn();
    emitter.subscribe('test', mock);
    emitter.emit('test', 0);
    expect(mock).toHaveBeenCalledWith(0);
  });
  it('should unsubscribe from the event', () => {
    const emitter = new Emitter();
    const mock = jest.fn();
    const sub = emitter.subscribe('test', mock);
    sub.release();
    emitter.emit('test', 0);
    expect(mock).not.toHaveBeenCalled();
  });
});
