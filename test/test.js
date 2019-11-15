describe('evenOccurence', () => {
  it('expect evenOccurene to be defined', () => {
    expect(evenOccurrence).to.exist;
    expect(evenOccurrence).to.be.a('function');
  });

  it('expect evenOccurence to return 4', () => {
    const result = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
    expect(result).to.equal(4);
  });

  it('should compare objects or arrays', () => {
    const arr = [1,2,3,4,5];
    const arrCopy = arr.slice();

    expect(arr).to.eql(arrCopy);

    const obj = {name: 'billy', age: 2};
    const objCopy = Object.assign({}, obj);

    expect(obj).to.eql(objCopy);
  });
});