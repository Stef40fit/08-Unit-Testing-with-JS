import{isSymmetric} from './chekSimetry.js'
import{expect} from 'chai'
describe('isSymmetric function',()=>{
    it('Return true if the input array is empty',()=>{
        //Arrange
    const inputArray=[];
    //Act
    const result = isSymmetric(inputArray);
    //Assert
    expect(result).to.be.true
    })
    it('Return true if the input array is symmetric',()=>{
        //Arrange
    const inputArray=[5,5];
    //Act
    const result = isSymmetric(inputArray);
    //Assert
    expect(result).to.be.true
    })
    it('Return false for any input that isnt of the correct type',()=>{
        //Arrange
    const inputArray=[5,1];
    //Act
    const result = isSymmetric(inputArray);
    //Assert
    expect(result).to.be.false
    })
    it('Return false for any input that isnt of the correct type',()=>{
        //Arrange
    const input1Array=['1','2','3',2,1];
    //Act
    const result = isSymmetric(input1Array);
    //Assert
    expect(result).to.be.false
    })
    it('Otherwise, return false',()=>{
        //Arrange
    
    //Act
    const stringdResult = isSymmetric('qqq');
    
    const undefinedResult = isSymmetric(undefined);
    const objectResult = isSymmetric({});
    const nullResult = isSymmetric(null);
  
    //Assert
    expect(stringdResult).to.be.false
    expect(undefinedResult).to.be.false
    expect(objectResult).to.be.false
    expect(nullResult).to.be.false
    })
    it('Otherwise, return false',()=>{
        //Arrange
    
    //Act
    const nanResult = isSymmetric(NaN);
   
    //Assert
    expect(nanResult).to.be.false
    
    })
    
})