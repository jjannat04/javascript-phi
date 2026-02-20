var friends=["rahim","karim","abdul","sadsd","heroAlom"];
var longest=friends[0];
for(var i=1;i<friends.length;i++){
    if(friends[i].length>longest.length) longest=friends[i];
}
console.log(longest);
