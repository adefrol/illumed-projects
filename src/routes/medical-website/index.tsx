import { createFileRoute } from '@tanstack/react-router'
import { MoveLeft, MoveRight } from 'lucide-react'

import person1 from "@/assets/medical-website/person-1.png"
import person2 from "@/assets/medical-website/person-2.png"
import person3 from "@/assets/medical-website/person-3.png"
import right_block from "@/assets/medical-website/right-block.jpg"

export const Route = createFileRoute("/medical-website/")({
    component: () => <Home />,
})

export const Home = () => {
    return (
        <div className="max-w-[1600px] w-full h-svh mx-auto">
            <div className="py-10">
                <header className='w-full'>
                    <div className="flex justify-between items-center max-[500px]:flex-col">
                        <div className="logo font-black text-6xl">illumed<span className='text-[#3840f2]'>Example</span></div>
                        <div className="flex justify-end gap-10 items-center w-[80%] max-[500px]:w-full">
                            <div className="w-[35%] max-[500px]:w-[70%]">
                                <p className='text-2xl text-wrap'>Запишитесь на прием к врачу без очереди, покупайте лекарства</p>
                            </div>
                            <div className="flex justify-between items-center gap-5">
                                <div className="bg-black rounded-3xl p-5"><MoveRight color='white' /></div>
                                <p className='text-2xl'>Начать</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="w-full py-20">
                    <div className="flex gap-10 items-center max-[500px]:flex-col max-[500px]:gap-2">
                        <button className='border-[1px] border-black border-solid rounded-full px-8 py-3 text-2xl font-semibold'>Прайс</button>
                        <button className='border-[1px] border-black border-solid rounded-full px-8 text-nowrap py-3 text-2xl font-semibold'>Центр помощи</button>
                        <button className='border-[1px] border-black border-solid rounded-full px-8 text-nowrap py-3 text-2xl font-semibold'>Как это работает?</button>
                        <button className='border-[1px] border-black border-solid rounded-full px-8 py-3 text-2xl font-semibold'>Новости</button>
                        <div className="w-full border-[1px] border-solid border-black"></div>
                    </div>
                </div>
                <div className="w-full py-14">
                    <div className="flex max-[500px]:flex-col">
                        <div className="grid grid-cols-4 gap-10 text-8xl font-semibold w-[70%]">
                            <h2 className='col-span-4'>КОНСУЛЬТАЦИЯ</h2>
                            <p className='text-2xl font-normal'>Запишитесь на прием к врачу без очереди, покупайте лекарства</p>
                            <h2 className='col-span-3 text-[#3840f2]'>ЛЮБОЙ ВОПРОС</h2>
                            <div className='col-span-2 flex justify-center items-center relative'>
                                <div className="bg-[#dbd9f6] rounded-full  relative w-[20%]">
                                    <img src={person2} className='rounded-full' alt="" />
                                </div>
                                <div className="bg-[#e5cbfe] rounded-full -translate-x-5 relative w-[20%] ">
                                    <img src={person1} className='rounded-full' alt="" />
                                </div>
                                <div className="bg-[#dbd9f6] rounded-full -translate-x-10 relative w-[20%] ">
                                    <img src={person3} className='rounded-full' alt="" />
                                </div>
                                <div className="bg-[#e5cbfe] rounded-full -translate-x-16 relative w-[30%] h-full text-4xl text-black flex items-center justify-center">
                                    132k
                                </div>
                            </div>
                            <h2 className='col-span-2'>ОНЛАЙН</h2>
                        </div>
                        <div className="w-[30%]">
                            <div className="w-full flex justify-end">
                                <div className="w-[90%]">
                                    <img src={right_block} className='rounded-3xl' alt="" />
                                    <div className="flex items-center justify-between py-3">
                                        <p className='text-2xl'>Генетика</p>
                                        <button className='border-[1px] border-black border-solid rounded-full px-8 py-2 text-2xl font-normal'>Посмотреть</button>
                                    </div>
                                    <div className="flex items-center gap-4 py-5">
                                        <MoveLeft color='#909090' />
                                        <MoveRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full py-10">
                    <div className="grid grid-cols-4 gap-10 ">
                        <div className="text-white p-10 h-[400px] grid grid-rows-10 w-full bg-[#3942f2] rounded-[50px]">
                            <p className='text-2xl'>СЕРВИСЫ</p>
                            <p className='row-start-4 text-4xl row-span-3 leading-[53px]'>Назначение терапевта</p>
                            <button className='row-start-9 w-[70%] row-span-2 bg-white text-black rounded-full px-8 py-3 text-xl font-normal flex items-center justify-between'>Начать<MoveRight /></button>
                        </div>
                        <div className=" text-white p-10 h-[400px] w-full grid grid-rows-10 bg-[#1e1e1e] rounded-[50px]">
                            <p className='text-2xl'>МЕДИЦИНСКАЯ КАРТА</p>
                            <p className='row-start-8 text-4xl row-span-3 leading-[53px]'>Вся информация в одном месте</p>
                        </div>
                        <div className="col-span-2 text-black p-10 h-[400px] w-full grid grid-rows-10 bg-[#e2c9fb] rounded-[50px] ">
                            <p className='text-2xl'>ОНЛАЙН</p>
                            <p className='row-start-5 text-4xl row-span-3 leading-[53px]'>Онлайн-консультация в любое удобное для вас время</p>
                            <div className="flex row-span-2 row-start-9 gap-5">
                                <input type="text" className='bg-white w-[70%] rounded-full px-8 py-3 text-xl font-normal' placeholder='Ваш E-mail' />
                                <button className=' w-[30%] bg-black text-white rounded-full px-8 py-3 text-xl font-normal'>Прайс</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
