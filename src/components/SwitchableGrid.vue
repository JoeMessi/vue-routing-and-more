<template>

  <div id="main">
    <div></div>

     <div id="container">

        <div id="input-container">
          <div @click="view = 'list'"><i class="fas fa-list fa-lg active"></i></div>
          <div @click="view = 'grid'"><i class="fas fa-th fa-lg"></i></div>
        </div>

        <div v-if="view === 'list'" id="courses-container-list">
             <div class="course-box" v-for="article in articles" :key="article.id">
               <img :src="article.image" alt="article">
               <p>{{article.title}}</p>
             </div>
        </div>

        <div  v-if="view === 'grid'" id="courses-container-grid">
            <div class="course-box-grid" v-for="article in articles" :key="article.id">
              <img class="img-grid" :src="article.image" alt="article">
            </div>
        </div>


     </div>

     <div></div>
  </div>

</template>

<script>

let articles = [
    {
        title: "What You Need To Know About CSS Variables",
        url: "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
        image: "https://tutorialzine.com/media/2016/03/css-variables.jpg",
        id: 0
    },
    {
        title: "Freebie: 4 Great Looking Pricing Tables",
        url: "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
        image: "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg",
        id: 1
    },
    {
        title: "20 Interesting JavaScript and CSS Libraries for February 2016",
        url: "https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
        image: "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg",
        id: 2
    },
    {
        title: "Quick Tip: The Easiest Way To Make Responsive Headers",
        url: "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
        image: "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png",
        id: 3
    },
    {
        title: "Learn SQL In 20 Minutes",
        url: "https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
        image: "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png",
        id: 4
    },
    {
        title: "Creating Your First Desktop App With HTML, JS and Electron",
        url: "https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
        image: "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png",
        id: 5
    }
]


export default {
  name: 'SwitchableGrid',

  data() {
    return {
      articles,
      view: 'list'
    }
  },

  mounted() {
    // IIFE - toggles .active class to icons
    (() => {
      const icons = document.getElementsByClassName('fas');
      for(let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('click', () => {
          const current = document.getElementsByClassName('active');
          current[0].className = current[0].className.replace('active', '');
          icons[i].className += ' active';
        })
      }
    })();
  }

}
</script>



<style scoped>

div#main {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
}

div#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  width: 100%;
  padding-bottom: 0.6rem;
  margin-top: 2rem;
}

img {
  width: 30%;
  height: 5.9rem;
}

p {
  margin-left: 3.3rem;
  font-weight: bold;
  align-self: center;
  color: #6e7a7f;
}

div.course-box {
  display: flex;
  border-bottom: 1px solid #00000024;
  padding-bottom: 11px;
  margin-bottom: 11px;
}

div#input-container {
  display: flex;
  justify-content: flex-end;
  background-color: #5c9bb7;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
  width: 94%;
  padding: 14px;
  margin: 0 auto 20px;
  position: relative;
}

input {
  border: none;
  width: 100%;
  line-height: 19px;
  padding: 11px 0;
  border-radius: 2px;
  box-shadow: 0 2px 8px #c4c4c4 inset;
  text-align: left;
  font-size: 14px;
  font-family: inherit;
  color: #738289;
  font-weight: bold;
  outline: none;
  text-indent: 16px;
}

i.fas.fa-th.fa-lg {
  margin-left: 0.6rem;
}

i.fas.fa-th.fa-lg, i.fas.fa-list.fa-lg {
  color: white;
  background: #4987a1;
  padding: 0.6rem 0.5rem;
}

div#courses-container-list {
  display: flex;
  flex-direction: column;
}

div#courses-container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0.2rem;
}

img.img-grid {
  width: 100%;
  height: 11.9rem;
}

.active {
  background-color: #c14694 !important;
}

.fas {
  cursor: pointer;
}

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199px) {
  img.img-grid {
    height: 9.9rem;
  }

  div#input-container {
    width: 93%;
  }
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991px) {
  img.img-grid {
    height: 9.9rem;
  }

  div#main {
    grid-template-columns: 15% 70% 15%;
  }

  div#input-container {
    width: 93%;
  }

  div#main {
    grid-template-columns: 15% 70% 15%;
  }
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767px) {
  img.img-grid {
    height: 8.9rem;
  }

  div#input-container {
    width: 91.50%;
  }

  div#main {
    grid-template-columns: 10% 80% 10%;
  }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  img.img-grid {
    height: 9.9rem;
  }

  div#main {
    grid-template-columns: 5% 90% 5%;
  }
}

</style>
