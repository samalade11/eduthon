<template>
    <div class="font-sans " ref="container">
        <div @click="scrollToTop" v-if="showscrolltotop" class="transition ease-in-out delay-300 z-40 cursor-pointer fixed right-[30px] bottom-[60px] lg:right-[60px] lg:bottom-[70px]">
            <!-- <a href="#" class="scroll-smooth"> -->
                
                <img src="../.././../../public/assets/scrollupimg.png" alt="" class="bg-[#00A859] py-2 px-2 rounded-full">
            <!-- </a> -->

        </div>

        <nav class=" border border-gray-100 py-0 z-40" :class="tofixed ? 'fixed top-0 right-0 left-0 bg-gray-300' : 'bg-white' ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../.././../../public/assets/mainlogo.png" class="h-8 md:h-10" alt="logo" />

            </a>
            <div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                <button type="button" class="text-white bg-[#00A859] font-medium text-[14px] md:text-[18px] py-2 px-8 rounded-[30px] shadow-xl hover:bg-opacity-90">
                    <a href="">Get Started</a>

                </button>
                <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            </div>
            <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta" >
            <ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-300 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  " :class="tofixed ? 'bg-white lg:bg-transparent' : 'lg:bg-white' ">
                <li>
                    <a href="/" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-white bg-[#00A859] text-[16px] md:text-[18px] font-medium rounded lg:bg-transparent lg:text-[#00A859] " aria-current="page">Why Delwathon</a>
                </li>
                <li>
                    <a  @click="onhover"  class="block cursor-pointer py-2 px-3 my-1 lg:my-0 lg:p-0 text-[#3A3A3A]  text-[16px] md:text-[18px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#00A859] ">Our Solutions</a>
                </li>
                <li>
                    <a href="/demo" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-black text-[16px] md:text-[18px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#00A859] ">Request a Demo</a>
                </li>
                <li>
                    <a href="/price" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-[#3A3A3A] text-[16px] md:text-[18px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#00A859] ">Pricing</a>
                </li>
                <li>
                    <a href="/contactus" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-[#3A3A3A] text-[16px] md:text-[18px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#00A859] ">Contact Us</a>
                </li>

            </ul>
            </div>
            </div>
        </nav>

        <!-- drop down -->
        <div v-if="showdropdown"  class="bg-white shadow-lg shadow-gray-300 fixed z-30  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 px-4 md:px-8 lg:px-24 lg:py-16 gap-8 md:gap-20">
            <div>
                <h4 class="text-[#3A3A3A] font-bold text-[30px] lg:text-[38px] ">EDUTHON - LEARNING 
                    <br>MANAGEMENT SYSTEM
                    <br>v1.0</h4>
                <p class="text-[#3A3A3A] text-[22px] leading-7 mt-2 mb-6 md:mb-12">Eduthon is a pioneering e-learning, auto-mation, and school management solution that has become a top-tier choice.   Renowned for its ease of use, affordability, and exceptional customer service, Eduthon has gained popularity among schools. With its comprehensive features. </p>
                <button class="text-white text-[18px] font-semibold bg-[#00A859] h-fit w-fit px-8 py-2 rounded-[30px]">
                    <a href="/our-solution">Dicover our Solutions</a>
                </button>
            </div>
            <div class="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 h-fit gap-x-8 gap-y-6 lg:gap-y-16">
                <div class="flex gap-4">
                    <img src="../../../../public/assets/schoolico2.png" alt="" class="h-fit my-auto">
                    <div class="h-fit my-auto">
                        <h4 class="text-[#3A3A3A] font-semibold text-[12px] lg:text-[14px]">School Subscription (SAAS)</h4>
                        <p class="text-[#3A3A3A] mt-1 leading-3 lg:leading-4 text-[10px] lg:text-[12px]">These subscriptions offer cloud-based platforms for managing school enrollment, attendance, grading, and curriculum, as well as providing access to virtual classes, interactive textbooks, and productivity tools.</p>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../../../../public/assets/officeico2.png" alt="" class="h-fit my-auto">
                    <div class="h-fit my-auto">
                        <h4 class="text-[#3A3A3A] font-semibold text-[12px] lg:text-[14px]">Office Accounting</h4>
                        <p class="text-[#3A3A3A] mt-1 leading-3 lg:leading-4 text-[10px] lg:text-[12px]">This process involves tracking and recording all financial transactions, including expenses, income, and budget allocations. we ensure transparency, accuracy, and compliance with financial regulations.</p>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../../../../public/assets/schico2.png" alt="" class="h-fit my-auto">
                    <div class="h-fit my-auto">
                        <h4 class="text-[#3A3A3A] font-semibold text-[12px] lg:text-[14px]">Schedule Email/SMS</h4>
                        <p class="text-[#3A3A3A] mt-1 leading-3 lg:leading-4 text-[10px] lg:text-[12px]">You can send bulk sms or email to users and you can set the time and date schedule according to your needs.</p>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../../../../public/assets/modico2.png" alt="" class="h-fit my-auto">
                    <div class="h-fit my-auto">
                        <h4 class="text-[#3A3A3A] font-semibold text-[12px] lg:text-[14px]">Module Enable/ Disable</h4>
                        <p class="text-[#3A3A3A] mt-1 leading-3 lg:leading-4 text-[10px] lg:text-[12px]">This feature can allow administrators to selectively enable or disable  modules such as event calendars, news feeds, student forums, and class  schedules.</p>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../../../../public/assets/mulico2.png" alt="" class="h-fit my-auto">
                    <div class="h-fit my-auto">
                        <h4 class="text-[#3A3A3A] font-semibold text-[12px] lg:text-[14px]">Multiple-Type of Exam System</h4>
                        <p class="text-[#3A3A3A] mt-1 leading-3 lg:leading-4 text-[10px] lg:text-[12px]">For a seamless assessment on your school website, we designed the website to  streamline the examination process, this system allows educators to create, administer, and grade various types of exams efficiently. </p>
                    </div>
                </div>

                <div class="flex gap-4">
                    <img src="../../../../public/assets/schoolico2.png" alt="" class="h-fit my-auto">
                    <div class="h-fit my-auto">
                        <h4 class="text-[#3A3A3A] font-semibold text-[12px] lg:text-[14px]">Online Admission</h4>
                        <p class="text-[#3A3A3A] mt-1 leading-3 lg:leading-4 text-[10px] lg:text-[12px]">Our user-friendly website streamlines the admission process, allowing  you to submit applications, upload documents, and track your progress  effortlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>
<script setup>

import { onMounted, onUnmounted,  ref } from "vue";


const showscrolltotop = ref(false)
const scrollPosition = ref(0);
const tofixed = ref(false)
// const changetofixed = () => {
//     tifixed.value = true
// }

const showdropdown = ref(false)

const onhover = () =>{
    showdropdown.value = !showdropdown.value
}

const container = ref(null);

const handleClickOutside = (event) => {
  if (!container.value.contains(event.target)) {
    myFunction();
  }
};

const myFunction = () => {
  // Your function logic here
  showdropdown.value = false
};



const handleScroll = () => {
    scrollPosition.value = window.scrollY;
    showscrolltotop.value = scrollPosition.value > 100;
    tofixed.value = scrollPosition.value > 50;
};


onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    // console.log(scrollPosition.value)

});


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('click', handleClickOutside);
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

</script>
