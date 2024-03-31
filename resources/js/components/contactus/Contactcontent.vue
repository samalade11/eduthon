<template>
    <div>
        <div class="relative">
            <img src="../../../../public/assets/conimg2.png" alt="">
            <p class="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold w-full text-center  absolute top-12 md:top-28 lg:top-60">CONTACT US</p>

            <div class="flex place-content-center">
                <div class="bg-white shadow-lg rounded-[15px] grid grid-cols-1 md:grid-cols-2 py-6 md:py-12 px-6 md:pl-8 lg:pl-20 gap-8 mx-6  md:gap-16 lg:gap-32 absolute -bottom-[500px] md:-bottom-24 lg:-bottom-12">
                    
                    <div>
                        <h4 class="text-[#3A3A3A] text-[30px] md:text-[30px] lg:text-[36px] font-medium leading-10 mt-6">Your feedback helps
                            <br>us improve</h4>
                        <p class="text-[#3A3A3A] text-[18px] md:text-[16px] lg:text-[22px] lg:w-[491px] leading-5 lg:leading-7 mt-6">We are here to help you and we’d 
                            love to connect with you. Feel free to 
                            contact our support channels. We look 
                            forward to working with you to build the
                            next big thing.</p>
                    </div>
        
                    <div>
                        <h4 class="text-[#3A3A3A] text-[20px] lg:text-[23px] font-semibold">CONTACT INFORMATION</h4>
                        <div class="flex gap-4 mt-4">
                            <i class='bx bx-phone-call text-[18px] lg:text-[22px] text-[#003F92] my-auto h-fit'></i>
                            <p class="text-[#3A3A3A] text-[18px] lg:text-[22px] my-auto h-fit">info@dewalwathon.com</p>
                        </div>
                        <div class="flex gap-4 mt-3">
                            
                            <i class='bx bx-envelope text-[18px] lg:text-[22px] text-[#003F92] my-auto h-fit'></i>
                            <p class="text-[#3A3A3A] text-[18px] lg:text-[22px] my-auto h-fit">+2348146482898</p>
                        </div>
                        <div class="flex gap-4 mt-3">
                            
                            <i class='bx bx-location-plus text-[18px] lg:text-[22px] text-[#003F92] my-auto h-fit'></i>
                            <p class="text-[#3A3A3A] text-[18px] lg:text-[22px] my-auto h-fit">Plot 10, Ajani Layout, Gilgal, Bashorun, 
                                <br>Ibadan, Nigeria</p>
                        </div>
        
                        <h4 class="text-[#3A3A3A] text-[20px] lg:text-[23px] font-semibold mt-6">SOCIAL MEDIA HANDLES</h4>
                        <div class="flex gap-4 mt-3">
                            <img src="../../../../public/assets/conigico.png" alt="" class="my-auto h-fit">
                            <img src="../../../../public/assets/confbico.png" alt="" class="my-auto h-fit">
                            <img src="../../../../public/assets/conxico.png" alt="" class="my-auto h-fit">
                            <img src="../../../../public/assets/coninico.png" alt="" class="my-auto h-fit">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#003F92] pt-[550px]  md:pt-32 pb-32">
            <div class="mx-4 md:mx-8 lg:mx-56">
                <h4 class="text-center text-white text-[32px] font-semibold md:mt-8 mb-20">SEND US A MESSAGE</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <input type="text" placeholder="First Name*" class="text-white placeholder:text-white text-[16px] placeholder:text-[16px]   border border-white w-full h-fit bg-transparent rounded-[10px] py-3.5 px-4">
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name*" class="text-white placeholder:text-white text-[16px] placeholder:text-[16px]   border border-white w-full h-fit bg-transparent rounded-[10px] py-3.5 px-4">
                    </div>
                    <div>
                        <input type="text" placeholder="Email*" class="text-white placeholder:text-white text-[16px] placeholder:text-[16px]   border border-white w-full h-fit bg-transparent rounded-[10px] py-3.5 px-4">
                    </div>
                    <div>
                        <select name="" id="" class="text-white placeholder:text-white text-[16px] placeholder:text-[16px]   border border-white w-full h-fit bg-transparent rounded-[10px] py-3.5 px-4">
                            <option value="">Mobile*</option>
                            <option value="">Mobile*</option>
                            <option value="">Mobile*</option>
                        </select>
                    </div>
                    <div class="md:col-span-2">
                        <input type="text" placeholder="Subject*" class="text-white placeholder:text-white text-[16px] placeholder:text-[16px]   border border-white w-full h-fit bg-transparent rounded-[10px] py-3.5 px-4">
                    </div>
                    <div class="md:col-span-2">
                        
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message" class="text-white placeholder:text-white text-[16px] placeholder:text-[16px]   border border-white w-full h-fit bg-transparent rounded-[10px] py-3.5 px-4"></textarea>
                    </div>
                </div>
                <div class="flex gap-4 mt-4">
                    <input type="checkbox" name="" id="" class="my-auto bg-transparent rounded-[4px] border border-white">
                    <p class="my-auto h-fit text-white text-[18px]">Im not a robot</p>
                </div>
                <div class="mt-16">
                    <button class="text-[18px] font-semibold text-white bg-[#00A859] w-fit h-fit py-1.5 px-8 shadow-lg rounded-[30px]">Send Message</button>
                </div>
            </div>
        </div>

        <div class="flex place-content-center my-8 md:my-16">
            <img src="../../../../public/assets/contactmap.png" alt="" class="h-fit w-fit">
        </div>
        
    </div>
</template>
<script setup></script>