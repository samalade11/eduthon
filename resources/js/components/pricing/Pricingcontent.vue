<template>
    <div>
        <div class="mx-4 md:mx-8 lg:mx-24 mt-24 mb-20 ">
            <h4 class="text-[#3A3A3A] text-[20px] md:text-[32px] font-bold text-center mb-2">PRICING</h4>
            <p class="text-[#3A3A3A] text-[16px] md:text-[22px] text-center">We offer great prices, premium products and quality service for your business</p>

            <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- :class="pricing == 0 ? '' : '' " -->
                <div @click="pricing = 0" class=" w-fit cursor-pointer py-4 shadow-lg shadow-gray-400" :class="pricing == 0 ? 'bg-[#003399]' : 'bg-[#E5E7EB]' ">
                    <h4 class=" text-[18px] font-bold text-center" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">SILVER</h4>
                    <p class=" text-[16px] leading-5 my-4 px-6 font-normal" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Our premier package is designed for enterprises seeking comprehensive digital solutions and dedicated support.</p>
                    <div class=" px-6 py-1" :class="pricing == 0 ? 'text-[#003399] bg-[#E5E7EB]' : 'bg-[#003399] text-[#E5E7EB]' ">
                        <p>
                            <span class="font-bold text-4xl">$0</span>
                            <span class="text-sm">/year</span>
                        </p>
                    </div>
                    <div class="mb-4 mt-4 px-6">
                        <p class=" text-[24px] font-medium mb-6" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Features:</p>
                        <div class="flex gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Core</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Admission</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Student</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Academic</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Guardian</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Schedule</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Attendance</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Grade</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Fee</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 0 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 0 ? 'text-white' : 'text-[#3A3A3A]' ">Account</span>
                        </div>
                    </div>

                    
                    <div class="flex place-content-center mt-16">
                        <button class="text-white font-semibold text-[18px] bg-[#00A859] py-2 px-8 w-fit h-fit rounded-[30px]">Choose Plan</button>
                    </div>
                </div>

                <!-- 222 -->
                <div @click="pricing = 1" class=" w-fit cursor-pointer py-4 shadow-lg shadow-gray-400" :class="pricing == 1 ? 'bg-[#003399]' : 'bg-[#E5E7EB]' ">
                    <h4 class=" text-[18px] font-bold text-center" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">BRONZE</h4>
                    <p class=" text-[15px] leading-4 my-3 px-6 font-normal" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Our standard package is designed for startups and individuals aiming for a solid start in comprehensive digital solutions and dedicated support.</p>
                    <div class=" px-6 py-1" :class="pricing == 1 ? 'text-[#003399] bg-[#E5E7EB]' : 'bg-[#003399] text-[#E5E7EB]' ">
                        <p>
                            <span class="font-bold text-4xl">$135</span>
                            <span class="text-sm">/year</span>
                        </p>
                    </div>
                    <div class="mb-4 mt-4 px-6">
                        <p class=" text-[24px] font-medium mb-6" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Features:</p>
                        <div class="flex gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Core</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Admission</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Student</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Academic</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Guardian</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Schedule</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Attendance</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-x-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-[#E74C3C]' : 'text-[#E74C3C]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Grade</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Fee</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 1 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 1 ? 'text-white' : 'text-[#3A3A3A]' ">Account</span>
                        </div>
                    </div>

                    
                    <div class="flex place-content-center mt-16">
                        <button class="text-white font-semibold text-[18px] bg-[#00A859] py-2 px-8 w-fit h-fit rounded-[30px]">Choose Plan</button>
                    </div>
                </div>

                <!-- 333 -->
                <div @click="pricing = 2" class=" w-fit cursor-pointer py-4 shadow-lg shadow-gray-400" :class="pricing == 2 ? 'bg-[#003399]' : 'bg-[#E5E7EB]' ">
                    <h4 class=" text-[18px] font-bold text-center" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">PLATIUM</h4>
                    <p class=" text-[16px] leading-5 my-4 px-6 font-normal" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Our premier package is designed for enterprises seeking comprehensive digital solutions and dedicated support.</p>
                    <div class=" px-6 py-1" :class="pricing == 2 ? 'text-[#003399] bg-[#E5E7EB]' : 'bg-[#003399] text-[#E5E7EB]' ">
                        <p>
                            <span class="font-bold text-4xl">$150</span>
                            <span class="text-sm">/year</span>
                        </p>
                    </div>
                    <div class="mb-4 mt-4 px-6">
                        <p class=" text-[24px] font-medium mb-6" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Features:</p>
                        <div class="flex gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Core</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Admission</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Student</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Academic</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Guardian</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Schedule</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Attendance</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Grade</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Fee</span>
                        </div>

                        <div class="flex mt-4 gap-4">
                            <i class="bx bx-check-circle h-fit my-auto text-[18px] font-semibold" :class="pricing == 2 ? 'text-white' : 'text-[#003399]' "></i>
                            <span class="h-fit my-auto  text-[18px] font-medium" :class="pricing == 2 ? 'text-white' : 'text-[#3A3A3A]' ">Account</span>
                        </div>
                    </div>

                    
                    <div class="flex place-content-center mt-16">
                        <button class="text-white font-semibold text-[18px] bg-[#00A859] py-2 px-8 w-fit h-fit rounded-[30px]">Choose Plan</button>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script setup>
    import { ref } from "vue";


    const pricing = ref(1)
</script>