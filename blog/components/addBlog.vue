<template>
    <div id="add-blog">
        <h2>Add a New Blog </h2>
        <form>
            <label>Blog title:</label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <!-- <p>What do you need while writing BLOG</p> -->
            <div id="checkboxes">
                <label>Rahul</label>
                <input type="checkbox" value="Rahul" v-model="blog.categories"/>
                <label>Raju</label>
                <input type="checkbox" value="Raju" v-model="blog.categories"/>
                <label>Ram</label>
                <input type="checkbox" value="Ram" v-model="blog.categories"/>
                <label>Ramesh</label>
                <input type="checkbox" value="Ramesh" v-model="blog.categories"/>
            </div>
            <label>Author: </label>
            <select v-model="blog.author">
                <option v-for="author in authors" :key="author">{{author}}</option>
            </select>

        </form>
            <div id= "preview">
               <h3> Blog Preview</h3>
               <p>Blog Title : {{blog.title}}</p>
               <p>Blog Content : </p>
               <p>{{blog.content}}</p>
               <p>Blog requirements:</p>
               <ul>
                   <li v-for="cat in blog.categories" :key="cat">{{cat}}</li>
               </ul>
               <p>Author:{{blog.author}}</p>
               
           </div>        
    </div>
</template>

<script>
export default {
    name: 'addBlog',
    data(){
        return{
            blog:{
                title:"",
                content:"",
                categories:[],
                authors:[]
            },
            authors:['The lengedary' , 'The Barbarian' , 'The Fictioner' , 'The Fantiser']

        }
    }
    
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>