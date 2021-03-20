<template>
  <v-app>
    <v-container>
      <v-row class="lighten-2" style="height: 400px">
        <v-col cols="12" sm="10" md="4" lg="6" xl="1">
          <center>
            <img
              src="https://avatars.githubusercontent.com/u/26848713?s=460&u=b5c630322f32d86c35ec2a62469f36502755d83c&v=4"
              alt="プロフィール画像"
              title="プロフィール画像"
              class="rounded-full h-52 w-52 md:h-72 md:w-72"
            />
          </center>
        </v-col>

        <v-col cols="12" sm="10" md="8" lg="6" xl="1">
          <center>
            <v-card class="mt-10" max-width="500" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <p class="text-4xl text-center font-semibold">hihumikan</p>
                  <center>
                    <p class="mt-8 text-lg font-semibold">
                      雑食系で赴くままに中途半端に色々手を出す。
                    </p>
                  </center>
                  <p class="text-lg">
                    フロントエンドとかバックエンド、インフラのあれこれやってます。
                  </p>
                  <p class="text-lg mt-3">
                    ご連絡はTwitterかTelegramでお願いします。
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </center>
        </v-col>
        <v-col cols="12" sm="8" md="12" lg="10" xl="1">
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
  color: #1da1f2;
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
  color: #0088cc;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
