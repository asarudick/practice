import Emitter from '../src/emitter';
import { it, expect, describe, jest } from '@jest/globals';

describe('Emitter', () => {
  it('should call callback with params when emitting subscribed event', () => {
    const emitter = new Emitter();
    const mock = jest.fn();
    emitter.subscribe('test', mock);
    emitter.emit('test', 0);
    expect(mock).toHaveBeenCalledWith(0);
  });
  it('should not duplicate subscriptions with same event and callback', () => {
    const emitter = new Emitter();
    const mock = jest.fn();
    const param = 0;
    emitter.subscribe('test', mock);
    emitter.subscribe('test', mock);
    emitter.emit('test', param);
    expect(mock).toHaveBeenCalledWith(param);
  });
  it('should unsubscribe from the event when release() is called', () => {
    const emitter = new Emitter();
    const mock = jest.fn();
    const sub = emitter.subscribe('test', mock);
    sub.release();
    emitter.emit('test', 0);
    expect(mock).not.toHaveBeenCalled();
  });
});
