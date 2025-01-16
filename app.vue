<script setup>
import ShimmerCard from '~/components/shimmer/ShimmerCard.vue';
import ShimmerText from '~/components/shimmer/ShimmerText.vue';

const brands = [
  {
    name: 'Netflix',
    logo: 'https://images.ctfassets.net/y2ske730sjqp/4aEQ1zAUZF5pLSDtfviWjb/ba04f8d5bd01428f6e3803cc6effaf30/Netflix_N.png?w=300',
    color: '#E50914', // Netflix red
  },
  {
    name: 'Google',
    logo: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png',
    color: '#4285F4', // Google blue
  },
  {
    name: 'Amazon',
    logo: 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg',
    color: '#FF9900', // Amazon orange
  },
  {
    name: 'Microsoft',
    logo: 'https://www.freepnglogos.com/uploads/windows-logo-png/windows-logo-microsoft-exchange-pour-tous-microsoft-exchange-made-22.png',
    color: '#635BFF', // Microsoft purple
  },
  {
    name: 'Facebook',
    logo: 'https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png',
    color: '#1877F2', // Facebook blue
  },
  {
    name: 'YouTube',
    logo: 'https://www.freepnglogos.com/uploads/youtube-play-button-png/youtube-play-button-icon-icons-and-png-backgrounds-25.png',
    color: '#FF0000', // YouTube red
  },
  {
    name: 'WhatsApp',
    logo: 'https://www.freepnglogos.com/uploads/whatsapp-png-logo-1.png',
    color: '#25D366', // WhatsApp green
  },
  {
    name: 'Apple',
    logo: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-icon-transparent-png-svg-vector-3.png',
    color: '#000000', // Apple black
  },
  {
    name: 'Tesla',
    logo: 'https://www.freepnglogos.com/uploads/tesla-logo-red-png-0.png',
    color: '#CC0000', // Tesla red
  },
  {
    name: 'Snapchat',
    logo: 'https://www.freepnglogos.com/uploads/snapchat-logo-png-0.png',
    color: '#FFFC00', // Snapchat yellow
  },
  {
    name: 'Spotify',
    logo: 'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png',
    color: '#1DB954', // Spotify green
  },
  {
    name: 'Slack',
    logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-1024.png',
    color: '#4A154B', // Slack purple
  },
];

const loading = ref(true);
const selectedBrands = ref([]);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2500);
});

const handleBrandSelection = (brand) => {
  if (isSelected(brand)) {
    const index = selectedBrands.value.findIndex(
      (element) => element.name === brand.name
    );
    selectedBrands.value.splice(index, 1);
  } else {
    selectedBrands.value.push(brand);
  }
};

const isSelected = (brand) => {
  return selectedBrands.value.map((brand) => brand.name).includes(brand.name);
};

const handleUnselectAll = () => {
  selectedBrands.value = [];
};
</script>

<template>
  <div class="bg-white h-screen w-full flex items-center justify-center">
    <div class="flex flex-col gap-6">
      <div class="flex justify-between w-full">
        <div class="flex flex-col gap-2" :class="[loading ? 'w-full' : '']">
          <ShimmerText :loading="loading" loadingClass="w-1/2">
            <h3 class="text-2xl font-bold text-gray-800">
              Select the sites you want to change
            </h3>
          </ShimmerText>
          <ShimmerText :loading="loading" loadingClass="w-1/2">
            <h5 class="text-md text-gray-400">
              We found the {{ brands.length }} sites in your browser history
            </h5>
          </ShimmerText>
        </div>
        <ShimmerText
          :loading="loading"
          loadedClass="cursor-pointer text-gray-800'"
          loadingClass="w-1/2"
          @click="handleUnselectAll"
        >
          <h5 class="text-gray-400">Unselect all</h5>
        </ShimmerText>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <ShimmerCard
          @click="() => handleBrandSelection(brand)"
          v-for="(brand, index) in brands"
          :loading="loading"
          imageHeight="200px"
          imageWidth="200px"
          :title="false"
          :loadedClass="
            (isSelected(brand)
              ? 'border-4 border-gray-600 scale-[.95]'
              : 'border-2') +
            ' rounded-xl border cursor-pointer p-4 cursor-pointer p-4 w-[200px] h-[200px] flex justify-center items-center'
          "
          :bodyLines="null"
        >
          <div class="flex justify-center items-center">
            <img
              :src="brand.logo"
              class="h-[100px] self-center"
              :alt="brand.name"
            />
          </div>
        </ShimmerCard>
      </div>
    </div>
  </div>
</template>
