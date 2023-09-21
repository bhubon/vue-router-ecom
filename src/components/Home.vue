<script setup>
import { ref, onBeforeMount } from 'vue';
const products = ref([]);
const loader = ref(true)

onBeforeMount(() => {
    fetch('https://dummyjson.com/products?limit=24')
        .then(res => res.json())
        .then(data => {
            products.value = data.products
        });
});

</script>
<template>
    <div class="row">
        <div class="col-md-4 mt-2" v-for="product in  products " :key="product.id">
            <div class="card">
                <div class="card-body">
                    <div class="card-img-actions h-36">
                        <img :src="product.thumbnail"
                            class="rounded max-h-36 h-full object-center object-cover w-full img-fluid">
                    </div>
                </div>

                <div class="card-body bg-light text-center">
                    <div class="mb-2">
                        <h6 class="font-weight-semibold mb-2">
                            <router-link :to="{ name: 'product', params: { id: product.id } }" class="text-default mb-2"
                                data-abc="true">{{ product.title }}</router-link>
                        </h6>

                        <a href="javascript::void(0)" class="text-muted" data-abc="true">{{ product.category }}</a>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">${{ product.price }}</h3>

                    <div class="text-muted mb-3">{{ product.stock }} item on stock</div>

                    <router-link :to="{ name: 'product', params: { id: product.id } }" class="btn bg-cart"><i
                            class="fa fa-cart-plus mr-2"></i>View Details</router-link>


                </div>
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