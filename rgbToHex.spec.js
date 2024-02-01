import{rgbToHexColor} from './rgbToHex.js'
import{assert, expect} from 'chai'
describe('rgbToHexColor function tests', () => {
    it('should return correct hexadecimal color for valid RGB values', () => {
        //Arrange
        const redValue = 123;
        const greenValue = 123;
        const blueValue = 123;
        //Act
        const result = rgbToHexColor(redValue,greenValue,blueValue);
        //Assert
        expect(result).to.equals('#7B7B7B')
    })
    it('should return correct hexadecimal color for valid RGB values', () => {
        //Arrange
        const redValue = 255;
        const greenValue = 255;
        const blueValue = 255;
        //Act
        const result = rgbToHexColor(redValue,greenValue,blueValue);
        //Assert
        expect(result).to.equals('#FFFFFF')
    })
    it('should return correct hexadecimal color for valid RGB values', () => {
        //Arrange
        const redValue = 0;
        const greenValue = 0;
        const blueValue = 0;
        //Act
        const result = rgbToHexColor(redValue,greenValue,blueValue);
        //Assert
        expect(result).to.equals('#000000')
    })

    it('should return undefined for Red Value is incorect', () => {
        //Arrange
        
        //Act
        const nonNumericRedValueresult = rgbToHexColor('123',0,0);
        const negativeRedValueresult = rgbToHexColor(-123,0,0);
        const tooBigRedValueresult = rgbToHexColor(999,0,0);
        //Assert
        expect(nonNumericRedValueresult).to.be.undefined
        expect(negativeRedValueresult).to.be.undefined
        expect(tooBigRedValueresult).to.be.undefined
    })
    it('Should return undefined if Green Value is incorect',()=>{
        //Arrange
        
        //Act
        const nonNumericGreenValueresult = rgbToHexColor(0,'123',0);
        const negativeGreenValueresult = rgbToHexColor(0,-123,0);
        const tooBigGreenValueresult = rgbToHexColor(0,999,0);
        //Assert
        expect(nonNumericGreenValueresult).to.be.undefined
        expect(negativeGreenValueresult).to.be.undefined
        expect(tooBigGreenValueresult).to.be.undefined
    })
    
    it('Should return undefined if Blue Value is incorect',()=>{
        //Arrange
        
        //Act
        const nonNumericBlueValueresult = rgbToHexColor(0,0,'123');
        const negativeBlueValueresult = rgbToHexColor(0,0,-123);
        const tooBigBlueValueresult = rgbToHexColor(0,0,999);
        //Assert
        expect(nonNumericBlueValueresult).to.be.undefined
        expect(negativeBlueValueresult).to.be.undefined
        expect(tooBigBlueValueresult).to.be.undefined
    })
    
})