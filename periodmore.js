// Military Add 2 hrs  5-17
    /*from 1-2*/d01= new Date("May 20, 2020 12:30:00"); d11 = d01.getHours();d11m= d01.getMinutes();//d1=d01.getTime();d1=new Date(2020,05,18); 
    /*from 1-2*/var d02=new Date(d01);d02.setMinutes(d02.getMinutes() + 60); var d22=d02.getHours(); var d22m=d02.getMinutes();
    /*break 3*/var d03=new Date(d02); d03.setMinutes(d03.getMinutes()+15); var d33=d03.getHours(); var d33m=d03.getMinutes();
    
    /*from 3-4*/var d04=new Date(d03); d04.setMinutes(d04.getMinutes()+60); var d44=d04.getHours(); var d44m=d04.getMinutes();
    /*break 5*/var d05=new Date(d04);d05.setMinutes(d05.getMinutes() + 15); var d55=d05.getHours(); var d55m=d05.getMinutes();
    
    /*from 5-6*/var d06=new Date(d05); d06.setMinutes(d06.getMinutes()+60); var d66=d06.getHours(); var d66m=d06.getMinutes();
    /*break 7*/var d07=new Date(d06);d07.setMinutes(d07.getMinutes() + 15); var d77=d07.getHours(); var d77m=d07.getMinutes();
    
 console.log( "period*("+(d11)+":"+d11m+") "+"to ("+(d22)+":"+d22m+") "+"sum ("+"1.00"+")");
console.log( "break--"+"("+(d22)+":"+(d22m)+")"+" to "+"("+(d33)+":"+(d33m)+")"+" sum ("+"0.25"+")\n");
console.log( "period*("+(d33)+":"+d33m+") "+"to ("+(d44)+":"+d44m+") "+"sum ("+"1.00"+")");
console.log( "break--"+"("+(d44)+":"+(d44m)+")"+" to "+"("+(d55)+":"+(d55m)+")"+" sum ("+"0.25"+")\n"); 

console.log( "period*("+(d55)+":"+d55m+") "+"to ("+(d66)+":"+d66m+") "+"sum ("+"1.00"+")");
console.log( "break--"+"("+(d66)+":"+(d66m)+")"+" to "+"("+(d77)+":"+(d77m)+")"+" sum ("+"0.25"+")\n"); 

// afternoon

/*console.log( "period*("+(d11-12)+":"+d11m+") "+"to ("+(d22-12)+":"+d22m+") "+"sum ("+"1.00"+")");
console.log( "break--"+"("+(d22-12)+":"+(d22m)+")"+" to "+"("+(d33-12)+":"+(d33m)+")"+" sum ("+"0.25"+")\n");

console.log( "period*("+(d33-12)+":"+d33m+") "+"to ("+(d44-12)+":"+d44m+") "+"sum ("+"1.00"+")");
console.log( "break--"+"("+(d44-12)+":"+(d44m)+")"+" to "+"("+(d55-12)+":"+(d55m)+")"+" sum ("+"0.25"+")\n");

console.log( "period*("+(d55-12)+":"+d55m+") "+"to ("+(d66-12)+":"+d66m+") "+"sum ("+"1.00"+")");
console.log( "break--"+"("+(d66-12)+":"+(d66m)+")"+" to "+"("+(d77-12)+":"+(d77m)+")"+" sum ("+"0.25"+")\n");*/

/*  01 p.m. 1300  
    02 p.m. 1400
    03 p.m. 1500
    04 p.m. 1600
    05 p.m. 1700
    06 p.m. 1800
    07 p.m. 1900
    08 p.m. 2000
    09 p.m. 2100
    10 p.m. 2200
    11 p.m. 2300
    12 p.m. 2400    */
