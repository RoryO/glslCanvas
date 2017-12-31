import GlslCanvas from '../src/GlslCanvas';
import { JSDOM } from 'jsdom';

describe('GlslCanvas', () => {
  let subject;
  let dom;
  let document;
  let canvasElement;

  beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><head></head><body></body></html>`);
    document = dom.window.document;
    canvasElement = document.createElement('canvas');
    document.body.appendChild(canvasElement);

    subject = new GlslCanvas(canvasElement);
  });

  it('works', () => {
    expect(subject.canvas).toMatchObject(canvasElement);
  });
});
