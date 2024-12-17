console.log(`File_name : ${__filename}`);
console.log(`Directory_name : ${__dirname}`);

let no = 0;
const demo = () => {
    no++;
    if(no<=10){
        console.log(`Counter: ${no}`);
    }
};

setInterval(demo, 1000);
