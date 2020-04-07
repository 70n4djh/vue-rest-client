<template>
  <v-container>
    <Alert :parentMessage="alertMessage" :alert="alert"></Alert>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-form ref="realForm">
            <v-card-text>
              <v-text-field
                ref="name"
                v-model="product.name"
                :rules="[() => !!product.name || 'This field is required']"
                label="Product Name"
                placeholder="Product Name"
                required
              ></v-text-field>
              <v-text-field
                ref="price"
                v-model="product.price"
                :rules="[() => !!product.price || 'This field is required', rules.amountInCents,]"
                prefix="$"
                label="Product price in cents"
                placeholder="2400 (24 dollars)"
                required
              ></v-text-field>
              <v-text-field
                ref="image"
                v-model="product.image"
                label="Product image URL (Optional)"
                placeholder="https://"
              ></v-text-field>
              <v-text-field
                ref="brand"
                v-model="product.brand"
                :rules="[() => !!product.brand || 'This field is required']"
                label="Product brand name"
                placeholder="Brand Name"
                required
              ></v-text-field>
              <v-text-field
                ref="category"
                v-model="product.category"
                :rules="[() => !!product.category || 'This field is required']"
                label="Product category"
                placeholder="Category Name"
                required
              ></v-text-field>
              <v-autocomplete
                ref="sellBy"
                v-model="product.sellBy"
                :rules="[() => !!product.sellBy || 'This field is required']"
                :items="sellByOpts"
                label="Sell by"
                placeholder="Select..."
                required
              ></v-autocomplete>
              <v-textarea
                ref="description"
                v-model="product.description"
                label="Product description (Optional)"
                hint="Enter a simple description of your product"
                placeholder="Enter product description here"
                required
              ></v-textarea>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>

            <v-card-actions>
              <v-btn text href="/">Cancel</v-btn>
              <v-spacer></v-spacer>

              <v-btn color="green" text @click="submit">Create product</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Alert from "./Alert";
const axios = require("axios");
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    Alert
  },
  data: () => ({
    alert: false,
    formHasErrors: false,
    alertMessage: "",
    rules: {
      amountInCents: value => {
        const pattern = /^[1-9]\d+$|^0$/;
        return (
          (pattern.test(value) && parseInt(value) <= 2 ** 32) ||
          "Input can only be integer!"
        );
      }
    },
    sellByOpts: ["Each", "Per pound", "Per kilogram", "Per pair", "Per unit"],
    product: {}
  }),
  computed: {
    form() {
      return {
        name: this.product.name,
        price: this.product.price,
        image: this.product.image,
        brand: this.product.brand,
        category: this.product.category,
        sellBy: this.product.sellBy,
        description: this.product.description
      };
    }
  },
  methods: {
    async submit() {
      var state = this.$refs.realForm.validate();
      if (state) {
        console.log(this.product);
        // post form data to backend API
        this.product.id = uuidv4();
        await axios
          .post(`http://35.197.110.104/product`, this.product)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
            this.alertMessage =
              "Error creating new product, please try again later.";
            this.alert = true;
          });
        this.$router.push("/");
      } else {
        this.alertMessage =
          "Invalid input for required field(s), please fix it before submit the form.";
        this.alert = true;
        console.log("Show alert");
      }
    }
  }
};
</script>
