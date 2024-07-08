var employee={
    accessMails:true,
    accessDesktop(){
        return "Employee can access other users desktop"
    }
}


var admin={
    accessAllEmails:true
}

admin.__proto__=employee

console.log(admin.accessMails);
console.log(admin.accessDesktop());


