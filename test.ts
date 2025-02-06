
/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace jimTest {
    //% block="My Test Function $newNum"
    export function testFunction(newNum:number) : number{
        return newNum * 2;
    }

    //% block
    export function playSomething() {

        flexFX.playTune("birthday", "ting", true);
    }
}
