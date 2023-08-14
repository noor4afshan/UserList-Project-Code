<template>
    <div>
        <section class="hero">
            <div class="hero-body  ms-5 p-4">
                <h3 class="tittle">
                    Find your skill related job here
                </h3>
                <p class="sub-tittle">
                    Apply for any vacancies with proper guidance
                </p>
            </div>
        </section>

        <NewVacancy v-if="isAdmin" @save="handleSubmt"/>

        <Vacancy 
        v-for="vacancy in vacancies" 
        :key="vacancy.id" 
        :isAdmin ="isAdmin"
        :vacancy="vacancy" 
        @delete="handleDelete"/>
    </div>
    
</template>

<script>
import NewVacancy from '../components/NewVacancy.vue';
import Vacancy from '../components/Vacancy.vue';
import { vacancies } from '../../../data';
import { pushScopeId } from 'vue';

export default {
    components: {
        NewVacancy,
        Vacancy
    },
    data() {
        return {
            vacancies,
            isAdmin: true
        }
    },
    methods: {
        handleSubmt(fromdata){
            console.log ('FormData',fromdata);
            this.vacancies.unshift (fromdata);

            
        },
        handleDelete(vacancyid){
            this.vacancies = this.vacancies.filter(vacancy=>vacancy.id !==vacancyid)
        }
    }
}
</script>

<style scoped>
</style>