<template>
<div id="main-body" >
    <h1>Visited Cities</h1>
    <div>
        <div class="p-mb-4">
            <Button @click="showAdd= true" >Add City</Button>
            
        </div>
        
        <div class="p-grid" v-for="(cty,index) in cities.slice().reverse()" :key="index">
            <div  class="p-col-4"></div>
            <Card id="card-body" class="p-col-4 p-shadow-24 p-mb-5">
                <template #content >
                    <h3 class="p-text-bold">You have visited city: {{ cty }}</h3>
                </template>
                <template #footer>
                    <Button label="Delete" @click="deleteEvent(cty)" icon="pi pi-trash" class="p-button-danger" />
                </template>
            </Card>
            <div class="p-col-4"></div>
        </div>
            
        
        <Dialog
                :visible="showAdd"
                :closable="false"
                :breakpoints="{ '960px': '75vw' }"
                :style="{ width: '50vw' }"
                :contentStyle="{ backgroundColor: '#f8f9fa' }"
                >
                <div style="">
                    <center>
                    <div>
                        <p style="color:red;font-size:1.2rem;font-weight:bold">
                           Please add you visited city
                        </p>
                        <input type="text" v-model="city"/>
                        <!-- <Button label="Close" class="p-button-danger" icon="pi pi-times" @click="showVolunteerPopup = false"> </Button> -->
                    </div>
                    <!-- <p v-if="below18" style="color:red;font-size:1.2rem;font-weight:bold">
                        {{ below18Msg }}
                    </p> -->

                    <Button
                        label="Add"
                        @click="addCity"
                        autofocus
                        class="p-mr-5"
                    />
                    </center>
                </div>
                <template #footer> </template>
            </Dialog>
    </div>
</div>
</template>

<script>


export default {
    name:'Main',
    data(){
        return{
            city:null,
            cities:[],
            showAdd:false,

        }
    },
    methods:{
        addCity()
        {
            this.showAdd = !this.showAdd;
            this.cities.push(this.city);
            console.log(this.cities);
        },
        deleteEvent: function(cty) {
            console.log(this.cities.indexOf(cty));
            this.cities.splice(this.cities.indexOf(cty), 1);
        }
    }
}
</script>

<style scoped>
    #card-body{
        color:white;
        background-color:darkslategrey;
    }
    #main-body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
