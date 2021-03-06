import Action from '../client/src/js/action.js';
import chai from 'chai';
import sinon from 'sinon';

const expect = chai.expect;

describe('Action', function() {
  describe('sort check sort function ', function () {
    let sort;
    const spy = sinon.spy(input => {
      input(modelMock.model);
    }),
    document = {
      getElementById: () => {
        return {
          addEventListener: () => {}
        };
      }
    },
    e = { preventDefault: () => {} },
    modelMock = {
      onChangeOnce: spy,
      model: [
        { publishedDate: 2, title: 'hello word', content: 'this is word content'},
        { publishedDate: 1, title: 'this is some hell title', content: 'is some title'}
      ],
    },
    config = {
      id: 'mockSort',
      model: modelMock,
      document: document
    };

    it('should update model once in constructot', function () {
      const action = new Action(config);
      modelMock.model.push({ foo: 'bar'});
      expect(spy.calledOnce).to.be.true;
    });
  });
});
