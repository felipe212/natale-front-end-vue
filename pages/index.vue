<template>
  <v-layout align-center justify-center row fill-height wrap>
    <v-flex xs12 class="mb-5">
      <v-carousel hide-controls hide-delimiters>
        <v-carousel-item height="20"
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex xs12>
      <v-layout align-center justify-space-around row fill-height>
        <v-flex v-for="(block, index) in propsToBlocks" :key="index" xs3>
          <infoblock :icon="block.icon" :information="block.information"/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import infoblock from '../components/InformationBlock'

export default {
  data: () => ({
    propsToBlocks: [
      {icon: 'calendar_today', information: 'Natale es un espacio que ofrece la posibilidad de realizar diferentes actividades de entrenamiento y preparación desde el tercer mes de embarazo y hasta el año de vida del bebé.'},
      {icon: 'favorite_border', information: 'Todas nuestras actividades se caracterizan por ser dinámicas y pensadas para satisfacer necesidades reales de la mamá actual, que quiere verse y sentirse bien, que necesita estar informada y preparada para la llegada de su bebé y que cuenta con poco tiempo para recuperarse después del nacimiento.'},
      {icon: 'beenhere', information: 'Nuestro objetivo es lograr que  nuestra alumna viva un embarazo saludable, sintiéndose ágil y entrenada además de bien informada y contenida. Que pueda tener una pronta recuperación post parto y pueda recuperar su estado físico y tonicidad muscular.'}
    ],
    items: [
      { src: 'http://www.nataleweb.com.ar/wordpress/wp-content/uploads/2017/02/Gym-Embarazadas4.jpg' },
      { src: 'http://www.nataleweb.com.ar/wordpress/wp-content/uploads/2017/02/Gym-Embarazadas5.jpg' },
      { src: 'http://www.nataleweb.com.ar/wordpress/wp-content/uploads/2017/02/Gym-Embarazadas11.jpg' },
      { src: 'http://www.nataleweb.com.ar/wordpress/wp-content/uploads/2017/02/Gym-Embarazadas8-1.jpg' }
    ]
  }),
  components: {
    infoblock
  }
}
</script>
