<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
const product = reactive({});
const loader = ref(true)

onBeforeMount(() => {
    fetch('https://dummyjson.com/products/' + id)
        .then(res => res.json())
        .then(data => {
            product.id = data.id
            product.title = data.title
            product.category = data.category
            product.brand = data.brand
            product.stock = data.stock
            product.description = data.description
            product.thumbnail = data.thumbnail
            product.price = data.price
            loader.value = false
        });
});
</script>
<template>
    <div class="single-product" v-show="!loader">
        <div class="row bg-white p-4">
            <div class="col-md-6">
                <img :src="product.thumbnail" class="img-fluid">
            </div>
            <div class="col-md-6 product-details">
                <h2>{{ product.title }}</h2>
                <p><b>Availabel Stock: </b>{{ product.stock }}</p>
                <p><b>Price:</b> ${{ product.price }}</p>
                <hr>
                <p><b>Brand: </b>{{ product.brand }}</p>
                <p><b>Category: </b>{{ product.category }}</p>
                <hr>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
    <div class="loader" v-show="loader">
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style scoped></style>