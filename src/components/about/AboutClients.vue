<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clients: [
        {
          id: 1,
          title:
            "Instytut Meteorologii i Gospodarki Wodnej – Państwowy Instytut Badawczy",
          img: require("@/assets/images/brands/IMGW.png"),
          url: "https://www.imgw.pl/",
        },
        {
          id: 2,
          title:
            "Państwowa Uczelnia zawodowa im. Ignacego Mościckiego w Ciechanowie",
          img: require("@/assets/images/brands/PUZ.jpeg"),
          url: "https://puzim.edu.pl/",
        },
        {
          id: 3,
          title: "GoIT",
          img: require("@/assets/images/brands/GOIT.png"),
          url: "https://m.goit.global/pl/?utm_source=google&utm_medium=cpc&utm_campaign=19908700535|146264932766|652857908380||goit",
        },
        {
          id: 4,
          title: "Rada Uczelniana Samorządu Studentów PUZ w Ciechanowie",
          img: require("@/assets/images/brands/RUSS.jpeg"),
          url: "https://www.facebook.com/profile.php?id=100068397649695",
        },
        {
          id: 5,
          title: "Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej",
          img: require("@/assets/images/brands/NFOŚiGW.jpeg"),
          url: "https://www.gov.pl/web/nfosigw/narodowy-fundusz-ochrony-srodowiska-i-gospodarki-wodnej",
        },
        {
          id: 6,
          title: "Forum Akademii Nauk Stosowanych",
          img: require("@/assets/images/brands/FANS.jpeg"),
          url: "https://fans.edu.pl/",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ $root.t.clientsHeading }}
    </p>
    <div
      class="flex flex-wrap justify-center sm:grid-cols-4 mt-10 sm:mt-14 gap-2"
    >
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
