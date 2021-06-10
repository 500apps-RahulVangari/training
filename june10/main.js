
new Vue({
el:"#app",
data:
{
firstname:"John",
lastname:"Kennedy",
gender:"male",
email:"John@gmail.com",
pict:"https://randomuser.me/api/portraits/men/10.jpg"
},
methods:
{
async getuser(){
    const res= await fetch('https://randomuser.me/api');
    const{results} = await res.json();
this.firstname=results[0].name.first;
this.lastname=results[0].name.last;
this.gender=results[0].gender;
this.email=results[0].email;
this.picture=results[0].picture.large;
},
},
});