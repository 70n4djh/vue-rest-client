<template>
  <v-container class="mb-8">
    <v-row justify="center" v-if="valid">
      <v-col cols="12" sm="10" md="8" lg="6">
        <p class="caption">
          Click
          <v-icon small>mdi-pencil</v-icon>to start edit, click
          <v-icon small>mdi-check</v-icon>to apply update
        </p>
        <v-card ref="form">
          <v-card-text>
            <p class="overline mb-0">Product ID: {{product.id}}</p>
            <p class="overline mb-6">Created At: {{new Date(product.createdAt).toLocaleString()}}</p>
            <v-text-field
              ref="name"
              v-model="product.name"
              :rules="[() => !!product.name || 'This field is required']"
              label="Product Name"
              placeholder="Product1"
              required
              :readonly="isReadonly.name"
              :append-outer-icon="isReadonly.name?'mdi-pencil': 'mdi-check'"
              @click:append-outer="toggleReadonly('name')"
            ></v-text-field>
            <v-text-field
              ref="price"
              v-model="product.price"
              :rules="[() => !!product.price || 'This field is required', rules.amountInCents,]"
              prefix="$"
              label="Product price in cents"
              :readonly="isReadonly.price"
              :append-outer-icon="isReadonly.price?'mdi-pencil': 'mdi-check'"
              @click:append-outer="toggleReadonly('price')"
              required
            ></v-text-field>
            <v-text-field
              ref="image"
              v-model="product.image"
              label="Product image URL"
              :readonly="isReadonly.image"
              :append-outer-icon="isReadonly.image?'mdi-pencil': 'mdi-check'"
              @click:append-outer="toggleReadonly('image')"
            ></v-text-field>
            <v-text-field
              ref="brand"
              v-model="product.brand"
              :rules="[() => !!product.brand || 'This field is required']"
              label="Product brand name"
              :readonly="isReadonly.brand"
              :append-outer-icon="isReadonly.brand?'mdi-pencil': 'mdi-check'"
              @click:append-outer="toggleReadonly('brand')"
              required
            ></v-text-field>
            <v-text-field
              ref="category"
              v-model="product.category"
              :rules="[() => !!product.category || 'This field is required']"
              label="Product category"
              :readonly="isReadonly.category"
              :append-outer-icon="isReadonly.category?'mdi-pencil': 'mdi-check'"
              @click:append-outer="toggleReadonly('category')"
              required
            ></v-text-field>
            <v-autocomplete
              ref="sellby"
              v-model="product.sellBy"
              :rules="[() => !!product.sellBy || 'This field is required']"
              :items="sellByOpts"
              label="Sell by"
              placeholder="Select..."
              :readonly="isReadonly.sellBy"
              :append-outer-icon="isReadonly.sellBy?'mdi-pencil': 'mdi-check'"
              @click:append-outer="toggleReadonly('sellBy')"
              required
            ></v-autocomplete>
            <v-textarea
              ref="description"
              v-model="product.description"
              label="Product description"
              hint="Enter product description here"
              :readonly="isReadonly.description"
              :append-outer-icon="isReadonly.description?'mdi-pencil': 'mdi-check'"
              @click:append-outer="toggleReadonly('description')"
              required
            ></v-textarea>
            <p
              class="overline mb-0 float-right"
            >Last Updated: {{new Date(product.lastUpdated).toLocaleString()}}</p>
          </v-card-text>

          <v-divider class="mt-12"></v-divider>

          <v-card-actions>
            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on }">
                <v-btn block color="red" text v-on="on">Delete product</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">Delete this product?</v-card-title>
                <v-card-text>Are you sure you want to delete product: {{product.id}}?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red darken-1" text @click="deleteProduct">Yes</v-btn>
                  <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <p v-if="!valid">{{fetchErrorMessage}}</p>
  </v-container>
</template>

<script>
const axios = require("axios");
const _ = require("lodash");

export default {
  components: {},

  data: () => ({
    valid: false,
    fetchErrorMessage: '',
    dialog: false,
    isReadonly: {
      name: true,
      price: true,
      image: true,
      sellBy: true,
      brand: true,
      category: true,
      description: true
    },
    product: {},
    originalProduct: {},
    sellByOpts: ["Each", "Per pound", "Per kilogram", "Per pair", "Per unit"],
    rules: {
      amountInCents: value => {
        const pattern = /^[1-9]\d+$|^0$/;
        return (
          (pattern.test(value) && parseInt(value) <= 2 ** 32) ||
          "Input can only be integer!"
        );
      }
    }
  }),
  async mounted() {
    await axios
      .get(`//35.197.110.104/product/${this.$route.params.productId}`)
      .then(response => {
        // console.log(response);
        this.originalProduct = response.data;
        // make a deepCopy of originalProduct
        this.product = _.cloneDeep(this.originalProduct);
        this.valid = true
      })
      .catch(error => {
        console.error(error);
        this.valid = false;
        this.fetchErrorMessage = 'Error fetching product data'
        //   this.$router.push("/")
        console.log(this);
      });
  },
  methods: {
    update(field) {
      console.log(field);
      axios.patch();
      this.product[field];
    },
    toggleReadonly(elem) {
      if (this.isReadonly[elem] === false) {
        // apply update
        if (!this.$refs[elem].valid) {
          console.log(`There was an error in the field: ${elem}, reseting`);
          this.product[elem] = this.originalProduct[elem];
        } else {
          // update using axios
          const newValue = this.product[elem];
          axios
            .patch(
              `//35.197.110.104/product/${this.product.id}`,
              [{ op: "replace", path: `/${elem}`, value: newValue }],
              { headers: { "Content-Type": "application/json-patch+json" } }
            )
            .then(response => {
              console.log(response);
              this.product = response.data;
            })
            .catch(error => {
              console.error(error);
            });
          this.originalProduct[elem] = newValue;
          this.originalProduct.lastUpdated = newValue;

          console.log(`Updated field ${elem}`);
        }
        this.isReadonly[elem] = !this.isReadonly[elem];
      } else {
        // toggle icon only
        this.isReadonly[elem] = !this.isReadonly[elem];
      }
    },
    async deleteProduct() {
      console.log("Deleting!");
      // redirect to home page
      await axios.delete(`//35.197.110.104/product/${this.product.id}`);
      this.$router.push("/");
    }
  }
};
</script>
