<template>
  <v-app>
    <v-container>
      <v-row class="lighten-2" style="height: 400px">
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <img
            src="https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
            alt="プロフィール画像"
            title="プロフィール画像"
            class="rounded-full h-52 w-52 md:h-72 md:w-72 m-6"
          />
        </v-col>
        <v-col  cols="12" sm="10" md="6" lg="4" xl="3">
          <v-card class="mt-24" max-width="500" outlined>
            <v-list-item three-line>
              <v-list-item-content class="flex">
                <p class="text-4xl text-center font-semibold">hihumikan</p>

                <p class="mt-8 text-lg">
                  雑食系で赴くままに中途半端に色々手を出す。
                </p>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col  cols="12">
          <font-awesome-icon
            class="text-6xl md:text-7xl ml-20 md:ml-40 mt-10 cursor-pointer TwitterCSS"
            :icon="['fab', 'twitter']"
            @click="twitter()"
          />
          <font-awesome-icon
            class="text-6xl md:text-7xl ml-20 md:ml-40 mt-3 cursor-pointer GitHubCSS"
            :icon="['fab', 'github']"
            @click="github()"
          />
          <font-awesome-icon
            class="text-6xl md:text-7xl ml-20 md:ml-40 mt-3 cursor-pointer TelegramCSS"
            :icon="['fab', 'telegram']"
            @click="telegram()"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    twitter: function () {
      window.open("https://twitter.com/mikan_54951");
    },
    github: function () {
      window.open("https://github.com/hihumikan");
    },
    telegram: function () {
      window.open("https://t.me/yata_touka");
    },
  },
};
</script>

<style>
.TwitterCSS {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.TwitterCSS:hover {
  color: #1DA1F2;
}
.GitHubCSS {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.GitHubCSS:hover {
  color: gray;
}

.TelegramCSS {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.TelegramCSS:hover {
  color: #0088CC;
}



</style>
