import{sum} from './sum.js'
import{expect} from 'chai'
describe('sum function',()=>{
    it('should return 10 if an [5,5] array is given',()=>{
        //Arrange
    const inputArray=[5,5];
    //Act
    const result = sum(inputArray);
    //Assert
    expect(result).to.equals(10);
    })
    
})