<template>
  <div id="blog" style="background-color: black">
    <section
      class="u-align-center u-black u-clearfix u-section-1"
      style="min-height: 0 !important"
      id="sec-ba74"
    >
      <div
        class="u-clearfix u-sheet u-sheet-1"
        style="min-height: 0 !important"
      >
        <h1 class="u-text u-text-default u-text-palette-4-dark-1 u-text-1">
          Our Blogs
        </h1>
        <v-container fluid>
          <v-layout row wrap justify-center>
            <v-flex xs10>
              <v-carousel
                continuous
                cycle
                hide-delimiter-background
                show-arrows-on-hover
                hide-delimiters
              >
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                >
                  <v-container fill-height fluid pa-0 ma-0 pb-3>
                    <v-layout fill-height align-end pb-0 mb-4>
                      <v-flex xs12>
                        <v-card color="rgba(0,0,0,0.3)" class="pa-2">
                          <h6
                            class="headline white--text"
                            v-text="item.text"
                          ></h6>
                          <span class="white--text" v-text="item.subtext">
                          </span>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      items: [
        {
          src: require("../../assets/styles/images/SectorLevelMap_MultiKulti.jpg"),
          text: "The VILLAGE",
          subtext: "A key UNIT of our Platform is the VILLAGE.",
        },
        {
          src: require("../../assets/styles/images/brain-geometric-shapes-blue-colors-vector-7730781.jpg"),
          text: "1. Language ATOMS, making connections",
          subtext: "Meet the BUILDING",
        },
      ],
    };
  },
};
</script>

<style>
@import "../../assets/styles/Blog.css";
</style>