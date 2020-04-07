<template>
  <v-container>
    <!-- <v-row>
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
    </v-row>-->

    <v-item-group>
      <v-row>
        <v-col v-for="product in products" :key="product.id" cols="4">
          <v-card class="mx-auto" max-width="400">
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
                    <v-img :src=product.image></v-img>
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
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn absolute dark fab center right color="orange" v-on="on" href="/create">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Create a new product</span>
      </v-tooltip>
    </v-card-text>
  </v-container>
</template>

<script>
const axios = require("axios");

export default {
  data: () => {
    return {
      products: [],
      searchType: [{ text: "All" }]
    };
  },
  mounted() {
    axios.get("http://35.197.110.104/products").then(response => {
      console.log(response);
      this.products = response.data;
    });
  }
};
</script>
