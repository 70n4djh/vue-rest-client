<template>
    <v-container>
    <v-row>
        <v-col cols="3" offset-md="9">
            <v-overflow-btn
            :items="searchType"
            text
            label="Search Type"
            target="#dropdown-example"
            >
            Search by
            </v-overflow-btn>
        </v-col>
    </v-row>

    <v-item-group>
    <v-row>
        <v-col
            v-for="product in products"
            :key="product.id"
            cols=4>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">{{product.category}}</div>
                        <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-list-item-title class="title mb-1" v-on="on">{{product.name}}</v-list-item-title>
                        </template>
                        <span>{{product.name}}</span>
                        </v-tooltip>

                        <v-list-item-subtitle>$ {{product.price/100}} {{product.sellBy}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        size="80"
                        color="grey"
                        tile
                    >
                    </v-list-item-avatar>
                </v-list-item>

                <v-card-actions align-end>
                    <v-spacer></v-spacer>
                <v-btn small color="orange" text class="mb-2" :href="'/detail/' + product.id">Detail</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
  </v-item-group>

    <v-card-text style="height: 140px; position: relative">
        <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                absolute
                                dark
                                fab
                                center
                                right
                                color="pink"
                                v-on="on"
                                href="/new"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                        <span>Add new product</span>
                        </v-tooltip>

    </v-card-text>
  </v-container>
</template>

<script>
// const axios = require('axios');

export default {
    data: () => {
        return {
            products: [],
            searchType: [{text: "All"}]
        }
    },
    mounted() {
        // axios.get("http://35.197.110.104/products")
        //     .then(response => {
        //         console.log(response)
        //         this.product = response.data
        //     })
        this.products = [{"id":"8d9319b7-2ff6-469c-a327-f13fe0da4d98","name":"Nike Air Max 2090","price":15000,"image":"https://sample.jpg","description":"Inspired by the iconic Air Max 90, the 2090 features Nike Air cushioning underfoot that adds unparalleled comfort, while transparent mesh on the upper blend with timeless OG features for an edgy, modernized look.","sellBy":"Each","brand":"Nike","category":"Shoes","createdAt":"2020-04-03T16:44:54.616+0000","lastUpdated":"2020-04-03T16:44:54.616+0000"},{"id":"584ec153-c5a8-4e46-b5ce-adef9caf6d82","name":"Addidas NMD_R1 shoes","price":140000,"image":"https://sample.jpg","description":"Iconic NMD plugs in the midsole stay true to the signature look","sellBy":"Each","brand":"Addidas","category":"Shoes","createdAt":"2020-04-03T16:44:54.768+0000","lastUpdated":"2020-04-03T16:44:54.768+0000"},{"id":"f9089805-5335-43a9-9919-0fc022689292","name":"Bannas","price":1000,"image":"https://sample.jpg","description":"A bag of bannas","sellBy":"Each","brand":"Dole","category":"Grocery","createdAt":"2020-04-03T16:44:54.525+0000","lastUpdated":"2020-04-03T16:44:54.525+0000"},{"id":"468cc95c-3325-46a6-8494-b707260c24c8","name":"Nike Air Force womens","price":11000,"image":"https://sample.jpg","description":"Nike Air Force 1 Sage Low features a platform midsole and a pared-down upper for a bold yet feminine look.","sellBy":"Each","brand":"Nike","category":"Shoes","createdAt":"2020-04-03T16:44:54.573+0000","lastUpdated":"2020-04-03T16:44:54.573+0000"},{"id":"e5e88df8-dac5-41d3-88e9-8a9cf66c88b2","name":"Adidas logo print hoodie","price":6900,"image":"https://sample.jpg","description":"Purple cotton logo print hoodie from adidas featuring a relaxed fit, a hood with drawstring tie fastenings, long sleeves, fitted cuffs and a cropped length. POSITIVELY CONSCIOUS: This product is made with a material widely recognised as being better for the planet, so you can be confident you are choosing positively.","sellBy":"Each","brand":"Addidas","category":"Clothes","createdAt":"2020-04-03T16:44:54.718+0000","lastUpdated":"2020-04-03T16:44:54.718+0000"},{"id":"58f2df33-2194-4647-b7d1-7e6038ba627b","name":"Broccoli","price":1000,"image":"https://sample.jpg","description":"Locally produced broccoli","sellBy":"Per pound","brand":"Local Farm","category":"Grocery","createdAt":"2020-04-03T16:44:54.422+0000","lastUpdated":"2020-04-03T16:44:54.422+0000"},{"id":"3866f84b-a657-44b5-9166-98dec882e52d","name":"Addidas STAN SMITH shoes","price":140000,"image":"https://sample.jpg","description":"True to its original design, the Stan Smith's classic silhouette has endured sneaker style for over four decades.","sellBy":"Each","brand":"Addidas","category":"Shoes","createdAt":"2020-04-03T16:44:54.826+0000","lastUpdated":"2020-04-03T16:44:54.826+0000"},{"id":"4fff1474-9f5d-48ad-b978-901d71047788","name":"Nike Sportswear Club Printed Pullover Hoodie","price":68000,"image":"https://sample.jpg","description":"Stay comfortable during any activity with this men's Nike pullover hoodie","sellBy":"Each","brand":"Nike","category":"Clothes","createdAt":"2020-04-03T16:44:54.925+0000","lastUpdated":"2020-04-03T16:44:54.925+0000"},{"id":"a2f21c1e-e270-4fe3-8ba7-dc415a37df2e","name":"Nike Club Fleece Crew","price":30000,"image":"https://sample.jpg","description":"Nike sweatshirt is always a solid choice","sellBy":"Each","brand":"Nike","category":"Clothes","createdAt":"2020-04-03T16:44:56.043+0000","lastUpdated":"2020-04-03T16:44:56.043+0000"},{"id":"04d3bd4b-aca1-46da-8fbc-9337165a79a2","name":"Apples","price":1000,"image":"https://sample.jpg","description":"Doles' produce: A bag of apples","sellBy":"Each","brand":"Dole","category":"Grocery","createdAt":"2020-04-03T16:43:52.402+0000","lastUpdated":"2020-04-03T16:43:52.403+0000"},{"id":"ca79e8f4-54c2-4aab-bf38-1d71aba7f93f","name":"Oranges","price":1200,"image":"https://sample.jpg","description":"A bag of organic oranges","sellBy":"Each","brand":"Local Farm","category":"Grocery","createdAt":"2020-04-03T16:44:54.368+0000","lastUpdated":"2020-04-03T16:44:54.368+0000"},{"id":"1c760ba0-df5b-4019-bc55-af879d3c9e2e","name":"Men's adidas 3-Stripe Track Pant","price":28000,"image":"https://sample.jpg","description":"Get your fitness wardrobe on the right track with these men's adidas pants","sellBy":"Each","brand":"Addidas","category":"Clothes","createdAt":"2020-04-03T16:44:54.674+0000","lastUpdated":"2020-04-03T16:44:54.674+0000"}]
    }
}
</script>
