<template>
  <v-container>
       <v-btn text color="orange" href="/">
            <v-icon left>mdi-home</v-icon> Back to home
       </v-btn>
        <form>
            <v-item-group>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="name"
                        label="Product name"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                    <v-text-field
                        v-model="price"
                        prefix="$"
                        label="Product price in cents"
                        :rules="[rules.amountInCents]"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="5"
                    >
                    <v-text-field
                        v-model="imageUrl"
                        label="Image URL"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>

                    <v-col
                    cols="12"
                    md="3"
                    >
                    <v-text-field
                        v-model="sellBy"
                        label="Sell by"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                    <v-text-field
                        v-model="brand"
                        label="Brand name"
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="3"
                    >
                    <v-text-field
                        v-model="category"
                        label="Category name"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    >
                    <v-textarea
                        v-model="description"
                        label="Product description"
                        hint="Enter product description here"

                        required
                    ></v-textarea>
                    </v-col>
                </v-row>
            </v-item-group>
            <v-btn class="mr-4" @click="submit" text block color="green">Create new Product</v-btn>
        </form>
  </v-container>
</template>

<script>
export default {


  components: {
  },

  data: () => ({
      rules: {
          amountInCents: value => {
              const pattern = /^[1-9]\d+$|^0$/
              return pattern.test(value) && parseInt(value)<=2**32 || 'Integer number input only!'
          }
      },
      product: {"id":"8d9319b7-2ff6-469c-a327-f13fe0da4d98","name":"Nike Air Max 2090","price":15000,"image":"https://sample.jpg","description":"Inspired by the iconic Air Max 90, the 2090 features Nike Air cushioning underfoot that adds unparalleled comfort, while transparent mesh on the upper blend with timeless OG features for an edgy, modernized look.","sellBy":"Each","brand":"Nike","category":"Shoes","createdAt":"2020-04-03T16:44:54.616+0000","lastUpdated":"2020-04-03T16:44:54.616+0000"},
  }),
};
</script>
