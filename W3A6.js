let read=require('readline-sync')
let day= read.questionInt('Enter the Choice:\n1.SUNDAY\n2.MONDAY\n3.TUESDAY\n4.WEDNESDAY\n5.THURSDAY\n6.FRIDAY\n7.SATURDAY');
switch(day){
    case 1:
        console.log('Sunday')
        break;
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('Friday')
        break;    
    case 7:
        console.log('Saturday')
        break;
        default:
            console.log('Invalid Entry')
}