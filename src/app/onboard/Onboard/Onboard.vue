<template>
  <div :class="$style.onboard">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Onboard</h1>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-button
            :loading="incrementPending"
            @click='increment'
            accent>Increment +1
          </vue-button>
          <br/>
          <br/>
        </vue-grid-item>
        <vue-grid-item fill>
          <vue-button
            :loading="decrementPending"
            @click='decrement'
            primary>Decrement -1
          </vue-button>
          <h3>Count is {{ count }}</h3>
        </vue-grid-item>
      </vue-grid-row>
  

   
      <vue-grid-row>
      

           <vue-grid-item>
        <vue-input
          name="firstname1"
          id="firstname1"
          required
          placeholder="First Name"
          validation="required"
          v-model="form.firstname"

        />
      </vue-grid-item>
      <!-- 
        
                  v-on:blur="setFirstName"
          :value="firstName"
        
        <vue-grid-item>
        <vue-input
          name="lastname"
          id="lastname"
          required
          placeholder="Last Name"
          validation="required"
          v-model="ff" />
      </vue-grid-item>
        <vue-grid-item fill>
            <vue-input
      name="email"
      id="email"
      required
      placeholder="E-mail"
      validation="required|email"
      v-model="ff" />
        </vue-grid-item> -->
      </vue-grid-row>
        </vue-grid>
    



  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { IPreLoad } from "../../../server/isomorphic";
import VueGrid from "../../shared/components/VueGrid/VueGrid";
import VueGridItem from "../../shared/components/VueGridItem/VueGridItem";
import VueButton from "../../shared/components/VueButton/VueButton";
import VueGridRow from "../../shared/components/VueGridRow/VueGridRow";
import VueInput from '../../shared/components/VueInput/VueInput.vue';



export default {
  metaInfo: {
    title: "Onboard"
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueInput
  },
  methods: {
    ...mapActions("onboard", ["increment", "decrement", "setFirstName"])
  },
  computed: {
    ...mapGetters("onboard", ["count", "incrementPending", "decrementPending", "firstName"])
  },

  prefetch: (options: IPreLoad) => {
    return options.store.dispatch("onboard/increment");
  },
  data(): any {
      return {
        form:           {
          firstname:   'gg',
          lastname:    '',
          email:       '',
        },
        countryOptions: [
          { label: 'Choose a Country', value: null },
          { label: 'Germany', value: 'de' },
          { label: 'USA', value: 'us' },
          { label: 'Other', value: 'other' },
        ],
        isLoading:      false,
      };
    },
};
</script>


<style lang="scss" module>
@import "../../shared/styles";

.onboard {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
