<template>
    <div>
        <div class="container p-3 shadow-lg mb-5 bg-tertiary rounded">
            <h5>Post a Vacancy</h5>
            <form @submit.prevent="handleSubmit">

                <input v-model="form.tittle" type="text" class="form-control mt-3" placeholder="Job Tittle"
                    aria-label="Username" aria-describedby="basic-addon1">
                <input v-model="form.company" type="text" class="form-control" placeholder="Company Name"
                    aria-label="Username" aria-describedby="basic-addon1">
                <input v-model="form.city" type="text" class="form-control" placeholder="City" aria-label="Username"
                    aria-describedby="basic-addon1">
                <textarea v-model="form.description" class="form-control mb-3" placeholder="Discription"
                    aria-label="With textarea"></textarea>
                <button class="btn bg-primary text-white" type="submit">Post</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                tittle: '',
                company: '',
                city: '',
                description: '',



            }
        }
    },
    methods:{
        handleSubmit(){
            this.$emit('save',{...this.form, id: new Date().getTime().toString()})
            for(let key in this.form){
                this.form[key] = '';
            }

        }
    }
}
</script>

<style scoped>
input {
    margin-bottom: 20px;
}</style>