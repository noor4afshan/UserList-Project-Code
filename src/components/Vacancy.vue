<template>
    <div class="container p-3 shadow-lg mb-5 bg-tertiary rounded">
        <h5>{{ vacancy.tittle }}</h5>
        <p class="fw-medium">{{ vacancy.company }}</p>
        <p class="fw-medium">{{ vacancy.city }}</p>
        <p> <span class="fw-medium">Description:</span> {{ vacancy.description }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button @click="handleApply(vacancy)" class="btn bg-primary text-white" type="submit">Apply</button>
            <button v-if="isAdmin" @click="handleDelete(vacancy)" class=" btn bg-danger text-white"
                type="submit">Delete</button>
        </div>
    </div>
</template>

<script>
// import NewVacancy from './NewVacancy.vue';

export default {
    name: 'vacancy',
    props: {
        vacancy: {
            type: Object,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        handleDelete(vacancy) {
            this.$emit('delete', vacancy.id);
        },
        handleApply(vacancy) {
            window.alert(`Applied successfully for ${vacancy.tittle}`);
        }
    }
}
</script>

<style  scoped></style>