<template>

  <div id="main">
    <div></div>

     <div id="container">

        <h2>Services</h2>
        <div id="product-container">

          <div
            class="product"
            v-for="course in courses"
            :key="course.id"
            @click="handleCheck(course.id)"
            v-bind:class="course.isChecked ? 'checked' : ''"
            >
              <div class="title">{{course.title}}</div>
              <div class="price">{{course.price}}</div>
          </div>

          <div id="total-container">
            <div class="title">Total:</div>
            <div class="price">$ {{getTotal()}}</div>
          </div>

        </div>

     </div>

     <div></div>
  </div>

</template>

<script>

const courses = [
  {
    id: 0,
    title: 'Web Development',
    price: '$300',
    isChecked: true
  },
  {
    id: 1,
    title: 'Design',
    price: '$400',
    isChecked: false
  },
  {
    id: 2,
    title: 'Integration',
    price: '$250',
    isChecked: false
  },
  {
    id: 3,
    title: 'Training',
    price: '$220',
    isChecked: false
  }
]


export default {
  name: 'OrderForm',

  data() {
    return {
      courses
    }
  },

  methods: {
    handleCheck(courseId) {
      const course = courses.find(course => course.id === courseId);
      course.isChecked = !course.isChecked;
    },

    getTotal() {
      return courses.filter(c => c.isChecked).reduce((acc, curr) => acc + Number(curr.price.slice(1)), 0)
    }
  }
}
</script>

<style scoped>

  div#main {
    display: grid;
    grid-template-columns: 20% 60% 20%;
    align-items: center;
    margin-bottom: 20vh;
  }

  div#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #61a1bc;
    border-radius: 2px;
    box-shadow: 0 1px 1px #ccc;
    width: 100%;
    margin-top: 2rem;
  }

  h2 {
    color: #fff;
    font-size: 2.5rem;
    font-family: inherit;
    font-weight: normal;
    line-height: 1;
    text-shadow: 0 3px 0 rgba(0,0,0,0.1);
  }

  div#product-container {
    width: 60%;
    margin-bottom: 2rem;
  }

  div.product {
    display: flex;
    justify-content: space-between;
    padding: 20px 13px;
    background-color: #e35885;
    color: #fff;
    ont-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    cursor: pointer;
  }

  div#total-container {
   display: flex;
   justify-content: space-between;
   border-top: 1px solid rgba(255,255,255,0.5);
   padding: 15px 0;
   font-size: 20px;
   font-weight: bold;
   color: #fff;
  }

  .checked {
    background-color: #8ec16d !important;
  }

  /* Large devices (desktops, less than 1200px) */
  @media (max-width: 1199px) {
    div#main {
      grid-template-columns: 15% 70% 15%;
    }
  }

  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 991px) {
    div#main {
      grid-template-columns: 15% 70% 15%;
    }

    div#product-container {
      width: 70%;
    }
  }

  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767px) {
    div#main {
      grid-template-columns: 10% 80% 10%;
    }
  }

</style>
